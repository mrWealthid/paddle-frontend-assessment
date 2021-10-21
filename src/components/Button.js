import React from 'react';
import Styles from '../css/Homepage.module.css';

const Button = ({ style, btnText }) => {
  return (
    <>
      <button className={style}>{btnText}</button>
    </>
  );
};

Button.defaultProps = {
  style: Styles.Btn,
  btnText: 'Start',
};

export default Button;
