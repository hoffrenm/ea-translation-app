import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import TranslatePage from './components/TranslatePage/TranslatePage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.primary.main }}>
          <Header />

          <Routes>
            <Route exact path='/' element={<LoginPage />} />
            <Route exact path='/translate' element={<TranslatePage />} />
            <Route exact path='/profile' element={<ProfilePage />} />
          </Routes>

        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
