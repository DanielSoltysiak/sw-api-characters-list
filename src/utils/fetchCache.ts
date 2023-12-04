const cache = new Map<string, Promise<unknown>>();

export const fetchCache = async <T>(url: string) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((response) => response.json())
    );
  }
  const data = (await cache.get(url)!) as T;

  return data;
};
