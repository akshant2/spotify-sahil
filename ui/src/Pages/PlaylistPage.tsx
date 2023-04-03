import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Datatype, PlaylistSong } from "../types";
import Authorize from "../Utilities/Authorize";
import { PlaylistTracks } from "../components/PlaylistTracks";
export default function PlaylistPage() {
  const [playlistSongs, setPlaylistSongs] = useState<PlaylistSong[]>([]);

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
          });
      };
      getPlaylistSongs();
    }
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
      <PlaylistTracks playlistTracks={playlistSongs} />
    </div>
  );
}
