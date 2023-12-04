export type FetchStatus = "loading" | "success" | "error";

export type PlanetData = {
  name: string;
  diameter: string;
  climate: string;
  population: string;
};

export type CharacterData = {
  name: string;
  height: string;
  mass: string;
  created: Date | string;
  edited: Date | string;
  homeworld: string;
};

export interface CharacterRow extends CharacterData {
  id: string;
  created: Date;
  edited: Date;
  planetData?: PlanetData;
}

export type SortingOrder = "asc" | "desc";
