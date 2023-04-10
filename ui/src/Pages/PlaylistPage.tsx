import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { Datatype, PlaylistSong } from "../types";
import { Authorize } from "../Utilities/Authorize";
import { PlaylistTracks } from "../components/PlaylistTracks";
export const PlaylistPage: FC = function () {
  const [playlistSongs, setPlaylistSongs] = useState<PlaylistSong[]>([]);
  const [playlistDetails, setPlaylistDetails] = useState({
    playlistImage: " ",
    playlistName: " ",
    type: " ",
    ownerName: " ",
  });

  const { id } = useParams();

  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const getPlaylistSongs = () => {
        const playlistParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        fetch(`https://api.spotify.com/v1/playlists/${id}`, playlistParameters)
          .then((response) => response.json())
          .then((data: Datatype<PlaylistSong>) => {
            setPlaylistSongs(data.tracks.items);
            setPlaylistDetails({
              playlistImage: data.images[0].url,
              type: data.type,
              playlistName: data.name,
              ownerName: data.owner.display_name,
            });
          });
      };
      getPlaylistSongs();
    }
  }, [accessToken]);

  return (
    <div className="bg-black">
      <div className="bg-black w-full sticky top-0 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <Button className="rounded-full bg-black w-8 h-8 text-white text-3xl">
            <a href="/search">
              <ArrowBackIos />
            </a>
          </Button>
        </div>
      </div>
      <div className="flex">
        <img className="mt-4 w-80" src={playlistDetails.playlistImage} />
        <div className="flex flex-col justify-center">
          <h4 className="px-5 py-4 text-2xl capitalize font-medium text-white tracking-widest">
            {playlistDetails.type}
          </h4>
          <h1 className="px-6 text-white text-6xl">
            {playlistDetails.playlistName}
          </h1>
          <p className="px-8 text-white mb-2 text-sm">{`By ${playlistDetails.ownerName}`}</p>
        </div>
      </div>
      <PlaylistTracks playlistTracks={playlistSongs} />
    </div>
  );
};
