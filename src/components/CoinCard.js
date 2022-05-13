import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, symbol, icon }) => {
  return (
    <Link to={`/crypto/${id}`}>
      <Card sx={{ width: 250, height: 250, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="145"
            width="100"
            image={icon}
            alt={name}
          />
          <CardContent>
            <Typography sx={{ height: 105 }} variant="h5" component="div">
              {symbol} - {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

CoinCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  icon: PropTypes.string,
};

export default React.memo(CoinCard);
