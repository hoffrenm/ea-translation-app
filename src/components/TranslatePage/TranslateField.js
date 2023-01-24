import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowCircleRight, Keyboard, ArrowRightAlt } from '@mui/icons-material';
import { useStateValue, setTranslate } from '../../state';

const TranslateField = () => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [, dispatch] = useStateValue();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    dispatch(setTranslate(input.toLowerCase()));
  };

  const TranslateButton = () => {
    return (
      <Button
        type='submit'
        onClick={handleClick}
        sx={{
          borderRadius: 2,
          m: 1,
          p: 1,
        }}>
        <ArrowCircleRight type='button' sx={{ fontSize: 60, color: theme.palette.primary.contrastText }} /></Button>
    );
  };

  return (
    <Box sx={{ p: 1 }}>
      <form autoComplete='off'>
        <TextField
          fullWidth
          autoComplete="off"
          onChange={handleChange}
          placeholder='Write something to translate'
          sx={{ fontSize: 24, bgcolor: theme.palette.secondary.light, borderRadius: 4 }}
          InputProps={{
            startAdornment: <Keyboard sx={{ fontSize: 60, ml: 1, mr: 2 }} />,
            endAdornment: <TranslateButton />,
            style: { fontSize: 24 }
          }}
        />
      </form>
    </Box>
  );
};

export default TranslateField;
