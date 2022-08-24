import React from 'react';
import { websiteData } from '../../../../utils/Mockdata';
import './style.scss';

const Website = () => {
  return (
    <div className='wrap_website'>
      {websiteData.map((data, index) => (
        <div key={index} className='website_portfolios'>
          <figure className='img_website'>
            <img src={data.img} alt='lasdj'></img>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Website;
