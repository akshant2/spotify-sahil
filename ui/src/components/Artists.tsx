import React, { Fragment, FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Artist } from "../types";
import { Link } from "react-router-dom";

export const Artists: FC<ArtistType> = ({ artists }) => {
  return (
    <div>
      <div className="bg-gray-600 p-2 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
        {artists.map((artist, i) => {
          return (
            <Fragment key={i}>
              <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <CardActionArea>
                  <Link to={`/artist/${artist.id}`}>
                    <img className="rounded-full" src={artist.images[0]?.url} />
                  </Link>
                  <a href={`http://localhost:3000/artist/${artist.id}`}></a>
                  <CardContent>
                    <Typography
                      className="text-white"
                      gutterBottom
                      variant={"body1"}
                      component={"h1"}
                    >
                      {artist.name}
                    </Typography>
                    <Typography className="text-white">
                      {artist.type}
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

type ArtistType = { artists: Artist[] };
