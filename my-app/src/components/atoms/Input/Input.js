import React from 'react';
import styles from './Input.module.scss';
import { Box, TextField } from '@mui/material';

const Input = ({ placeHolder, size, width }) => {
  return (
    <Box
      sx={{
        width: width,
      }}
    >
      <TextField fullWidth size={size} className={styles.input} label={placeHolder} />
    </Box>
  );
};
export default Input;