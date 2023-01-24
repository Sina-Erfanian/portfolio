import React from "react";
import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2 }}
    >
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
      {children}
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : سینا عرفانیان</Info>
      <Info>سن : 20</Info>
      <Info>شهر : مشهد</Info>
      <Info>ادرس ایمیل : Sina.er1381@gmail.com</Info>
      <Info>شماره موبایل : 09390310790</Info>
    </>
  );
};

export default DevInfo;
