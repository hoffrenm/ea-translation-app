import { Box, Button, useTheme } from '@mui/material';
import { useStateValue, clearTranslations } from '../../state';

const DeleteButton = (disabled) => {
  const theme = useTheme();
  const [, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch(clearTranslations())
  }

  return (
    <Box>
      <Button
        onClick={handleClick}
        variant='outlined'
        sx={{
          borderRadius: 4,
          p: 2,
          ml: 1,
          fontWeight: 600,
          letterSpacing: 1,
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.secondary.light,
          ":hover": { 
            backgroundColor: theme.palette.secondary.contrastText,
            color: theme.palette.primary.dark,
        }
        }}
      >Clear translations</Button>
    </Box>
  );
};

export default DeleteButton;
