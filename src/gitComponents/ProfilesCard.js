import React from 'react';
import Styles from '../css/GitProfile.module.css';
import { FaStar, FaDotCircle } from 'react-icons/fa';

const ProfilesCard = ({
  name: repoName,
  description: desc,
  stargazers_count: stars,
  owner: { avatar_url: img },
  open_issues_count: issues,
  created_at: postDate,
  owner: { login: username },

  calcDate,
}) => {
  const RandomUser =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fuser%2Bplaceholder&psig=AOvVaw2sDNrq_35Sl0cJjk3AQh9r&ust=1634976497313000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIicqJ3I3fMCFQAAAAAdAAAAABAD';
  return (
    <div className={Styles.ProfileGrid}>
      <div className={Styles.imgContainer}>
        <img src={img || RandomUser} alt='users' />
      </div>
      <div className={Styles.profileRightSection}>
        <h3>{repoName || 'Not Available'}</h3>
        <p>{desc || 'Not Available'}</p>
        <div className={Styles.profileRatings}>
          <button>
            <FaStar />
            <span className={Styles.starCount}> Stars: {stars}</span>
          </button>
          <button>
            <FaDotCircle />
            <span className={Styles.starCount}> Issues: {issues}</span>
          </button>
        </div>
        <p>
          Submitted {calcDate(new Date(postDate))} days ago by {''}
          <span className={Styles.userName}>{username}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilesCard;
