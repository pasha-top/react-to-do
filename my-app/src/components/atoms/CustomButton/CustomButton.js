import React from 'react';
import styles from './CustomButton.module.scss';
import {  Button } from '@mui/material';

const CustomButton = ({text, variant, size, onClick}) => {
  return (
    <>
      <Button
        className={styles.customButton}
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