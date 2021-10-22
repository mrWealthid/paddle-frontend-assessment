import React from 'react';
// import Styles from '../css/Homepage.module.css';
import Styles from '../css/Pricing.module.css';
import Price1 from '../assets/pricing3.png';
import Price2 from '../assets/pricing2.png';
import Price3 from '../assets/pricing1.png';
import Checked from '../assets/check.png';
import Button from './Button';
import Slide from 'react-reveal/Slide';

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
    <div className={Styles.sectionPrice} id='pricing'>
      <Slide left>
        <div className={Styles.pricingText}>
          <h1>Choose Your Plan</h1>
          <p>
            Let's choose the package that is best for you and explore it happily{' '}
            <br></br>
            and cheerfully.
          </p>
        </div>
        <div className={Styles.priceGrid}>
          <div className={Styles.pricingCards}>
            <img className={Styles.pricingImg} src={Price1} alt='pricing' />
            <h1>Free Plan</h1>
            <div className={Styles.cardContent}>
              {list[0].content.map((content, ind) => (
                <div key={ind} className={Styles.priceFeatures}>
                  <img src={Checked} alt='checked' />
                  <p>{content}</p>
                </div>
              ))}
            </div>
            <section className={Styles.priceCardFooter}>
              <p>Free</p>
              <Button btnText={'Select'} style={Styles.PriceBtn} />
            </section>
          </div>

          <div className={Styles.pricingCards}>
            <img className={Styles.pricingImg} src={Price2} alt='pricing' />
            <h1>Standard Plan</h1>

            <div className={Styles.cardContent}>
              {list[1].content.map((content, ind) => (
                <div key={ind} className={Styles.priceFeatures}>
                  <img src={Checked} alt='checked' />
                  <p>{content}</p>
                </div>
              ))}
            </div>

            <section className={Styles.priceCardFooter}>
              <p>$9/mo</p>
              <Button btnText={'Select'} style={Styles.PriceBtn} />
            </section>
          </div>
          <div className={Styles.pricingCards}>
            <img className={Styles.pricingImg} src={Price3} alt='pricing' />
            <h1>Premium Plan</h1>

            <div className={Styles.cardContent}>
              {list[2].content.map((content, ind) => (
                <div key={ind} className={Styles.priceFeatures}>
                  <img src={Checked} alt='checked' />
                  <p>{content}</p>
                </div>
              ))}
            </div>

            <section className={Styles.priceCardFooter}>
              <p>$12/mo</p>
              <Button btnText={'Select'} style={Styles.PriceBtnLast} />
            </section>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Pricing;
