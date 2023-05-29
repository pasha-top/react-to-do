import React from 'react';
import styles from './Footer.module.scss';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Block from '../../atoms/Block/Block';

const Footer = () => {
    var options = { year: 'numeric' };
    var today  = new Date();
    return (
        <Block className={styles.footer}>
            <Paragraph text={'TODO App - ' + today.toLocaleDateString("en-US", options)} />
        </Block>
    );
};
export default Footer;