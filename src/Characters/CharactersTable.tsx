import { useReducer } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { PlanetData } from "../types";
import { useCharactersData } from "./useCharactersData";
import { getCharactersTableColumns } from "./getCharactersTableColumns";
import { PlanetDialog } from "../Planet/PlanetDialog";
import {
  PlanetDialogActionKind,
  planetDialogReducer,
} from "../Planet/planetDialogReducer";
import { NoRowsInfo } from "./NoRowsInfo";
import { CharactersTableFooter } from "./CharactersTableFooter";

export const CharactersTable = () => {
  const { rows, isLoading } = useCharactersData();
  const [planetDialogState, planetDialogDispatch] = useReducer(
    planetDialogReducer,
    { isOpen: false }
  );

  const handleModalOpen = (planet: PlanetData) =>
    planetDialogDispatch({
      type: PlanetDialogActionKind.OPEN,
      payload: planet,
    });
  const handleModalClose = () =>
    planetDialogDispatch({ type: PlanetDialogActionKind.CLOSE });

  const columns = getCharactersTableColumns(handleModalOpen);

  return (
    <Box sx={{ height: 370 }}>
      {planetDialogState.data && (
        <PlanetDialog
          isOpen={planetDialogState.isOpen}
          handleClose={handleModalClose}
          planet={planetDialogState.data}
        />
      )}
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
        disableRowSelectionOnClick
        slots={{
          noRowsOverlay: NoRowsInfo,
          footer: () => <CharactersTableFooter isLoading={isLoading} />,
        }}
      />
    </Box>
  );
};
