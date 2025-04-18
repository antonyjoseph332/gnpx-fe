import { FC } from "react";
import { Typography, Container, Paper } from "@mui/material";

export const Home: FC = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome Home
        </Typography>
        <Typography variant="body1">
          This is your home page content.
        </Typography>
      </Paper>
    </Container>
  );
};