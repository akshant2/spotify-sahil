export type Album = {
  id: number;
  images: Image[];
  name: string;
  type: string;
};

export type Image = {
  url: string;
};
export type Artist = {
  id: string;
  images: Image[];
  name: string;
  type: string;
};

export type Song = {
  id: string;
  album: Album;
  name: string;
  duration_ms: number;
};

export type Playlist = {
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
};

export type Owner = {
  display_name: string;
};
export type AlbumSong = {
  id: string;
  track_number: number;
  name: string;
  duration_ms: number;
};

export type PlaylistSong = {
  track: Track;
  added_at: number;
};

export type Track = {
  album: Album;
  name: string;
  duration_ms: number;
};

export type Release = {
  id: number;
  images: Image[];
  name: string;
};
