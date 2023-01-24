import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useStateValue } from '../state'

const Header = () => {
  const [{ user }] = useStateValue();
  const theme = useTheme();

  return (
    <AppBar position='static' sx={{ bgcolor: theme.palette.primary.dark, borderBottom: 1, borderColor: theme.palette.primary.light }}>
      <Toolbar sx={{ mx: 'auto', width: 1, maxWidth: '105ch' }}>
        <Box sx={{ display: 'grid', flexDirection: 'column', spacing: -4, minWidth: '285px' }}>
          <Typography variant='logoText' sx={{ justifySelf: 'start' }}>Lost</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'start', pl: 5, my: -2, color: theme.palette.secondary.light }}>In</Typography>
          <Typography variant='logoText' sx={{ justifySelf: 'end' }}>Translation</Typography>
        </Box>

        <Box sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }} >
          <Link color={'#FFFFFF'} to='/' component={RouterLink} sx={{ textDecoration: 'none' }}>
            <Button sx={{
              my: 2,
              color: 'white',
              display: 'block',
              border: 1,
              borderRadius: 2,
              borderColor: theme.palette.secondary.light
            }}>
              Main
            </Button>
          </Link>

          <Link color={'#FFFFFF'} to='/translate' component={RouterLink} sx={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>Translate</Button>
          </Link>

          <Link color={'#FFFFFF'} to='/profile' component={RouterLink} sx={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>Profile</Button>
          </Link>
        </Box>
            <Typography>LOL: {user.name}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
