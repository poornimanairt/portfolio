import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PageWrapper from "../components/PageWrapper";

const about = () => {
  return (
    <Grid container py={3}>
      <Grid item xs={4} sm={6} p={5} display="flex" alignItems="center">
        <Box>
          <Typography variant="h2" color="yellow">
            About Me
          </Typography>
          <Typography variant="body1">
            Hello there ! I'm Poornima Nair, a passionate and experienced
            front-end developer with a Bachelor's degree in Computer Science and
            Engineering. Over the past 2.5 years, I've been on an exhilarating
            journey in the world of web development, where I've had the
            privilege of crafting interactive and user-friendly web
            applications.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default about;
