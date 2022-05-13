import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coinsApiHeaders = {
  'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_RAPIDAPI_URL;
const createReq = (url) => ({ url, headers: coinsApiHeaders });

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => createReq('/stats'),
    }),
    getCoin: builder.query({
      query: (coinId) => createReq(`/coin${coinId}`),
    }),
    getCoinChart: builder.query({
      query: ({ coinId, timeperiod }) =>
        createReq(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getCoins: builder.query({
      query: (count) => createReq(`/coins?limit=${count}`),
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetCoinQuery,
  useGetCoinChartQuery,
  useGetCoinsQuery,
} = coinsApi;
