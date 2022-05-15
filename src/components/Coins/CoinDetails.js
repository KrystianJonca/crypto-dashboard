import React from 'react';
import PropTypes from 'prop-types';
import CoinChart from './CoinChart';
import millify from 'millify';
import Statistic from '../Statistic/Statistic';
import { Box, Typography } from '@mui/material';
import HTMLReactParser from 'html-react-parser';

const CoinDetails = ({
  id,
  name,
  symbol,
  price,
  icon,
  desc,
  change,
  marketCap,
  volume,
  supply,
  ath,
}) => {
  return (
    <Box>
      <img src={icon} alt={name} width="200" height="200" />
      <Typography variant="h2">
        {symbol} - {name}
      </Typography>
      <Typography sx={{ mt: 2 }} variant="h4">
        {name} Statistics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <Statistic title="Current price: " data={`$${millify(price)}`} />
        <Statistic title="Daily change: " data={change} />
        <Statistic title="Total 24H Volume" data={`$${millify(volume)}`} />
        <Statistic title="Total Market Cap" data={`$${millify(marketCap)}`} />
        <Statistic title="Total Supply" data={millify(supply)} />
        <Statistic title="All time high" data={`$${millify(ath)}`} />
      </Box>
      <CoinChart id={id} />
      <Typography sx={{ mt: 2 }} variant="h4">
        What is {name}?
      </Typography>
      {HTMLReactParser(desc)}
    </Box>
  );
};

CoinDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  supply: PropTypes.string.isRequired,
  ath: PropTypes.string.isRequired,
};

export default React.memo(CoinDetails);
