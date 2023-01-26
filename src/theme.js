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
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'navbutton' },
          style: {
            fontSize: 16,
            letterSpacing: 1.5,
            borderRadius: 8,
            fontWeight: 600,
            display: 'flex',
          }
        }
      ]
    },
  }
});
