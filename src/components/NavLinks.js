import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';
import Styles from '../css/Homepage.module.css';

const NavLinks = ({ path, linkText }) => {
  const myStyle = {
    color: 'purple',
  };
  return (
    <>
      <NavLink
        className={Styles.myLinks}
        activeStyle={myStyle}
        smooth={true}
        to={path}
      >
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
