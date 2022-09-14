import React from 'react';
import { logoData } from '../../../../utils/Mockdata';
import './style.scss';
import 'animate.css';

const Logo = () => {
  return (
    <div>
      <div className='wrap_logo'>
        {logoData.map((data, index) => (
          <div key={index} className='logo_portfolios'>
            <figure className={`img_logo ${data.className}`}>
              <img src={data.img} alt='asdkajl'></img>
            </figure>
            <div className='bgr_white'></div>
            <div className='bgr_black'></div>
            <p className='logo_icon'>{data.icon}</p>
            <p className='content_hover'>
              {data.contentHover}
              <span>{data.content}</span>
            </p>
            <p className='sub_hover'>{data.subContentHover}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
