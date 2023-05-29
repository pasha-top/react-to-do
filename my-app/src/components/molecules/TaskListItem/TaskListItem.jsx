import React from 'react';
import styles from './TaskListItem.module.scss';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { useDispatch } from 'react-redux'
import CheckBox from '../../atoms/CheckBox/CheckBox';
import { deleteTask, getTasks, updateTask } from '../../../app/features/task-list/task-list-slice';


const TaskListItem = ({ task, size, width }) => {
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        await dispatch(deleteTask({ id })).unwrap()
        await dispatch(getTasks()).unwrap();
    };

    const onUpdate = async (id, title, done) => {
        await dispatch(updateTask({ id, title, done })).unwrap()
        await dispatch(getTasks()).unwrap();
    }


    return (
        <Block className={styles.container}>
            <CheckBox checked={task.done} onChange={(e) => onUpdate(task.id, task.title, e.target.checked )}></CheckBox>
            <Input
                disabled={task.done}
                size={size}
                width={width}
                placeHolder={'Task title'}
                value={task.title}
                onChange={(e) => onUpdate(task.id, e.target.value, task.done )} />
            <CustomButton size={size} text={'Delete'} variant={'contained'} onClick={() => onDelete(task.id)} />
        </Block>
    );
};
export default TaskListItem;