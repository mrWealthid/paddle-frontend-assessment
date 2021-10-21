import React from 'react';
import Styles from '../css/Homepage.module.css';
import Button from './Button';
import FooterCard from './FooterCard';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.popUp}>
        <div className={Styles.popUpText}>
          <h3>
            Subscribe Now To <br /> Get Special Features!
          </h3>
          <p>Praesent mollis lobortis nisl nec laoreet.</p>
        </div>

        <div>
          <Button btnText='Subscribe Now' style={Styles.footerBtn} />
        </div>
      </section>

      <div className={Styles.footerGrid}>
        {/* <div className={Styles.footerCard}>
          <h3>PEDDLE</h3>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
          <p>Praesent mollis lobortis nisl nec</p>
        </div> */}

        <FooterCard title={'PEDDLE'} myStyle={Styles.footerCardh3} />

        <FooterCard />
        <FooterCard title={'Engage'} />
        <FooterCard title={'Earn Money'} />
      </div>
    </footer>
  );
};

export default Footer;
