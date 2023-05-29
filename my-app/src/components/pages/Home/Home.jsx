import React from 'react';
import SimplePageTemplate from '../../templates/SimplePageTemplate/SimplePageTemplate';
import AddInput from '../../molecules/AddNewTask/AddNewTask';
import Block from '../../atoms/Block/Block';
import styles from './Home.module.scss'
import TaskList from '../../organisms/TaskList/TaskList';

const Home = () => {
    let width = 600;
    let size = 'large';
    return (
        <>
            <SimplePageTemplate>
                <Block className={styles['add-input']}>
                    <AddInput width={width} size={size} />
                </Block>
                <Block className={styles['items']}>
                    <TaskList width={565} size={'small'}></TaskList>
                </Block>
            </SimplePageTemplate>
        </>
    );
};
export default Home;