import React from 'react';
import Styles from '../css/Main.module.css';
import Server from '../assets/Group1217.png';
import Location from '../assets/location.png';

import SingleRating from './SingleRating';
const Ratings = () => {
  return (
    <div className={Styles.rating}>
      <SingleRating />
      <SingleRating image={Location} amount='30+' type='Locations' />

      <SingleRating image={Server} amount='500+' type='Servers' />
    </div>
  );
};

export default Ratings;
