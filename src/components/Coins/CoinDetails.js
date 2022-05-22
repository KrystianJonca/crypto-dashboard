import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CoinChart from './CoinChart';
import millify from 'millify';
import Statistic from '../Statistic/Statistic';
import HTMLReactParser from 'html-react-parser';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

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
  const [timeperiod, setTimeperiod] = useState(time[1]);

  const handleTimeperiodChange = useCallback(
    (event) => {
      if (time.includes(event.target.value)) {
        setTimeperiod(event.target.value);
      }
    },
    [setTimeperiod]
  );

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

      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'items-center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="h4" sx={{ my: 1 }}>
            BTC TO USD
          </Typography>
          <FormControl sx={{ width: '125px', my: 1 }}>
            <InputLabel id="timeperiod-select-label">Timeperiod</InputLabel>
            <Select
              labelId="timeperiod-select-label"
              id="timeperiod-select"
              value={timeperiod}
              label="timeperiod"
              onChange={handleTimeperiodChange}
            >
              {time.map((t) => (
                <MenuItem key={t} value={t}>
                  {t.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <CoinChart id={id} timeperiod={timeperiod} />
      </Box>

      <Typography sx={{ mt: 2 }} variant="h4">
        What is {name}?
      </Typography>
      {HTMLReactParser(desc)}
    </Box>
  );
};

CoinDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  price: PropTypes.string,
  change: PropTypes.string,
  icon: PropTypes.string,
  desc: PropTypes.string,
  marketCap: PropTypes.string,
  volume: PropTypes.string,
  supply: PropTypes.string,
  ath: PropTypes.string,
};

export default React.memo(CoinDetails);
