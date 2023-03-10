import { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { useStateValue } from '../../state';
import Sign from './Sign';

const TranslateResult = () => {
  const theme = useTheme();
  const [{ translate }, dispatch] = useStateValue();

  useEffect(() => {

  }, [translate, dispatch]);

  return (
    <Box sx={{
      maxWidth: '105ch',
      minHeight: '30ch',
      bgcolor: theme.palette.secondary.light,
      border: 1,
      borderRadius: 4,
      borderColor: theme.palette.primary.light,
      my: 3,
      mx: 1,
      p: 2,
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'flex-start',
      rowGap: 'unset'
    }}>
      {translate && translate.split("").map((char, i) => {
        return (
          <Sign key={i} character={char} />
        );
      })}
    </Box>
  );
};

export default TranslateResult;
