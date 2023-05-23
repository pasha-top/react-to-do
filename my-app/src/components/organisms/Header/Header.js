import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Block from '../../atoms/Block/Block';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <Block className={styles.header}>
            <Logo width={100} />
            <Block className={styles.appName}>TODO App</Block>
        </Block>
    );
};
export default Header;