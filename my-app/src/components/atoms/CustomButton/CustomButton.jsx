import React from 'react';
import {  Button } from '@mui/material';

const CustomButton = ({text, variant, size, onClick}) => {
  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};
export default CustomButton;