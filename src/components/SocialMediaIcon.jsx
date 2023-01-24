import React from "react";
import {Box, IconButton } from "@mui/material";
import { GitHub, Telegram, WhatsApp, Instagram } from "@mui/icons-material";
const SocialMediaIcon = () => {
  return (
    <Box
      variant="div"
      sx={{ margin: "0 auto", textAlign: "center", color: "text.primary" }}
    >
      <IconButton aria-label="Github">
        <a href="https://github.com" rel="noopener noreferrer" target="_blank">
          <GitHub sx={{ color: "text.primary" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Telegram">
        <a
          href="https://telegram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Telegram sx={{ color: "text.primary" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram">
        <a
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram sx={{ color: "text.primary" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Whatsapp">
        <a
          href="https://whatsapp.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsApp sx={{ color: "text.primary" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcon;
