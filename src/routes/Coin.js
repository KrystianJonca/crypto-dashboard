import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Loader, CoinDetail } from '../components';
import { useParams } from 'react-router-dom';
import { useGetCoinQuery } from '../services/coinsApi';

const Coin = () => {
  const { id } = useParams();
  const { data: coinData, error, isLoading } = useGetCoinQuery(id);

  const coin = useMemo(
    () => (isLoading ? null : coinData.data.coin),
    [coinData, isLoading]
  );

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinDetail
          id={coin.uuid}
          name={coin.name}
          price={coin.price}
          change={coin.change}
          symbol={coin.symbol}
          icon={coin.iconUrl}
          desc={coin.description}
          volume={coin['24hVolume']}
          supply={coin.supply.total}
          ath={coin.allTimeHigh.price}
          marketCap={coin.marketCap}
        />
      )}
    </>
  );
};

export default Coin;
