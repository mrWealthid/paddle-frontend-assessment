import React from 'react';
import Users from '../assets/user.png';
import Styles from '../css/Main.module.css';

const SingleRating = ({ amount, type, image }) => {
  return (
    <div className={Styles.singleRating}>
      <div className={Styles.imgContainer}>
        <img src={image} alt='reviews' />
      </div>
      <div className={Styles.ratingText}>
        <h2>{amount}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
};

SingleRating.defaultProps = {
  amount: '90+',
  type: 'Users',
  image: Users,
};

export default SingleRating;
