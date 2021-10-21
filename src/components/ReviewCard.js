import React from 'react';
import Styles from '../css/Homepage.module.css';
import Pics from '../assets/Ellipse1.png';
import Star from '../assets/star.png';
const ReviewCard = ({ img, name, location }) => {
  return (
    <div className={Styles.reviewCard}>
      <section className={Styles.reviewTop}>
        <div className={Styles.leftcontent}>
          <img src={img} alt='reviewer' />

          <div>
            <h4>{name}</h4>
            <p>{location}</p>
          </div>
        </div>

        <div className={Styles.reviewRating}>
          <p>4.5</p>
          <img src={Star} alt='star' />
        </div>
      </section>

      <p>
        “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut
        rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu
        ex”
      </p>
    </div>
  );
};

ReviewCard.defaultProps = {
  img: Pics,
  name: 'Viezh Robert',
  location: 'Warsaw, Poland',
};

export default ReviewCard;
