import { Box, Grid, Typography } from "@mui/material";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Grid container py={3}>
        <Grid item xs={12} p={5} display="flex" alignItems="center">
          <Box>
            <Typography variant="h2">Your Friendly Neighbrhood,</Typography>
            <Typography variant="h2" color="yellow">
              Front End Developer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
