import React, { FC, Fragment } from "react";
import { TopTracks } from "../types";
import { MsToMinutes } from "../Utilities/MsToMinutes";

export const ArtistTopTracks: FC<ArtistTopTrackType> = ({
  artistTopTracks,
}) => {
  return (
    <div className="bg-black">
      <div className="text-white">Popular</div>
      {artistTopTracks.map((artistTrack, i) => {
        return (
          <Fragment key={i}>
            <div className="grid grid-cols-4 grid-gap-4 border-b border-gray-800 hover:bg-gray-400">
              <div className="p-2 text-sm text-white">{i + 1}</div>
              <div className="p-2 flex text-sm text-white">
                <img className="w-12" src={artistTrack.album.images[2].url} />
                {artistTrack.name}
              </div>
              <div className="p-2 text-sm text-white">
                {MsToMinutes(artistTrack.duration_ms)}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

type ArtistTopTrackType = { artistTopTracks: TopTracks[] };
