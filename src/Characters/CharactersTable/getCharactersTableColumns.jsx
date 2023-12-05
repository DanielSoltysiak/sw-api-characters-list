import { Button, Typography } from "@mui/material";

export const getCharactersTableColumns = (handleClick) => {
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
      renderCell: (params) => {
        return params?.value?.name ? (
          <Button onClick={() => handleClick(params?.value)}>
            {params?.value?.name}
          </Button>
        ) : (
          <Typography>Loading...</Typography>
        );
      },

      headerName: "Planet Name",
      flex: 1,
      editable: true,
    },
  ];
};
