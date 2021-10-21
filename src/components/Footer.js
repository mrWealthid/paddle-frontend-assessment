import React from 'react';
import Styles from '../css/Homepage.module.css';
import Button from './Button';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.popUp}>
        <div>
          <h3>Subscribe Now for Get Special Features!</h3>
          <p>Praesent mollis lobortis nisl nec laoreet.</p>
        </div>

        <div>
          <Button btnText='Subscribe Now' style={Styles.footerBtn} />
        </div>
      </section>

      <div className={Styles.footerGrid}>
        <div className={Styles.footerCard}>
          <h3>PEDDLE</h3>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
        </div>

        <div className={Styles.footerCard}>
          <h4>Product</h4>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
        </div>
        <div className={Styles.footerCard}>
          <h4>Product</h4>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
        </div>
        <div className={Styles.footerCard}>
          <h4>Product</h4>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
          <p>Praesent </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
