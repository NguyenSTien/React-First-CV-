import React from 'react';
import { logoData } from '../../../../../utils/Mockdata';
import '../portfolios.scss';
import 'animate.css';
import Popup from './popup.js';
import { useState } from 'react';

const Logo = () => {
  const [buttonPopup, setButtonPopup] = useState('');
  const handlePopup = () => {
    setButtonPopup(true);
  };
  return (
    <div>
      <div className='wrap_logo'>
        {logoData.map((data, index) => (
          <div key={index} className='logo_portfolios'>
            <button
              className={`btn_port ${data.className}`}
              onClick={handlePopup}
            >
              <figure className={`img_logo ${data.className}`}>
                <img src={data.img} alt='logoImg'></img>
              </figure>
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
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
