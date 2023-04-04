import React, { FC, Fragment } from "react";
import MsToMinutes from "../Utilities/MsToMinutes";
import { AlbumSong } from "../types";

export const AlbumTracks: FC<AlbumTrackType> = ({ albumTracks }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-white">
        <div className="p-2">#</div>
        <div className="p-2">Title</div>
        <div className="p-2">Duration</div>
      </div>
      {albumTracks?.map((albumTrack, i) => {
        return (
          <Fragment key={i}>
            <div className="grid grid-cols-3 gap-4 border-b border-gray-800 hover:bg-gray-400">
              <div className="p-2 text-sm text-white">
                {albumTrack.track_number}
              </div>
              <div className="p-2 text-sm text-white">{albumTrack.name}</div>
              <div className="p-2 text-sm text-white">
                {MsToMinutes(albumTrack.duration_ms)}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

type AlbumTrackType = { albumTracks: AlbumSong[] };
