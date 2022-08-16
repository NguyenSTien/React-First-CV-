import React from 'react';

const index = ({ icon, title }) => {
  return (
    <div className='head_components'>
      <figure className='img_head'>
        <img src={icon} alt='asds'></img>
      </figure>
      <p className='text_head_components'>{title}</p>
    </div>
  );
};

export default index;
