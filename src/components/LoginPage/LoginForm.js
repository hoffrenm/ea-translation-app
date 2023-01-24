import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { ArrowCircleRight, Keyboard } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { logIn } from '../../services/translationService';
import { useStateValue, setUser, setTranslations } from '../../state';

const LoginForm = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleChange = e => setUsername(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await logIn(username);

      dispatch(setUser(user));
      dispatch(setTranslations(user.translations));
      navigate('/translate');
    } catch (err) {
      throw new Error(err);
    }
  };

  const SubmitButton = () => {
    return (
      <Button type="submit"><ArrowCircleRight sx={{ fontSize: 60, color: theme.palette.primary.contrastText }} /></Button>
    );
  };

  return (
    <form onSubmit={handleLogin}>
      <Box sx={{ pt: 3 }}>
        <FormControl fullWidth>
          <TextField
            required={true}
            fullWidth
            id="username"
            name="username"
            onChange={handleChange}
            placeholder='What is your name?'
            sx={{ bgcolor: theme.palette.secondary.light, borderRadius: 4 }}
            InputProps={{
              startAdornment: <Keyboard sx={{ fontSize: 56, mr: 3 }} />,
              endAdornment: <SubmitButton />,
              style: { fontSize: 24 }
            }}
          />
        </FormControl>
      </Box>
    </form>
  );
};

export default LoginForm;
