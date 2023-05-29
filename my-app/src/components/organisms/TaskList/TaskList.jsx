import {React } from 'react';
import styles from './TaskList.module.scss';
import Block from '../../atoms/Block/Block';
import { useSelector } from 'react-redux'
import TaskListItem from '../../molecules/TaskListItem/TaskListItem';

const TaskList = ({ width, size }) => {
    const tasksValue = useSelector((state) => state.tasksValue);

    return (
        <Block className={styles.container}>
            {tasksValue.tasks.map((task, i) => {
                return (
                    <Block key={i} className={styles.item}>
                        <TaskListItem  size={size} width={width} task={task}></TaskListItem>
                    </Block>
                )
            })}
        </Block>
    );
};
export default TaskList;