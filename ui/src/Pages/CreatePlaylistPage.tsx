import React, { FC, Fragment, useEffect, useState } from "react";
import { Authorize } from "../Utilities/Authorize";
import { createPlaylist } from "../types";

export const CreatePlaylistPage: FC = function () {
  const [createPlaylist, setPlaylist] = useState<createPlaylist[]>([]);

  const user_id = "314z5wjaqtaiwazqlt26ukvd7icu";

  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const playlistParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      fetch(
        `https://api.spotify.com/v1/users/${user_id}/playlists`,
        playlistParameters
      )
        .then((response) => response.json())
        .then((data: createPlaylist) => {
          setPlaylist(data.items);
        });
    }
  }, [accessToken]);

  return (
    <div>
      <h1> Create Playlist</h1>
    </div>
  );
};
