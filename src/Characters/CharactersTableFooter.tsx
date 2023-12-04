import { GridFooterContainer, GridFooter } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  isLoading: boolean;
}

export const CharactersTableFooter = ({ isLoading }: Props) => (
  <GridFooterContainer sx={{ justifyContent: "flex-end" }}>
    {isLoading && <CircularProgress size={20} />}
    <GridFooter
      sx={{
        border: "none",
      }}
    />
  </GridFooterContainer>
);
