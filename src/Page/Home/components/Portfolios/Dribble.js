import React from 'react';
import { dribbleData } from '../../../../utils/Mockdata';
import './style.scss';

const Dribble = () => {
  return (
    <div className='wrap_dribble'>
      {dribbleData.map((data, index) => (
        <div key={index} className='dribble_portfolios'>
          <figure className={`img_dribble ${data.className}`}>
            <img src={data.img} alt='sda'></img>
          </figure>
          <div className='bgr_white'></div>
          <div className='bgr_black'></div>
          <p className='logo_icon'>{data.icon}</p>
          <p className={`content_hover ${data.className}`}>
            {data.contentHover}
            <span className='content_hover--bold'>{data.content}</span>
          </p>
          <p className={`sub_hover ${data.className}`}>
            {data.subContentHover}
          </p>
          <p className={`sub_hover_two ${data.className}`}>
            {data.subContentHover2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dribble;
