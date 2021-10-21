import React from 'react';
import Styles from '../css/Homepage.module.css';
import Price from '../assets/pricing1.png';
import Checked from '../assets/check.png';
import Button from './Button';

const Pricing = () => {
  const list = [
    {
      id: 1,
      content: ['Mauris sem neque', 'Mauris sem neque', 'Mauris sem neque'],
    },
    {
      id: 2,
      content: [
        'Mauris sem neque',
        'Mauris sem neque',
        'Mauris sem neque',
        'Mauris sem neque',
      ],
    },
    {
      id: 3,
      content: [
        'Mauris sem neque',
        'Mauris sem neque',
        'Mauris sem neque',
        'Mauris sem neque',
      ],
    },
  ];
  return (
    <div className={Styles.sectionPrice}>
      <div className={Styles.pricingText}>
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className={Styles.priceGrid}>
        <div className={Styles.pricingCards}>
          <img src={Price} alt='pricing' />
          <h1>Free Plan</h1>
          <div className={Styles.cardContent}>
            {list[0].content.map((content, ind) => (
              <div key={ind} className={Styles.priceFeatures}>
                <img src={Checked} alt='checked' />
                <p>{content}</p>
              </div>
            ))}
          </div>
          <Button btnText={'Select'} style={Styles.PriceBtn} />
        </div>

        <div className={Styles.pricingCards}>
          <img src={Price} alt='pricing' />
          <h1>Standard Plan</h1>

          <div className={Styles.cardContent}>
            {list[1].content.map((content, ind) => (
              <div key={ind} className={Styles.priceFeatures}>
                <img src={Checked} alt='checked' />
                <p>{content}</p>
              </div>
            ))}
          </div>
          <Button btnText={'Select'} style={Styles.PriceBtn} />
        </div>
        <div className={Styles.pricingCards}>
          <img src={Price} alt='pricing' />
          <h1>Premium Plan</h1>

          <div className={Styles.cardContent}>
            {list[2].content.map((content, ind) => (
              <div key={ind} className={Styles.priceFeatures}>
                <img src={Checked} alt='checked' />
                <p>{content}</p>
              </div>
            ))}
          </div>
          <Button btnText={'Select'} style={Styles.PriceBtnLast} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
