import React from 'react';
import logo from './../../../logo.svg'
import Block from '../Block/Block';

const Logo = ({width}) => {
  return (
    <Block>
      <img src={logo} width={width} alt="logo" />
    </Block>
  );
};
export default Logo;