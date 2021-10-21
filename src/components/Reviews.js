import React from 'react';
import ReviewCard from './ReviewCard';
import Styles from '../css/Homepage.module.css';

const Reviews = () => {
  return (
    <div className={Styles.reviewContainer}>
      <div className={Styles.reviewText}>
        {' '}
        <h1>
          Trusted by Thousands of <br /> Happy Customer
        </h1>
        <p>
          Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et{' '}
          <br />
          suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.{' '}
        </p>
      </div>

      <section className={Styles.reviewGrid}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </section>
    </div>
  );
};

export default Reviews;
