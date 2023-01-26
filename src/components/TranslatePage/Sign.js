import { Box } from '@mui/material';

const Sign = ({ character }) => {
  // renders empty box for other characters than a-z
  if (!/[a-z]/.test(character)) {
    return <Box sx={{ height: 60, width: 60 }} />;
  }

  return (
    <Box sx={{ height: 60, width: 60 }}>
      <img
        src={`signs/${character}.png`}
        alt={`Hand sign symbol for character ${character}`}
        style={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default Sign;
