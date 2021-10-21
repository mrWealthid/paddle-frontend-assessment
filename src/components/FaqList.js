import React from 'react';
import Rect from '../assets/Rectangle.png';
import Styles from '../css/Faq.module.css';
const FaqList = () => {
  return (
    <div className={Styles.listContent}>
      <img src={Rect} alt='listContent' />
      <p> Curabitur tempor justo</p>
    </div>
  );
};

export default FaqList;
