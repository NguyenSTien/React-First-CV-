import React from 'react';
import { dribbleData } from '../../../../utils/Mockdata';
import './style.scss';

const Dribble = () => {
  return (
    <div className='wrap_dribble'>
      {dribbleData.map((data, index) => (
        <div key={index} className='dribble_portfolios'>
          <figure className='img_dribble'>
            <img src={data.img} alt='sda'></img>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Dribble;
