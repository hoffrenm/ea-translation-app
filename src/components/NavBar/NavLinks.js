import { Box, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useStateValue } from '../../state';

const NavLinks = () => {
  const [{ user }] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }} >
      {!user?.name ? null :
        <>
          <Link color={'#FFFFFF'} to='/translate' component={RouterLink} sx={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, letterSpacing: 2 }}>Translate</Button>
          </Link>

          <Link color={'#FFFFFF'} to='/profile' component={RouterLink} sx={{ textDecoration: 'none' }}>
            <Button sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, letterSpacing: 2 }}>Profile</Button>
          </Link>
        </>
      }
    </Box>
  );
};

export default NavLinks;