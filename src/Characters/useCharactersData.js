import { useState, useEffect } from "react";
import { fetchPlanet } from "../Planet/fetchPlanet";
import { fetchCharacters } from "./fetchCharacters";

export const useCharactersData = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let lastIdx = 0;

    const fetchData = async () => {
      let nextUrl = "https://swapi.dev/api/people/?page=1";

      try {
        do {
          const batchFirstIdx = lastIdx;
          const { results, next } = await fetchCharacters(nextUrl);
          lastIdx += results.length;

          const partialData = results.map((char) => {
            return {
              id: char.name,
              name: char.name,
              height: char.height,
              mass: char.mass,
              created: new Date(char.created),
              edited: new Date(char.edited),
              homeworld: char.homeworld,
            };
          });
          setRows((prevRows) => [...prevRows, ...partialData]);

          Promise.all(
            partialData.map(async (char) => {
              const planetData = await fetchPlanet(char.homeworld);
              return {
                ...char,
                planetData: planetData,
              };
            })
          ).then((characterRows) => {
            setRows((prevRows) =>
              updatePlanetData(prevRows, batchFirstIdx, characterRows)
            );
          });

          nextUrl = next;
        } while (nextUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { rows, isLoading };
};

const updatePlanetData = (prevRows, batchFirstIdx, rowsWithPlanets) => {
  const newCharactersRows = prevRows.map((row, idx) => {
    if (batchFirstIdx <= idx && idx < batchFirstIdx + rowsWithPlanets.length) {
      return rowsWithPlanets[idx - batchFirstIdx];
    }
    return row;
  });
  return newCharactersRows;
};
