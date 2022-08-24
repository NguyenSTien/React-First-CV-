import React from 'react';
import { logoData } from '../../../../utils/Mockdata';
import './style.scss';

const Logo = () => {
  return (
    <div className='wrap_logo'>
      {logoData.map((data, index) => (
        <div key={index} className='logo_portfolios'>
          <figure className='img_logo'>
            <img src={data.img} alt='asdkajl'></img>
          </figure>
          {/* <video>
            <source src={data.vid} type='video/mp4' />
          </video> */}
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default Logo;
