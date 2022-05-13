import React, { useEffect, useMemo } from 'react';
import Layout from './components/Layout';
import Home from './routes/Home';
import Coins from './routes/Coins';
import News from './routes/News';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

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
            <Route path="/home" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
