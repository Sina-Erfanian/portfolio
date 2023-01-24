import React from "react";
import { courses } from "../../constants/courses";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Slide,
  Typography,
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";
const ShowCourses = ({ loading }) => {
  return (
    <>
      {courses.map((course, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 3 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "#27b1ed" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="210"
                  width="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    textAlign="left"
                    gutterBottom
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    textAlign="left"
                    gutterBottom
                  >
                    <EllipsisText
                      text={course.info}
                      length={130}
                      tail=" . . . "
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="inherit"
                  href="https://www.udemy.com/"
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowCourses;
