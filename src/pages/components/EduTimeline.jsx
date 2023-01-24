import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { devEdu } from "../../constants/details";
import { SchoolRounded } from "@mui/icons-material";
import { Slide, Typography } from "@mui/material";

const EduTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate">
      {devEdu.map((item, index) => (
        <Slide
          direction="down"
          in={loading}
          style={{ transitionDelay: loading ? "400ms" : "0ms" }}
          key={index}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined">
                <SchoolRounded color="warning" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="text.primary">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.major}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default EduTimeline;
