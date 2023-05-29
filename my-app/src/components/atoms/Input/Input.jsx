import React from 'react';
import { Box, TextField } from '@mui/material';

const Input = ({ placeHolder, size, width, value, onChange, disabled }) => {
  return (
    <Box
      sx={{
        width: width,
      }}
    >
      <TextField disabled={disabled} fullWidth size={size}  label={placeHolder} value={value} onChange={onChange}/>
    </Box>
  );
};
export default Input;