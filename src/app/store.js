import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { coinsApi } from '../services/coinsApi';
import colorSliceReducer from '../features/colorSlice';
const store = configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    colorMode: colorSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
