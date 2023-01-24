import { FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { RandomReveal } from "react-random-reveal";
import { alphabets } from "../../constants/persianAlphabet";

const SidebarFooter = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 30,
          marginY: 3,
        }}
      >
        <Typography variant="subtitle2" color="text.primary">
          <RandomReveal
            isPlaying
            duration={3}
            characters="طراحی شده با "
            characterSet={alphabets}
          />
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
          />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
