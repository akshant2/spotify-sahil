import React, { FC } from "react";
import MsToMinutes from "../Utilities/MsToMinutes";
import { PlaylistSong } from "../types";

export const PlaylistTracks: FC<PlaylistTrackType> = ({ playlistTracks }) => {
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
                    Album
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase"
                  >
                    Date added
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
                {playlistTracks?.map((playlistTrack, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 flex text-sm font-medium text-white whitespace-nowrap">
                        <img src={playlistTrack.track.album.images[2].url} />
                        <div className="p-2">{playlistTrack.track.name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {playlistTrack.track.album.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {playlistTrack.added_at}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {MsToMinutes(playlistTrack.track.duration_ms)}
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

type PlaylistTrackType = { playlistTracks: PlaylistSong[] };
