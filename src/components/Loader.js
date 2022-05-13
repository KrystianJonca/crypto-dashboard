import React from 'react';
import { Box, Skeleton } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
};

export default Loader;
