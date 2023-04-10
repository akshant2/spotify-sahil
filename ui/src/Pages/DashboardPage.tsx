import React, { FC, useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Datatype, Release } from "../types";
import { Authorize } from "../Utilities/Authorize";
import { NewReleases } from "../components/NewReleases";

export const DashboardPage: FC = function () {
  const [release, setRelease] = useState<Release[]>([]);
  const accessToken = Authorize();

  useEffect(() => {
    if (accessToken) {
      const getRelease = () => {
        const releaseParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        fetch(
          "https://api.spotify.com/v1/browse/new-releases",
          releaseParameters
        )
          .then((response) => response.json())
          .then((data: Datatype<Release>) => {
            setRelease(data.albums.items);
          });
      };
      getRelease();
    }
  }, [accessToken]);

  return (
    <div>
      <div className="flex">
        <Sidebar />
      </div>
      <div className="bg-gray-600">
        <h1 className="p-4 ml-72 text-black text-2xl font-bold hover:underline">
          New Releases
        </h1>
      </div>
      <NewReleases releases={release} />
    </div>
  );
};
