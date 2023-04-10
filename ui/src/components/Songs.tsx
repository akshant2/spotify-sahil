import React, { FC, Fragment } from "react";
import { Song } from "../types";
import { MsToMinutes } from "../Utilities/MsToMinutes";

export const Songs: FC<SongType> = ({ songs }) => {
  return (
    <div>
      {songs.length ? (
        <div className="grid grid-cols-4 gap-4 text-gray-600">
          <div className="p-2">#</div>
          <div className="p-2">Title</div>
          <div className="p-2">Album</div>
          <div className="p-2">Duration</div>
        </div>
      ) : null}

      {songs.map((song, i) => {
        return (
          <Fragment key={i}>
            <div className="grid grid-cols-4 gap-3 border-b border-gray-800 hover:bg-gray-400">
              <div className="p-2 text-sm text-black">{i + 1}</div>
              <div className="p-2 flex text-sm text-black">
                <img className="w-14" src={song.album.images[2].url} />
                <div className="p-2">{song.name}</div>
              </div>
              <div className="p-2 text-sm text-black">{song.album.name}</div>
              <div className="p-2 text-sm text-black">
                {MsToMinutes(song.duration_ms)}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

type SongType = { songs: Song[] };
