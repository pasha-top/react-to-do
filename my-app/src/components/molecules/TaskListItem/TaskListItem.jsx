import React from 'react';
import styles from './TaskListItem.module.scss';
import Input from '../../atoms/Input/Input';
import Block from '../../atoms/Block/Block';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { useDispatch } from 'react-redux'
import { updateTask, remove } from '../../../app/features/task-list/task-list-slice'
import CheckBox from '../../atoms/CheckBox/CheckBox';

const TaskListItem = ({ task, size, width }) => {
    const dispatch = useDispatch();

    return (
        <Block className={styles.container}>
            <CheckBox checked={task.done} onChange={(e) => dispatch(updateTask({ id: task.id, title: task.title, done: e.target.checked }))}></CheckBox>
            <Input
                disabled={task.done}
                size={size}
                width={width}
                placeHolder={'Task title'}
                value={task.title}
                onChange={(e) => dispatch(updateTask({ id: task.id, title: e.target.value, done: task.done }))} />
            <CustomButton size={size} text={'Delete'} variant={'contained'} onClick={() => dispatch(remove({ id: task.id }))} />
        </Block>
    );
};
export default TaskListItem;