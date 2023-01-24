import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProfilePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: 1,
      mx: 'auto',
      maxWidth: '105ch',
      bgcolor: theme.palette.secondary.main,
      border: 1,
      borderRadius: 4,
      borderColor: theme.palette.secondary.light,
      p: 2,
      my: 4
    }}>
      <h1>ProfilePage</h1>
    </Box>
  );
};

export default ProfilePage;
