import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { devExp } from "../../constants/details";
import { HomeRepairServiceRounded } from "@mui/icons-material";
import { Slide, Typography } from "@mui/material";

const ExpTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate">
      {devExp.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{ transitionDelay: loading ? "400ms" : "0ms" }}
          key={index}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <HomeRepairServiceRounded color="info" />
              </TimelineDot>
              {index !== 2 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography marginTop={1.1} variant="body1" color="text.primary">
                {item.title}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default ExpTimeline;
