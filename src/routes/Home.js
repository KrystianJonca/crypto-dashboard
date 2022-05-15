import React from 'react';
import millify from 'millify';
import { Typography, Box } from '@mui/material';
import { useGetStatsQuery } from '../services/coinsApi';
import { Statistic, Loader, CoinsList } from '../components';

const Home = () => {
  const { data: globalStats, error, isLoading } = useGetStatsQuery();

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <>
      <Typography variant="h2">Global Crypto Stats</Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <Statistic
            title="Total 24H Volume"
            data={`$${millify(globalStats.data.total24hVolume)}`}
          />
          <Statistic
            title="Total Market Cap"
            data={`$${millify(globalStats.data.totalMarketCap)}`}
          />
          <Statistic title="Total Coins" data={globalStats.data.totalCoins} />
          <Statistic
            title="Total Exchanges"
            data={globalStats.data.totalExchanges}
          />
          <Statistic
            title="Total Markets"
            data={globalStats.data.totalMarkets}
          />
        </Box>
      )}
      <Typography sx={{ mt: 4 }} variant="h3">
        Top 3 Coins
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinsList coins={globalStats.data.bestCoins} />
      )}
      <Typography sx={{ mt: 4 }} variant="h3">
        Newest 3 Coins
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinsList coins={globalStats.data.newestCoins} />
      )}
    </>
  );
};

export default Home;
