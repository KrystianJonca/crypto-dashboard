import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CoinCard from './CoinCard';

const Coins = ({ coins }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {coins.map((coin) => (
        <CoinCard
          id={coin.uuid}
          name={coin.name}
          symbol={coin.symbol}
          icon={coin.iconUrl}
        />
      ))}
    </Box>
  );
};

Coins.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      coinrankingUrl: PropTypes.string,
      iconUrl: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
      uuid: PropTypes.string,
    })
  ),
};

export default React.memo(Coins);
