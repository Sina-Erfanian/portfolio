import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/common/CustomDivider";
import ShowCourses from "./components/ShowCourses";

const Courses = () => {
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
        <title>دوره های من</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="info.main"
          cColor="info"
          icon={<SchoolRounded />}
          align="center"
          text="دوره های من"
        />

        <Grid container sx={{ m: 3 }}>
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Courses;
