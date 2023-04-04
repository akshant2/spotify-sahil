import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlbumSong, Datatype } from "../types";
import Authorize from "../Utilities/Authorize";
import { AlbumTracks } from "../components/AlbumTracks";

export default function AlbumPage() {
  const [albumSongs, setAlbumSongs] = useState<AlbumSong[]>([]);
  const [albumDetail, setAlbumDetail] = useState({
    albumImage: " ",
    releaseDate: " ",
    totalSongs: " ",
    albumName: " ",
    type: " ",
    artistName: " ",
  });

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
            setAlbumDetail({
              albumImage: data.images[0].url,
              releaseDate: data.release_date,
              totalSongs: data.total_tracks,
              albumName: data.name,
              type: data.album_type,
              artistName: data.artists[0].name,
            });
          });
      };
      getAlbumSongs();
    }
  }, [accessToken]);

  return (
    <div className="bg-black">
      <div className="flex">
        <img className="mt-4 w-80" src={albumDetail.albumImage} />
        <div className="flex flex-col justify-center">
          <h4 className="px-5 py-4 text-2xl capitalize font-medium text-white tracking-widest">
            {albumDetail.type}
          </h4>
          <h1 className="px-6 text-white text-6xl">{albumDetail.albumName}</h1>
          <p className="px-8 mt-7 text-white mb-2 text-sm">
            {albumDetail.artistName}
          </p>
        </div>
      </div>
      <AlbumTracks albumTracks={albumSongs} />
    </div>
  );
}
