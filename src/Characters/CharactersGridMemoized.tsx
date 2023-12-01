import { DataGrid } from "@mui/x-data-grid";
import { memo } from "react";
import { CharacterRow } from "../types";
import columns from "./charactersTableColumns";

interface CharactersGridProps {
  rows: CharacterRow[];
}

const CharactersGridMemoized = memo(function CharactersGrid({
  rows,
}: CharactersGridProps) {
  return (
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
  );
},
areNewPropsBigger);

function areNewPropsBigger(
  oldProps: CharactersGridProps,
  newProps: CharactersGridProps
) {
  return newProps.rows.length <= oldProps.rows.length;
}

export default CharactersGridMemoized;
