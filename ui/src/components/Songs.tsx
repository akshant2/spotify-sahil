import React, { FC } from "react";
import { Song } from "../types";
import MsToMinutes from "../Utilities/MsToMinutes";

export const Songs: FC<{ songs: Song[] }> = ({ songs }) => {
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
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {songs.map((song, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 flex text-sm font-medium text-white whitespace-nowrap">
                        <img src={song.album.images[2].url} />
                        <div className="p-2">{song.name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {song.album.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {MsToMinutes(song.duration_ms)}
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
