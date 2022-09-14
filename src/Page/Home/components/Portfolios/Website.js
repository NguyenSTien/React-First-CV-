import React from 'react';
import { websiteData } from '../../../../utils/Mockdata';
import './style.scss';

const Website = () => {
  return (
    <div className='wrap_website'>
      {websiteData.map((data, index) => (
        <div key={index} className='website_portfolios'>
          <figure className={`img_website ${data.className}`}>
            <img src={data.img} alt='lasdj'></img>
          </figure>
          <div className='bgr_white'></div>
          <div className='bgr_black'></div>
          <p className='logo_icon'>{data.icon}</p>
          <p className='content_hover'>
            {data.contentHover}
            <span>{data.content}</span>
          </p>
          <p className='sub_hover'>{data.subContentHover}</p>
          <p className='sub_hover_two'>{data.subContentHover2}</p>
        </div>
      ))}
    </div>
  );
};

export default Website;
