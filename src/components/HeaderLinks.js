import React from 'react';
import NavLinks from './NavLinks';
import Styles from '../css/Homepage.module.css';

const HeaderLinks = () => {
  return (
    <div className={Styles.headerLinks}>
      <NavLinks exact />
      <NavLinks path='Faq' linkText={'FAQS'} />
      <NavLinks path='pricing' linkText={'Pricing'} />
      <NavLinks path='testimonials' linkText={'Testimonials'} />
    </div>
  );
};

export default HeaderLinks;
