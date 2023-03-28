import React, { FC } from "react";
import { Song } from "../types";
import UtilFunction from "../Utilities/UtilFunction";

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
                {songs.map(({ id, album, name, duration_ms }, index) => {
                  return (
                    <tr key={id}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 flex text-sm font-medium text-white whitespace-nowrap">
                        <img src={album.images[2].url} />
                        <div className="p-2">{name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {album.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {UtilFunction(duration_ms)}
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