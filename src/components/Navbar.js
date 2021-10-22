import React, { useState } from 'react';
import HeaderLinks from './HeaderLinks';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import Styles from '../css/Homepage.module.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <section className={Styles.header}>
        <h1>PEDDLE</h1>

        <div className={Styles.myHeaderLinks}>
          <HeaderLinks />
        </div>

        <div className={Styles.headBtn}>
          <button className={Styles.signIn}>Sign In</button>
          <button className={Styles.logIn}>Sign Up</button>
        </div>

        <div className={Styles.Toogle}>
          {!show ? (
            <FaBars color='gray' size='20px' onClick={() => setShow(!show)} />
          ) : (
            <FaTimes color='gray' size='20px' onClick={() => setShow(false)} />
          )}
        </div>
      </section>
      {show ? (
        <div className={Styles.Navdropdown}>
          <HeaderLinks />
          <NavLinks linkText={'Sign Up'} />
          <NavLinks linkText={'Sign In'} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
