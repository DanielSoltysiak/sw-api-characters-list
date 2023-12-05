const cache = new Map();

export const fetchCharacters = async (url) => {
  if (!cache.has(url)) {
    cache.set(url, await fetch(url).then((response) => response.json()));
  }
  const data = await cache.get(url);

  return data;
};
