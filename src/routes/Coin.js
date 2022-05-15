import React from 'react';
import { Typography } from '@mui/material';
import { Loader } from '../components';
import { useParams } from 'react-router-dom';
import { useGetCoinQuery } from '../services/coinsApi';

const Coin = () => {
  const { id } = useParams();
  const { data: coin, error, isLoading } = useGetCoinQuery(id);

  if (error) return <Typography variant="h4">{error}</Typography>;
  // TODO
  return (
    <>
      {isLoading ? <Loader /> : <Typography>{coin.data.coin.name}</Typography>}
    </>
  );
};

export default Coin;
