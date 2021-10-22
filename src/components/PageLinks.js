import React from 'react';
import { NavLink } from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='home'>
      <p className='homeheader'>Click To Access Route</p>

      <div className='routeLinks'>
        <NavLink className='linkBtn' to='/homepage'>
          Homepage
        </NavLink>
        <NavLink className='linkBtn' to='/github'>
          Github
        </NavLink>
      </div>
    </div>
  );
};

export default PageLinks;
