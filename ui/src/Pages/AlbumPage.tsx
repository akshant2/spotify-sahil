import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumSong, Datatype } from "../types";
import Authorize from "../Utilities/Authorize";
import UtilFunction from "../Utilities/UtilFunction";
export default function AlbumPage() {
  const [albumSongs, setAlbumSongs] = useState<AlbumSong[]>([]);

  const { id } = useParams();

  const accessToken = Authorize();
  useEffect(() => {
    const songs = () => {
      const albumParameters = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      };
      fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, albumParameters)
        .then((response) => response.json())
        .then((data) => {
          setAlbumSongs(data.items);
        });
    };
    if (accessToken) songs();
  }, [accessToken]);

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
                {albumSongs?.map((albumTrack, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {albumTrack.track_number}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {albumTrack.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {UtilFunction(albumTrack.duration_ms)}
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
}
