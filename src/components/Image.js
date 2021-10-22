import React from 'react';
import Netflix from '../assets/netflix.png';
import Styles from '../css/Homepage.module.css';

const Image = ({ src, alt, styles }) => {
  return (
    <>
      <img className={styles} src={src} alt={alt} />
    </>
  );
};

Image.defaultProps = {
  src: Netflix,
  alt: 'partnerIcons',
  styles: Styles.partnerLogo,
};

export default Image;
