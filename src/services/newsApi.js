import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': process.env.REACT_APP_BING_NEWS_API_HOST,
  'X-RapidAPI-Key': process.env.REACT_APP_BING_NEWS_API_KEY,
};

const baseUrl = process.env.REACT_APP_BING_NEWS_API_URL;
const createReq = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (count = 10) =>
        createReq(
          `/news/search?q=crypto&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
