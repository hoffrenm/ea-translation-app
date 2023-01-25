import { Box, Typography, useTheme } from '@mui/material';

const LogoText = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'grid', flexDirection: 'column', spacing: -4, minWidth: '285px' }}>
      <Typography variant='logoText' sx={{ justifySelf: 'start' }}>Lost</Typography>
      <Typography variant='logoText' sx={{ justifySelf: 'start', pl: 5, my: -2, color: theme.palette.secondary.light }}>In</Typography>
      <Typography variant='logoText' sx={{ justifySelf: 'end' }}>Translation</Typography>
    </Box>
  );
};

export default LogoText;
