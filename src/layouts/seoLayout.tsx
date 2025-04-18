import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Footer } from '../modules/mainPages/footer';
import { Topbar } from '../modules/mainPages/toolbar';

interface Props {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
    : null;
}

export default function MainLayout(props: Props) {
  return (
    <Box>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{
          backgroundColor: 'var(--neutral-white)',
          color: 'var(--primary-main)'
        }}>
          <Topbar />
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container sx={{ flex: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
