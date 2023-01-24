import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TranslateField from './TranslateField';
import TranslateResult from './TranslateResult';
// import { useStateValue } from '../../state';


const TranslatePage = () => {
  const theme = useTheme();

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
