import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { CharacterRow } from "../types";
import columns from "./charactersTableColumns";
import { fetchCharacters } from "./fetchCharacters";

export const CharactersTable = () => {
  const [rows, setRows] = useState<CharacterRow[]>([]);

  useEffect(() => {
    fetchCharacters(setRows);
  }, []);

  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};
