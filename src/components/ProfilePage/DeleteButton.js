import { Button, useTheme } from '@mui/material';
import { updateTranslations } from '../../services/translationService';
import { useStateValue, setTranslate, clearTranslations } from '../../state';

const DeleteButton = ({ visible }) => {
  const theme = useTheme();
  const [{ user }, dispatch] = useStateValue();

  const handleClick = async () => {
    await updateTranslations([], user.id);
    dispatch(clearTranslations());
    dispatch(setTranslate(''));
  };

  if (!visible) return null;

  return (
    <Button
      onClick={handleClick}
      variant='outlined'
      sx={{
        borderRadius: 2,
        borderColor: theme.palette.primary.contrastText,
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
  );
};

export default DeleteButton;
