import React from 'react';

const Title = ({ icon, title }) => {
  return (
    <div className='head_components'>
      <figure className='img_head'>
        <img src={icon} alt='asds'></img>
      </figure>
      <h4 className='text_head_components'>{title}</h4>
    </div>
  );
};

export default Title;
