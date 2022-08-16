import React from 'react';
import './style.scss';
import lightning from '../../../../assets/images/lightning.png';
import { pricingData } from '../../../../utils/Mockdata';
import Sectiontitle from '../Title';

const index = () => {
  return (
    <>
      <div className='wrap_pricing'>
        <div className='container'>
          <Sectiontitle title='PRICING' icon={lightning} />
          <div className='pricing'>
            {pricingData.map((data, index) => (
              <div key={index} className='pricing_base'>
                <div className='pricing_head'>
                  <div className='pricing_head_dis'>
                    <p className='icon_dola'>$</p>
                    <h4 className='pricing_head-text'>{data.title}</h4>
                  </div>
                  <p className='pricing_sub-text'>{data.subTitle}</p>
                </div>

                <p className='pricing_text'>{data.Banwidth}</p>
                <p className='pricing_text'>{data.Disk}</p>
                <p className='pricing_text'>{data.Database}</p>
                <p className='pricing_text'>{data.Domain}</p>
                <p className='pricing_text'>{data.Subdomain}</p>
                <div className='pricing_pur'>
                  <p className='pricing_pur-text'>{data.Purchase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
