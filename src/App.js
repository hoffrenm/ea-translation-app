import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { setTranslations, setUser, useStateValue } from './state';
import { logIn } from './services/translationService';
import Header from './components/NavBar/Header';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import TranslatePage from './components/TranslatePage/TranslatePage';

const App = () => {
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem('user'));

    // Fetch translations from API if
    // user has already logged in
    if (existingUser?.username) {
      async function fetchUserData() {
        const user = await logIn(existingUser.username);

        dispatch(setUser(user));
        dispatch(setTranslations(user.translations));

        navigate('/translate');
      }

      fetchUserData();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.primary.main }}>
        <Header />
        <Routes>
          <Route exact path='/translate' element={<TranslatePage />} />
          <Route exact path='/profile' element={<ProfilePage />} />
          <Route exact path='/' element={<LoginPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
