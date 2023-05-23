import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import Block from '../../atoms/Block/Block';
import styles from './SimplePageTemplate.module.scss'


const SimplePageTemplate = ({children}) => {
    return (
        <Block className={styles.simplyPageTemplate}>
            <Header/>
            {children}
            <Footer/>
        </Block>
    );
};
export default SimplePageTemplate;