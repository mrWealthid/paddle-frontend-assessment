import React from 'react';
import { NavLink } from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='home'>
      <NavLink to='/homepage'>Homepage</NavLink>
      <NavLink to='/github'>Github</NavLink>
    </div>
  );
};

export default PageLinks;
