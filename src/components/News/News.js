import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NewsCard from './NewsCard';

const News = ({ news }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {news.map((article) => {
        return (
          <NewsCard
            key={article.url}
            link={article.url}
            name={article.name}
            image={article.image.thumbnail.contentUrl}
          />
        );
      })}
    </Box>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default React.memo(News);
