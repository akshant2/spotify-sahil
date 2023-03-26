import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Dashboard from "../components/Dashboard";
import AlbumSongs from "../components/AlbumSongs";
import PlaylistSongs from "../components/PlaylistSongs";
export default function Approutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Searchbar />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/album/:id" element={<AlbumSongs />} />
          <Route path="/playlist/:id" element={<PlaylistSongs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
