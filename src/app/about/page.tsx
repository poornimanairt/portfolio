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
          <Typography variant="body1"></Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default about;
