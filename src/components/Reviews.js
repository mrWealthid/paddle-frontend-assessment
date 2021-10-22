import React from 'react';
import ReviewCard from './ReviewCard';
import Styles from '../css/Testimonial.module.css';
// import Styles from '../css/Homepage.module.css';
import Review1 from '../assets/Ellipse2.png';
import Review2 from '../assets/Ellipse3.png';
import Right from '../assets/RightArrow.png';
import Left from '../assets/LeftArrow.png';

const Reviews = () => {
  return (
    <div className={Styles.reviewContainer} id='testimonials'>
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
        <ReviewCard
          name={'Yessica Christy'}
          location={'Shanxi, China'}
          img={Review1}
        />
        <ReviewCard
          name={'Kim Young Jou'}
          img={Review2}
          location={'Seoul, South Korea'}
        />
      </section>

      <section className={Styles.reviewSlideBtn}>
        <div className={Styles.reviewBgLeft}>
          <img src={Left} alt='sliderbtn' />
        </div>
        <div className={Styles.reviewBgRight}>
          <img src={Right} alt='sliderbtn' />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
