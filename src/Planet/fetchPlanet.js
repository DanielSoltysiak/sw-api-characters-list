const cache = new Map();

export const fetchPlanet = async (url) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((response) => response.json())
    );
  }
  const data = await cache.get(url);

  return data;
};
