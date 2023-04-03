import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumSong, Datatype } from "../types";
import Authorize from "../Utilities/Authorize";
import { AlbumTracks } from "../components/AlbumTracks";

export default function AlbumPage() {
  const [albumSongs, setAlbumSongs] = useState<AlbumSong[]>([]);
  const { id } = useParams();

  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const getAlbumSongs = () => {
        const albumParameters = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };
        fetch(`https://api.spotify.com/v1/albums/${id}`, albumParameters)
          .then((response) => response.json())
          .then((data: Datatype<AlbumSong>) => {
            setAlbumSongs(data.tracks.items);
          });
      };
      getAlbumSongs();
    }
  }, [accessToken]);

  return (
    <div>
      <AlbumTracks albumTracks={albumSongs} />
    </div>
  );
}
