import React from 'react';
import styles from './AddNewTask.module.scss';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import { add, updateNewTaskTitle } from '../../organisms/TaskList/TaskListSlice'

const AddInput = ({size, width}) => {
  const dispatch = useDispatch()
  const newTaskTitle = useSelector((state) => state.tasksValue.newTaskTitle);
  
  return (
    <Block className={styles.addInput}>
      <Input size={size} width={width}  value={newTaskTitle} placeHolder={'Type new task'} onChange={(e) => dispatch(updateNewTaskTitle(e.target.value))} />
      <CustomButton size={size} text={'Add'} variant={'contained'} onClick={() =>  dispatch(add())} />
    </Block>
  );
};
export default AddInput;