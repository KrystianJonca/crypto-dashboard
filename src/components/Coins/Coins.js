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
      {coins.map((coin, i) => (
        <CoinCard
          key={i}
          id={coin.uuid}
          index={i + 1}
          name={coin.name}
          symbol={coin.symbol}
          icon={coin.iconUrl}
          price={coin.price ? coin.price : undefined}
          marketCap={coin.marketCap ? coin.marketCap : undefined}
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
      pice: PropTypes.number,
      marketCap: PropTypes.number,
      symbol: PropTypes.string,
      uuid: PropTypes.string,
    })
  ).isRequired,
};

export default React.memo(Coins);
