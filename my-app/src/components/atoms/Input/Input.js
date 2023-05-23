import React from 'react';
import styles from './Input.module.scss';

const Input = ({placeHolder}) => {
  return (
    <>
      <input className={styles.input} placeholder={placeHolder}/>
    </>
  );
};
export default Input;