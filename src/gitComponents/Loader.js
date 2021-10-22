import React from 'react';
import Styles from '../css/GitProfile.module.css';

function Loader() {
  return (
    <div className={Styles.loaderContainer}>
      <div className={Styles.loader}></div>
    </div>
  );
}

export default Loader;
