import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { PlanetData } from "../types";

export const getCharactersTableColumns = (
  handleClick: (planet: PlanetData) => void
): GridColDef[] => {
  return [
    { field: "name", headerName: "Name", width: 150, editable: true },
    {
      field: "height",
      headerName: "Height",
      valueFormatter: (params) => {
        if (params.value === "unknown") return params.value;
        return `${params.value} cm`;
      },
      width: 150,
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
      width: 150,
      editable: true,
      type: "number",
    },
    {
      field: "created",
      headerName: "Created",
      width: 150,
      editable: true,
      type: "dateTime",
    },
    {
      field: "edited",
      headerName: "Edited",
      width: 150,
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
      width: 150,
      editable: true,
    },
  ];
};
