import { Avatar, Box, Button, Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useStateValue } from '../../state';

const NavLinks = () => {
  const theme = useTheme();
  const [{ user }] = useStateValue();

  return (
    <Box sx={{
      ml: 5,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'flex-start',
      columnGap: 2
    }} >

      <Link to='/translate' component={RouterLink} sx={{ textDecoration: 'none' }}>
        <Button
          variant="navbutton"
          sx={{
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.light,
            ":hover": {
              backgroundColor: theme.palette.secondary.contrastText,
              color: theme.palette.primary.dark,
            }
          }}>
          Translate
        </Button>
      </Link>

      <Link to='/profile' component={RouterLink} sx={{ textDecoration: 'none' }}>
        <Button
          variant='navbutton'
          sx={{
            columnGap: 1,
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.light,
            ":hover": {
              backgroundColor: theme.palette.secondary.contrastText,
              color: theme.palette.primary.dark,
            }
          }}
          endIcon={<Avatar sx={{ width: 28, height: 28 }} />} >
          {user.name}
        </Button>
      </Link>

    </Box >
  );
};

export default NavLinks;
