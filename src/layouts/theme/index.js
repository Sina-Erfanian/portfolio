import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
console.log(blue);
// we can create a theme and customize a lot of things like the color palette , fontFamily , direction and more...

// RTL MUI
export const lightTheme = createTheme({
  direction: "rtl",
  // typography = h1,h2,h3,p,...
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "tanha,vazir,roboto",
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 55,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  // typography = h1,h2,h3,p,...
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "tanha,vazir,roboto",
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 55,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
