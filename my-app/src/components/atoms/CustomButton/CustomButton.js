import React from 'react';
import styles from './CustomButton.module.scss';
import {  Button } from '@mui/material';

const CustomButton = ({text, variant, size}) => {
  return (
    <>
      <Button
        className={styles.customButton}
        variant={variant}
        size={size}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        {text}
      </Button>
    </>
  );
};
export default CustomButton;