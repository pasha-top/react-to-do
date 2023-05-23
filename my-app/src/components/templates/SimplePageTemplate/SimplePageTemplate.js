import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import Block from '../../atoms/Block/Block';
import styles from './SimplePageTemplate.module.scss'


const SimplePageTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <Block className={styles.content}>
                {children}
            </Block>
            <Footer />
        </>

    );
};
export default SimplePageTemplate;