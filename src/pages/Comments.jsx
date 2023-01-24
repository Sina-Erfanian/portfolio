import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { userComments } from "../constants/details";
import CustomDivider from "../components/common/CustomDivider";

const Comments = () => {
  const options = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    caseEase: "linear",
  };

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "secondary",
        overflowY: "auto",
      }}
    >
      <Helmet>
        <title>نظرات دانشجویان</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="info.main"
          cColor="info"
          icon={<ForumRounded />}
          align="center"
          text="نظرات دانشجویان من"
        />

        <Box
          component="div"
          sx={{
            mt: 15,
          }}
        >
          <Slider {...options}>
            {" "}
            {userComments.map((user, index) => (
              <Box key={index} components="div">
                <Avatar
                  src={user.avatar}
                  variant="rounded"
                  sx={{ width: 100, height: 100, margin: "10px auto" }}
                />
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="text.primary"
                >
                  {user.fullname}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="text.primary"
                >
                  {user.jobTitle}
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "lightsalmon",
                    width: 1 / 2,
                    m: "10px auto",
                    borderRadius: 5,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" textAlign="center">
                      {user.comments}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comments;
