import React from 'react';
import styles from './Input.module.scss';
import { Box, TextField } from '@mui/material';

const Input = ({ placeHolder, size, width, value, onChange, disabled }) => {
  return (
    <Box
      sx={{
        width: width,
      }}
    >
      <TextField disabled={disabled} fullWidth size={size} className={styles.input} label={placeHolder} value={value} onChange={onChange}/>
    </Box>
  );
};
export default Input;