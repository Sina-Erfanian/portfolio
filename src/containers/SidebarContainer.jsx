import React from "react";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
const SidebarContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: 1000,
      }}
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
