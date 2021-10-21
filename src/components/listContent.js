import React from 'react';
import Styles from '../css/Homepage.module.css';
import Rect from '../assets/Rectangle.png';
const listContent = () => {
  return (
    <div className={Styles.listContent}>
      <img src={Rect} alt='listContent' />
      <p> Curabitur tempor justo</p>
    </div>
  );
};

export default listContent;
