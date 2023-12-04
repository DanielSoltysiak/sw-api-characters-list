import { PlanetData } from "../types";

const cache = new Map<string, Promise<PlanetData>>();

export const fetchPlanet = async (url: string) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((response) => response.json())
    );
  }
  const data = await cache.get(url)!;

  return data;
};
