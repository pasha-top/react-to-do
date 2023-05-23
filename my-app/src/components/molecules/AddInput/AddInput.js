import React from 'react';
import styles from './AddInput.module.scss';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';
import CustomButton from '../../atoms/CustomButton/CustomButton';

const AddInput = ({size, width}) => {
  return (
    <Block className={styles.addInput}>
      <Input size={size} width={width} placeHolder={'Type new task'} />
      <CustomButton size={size} text={'Add'} variant={'contained'} />
    </Block>
  );
};
export default AddInput;