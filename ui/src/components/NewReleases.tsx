import React, { FC, Fragment } from "react";
import { Release } from "../types";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const NewReleases: FC<NewReleasesType> = ({ releases }) => {
  return (
    <div className="bg-gray-600 p-2 ml-72 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
      {releases?.map((release, i) => {
        return (
          <Fragment key={i}>
            <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48">
              <CardActionArea>
                <Link to={`/album/${release.id}`}>
                  <img
                    className="object-contain h-48 2-96"
                    src={release.images[0].url}
                  />
                </Link>
                <CardContent>
                  <Typography
                    className="text-white"
                    gutterBottom
                    variant={"body1"}
                    component={"h1"}
                  >
                    {release.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

type NewReleasesType = { releases: Release[] };
