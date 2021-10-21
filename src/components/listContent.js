import React from 'react';
import Styles from '../css/Faq.module.css';
import Rect from '../assets/Rectangle.png';
const ListContent = () => {
  return (
    <div className={Styles.listContent}>
      <img src={Rect} alt='listContent' />
      <p> Curabitur tempor justo</p>
    </div>
  );
};

export default ListContent;
