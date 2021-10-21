import React from 'react';
import Styles from '../css/Homepage.module.css';
import Main from './Main';

import Faq from './Faq';
import Pricing from './Pricing';

import Reviews from './Reviews';
import Footer from './Footer';
import Partners from './Partners';

import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div>
      <div className={Styles.homeWrapper}>
        <section className={Styles.firstSection}>
          <Navbar />
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
