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
      <div className="bg-gray-600 p-2 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
        {playlists.map(({ id, images, name, owner }) => {
          return (
            <Fragment key={id}>
              <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <CardActionArea>
                  <Link to={`/playlist/${id}`}>
                    <img
                      className="object-contain h-48 2-96"
                      src={images[0].url}
                    />
                  </Link>
                  <a href={`http://localhost:3000/playlist/${id}`}></a>
                  <CardContent>
                    <Typography
                      className="text-white"
                      gutterBottom
                      variant={"body1"}
                      component={"h1"}
                    >
                      {name}
                    </Typography>
                    <Typography className="text-white">
                      {`By ${owner.display_name}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

type PlaylistsType = { playlists: Playlist[] };
