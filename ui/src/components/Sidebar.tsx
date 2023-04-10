import React, { FC } from "react";
import { Add, Home, LibraryAdd, Search } from "@material-ui/icons";

export const Sidebar: FC = function () {
  return (
    <div className="top-0 left-0 fixed bg-black w-[20vw] h-full p-10">
      <img
        className="mt-12"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
      />
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a href="/" className="flex items-center p-2 space-x-3 rounded-md">
              <span className="text-xm font-bold text-white hover:underline">
                <Home /> Home
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a
              href="/search"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <span className="text-xm font-bold text-white hover:underline">
                <Search /> Search
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a className="flex items-center p-2 space-x-3 rounded-md">
              <span className="text-xm font-bold text-white hover:underline">
                <LibraryAdd /> Library
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a
              href="/playlist"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <span className="text-xm font-bold text-white hover:underline">
                <Add /> Playlist
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
