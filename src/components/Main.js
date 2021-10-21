import React from 'react';
import Styles from '../css/Homepage.module.css';
import LandingPics from '../assets/webDeveloper.png';
import Ratings from './Ratings';
import Button from './Button';

const Main = () => {
  return (
    <div className={Styles.mainContainer}>
      <section className={Styles.main}>
        <div className={Styles.mainContent}>
          <h2>
            We Are Everything We <br />
            Aspire To BE
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </p>

          <Button btnText='Get Started' style={Styles.mainBtn} />
        </div>

        <div className={Styles.mainImg}>
          <img
            src={LandingPics}
            className={Styles.mainImage}
            alt='landingpagePics'
          />
        </div>
      </section>
      <Ratings />
    </div>
  );
};

export default Main;
