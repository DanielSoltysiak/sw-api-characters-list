type CacheRow = {
  timeStamp: Date;
  data: unknown;
};

const urls: Record<string, CacheRow> = {};

export const fetchCache = async (url: string) => {
  if (urls[url]) return urls[url].data;

  const response = await fetch(url);
  const data = await response.json();

  urls[url] = { timeStamp: new Date(), data };

  return data;
};
