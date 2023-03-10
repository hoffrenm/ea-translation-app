import { Box, Typography, useTheme } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useStateValue } from '../../state';
import DeleteButton from './DeleteButton';

const ProfilePage = () => {
  const theme = useTheme();
  const [{ user, translations }] = useStateValue();

  if (!user?.name) {
    return <Navigate to='/' replace />;
  }

  const renderTranslations = () => {
    const recent = translations.slice(-10).reverse();

    if (!recent?.length) {
      return (
        <Box sx={{
          bgcolor: theme.palette.secondary.light,
          border: 1,
          borderRadius: 4,
          borderColor: theme.palette.primary.light,
          my: 3,
          mx: 1,
          py: 2,
          px: 2,
        }}>
          <Typography variant='h6'>No translations just yet!</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{
        bgcolor: theme.palette.secondary.light,
        border: 1,
        borderRadius: 4,
        borderColor: theme.palette.primary.light,
        my: 3,
        mx: 1,
        py: 2,
        px: 2,
      }}>
        <ol>
          {recent.map((item, i) => {
            return (
              <li key={i}><Typography>{item}</Typography></li>
            );
          })}
        </ol>
      </Box>
    );
  };

  return (
    <Box variant='centerbox' sx={{
      mx: 'auto',
      maxWidth: '105ch',
      bgcolor: theme.palette.secondary.main,
      border: 1,
      borderRadius: 4,
      borderColor: theme.palette.secondary.light,
      p: 4,
      my: 4
    }}>
      <Typography variant='h4' sx={{ pl: 2 }}>{user.name}'s most recent translations</Typography>
      {renderTranslations()}
      <DeleteButton visible={translations.length} />
    </Box>
  );
};

export default ProfilePage;
