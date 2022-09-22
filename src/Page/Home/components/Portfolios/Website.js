import React from 'react';
import { websiteData } from '../../../../utils/Mockdata';
import './style.scss';
import { useState } from 'react';
import Popup from './popup.js';

const Website = () => {
  const [buttonPopup, setButtonPopup] = useState('');
  const handlePopup = () => {
    setButtonPopup(true);
  };
  return (
    <div className='wrap_website'>
      {websiteData.map((data, index) => (
        <div key={index} className='website_portfolios'>
          <button className='btn_port' onClick={handlePopup}>
            <figure className={`img_website ${data.className}`}>
              <img src={data.img} alt='lasdj'></img>
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
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
      ))}
    </div>
  );
};

export default Website;
