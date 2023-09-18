import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Grid container py={3} height="100vh">
        <Grid item xs={12} p={5} display="flex" alignItems="center">
          <Box>
            <Typography variant="h2">Your Friendly Neighborhood,</Typography>
            <Typography variant="h2" color="yellow">
              Front End Developer
            </Typography>
            <Typography variant="body1">
              (This portfolio is under construction, would you like to wait
              &nbsp;
              <Link href="https://papertoilet.com/" color="yellow">
                <u>here</u>
              </Link>
              ?)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
