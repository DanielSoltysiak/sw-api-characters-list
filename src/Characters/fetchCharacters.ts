import { CharacterData } from "../types";

interface CharacterResponse {
  count: number;
  next: string;
  results: CharacterData[];
}

const cache = new Map<string, Promise<CharacterResponse>>();

export const fetchCharacters = async (url: string) => {
  if (!cache.has(url)) {
    cache.set(url, await fetch(url).then((response) => response.json()));
  }
  const data = await cache.get(url)!;

  return data;
};
