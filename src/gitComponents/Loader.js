import React from 'react';
import Styles from '../css/GitProfile.module.css';

function Loader() {
  return (
    <div className={Styles.loaderContainer}>
      <p className={Styles.loader}></p>
    </div>
  );
}

export default Loader;
