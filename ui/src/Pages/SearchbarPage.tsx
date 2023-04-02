import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import { Album, Song, Artist, Playlist, Datatype } from "../types";
import { Albums } from "../components/Albums";
import { Songs } from "../components/Songs";
import { Artists } from "../components/Artists";
import { Clear, Home } from "@material-ui/icons";
import { Playlists } from "../components/Playlists";
import Authorize from "../Utilities/Authorize";

export default function SearchbarPage() {
  const [searchInput, setSearchInput] = useState("");
  const [artist, setArtist] = useState<Artist[]>([]);
  const [album, setAlbums] = useState<Album[]>([]);
  const [song, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Playlist[]>([]);

  const accessToken = Authorize();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (!searchInput) {
      setAlbums([]);
      setPlaylist([]);
      setArtist([]);
      setSongs([]);
    }
  }, [searchInput]);

  const artists = () => {
    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/search?q= 
        ${searchInput}&type=artist&?include_&market=US&limit=50`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data: Datatype<Artist>) => {
        setArtist(data.artists.items);
        setSongs([]);
        setAlbums([]);
        setPlaylist([]);
      });
  };

  const songs = () => {
    const songParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/search?q= 
        ${searchInput}&type=track&?include_&market=US&limit=50`,
      songParameters
    )
      .then((response) => response.json())
      .then((data: Datatype<Song>) => {
        setSongs(data.tracks.items);
        setArtist([]);
        setAlbums([]);
        setPlaylist([]);
      });
  };

  const albums = () => {
    const albumParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/search?q= 
        ${searchInput}&type=album&?include_&market=US&limit=50`,
      albumParameters
    )
      .then((response) => response.json())
      .then((data: Datatype<Album>) => {
        setAlbums(data.albums.items);
        setArtist([]);
        setSongs([]);
        setPlaylist([]);
      });
  };
  const playlists = () => {
    const playlistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/search?q= 
        ${searchInput}&type=playlist&?include_&market=US&limit=50`,
      playlistParameters
    )
      .then((response) => response.json())
      .then((data: Datatype<Playlist>) => {
        setPlaylist(data.playlists.items);
        setArtist([]);
        setSongs([]);
        setAlbums([]);
      });
  };

  return (
    <div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a
              href="/dashboard"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <span className="text-xm font-bold text-black hover:underline">
                <Home /> Home
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex ml-2 items-center">
        <div className="flex border border-blue-200 rounded-full">
          <TextField
            id="search-bar"
            className="px-4 py-2 w-80"
            placeholder="Artist, Songs, Tracks or Playlist"
            onChange={handleChange}
            value={searchInput}
            autoComplete="on"
          />
          <Button onClick={() => setSearchInput("")}>
            <Clear />
          </Button>
        </div>
      </div>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => artists()}
      >
        Artist
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => songs()}
      >
        Songs
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => albums()}
      >
        Albums
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => playlists()}
      >
        Playlist
      </Button>
      <Artists artists={artist} />
      <Songs songs={song} />
      <Albums albums={album} />
      <Playlists playlists={playlist} />
    </div>
  );
}
