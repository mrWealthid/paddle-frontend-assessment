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
    'https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg';
  return (
    <div className={Styles.ProfileGrid}>
      <section className={Styles.imgContainer}>
        <img src={img || RandomUser} alt='users' />
      </section>
      <section className={Styles.profileRightSection}>
        <p className={Styles.profileCardHead}>{repoName || 'Not Available'}</p>
        <p>{desc || 'Not Available'}</p>

        <section className={Styles.profileRatings}>
          <button>
            <FaStar color='yellow' />
            <span className={Styles.starCount}> Stars: {stars}</span>
          </button>
          <button>
            <FaDotCircle />
            <span className={Styles.starCount}> Issues: {issues}</span>
          </button>
        </section>
        <div>
          Submitted{' '}
          <span className={Styles.userName}>
            {calcDate(new Date(postDate))}
          </span>{' '}
          days ago by {''}
          <span className={Styles.userName}>{username}</span>
        </div>
      </section>
    </div>
  );
};

export default ProfilesCard;
