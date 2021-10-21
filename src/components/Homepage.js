import React from 'react';
import Styles from '../css/Homepage.module.css';

import Main from './Main';

import Faq from './Faq';
import Pricing from './Pricing';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Footer from './Footer';
import Partners from './Partners';
import NavLinks from './NavLinks';

const Homepage = () => {
  return (
    <div>
      <div className={Styles.homeWrapper}>
        <section className={Styles.firstSection}>
          <section className={Styles.header}>
            <h1>PEDDLE</h1>
            <div className={Styles.headerLinks}>
              <NavLinks exact />
              <NavLinks path='Faq' linkText={'FAQS'} />
              <NavLinks path='pricing' linkText={'Pricing'} />
              <NavLinks path='testimonials' linkText={'Testimonials'} />
            </div>

            <div className='headBtn'>
              <button className={Styles.signIn}>Sign In</button>
              <button className={Styles.logIn}>Sign Up</button>
            </div>
          </section>

          <Main />
        </section>

        <section className={Styles.secondSection}>
          <Faq />
        </section>

        <section className={Styles.priceSection}>
          <Pricing />
        </section>
      </div>
      <Partners />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Homepage;
