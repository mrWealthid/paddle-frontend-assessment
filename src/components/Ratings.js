import React from 'react';
import Styles from '../css/Homepage.module.css';
import Server from '../assets/Group1217.png';
import Location from '../assets/location.png';
import Users from '../assets/user.png';
const Ratings = () => {
  return (
    <div className={Styles.rating}>
      <div className={Styles.singleRating}>
        <div className={Styles.imgContainer}>
          <img src={Users} alt='reviews' />
        </div>
        <div className={Styles.ratingText}>
          <h2>90+</h2>
          <p>Users</p>
        </div>
      </div>

      <div className={Styles.singleRating}>
        <div className={Styles.imgContainer}>
          <img src={Location} alt='reviews' />
        </div>
        <div className={Styles.ratingText}>
          <h2>30+</h2>
          <p>Locations</p>
        </div>
      </div>

      <div className={Styles.singleRating}>
        <div className={Styles.imgContainer}>
          <img src={Server} alt='reviews' />
        </div>
        <div className={Styles.ratingText}>
          <h2>500+</h2>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
