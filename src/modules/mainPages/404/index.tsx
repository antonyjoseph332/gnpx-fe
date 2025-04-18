import { FC } from "react";
import { Typography, Container, Paper, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Error as ErrorIcon } from "@mui/icons-material";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Paper 
        sx={{ 
          p: 5, 
          mt: 4, 
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.grey[50]
        }}
      >
        <ErrorIcon sx={{ fontSize: 100, color: 'error.main', mb: 2 }} />
        <Typography variant="h2" gutterBottom color="error">
          404
        </Typography>
        <Typography variant="h4" gutterBottom color="textSecondary">
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Typography>
        <Box mt={4}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};