import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NoRowsInfo = () => (
  <Box
    sx={{
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography>Loading...</Typography>
  </Box>
);
