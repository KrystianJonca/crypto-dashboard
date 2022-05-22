import React, { useEffect, useMemo, Suspense } from 'react';
import Layout from './components/Layout';
import Loader from './components/Loader';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Home = React.lazy(() => import('./routes/Home'));
const Coins = React.lazy(() => import('./routes/Coins'));
const Coin = React.lazy(() => import('./routes/Coin'));
const News = React.lazy(() => import('./routes/News'));

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const colorMode = useSelector((state) => state.colorMode.value);

  useEffect(() => {
    if (pathname === '/') navigate('/home');
  }, []);

  const theme = useMemo(
    () => createTheme({ palette: { mode: colorMode } }),
    [colorMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/home"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/coins"
              element={
                <Suspense fallback={<Loader />}>
                  <Coins />
                </Suspense>
              }
            />
            <Route
              path="/coin/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <Coin />
                </Suspense>
              }
            />
            <Route
              path="/news"
              element={
                <Suspense fallback={<Loader />}>
                  <News />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
