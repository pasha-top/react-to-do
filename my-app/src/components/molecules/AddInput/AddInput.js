import React from 'react';
import styles from './AddInput.module.scss';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';

const AddInput = () => {
  return (
    <Block>
      <Input placeHolder={'Type new task'} />
      <Button text={'Add'} />
    </Block>
  );
};
export default AddInput;