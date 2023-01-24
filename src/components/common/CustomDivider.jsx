import { Divider, Chip, Typography } from "@mui/material";

const CustomDivider = ({ bColor, cColor, icon, align, text }) => {
  return (
    <Divider
      textAlign={align}
      sx={{
        mt: 1,
        "&::before, &::after": {
          borderColor: bColor,
        },
      }}
    >
      <Chip
        color={cColor}
        sx={{ p: 3 }}
        icon={icon}
        label={
          <Typography
            variant="body1"
            color="text.main"
            sx={{ textAlign: "center" }}
          >
            {text}
          </Typography>
        }
      />
    </Divider>
  );
};

export default CustomDivider;
