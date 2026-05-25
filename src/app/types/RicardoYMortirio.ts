export type OriginT = {
  name: string;
  url: string;
};

export type LocationT = {
  name: string;
  url: string;
};

export type CharacterT = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginT;
  location: LocationT;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ResultCharactersT = {
  info: InfoT;
  results: CharacterT[];
};