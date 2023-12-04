import Box from "@mui/material/Box";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";

export const CharactersTableToolbar = () => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
};
