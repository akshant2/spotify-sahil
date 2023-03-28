import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { PlaylistSong } from "../types";
import Authorize from "../Utilities/Authorize";
import UtilFunction from "../Utilities/UtilFunction";
export default function PlaylistPage() {
  const [playlistSongs, setPlaylistSongs] = useState<PlaylistSong[]>([]);

  const { id } = useParams();

  const accessToken = Authorize();

  useEffect(() => {
    const getPlaylist = () => {
      const playlistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      fetch(
        `https://api.spotify.com/v1/playlists/${id}/tracks`,
        playlistParameters
      )
        .then((response) => response.json())
        .then((data) => {
          setPlaylistSongs(data.items);
        });
    };
    if (accessToken) getPlaylist();
  }, [accessToken]);

  return (
    <div>
      <div className="bg-black w-full sticky top-0 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <Button className="rounded-full bg-black w-8 h-8 text-white text-3xl">
            <a href="/search">
              <ArrowBackIos />
            </a>
          </Button>
          <Button className="rounded-full bg-black w-8 h-8 text-white text-3xl">
            <ArrowForwardIos />
          </Button>
        </div>
      </div>
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
                  {playlistSongs?.map(({ track, added_at }, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 flex text-sm font-medium text-white whitespace-nowrap">
                          <img src={track.album.images[2].url} />
                          <div className="p-2">{track.name}</div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                          {track.album.name}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                          {added_at}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                          {UtilFunction(track.duration_ms)}
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
    </div>
  );
}