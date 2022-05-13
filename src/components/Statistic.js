import React from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Statistic = ({ title, data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mt: 2,
        p: 1,
        width: '300px',
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography sx={{ mt: 1 }} variant="h6">
        {data}
      </Typography>
    </Box>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default React.memo(Statistic);
