import React, { Fragment, FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Playlist } from "../types";
import { Link } from "react-router-dom";
export const Playlists: FC<PlaylistsType> = ({ playlists }) => {
  return (
    <div>
      {playlists.length ? (
        <div className="bg-gray-600 p-2 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
          {playlists.map((playlist, i) => {
            return (
              <Fragment key={i}>
                <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <CardActionArea>
                    <Link to={`/playlist/${playlist.id}`}>
                      <img
                        className="object-contain h-48 2-96"
                        src={playlist.images[0].url}
                      />
                    </Link>
                    <a
                      href={`http://localhost:3000/playlist/${playlist.id}`}
                    ></a>
                    <CardContent>
                      <Typography
                        className="text-white"
                        gutterBottom
                        variant={"body1"}
                        component={"h1"}
                      >
                        {playlist.name}
                      </Typography>
                      <Typography className="text-white">
                        {`By ${playlist.owner.display_name}`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Fragment>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

type PlaylistsType = { playlists: Playlist[] };
