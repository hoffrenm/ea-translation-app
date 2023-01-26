import { Box, Typography, useTheme } from '@mui/material';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      mx: 'auto',
      maxWidth: '105ch',
      bgcolor: theme.palette.secondary.main,
      border: 1,
      borderRadius: 4,
      borderColor: theme.palette.secondary.light,
      p: 4,
      my: 4
    }}>
      <Box sx={{ p: 2, display: 'flex' }}>
        <img height={250} src='/Logo-Hello.png' alt='Smiling robot'></img>
        <Box sx={{ width: 1, ml: 6, display: 'grid' }}>
          <Typography variant='logoText' sx={{ justifySelf: 'start', fontSize: 60 }}>Lost</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'start', fontSize: 60, pl: 5, color: theme.palette.secondary.light }}>In</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'end', fontSize: 60 }}>Translation</Typography>
        </Box>
      </Box>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
