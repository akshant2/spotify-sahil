import React, { Fragment, useEffect, useState } from "react";
import Authorize from "../Utilities/Authorize";
import { createPlaylist } from "../types";

export default function CreatePlaylist() {
  const [createPlaylist, setPlaylist] = useState<createPlaylist[]>([]);

  const userId = "314z5wjaqtaiwazqlt26ukvd7icu";

  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const playlistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        playlistParameters
      )
        .then((response) => response.json())
        .then((data: createPlaylist) => {
          console.log(data);
          setPlaylist(data.items);
        });
    }
  }, [accessToken]);

  return (
    <div>
      <h1> Create Playlist</h1>
      {createPlaylist?.map((playlist, i) => {
        return (
          <Fragment key={i}>
            <div>{playlist.id}</div>
            <div>{playlist.owner.display_name}</div>
          </Fragment>
        );
      })}
    </div>
  );
}
