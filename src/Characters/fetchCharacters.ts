import { Dispatch, SetStateAction } from "react";
import { CharacterRow, CharacterData } from "../types";
import { fetchCache } from "../utils/fetchCache";

export const fetchCharacters = async (
  charactersSetter: Dispatch<SetStateAction<CharacterRow[]>>
) => {
  try {
    let nextUrl = "https://swapi.dev/api/people/";

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
      charactersSetter((prevRows) => [...prevRows, ...charactersRow]);
      nextUrl = next;
    } while (nextUrl);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
