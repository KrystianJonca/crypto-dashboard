import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { Loader, NewsList } from '../components';
import { useGetNewsQuery } from '../services/newsApi';

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

      {isLoading ? <Loader /> : <NewsList news={filteredNews} />}
    </>
  );
};

export default News;
