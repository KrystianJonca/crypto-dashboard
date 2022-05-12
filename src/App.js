import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './routes/Home';
import Coins from './routes/Coins';
import News from './routes/News';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('/home');
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
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
