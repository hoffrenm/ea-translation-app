import { Box, useTheme } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useStateValue } from '../../state';
import TranslateField from './TranslateField';
import TranslateResult from './TranslateResult';

const TranslatePage = () => {
  const theme = useTheme();
  const [{ user }] = useStateValue();

  if (!user?.name) {
    return <Navigate to='/' replace />;
  }

  return (
    <Box sx={{
      width: 1,
      mx: 'auto',
      maxWidth: '105ch',
      bgcolor: theme.palette.secondary.main,
      border: 1,
      borderRadius: 4,
      borderColor: theme.palette.primary.light,
      p: 2,
      pb: 0,
      mt: 4,
      flexDirection: 'column',
    }}>
      <TranslateField />
      <TranslateResult />
    </Box>
  );
};

export default TranslatePage;
