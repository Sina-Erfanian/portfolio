import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/common/CustomDivider";
import { useTheme } from "@mui/material/styles";
import FormContact from "./components/FormContact";

const Contact = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "secondary",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>ارتباط با من</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="info.main"
          cColor="info"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />

        <Grid container sx={{ mt: 10 }}>
          <Grid xs={12} md={8} xsOffset={0} mdOffset={2}>
            <Card
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#171515" : "whitesmoke",
              }}
            >
              <FormContact />
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
