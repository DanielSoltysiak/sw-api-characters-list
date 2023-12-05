import { useReducer } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { useCharactersData } from "../useCharactersData";
import { getCharactersTableColumns } from "./getCharactersTableColumns";
import { PlanetDialog } from "../../Planet/PlanetDialog";
import {
  PlanetDialogActionKind,
  planetDialogReducer,
} from "../../Planet/planetDialogReducer";
import { NoRowsInfo } from "./NoRowsInfo";
import { CharactersTableFooter } from "./CharactersTableFooter";
import { CharactersTableToolbar } from "./CharactersTableToolbar";

export const CharactersTable = () => {
  const { rows, isLoading } = useCharactersData();
  const [planetDialogState, planetDialogDispatch] = useReducer(
    planetDialogReducer,
    { isOpen: false }
  );

  const handleModalOpen = (planet) =>
    planetDialogDispatch({
      type: PlanetDialogActionKind.OPEN,
      payload: planet,
    });
  const handleModalClose = () =>
    planetDialogDispatch({ type: PlanetDialogActionKind.CLOSE });

  const columns = getCharactersTableColumns(handleModalOpen);

  return (
    <Box
      sx={{
        height: 410,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {planetDialogState.data && (
        <PlanetDialog
          isOpen={planetDialogState.isOpen}
          handleClose={handleModalClose}
          planet={planetDialogState.data}
        />
      )}

      <DataGrid
        sx={{ width: "100%" }}
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
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        slots={{
          toolbar: CharactersTableToolbar,
          noRowsOverlay: NoRowsInfo,
          footer: () => <CharactersTableFooter isLoading={isLoading} />,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
};
