import React from 'react';
import Styles from '../css/Homepage.module.css';
import { NavLink } from 'react-router-dom';
import Main from './Main';

import Faq from './Faq';
import Pricing from './Pricing';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Footer from './Footer';
import Partners from './Partners';

const Homepage = () => {
  return (
    <div>
      <div className={Styles.homeWrapper}>
        <section className={Styles.firstSection}>
          <section className={Styles.header}>
            <h1 className={Styles.head}>PEDDLE</h1>
            <div className={Styles.headerLinks}>
              <NavLink to=''>About</NavLink>
              <NavLink to=''>FAQs</NavLink>
              <NavLink to=''>Pricing</NavLink>
              <NavLink to=''>Testimonial</NavLink>
            </div>

            <div className='headBtn'>
              <button className={Styles.signIn}>Signin</button>
              <button className={Styles.logIn}>Login</button>
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
