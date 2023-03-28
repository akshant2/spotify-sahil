import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Release } from "../types";
import Authorize from "./Authorize";

export default function Dashboard() {
  const [releases, setRelease] = useState<Release[]>([]);
  const accessToken = Authorize();

  useEffect(() => {
    const release = () => {
      const releaseParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      fetch("https://api.spotify.com/v1/browse/new-releases", releaseParameters)
        .then((response) => response.json())
        .then((data) => {
          setRelease(data.albums.items);
        });
    };
    if (accessToken) release();
  }, [accessToken]);

  return (
    <div>
      <div className="flex">
        <Sidebar />
      </div>
      <div className="bg-black w-full sticky top-0 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <Button className="rounded-full bg-black ml-72 w-8 h-8 text-white text-3xl">
            <ArrowBackIos />
          </Button>
          <Button className="rounded-full bg-black w-8 h-8 text-white text-3xl">
            <ArrowForwardIos />
          </Button>
        </div>
      </div>
      <div className="bg-gray-600">
        <h1 className="p-4 ml-72 text-black text-2xl font-bold hover:underline">
          New Releases
        </h1>
      </div>
      <div className="bg-gray-600 p-2 ml-72 grid grid-rows-5 sm:grid-cols-5 md:grid-cols-5 gap-2">
        {releases?.map((release) => {
          return (
            <Fragment key={release.id}>
              <Card className="bg-gray-800 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
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
    </div>
  );
}
