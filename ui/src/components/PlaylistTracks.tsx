import React, { FC, Fragment } from "react";
import MsToMinutes from "../Utilities/MsToMinutes";
import { PlaylistSong } from "../types";

export const PlaylistTracks: FC<PlaylistTrackType> = ({ playlistTracks }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 text-white">
        <div className="p-2">#</div>
        <div className="p-2">Title</div>
        <div className="p-2 ">Album</div>
        <div className="p-2">Duration</div>
      </div>
      {playlistTracks?.map((playlistTrack, i) => {
        return (
          <Fragment key={i}>
            <div className="grid grid-cols-4 gap-3 border-b border-gray-800 hover:bg-gray-400">
              <div className="p-2 text-sm text-white">{i + 1}</div>
              <div className="p-2 flex text-sm text-white">
                <img
                  className="w-12"
                  src={playlistTrack.track.album.images[2].url}
                />
                <div className="p-2">{playlistTrack.track.name}</div>
              </div>
              <div className="p-2 text-sm text-white">
                {playlistTrack.track.album.name}
              </div>
              <div className="p-2 text-sm text-white">
                {MsToMinutes(playlistTrack.track.duration_ms)}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

type PlaylistTrackType = { playlistTracks: PlaylistSong[] };
