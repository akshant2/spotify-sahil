import React, { FC } from "react";
import MsToMinutes from "../Utilities/MsToMinutes";
import { AlbumSong } from "../types";

export const AlbumTracks: FC<AlbumTrackType> = ({ albumTracks }) => {
  return (
    <div className="bg-black flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase"
                  >
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {albumTracks?.map((albumTrack, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {albumTrack.track_number}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {albumTrack.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {MsToMinutes(albumTrack.duration_ms)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

type AlbumTrackType = { albumTracks: AlbumSong[] };
