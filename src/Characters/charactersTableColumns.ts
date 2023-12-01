import { GridColDef } from "@mui/x-data-grid";

const charactersTableColumns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 150, editable: true },
  {
    field: "height",
    headerName: "Height",
    width: 150,
    editable: true,
    type: "number",
  },
  {
    field: "mass",
    headerName: "Mass",
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
  { field: "homeworld", headerName: "Homeworld", width: 150, editable: true },
];

export default charactersTableColumns;
