import React from 'react';
import './style.scss';
import heart from '../../../../assets/images/heart.png';
import { interestData } from '../../../../utils/Mockdata';
import Sectiontitle from '../Title';

const index = () => {
  return (
    <>
      <div className='wrap_interest'>
        <div className='container'>
          <div id='interest'>
            <Sectiontitle title='INTEREST' icon={heart} />
          </div>
          <div className='interest'>
            <p className='interest_text'>
              First of all I love music, country music is my favorite. Love
              watching football, movies and playing games with my buddies. I
              spend quite a lot of time in traveling and photography, these
              keeps me fresh for working environment. I also spend time
              volunteering at the Red Cross in London, UK each month.
            </p>
            <div className='interest_icon'>
              {interestData.map((data, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? 'music' : 'gaming'}
                >
                  <div className='interest_icon-icon'>{data.icon}</div>
                  <span className='interest_icon-text'>{data.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
