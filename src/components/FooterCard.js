import React from 'react';
import Styles from '../css/Homepage.module.css';

const FooterCard = ({ title, myStyle }) => {
  return (
    <div className={Styles.footerCard}>
      <h4 className={myStyle}>{title}</h4>
      <p>Praesent </p>
      <p>Praesent </p>
      <p>Praesent </p>
      <p>Praesent </p>
    </div>
  );
};

FooterCard.defaultProps = {
  title: 'Product',
  myStyle: Styles.footerCardh4,
};

export default FooterCard;
