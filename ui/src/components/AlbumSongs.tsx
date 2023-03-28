import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumSong } from "../types";
import Authorize from "./Authorize";

export default function AlbumSongs() {
  const [albumSongs, setAlbumSongs] = useState<AlbumSong[]>([]);

  const { id } = useParams();

  const accessToken = Authorize();
  const msToMinutes = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const getTracks = () => {
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
    if (accessToken) getTracks();
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
                {albumSongs?.map((track) => {
                  return (
                    <tr key={track.id}>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {track.track_number}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {track.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {msToMinutes(track.duration_ms)}
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
