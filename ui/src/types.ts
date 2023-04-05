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
  id: number;
  images: Image[];
  name: string;
  type: string;

  artists: Artist;
  items: Artist[];
};

export type Song = {
  album: Album;
  name: string;
  duration_ms: number;
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
  track_number: number;
  track: Track;
  tracks: Track;
  added_at: number;
  items: Track[];
};

export type Release = {
  id: number;
  images: Image[];
  name: string;
};

export type Datatype<T> = {
  artists: Artist[];
  albums: Album;

  tracks: Track;

  playlists: Playlist;

  release_date: string;

  total_tracks: string;
  name: string;

  album_type: string;

  type: string;

  owner: Owner;
  images: Image[];
};

export type AccessToken = {
  access_token: string;
};

export type TopTracks = {
  tracks: TopTracks[];

  name: string;

  duration_ms: number;

  album: Album;
};
