import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import { useStateValue } from '../../state';
import LogoText from './LogoText';
import LogoutButton from './LogoutButton';
import NavLinks from './NavLinks';

const Header = () => {
  const [{ user }] = useStateValue();
  const theme = useTheme();

  return (
    <AppBar position='static' sx={{ p: 1, bgcolor: theme.palette.primary.dark, borderBottom: 1, borderColor: theme.palette.primary.light }}>
      <Toolbar sx={{ mx: 'auto', width: 1, maxWidth: '105ch' }}>
        <LogoText />
        <NavLinks />
        <Typography>{user.name}</Typography>
        {user?.name ? <LogoutButton /> : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
