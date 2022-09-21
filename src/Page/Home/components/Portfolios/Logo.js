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
            <a href={data.img} target='_blank'>
              <figure className={`img_logo ${data.className}`}>
                <img src={data.img} alt='logoImg'></img>
              </figure>
            </a>
            <div className='bgr_white'></div>
            <div className='bgr_black'></div>
            <p className={`logo_icon ${data.className}`}>{data.icon}</p>
            <p className={`content_hover ${data.className}`}>
              {data.contentHover}
              <span className='content_hover--bold'>{data.content}</span>
            </p>
            <p className={`sub_hover ${data.className}`}>
              {data.subContentHover}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
