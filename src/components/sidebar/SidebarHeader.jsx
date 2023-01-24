import { Avatar, Typography } from "@mui/material";
import SocialMediaIcon from "../SocialMediaIcon";

import ThemeActionButton from "../ThemeActionButton";
const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{
          width: 100,
          height: 100,
          margin: "0 auto",
          display: { xs: "none", sm: "none", md: "block" },
        }}
        alt="Sina Erfanian"
      />
      <Typography color="text.primary" variant="h6" sx={{ my: 1 }}>
        سینا عرفانیان
      </Typography>
      <Typography color="text.primary" variant="caption">
        برنامه نویس فول استک
      </Typography>
      <SocialMediaIcon />
    </>
  );
};

export default SidebarHeader;
