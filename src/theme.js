import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1929',
    },
    secondary: {
      main: '#001E3C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },

  },
  typography: {
    logoText: {
      fontFamily: 'monospace',
      fontSize: 28,
      fontWeight: 700,
      color: 'inherit',
      letterSpacing: 6,
    }
  },
  box: {
    centerBox: {
      width: 1,
      mx: 'auto',
      maxWidth: '105ch',
      border: 1,
      borderRadius: 4,
      p: 2,
      my: 4
    }
  }
});
