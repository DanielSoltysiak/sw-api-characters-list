import { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import { CharacterData, CharacterRow } from "../types";
import CharactersGrid from "./CharactersGridMemoized";

export const CharactersTable = () => {
  const [rows, setRows] = useState<CharacterRow[]>([]);

  const fetchData = useCallback(async () => {
    try {
      let allCharacters: CharacterRow[] = [];
      let nextUrl = "https://swapi.dev/api/people/";

      do {
        const response = await fetch(nextUrl);
        const data = await response.json();

        const characters: CharacterRow[] = data.results.map(
          (character: CharacterData) => ({
            id: character.name,
            name: character.name,
            height: character.height,
            mass: character.mass,
            created: new Date(character.created),
            edited: new Date(character.edited),
            homeworld: character.homeworld,
          })
        );

        allCharacters = allCharacters.concat(characters);
        setRows(allCharacters);

        nextUrl = data.next;
      } while (nextUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box>
      <CharactersGrid rows={rows} />
    </Box>
  );
};
