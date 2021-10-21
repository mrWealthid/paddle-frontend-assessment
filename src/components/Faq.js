import React from 'react';
import Faqs from '../assets/Faq.png';

import Styles from '../css/Faq.module.css';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <div className={Styles.faqContainer} id='Faq'>
      <div className={Styles.faq}>
        <div className={Styles.faqimg}>
          <img src={Faqs} className={Styles.faqimage} alt='faq' />
        </div>

        <div className={Styles.faqContent}>
          <div className={Styles.faqText}>
            <h1>
              Features We Provide <br></br> For You
            </h1>
            <p>
              Curabitur tempor justo non turpis malesuada cursus. Mauris ac
              libero eu sem finibus lacinia nec pulvinar.
            </p>
          </div>

          <div className={Styles.faqList}>
            <FaqList />
            <FaqList />
            <FaqList />
            <FaqList />
            <FaqList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
