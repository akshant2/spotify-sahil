import React, { FC } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Pages/DashboardPage";
import { SearchbarPage } from "./Pages/SearchbarPage";
import { AlbumPage } from "./Pages/AlbumPage";
import { PlaylistPage } from "./Pages/PlaylistPage";
import { LoginPage } from "./Pages/LoginPage";
import { ArtistPage } from "./Pages/ArtistPage";
import { CreatePlaylistPage } from "./Pages/CreatePlaylistPage";
export const App: FC = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/search" element={<SearchbarPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/playlist" element={<CreatePlaylistPage />} />
      </Routes>
    </BrowserRouter>
  );
};
