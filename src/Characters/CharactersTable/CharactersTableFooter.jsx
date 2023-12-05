import { GridFooterContainer, GridFooter } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

export const CharactersTableFooter = ({ isLoading }) => (
  <GridFooterContainer sx={{ justifyContent: "flex-end" }}>
    {isLoading && <CircularProgress size={20} />}
    <GridFooter
      sx={{
        border: "none",
      }}
    />
  </GridFooterContainer>
);
