import { Box, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import { useTheme } from '@mui/material/styles';

const LoginPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: 1,
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
        <Box sx={{ ml: 6, display: 'grid', gap: -4, flexDirection: 'column' }}>
          <Typography variant='logoText' sx={{ justifySelf: 'start', fontSize: 60 }}>Lost</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'start',  fontSize: 60, pl: 5, color: theme.palette.secondary.light }}>In</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'end',  fontSize: 60  }}>Translation</Typography>
        </Box>
      </Box>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;