import React from 'react';
import Styles from '../css/Homepage.module.css';
import Spotify from '../assets/spotify.png';
import Reddit from '../assets/reddit.png';
import Discord from '../assets/discord.png';
import Netflix from '../assets/netflix.png';
import Button from './Button';
import Slide from 'react-reveal/Slide';
import Image from './Image';

const Partners = () => {
  return (
    <div className={Styles.partnersContainer}>
      <Slide left>
        <div className={Styles.partners}>
          <div className={Styles.partnersContent}>
            <h1>
              Get Started With <br /> Paddle Today
            </h1>
            <p>
              Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
              ante <br /> egestas ullamcorper
            </p>

            <Button btnText='Start Now' />
          </div>

          <div className={Styles.partnersIcon}>
            <Image src={Netflix} />
            <Image src={Discord} />
            <Image src={Reddit} />
            <Image src={Reddit} />
            <Image src={Spotify} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Partners;
