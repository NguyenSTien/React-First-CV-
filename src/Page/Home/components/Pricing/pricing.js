import React from 'react';
import './Pricing.scss';
import { useColorContext } from '../../../../contexts/ColorContext';
import lightning from '../../../../assets/images/lightning.png';
import { pricingData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/Title';

const Pricing = () => {
  const { color } = useColorContext();
  return (
    <>
      <div className='wrap_pricing '>
        <div className='container'>
          <section className='section'>
            <SectionTitle title='PRICING' icon={lightning} />
          </section>
          <div className='pricing'>
            {pricingData.map((data, index) => (
              <section key={index} className='section pricing_base'>
                <div className={`pricing_head ${color}`}>
                  <div className='pricing_head_dis'>
                    <p className='icon_dola'>$</p>
                    <h4 className='pricing_head-text'>{data.title}</h4>
                  </div>
                  <p className='pricing_sub-text'>{data.subTitle}</p>
                </div>

                <div className='pricing_wrap_text'>
                  <p className='pricing_text'>{data.Banwidth}</p>
                  <p className='pricing_text'>{data.Disk}</p>
                  <p className='pricing_text'>{data.Database}</p>
                  <p className='pricing_text'>{data.Domain}</p>
                  <p className='pricing_text'>{data.Subdomain}</p>
                </div>
                <div className='pricing_pur'>
                  <p className={`pricing_pur-text ${color}`}>{data.Purchase}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;