import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Authorize } from "../Utilities/Authorize";
import { TopTracks } from "../types";
import { ArtistTopTracks } from "../components/ArtistTopTracks";

export const ArtistPage: FC = function () {
  const [artistTracks, setArtistTracks] = useState<TopTracks[]>([]);

  const { id } = useParams();

  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const getArtistTopTracks = () => {
        const topTracksParameters = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };
        fetch(
          `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
          topTracksParameters
        )
          .then((response) => response.json())
          .then((data: TopTracks) => {
            setArtistTracks(data.tracks);
          });
      };
      getArtistTopTracks();
    }
  }, [accessToken]);

  return (
    <div>
      <ArtistTopTracks artistTopTracks={artistTracks} />
    </div>
  );
};
