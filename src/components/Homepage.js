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
        <section className={Styles.navBar}>
          <Navbar />
        </section>

        <section className={Styles.firstSection}>
          <Main />
        </section>

        <section className={Styles.secondSection}>
          <Faq />
        </section>

        <section className={Styles.thirdSection}>
          <Pricing />
        </section>

        <section className={Styles.fourthSection}>
          <Partners />
        </section>

        <section className={Styles.fifthSection}>
          <Reviews />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
