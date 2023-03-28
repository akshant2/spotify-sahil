import React, { FC, Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Album } from "../types";
import { Link } from "react-router-dom";

export const Albums: FC<AlbumType> = ({ albums }) => {
  return (
    <div>
      <div className="bg-gray-600 p-2 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
        {albums.map(({ id, images, name, type }) => {
          return (
            <Fragment key={id}>
              <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <CardActionArea>
                  <Link to={`/album/${id}`}>
                    <img
                      className="object-contain h-48 2-96"
                      src={images[0].url}
                    />
                  </Link>
                  <a href={`http://localhost:3000/album/${id}`}></a>
                  <CardContent>
                    <Typography
                      className="text-white"
                      gutterBottom
                      variant={"body1"}
                      component={"h1"}
                    >
                      {name}
                    </Typography>
                    <Typography className="text-white">{type}</Typography>
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

type AlbumType = { albums: Album[] };
