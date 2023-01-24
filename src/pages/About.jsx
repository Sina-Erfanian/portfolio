import { Card, CardContent, Box, Avatar } from "@mui/material";
import { CodeRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import man from "../assets/man.jpg";
import DevInfo from "./components/DevInfo";
import CustomDivider from "../components/common/CustomDivider";
import Skills from "./components/Skills";
import DevWorkCount from "./components/DevWorkCount";

const About = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "secondary",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>درباره من</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <Avatar
              src={man}
              variant="rounded"
              sx={{
                mt: 4,
                width: {
                  md: 200,
                  lg: 250,
                },
                height: 250,
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              SE
            </Avatar>
          </Grid>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="secondary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="center"
              text="توسعه دهنده ی فول استک"
            />

            <Box sx={{ mx: 5, my: 3 }}>
              <Grid container>
                <Grid xs={12} sm={8} md={9} lg={9}>
                  <DevInfo />
                </Grid>
                <Grid
                  xs={0}
                  sm={4}
                  md={3}
                  lg={3}
                  sx={{
                    mt: 3,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <DevWorkCount />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="center"
              text="مهارت های من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
