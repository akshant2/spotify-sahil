export type Album = {
  id: number;
  images: any;
  name: string;
  type: string;
};

export type Artist = {
  id: string;
  images: any;
  name: string;
  type: string;
};

export type Song = {
  id: string;
  name: string;
  type: string;
  album: any;
  images: any;
  duration_ms: number;
  length: number;
};

export type Playlist = {
  id: string;
  images: any;
  name: string;
  owner: any;
  display_name: any;
};
