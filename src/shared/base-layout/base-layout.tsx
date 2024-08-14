import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Header } from '../header';
import { Footer } from '../footer';

export const BaseLayout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ width: '100%', flex: 1 }} component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
