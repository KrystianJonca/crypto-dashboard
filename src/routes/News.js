import React, { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import Loader from '../components/Loader';
import { useGetNewsQuery } from '../services/newsApi';
import NewsCard from '../components/NewsCard';

const News = () => {
  const { data: news, error, isLoading } = useGetNewsQuery();

  const filteredNews = useMemo(() => {
    return isLoading
      ? undefined
      : news.value.filter((art) => typeof art.image !== 'undefined');
  }, [news, isLoading]);

  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <>
      <Typography variant="h2">Today's Crypto News</Typography>

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
          {filteredNews.map((article) => {
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
      )}
    </>
  );
};

export default News;
