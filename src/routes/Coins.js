import React, { useState, useMemo } from 'react';
import { Typography, TextField } from '@mui/material';
import { useGetCoinsQuery } from '../services/coinsApi';
import { Loader, CoinsList } from '../components';

const CoinsPage = () => {
  const [search, setSearch] = useState('');
  const { data: coins, error, isLoading } = useGetCoinsQuery();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const displayCoins = useMemo(() => {
    if (coins) {
      if (search === '') {
        return coins.data.coins;
      }
      return coins.data.coins.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
    }
  }, [search, coins]);

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <>
      <Typography variant="h2">Top 100 Coins by Market Cap</Typography>
      <TextField
        id="standard-basic"
        sx={{ my: 2 }}
        label="Search"
        variant="standard"
        value={search}
        onChange={handleChange}
      />
      {isLoading ? <Loader /> : <CoinsList coins={displayCoins} />}
    </>
  );
};

export default CoinsPage;
