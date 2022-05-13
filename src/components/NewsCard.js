import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

const NewsCard = ({ link, name, image }) => {
  return (
    <a href={link}>
      <Card sx={{ width: 300, height: 300, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            width="100"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography sx={{ height: 150 }} variant="h6">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
};

NewsCard.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default React.memo(NewsCard);
