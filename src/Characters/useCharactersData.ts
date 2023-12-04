import { useState, useEffect } from "react";
import { CharacterRow, CharacterData } from "../types";
import { fetchCache } from "../utils/fetchCache";

export const useCharactersData = () => {
  const [rows, setRows] = useState<CharacterRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      let nextUrl = "https://swapi.dev/api/people/";
      try {
        do {
          const { results, next } = await fetchCache(nextUrl);
          const charactersRow: CharacterRow[] = [];
          for (const char of results as CharacterData[]) {
            charactersRow.push({
              id: char.name,
              name: char.name,
              height: char.height,
              mass: char.mass,
              created: new Date(char.created),
              edited: new Date(char.edited),
              homeworld: char.homeworld,
              planetData: await fetchCache(char.homeworld),
            });
          }
          setRows((prevRows) => [...prevRows, ...charactersRow]);
          nextUrl = next;
        } while (nextUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return { rows, isLoading };
};
