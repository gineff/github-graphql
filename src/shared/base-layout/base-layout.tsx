import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Header } from '../header';
import { Footer } from '../footer';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, width: '100%' }} component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
