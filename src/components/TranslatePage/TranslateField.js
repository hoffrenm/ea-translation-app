import { useState } from 'react';
import { Box, TextField, Button, useTheme } from '@mui/material';
import { ArrowCircleRight, Keyboard } from '@mui/icons-material';
import { useStateValue, setTranslate, setTranslations } from '../../state';
import { saveTranslation } from '../../services/translationService';

const TranslateField = () => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [{ user, translate, translations }, dispatch] = useStateValue();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputText = input.toLowerCase();
    dispatch(setTranslate(inputText));

    // ignore empty input
    if (!inputText?.length) return;

    const updated = await saveTranslation([...translations, inputText], user.id);
    dispatch(setTranslations(updated.translations));
  };

  const TranslateButton = () => {
    return (
      <Button
        type='submit'
        onClick={handleSubmit}
        sx={{
          borderRadius: 2,
          p: 1,
        }}>
        <ArrowCircleRight sx={{ fontSize: 60, color: theme.palette.primary.contrastText }} /></Button>
    );
  };

  return (
    <Box sx={{ p: 1 }}>
      <form autoComplete='off'>
        <TextField
          fullWidth
          autoComplete="off"
          onChange={handleChange}
          defaultValue={translate ? translate : ''}
          placeholder={'Write something to translate'}
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
