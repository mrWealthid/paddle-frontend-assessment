import React from 'react';
import Styles from '../css/Homepage.module.css';
import Pics from '../assets/Ellipse1.png';
const ReviewCard = () => {
  return (
    <div className={Styles.reviewCard}>
      <div className={Styles.reviewTop}>
        <div className={Styles.leftcontent}>
          <img src={Pics} alt='reviewer' />

          <div>
            <h4>Viezh Robert</h4>
            <p>Warsaw, Poland</p>
          </div>
        </div>

        <div>
          <p>4.5</p>
        </div>
      </div>

      <p>
        “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut
        rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu
        ex”
      </p>
    </div>
  );
};

export default ReviewCard;
