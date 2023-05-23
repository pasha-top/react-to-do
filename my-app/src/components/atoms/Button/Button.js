import React from 'react';
import styles from './Button.module.scss';

const Button = ({text}) => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        {text}
      </button>
    </>
  );
};
export default Button;