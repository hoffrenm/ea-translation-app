import { Box, Button, useTheme } from '@mui/material';
import { setTranslate, setTranslations, setUser, useStateValue } from '../../state';

const LogoutButton = () => {
  const theme = useTheme();
  const [, dispatch] = useStateValue();

  const handleClick = () => {
    localStorage.clear();
    dispatch(setUser({}));
    dispatch(setTranslations([]));
    dispatch(setTranslate(''));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button
        size='large'
        variant='outlined'
        onClick={handleClick}
        sx={{
          borderRadius: 2,
          borderColor: theme.palette.primary.contrastText,
          fontWeight: 600,
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          letterSpacing: 1,
          ":hover": {
            backgroundColor: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.dark
          }
        }}
      >Log out</Button>
    </Box>
  );
};

export default LogoutButton;
