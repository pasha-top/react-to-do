import React from 'react';
import styles from './AddNewTask.module.scss';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import {  addTask, updateNewTaskTitle, getTasks, initialState } from '../../../app/features/task-list/task-list-slice'


const AddInput = ({ size, width }) => {
  const dispatch = useDispatch()
  const newTaskTitle = useSelector((state) => state.tasksValue.newTaskTitle);

  const onAdd =  async () => {
    await dispatch(addTask({ title: newTaskTitle, done: false })).unwrap();
    dispatch(updateNewTaskTitle(initialState.newTaskTitle));
    await dispatch(getTasks()).unwrap();
  }

  return (
    <Block className={styles['add-input']}>
      <Input size={size} width={width} value={newTaskTitle} placeHolder={'Type new task'} onChange={(e) => dispatch(updateNewTaskTitle(e.target.value))} />
      <CustomButton size={size} text={'Add'} variant={'contained'} onClick={ onAdd } />
    </Block>
  );
};
export default AddInput;