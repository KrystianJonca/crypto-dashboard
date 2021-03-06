import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, index, name, symbol, icon, price, marketCap }) => {
  return (
    <Link to={`/coin/${id}`}>
      <Card sx={{ width: 300, height: 300, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            width="100"
            image={icon}
            alt={name}
          />
          <CardContent>
            <Typography sx={{ height: 150 }} variant="h5" component="div">
              {index}. {symbol} - {name}
              {price && (
                <Typography variant="body2" color="text.secondary">
                  Price: {`$${millify(price)}`}
                </Typography>
              )}
              {marketCap && (
                <Typography variant="body2" color="text.secondary">
                  Market cap: {`$${millify(marketCap)}`}
                </Typography>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

CoinCard.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  price: PropTypes.string,
  marketCap: PropTypes.string,
};

export default React.memo(CoinCard);
