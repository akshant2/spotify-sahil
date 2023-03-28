import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, TextField } from "@material-ui/core";

import { Album, Song, Artist, Playlist } from "../types";
import { Albums } from "./Albums";
import { Songs } from "./Songs";
import { Artists } from "./Artists";
import { Clear, Home, Search } from "@material-ui/icons";
import { Playlists } from "./Playlists";
import Authorize from "./Authorize";

export default function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [artist, setArtist] = useState<Artist[]>([]);
  const [album, setAlbums] = useState<Album[]>([]);
  const [song, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [optionSelected, setOptionSelection] = useState<string>("");
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

  const search = () => {
    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(
      `https://api.spotify.com/v1/search?q= 
        ${searchInput}&type=artist,album,track,playlist&?include_&market=US&limit=50`,
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data.artists.items);
        setSongs(data.tracks.items);
        setAlbums(data.albums.items);
        setPlaylist(data.playlists.items);
      });
  };

  const renderSelection = () => {
    if (optionSelected === "artists") {
      return <Artists artists={artist} />;
    } else if (optionSelected === "songs") {
      return <Songs songs={song} />;
    } else if (optionSelected === "albums") {
      return <Albums albums={album} />;
    } else if (optionSelected === "playlists") {
      return <Playlists playlists={playlist} />;
    }
  };

  return (
    <div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a href="/" className="flex items-center p-2 space-x-3 rounded-md">
              <span className="text-xm font-bold text-black hover:underline">
                <Home /> Home
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex ml-2 items-center">
        <div className="flex border border-blue-200 rounded-full">
          <Button
            className="text-white bg-black border-l rounded-full"
            type="button"
            variant="contained"
            size="medium"
            onClick={search}
          >
            <Search />
          </Button>
          <TextField
            id="search-bar"
            className="px-4 py-2 w-80"
            placeholder="Artist, Songs or Tracks"
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
        onClick={() => setOptionSelection("artists")}
      >
        Artist
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => setOptionSelection("songs")}
      >
        Songs
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => setOptionSelection("albums")}
      >
        Albums
      </Button>
      <Button
        className="px-4 text-white bg-black border-l rounded-full"
        onClick={() => setOptionSelection("playlists")}
      >
        Playlists
      </Button>
      {renderSelection()}
    </div>
  );
}
