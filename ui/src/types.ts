export type Album = {
  id: number;
  images: Image[];
  name: string;
  type: string;
  items: Album[];
};

export type Image = {
  url: string;
};
export type Artist = {
  images: Image[];
  name: string;
  type: string;

  items: Artist[];
};

export type Song = {
  album: Album;
  name: string;
  duration_ms: number;

  items: Song[];
};

export type Playlist = {
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  items: Playlist[];
};

export type Owner = {
  display_name: string;
};
export type AlbumSong = {
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

export type Datatype<T> = {
  href: string;

  items: T[];

  artists: Artist;
  albums: Album;

  tracks: Song;

  playlists: Playlist;
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
};
