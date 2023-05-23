import React from 'react';
import SimplePageTemplate from '../../templates/SimplePageTemplate/SimplePageTemplate';
import AddInput from '../../molecules/AddInput/AddInput';
import Block from '../../atoms/Block/Block';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <SimplePageTemplate>
                <Block className={styles.content}>
                    <AddInput width={600} size={'large'}/>
                </Block>
            </SimplePageTemplate>
        </>
    );
};
export default Home;