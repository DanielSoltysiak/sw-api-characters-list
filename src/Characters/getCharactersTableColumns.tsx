import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { PlanetData } from "../types";

export const getCharactersTableColumns = (
  handleClick: (planet: PlanetData) => void
): GridColDef[] => {
  return [
    { field: "name", headerName: "Name", flex: 1, editable: true },
    {
      field: "height",
      headerName: "Height",
      valueFormatter: (params) => {
        if (params.value === "unknown") return params.value;
        return `${params.value} cm`;
      },
      flex: 1,
      editable: true,
      type: "number",
    },
    {
      field: "mass",
      headerName: "Mass",
      valueFormatter: (params) => {
        if (params.value === "unknown") return params.value;
        return `${params.value} kg`;
      },
      flex: 1,
      editable: true,
      type: "number",
    },
    {
      field: "created",
      headerName: "Created",
      flex: 1,
      editable: true,
      type: "dateTime",
    },
    {
      field: "edited",
      headerName: "Edited",
      flex: 1,
      editable: true,
      type: "dateTime",
    },
    {
      field: "planetData",
      renderCell: (params) => (
        <Button onClick={() => handleClick(params.value)}>
          {params.value.name}
        </Button>
      ),
      headerName: "Planet Name",
      flex: 1,
      editable: true,
    },
  ];
};
