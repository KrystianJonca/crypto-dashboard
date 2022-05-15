import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Loader from '../Loader';
import { Line } from 'react-chartjs-2';
import { useGetCoinChartQuery } from '../../services/coinsApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ id, timeperiod }) => {
  const {
    data: coinChart,
    error,
    isLoading,
  } = useGetCoinChartQuery(
    { coinId: id, timeperiod },
    { refetchOnMountOrArgChange: true }
  );

  const coinPrice = useMemo(() => {
    const helperArray = [];
    if (isLoading === false) {
      for (let i = coinChart.data.history.length - 1; i >= 0; i--) {
        helperArray.push(coinChart.data.history[i].price);
      }
    }
    return helperArray;
  }, [isLoading, coinChart]);

  const coinTimestamp = useMemo(() => {
    const helperArray = [];
    if (isLoading === false) {
      for (let i = coinChart.data.history.length - 1; i >= 0; i--) {
        helperArray.push(
          new Date(
            coinChart.data.history[i].timestamp * 1000
          ).toLocaleDateString()
        );
      }
    }
    return helperArray;
  }, [isLoading, coinChart]);

  const data = useMemo(() => {
    if (coinTimestamp && coinPrice) {
      return {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price in USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    }
  }, [coinPrice, coinTimestamp]);

  const options = useMemo(
    () => ({
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }),
    []
  );

  if (error) return <Typography variant="h4">{error}</Typography>;

  return <>{isLoading ? <Loader /> : <Line data={data} options={options} />}</>;
};

CoinChart.propTypes = {
  id: PropTypes.string.isRequired,
  timeperiod: PropTypes.string.isRequired,
};

export default CoinChart;
