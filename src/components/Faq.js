import React from 'react';
import Faqs from '../assets/Faq.png';
import Styles from '../css/Homepage.module.css';
import ListContent from './listContent';

const Faq = () => {
  return (
    <div className={Styles.faqContainer}>
      <div className={Styles.faq}>
        <div className={Styles.faqimg}>
          <img src={Faqs} className={Styles.faqimage} alt='faq' />
        </div>

        <div className={Styles.faqContent}>
          <div className={Styles.faqText}>
            <h1>Features We Provide For You</h1>
            <p>
              Curabitur tempor justo non turpis malesuada cursus. Mauris ac
              libero eu sem finibus lacinia nec pulvinar.
            </p>
          </div>

          <div className={Styles.list}>
            <ListContent />
            <ListContent />
            <ListContent />
            <ListContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
