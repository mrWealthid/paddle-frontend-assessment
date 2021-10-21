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
          <p>90+</p>
          <p>Users</p>
        </div>
      </div>

      <div className={Styles.singleRating}>
        <div className={Styles.imgContainer}>
          <img src={Location} alt='reviews' />
        </div>
        <div className={Styles.ratingText}>
          <p>30+</p>
          <p>Location</p>
        </div>
      </div>

      <div className={Styles.singleRating}>
        <div className={Styles.imgContainer}>
          <img src={Server} alt='reviews' />
        </div>
        <div className={Styles.ratingText}>
          <p>500+</p>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
