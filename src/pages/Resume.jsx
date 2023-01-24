import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Divider, Chip } from "@mui/material";
import { HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import ExpTimeline from "./components/ExpTimeline";
import EduTimeline from "./components/EduTimeline";

const Resume = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "secondary",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>رزومه من</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={12} sm={12} md={6}>
            <Divider
              textAlign="center"
              sx={{
                mt: 1,
                "&::before, &::after": {
                  borderColor: "info.main",
                },
              }}
            >
              <Chip
                color="info"
                sx={{ p: 3 }}
                icon={<HomeRepairServiceRounded color="action" />}
                label={
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ textAlign: "center" }}
                  >
                    تجربیات
                  </Typography>
                }
              />
            </Divider>
            <ExpTimeline loading={loading} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Divider
              textAlign="center"
              sx={{
                mt: 1,
                "&::before, &::after": {
                  borderColor: "warning.main",
                },
              }}
            >
              <Chip
                color="warning"
                sx={{ p: 3 }}
                icon={<SchoolRounded />}
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{ textAlign: "center" }}
                  >
                    تحصیلات
                  </Typography>
                }
              />
            </Divider>
            <EduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
