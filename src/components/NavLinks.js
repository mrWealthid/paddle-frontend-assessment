import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';
import Styles from '../css/Homepage.module.css';

const NavLinks = ({ path, linkText }) => {
  return (
    <>
      <NavLink className={Styles.myLinks} smooth={true} to={path}>
        {linkText}
      </NavLink>
    </>
  );
};

NavLinks.defaultProps = {
  path: 'about',
  linkText: 'About',
};
export default NavLinks;
