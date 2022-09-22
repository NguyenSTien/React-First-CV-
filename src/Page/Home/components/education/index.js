import React, { useState } from 'react';
import './style.scss';
import education from '../../../../assets/images/book.png';
import { educationData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title';
import Popup from './popup';

const Index = () => {
  const [buttonPopup, setButtonPopup] = useState('');
  const handlePopup = () => {
    setButtonPopup(true);
  };

  return (
    <>
      <div id='education' className='wrap__education'>
        <div className='container'>
          <SectionTitle title='EDUCATION' icon={education} />
          <div className='wrap_time_education'>
            <div className='time__education'>
              {educationData.map((data, index) => (
                <div
                  key={index}
                  className={
                    index % 2 === 0
                      ? 'name__education'
                      : 'name__education_right'
                  }
                >
                  <div
                    className={
                      index % 2 === 0
                        ? 'circle_education'
                        : 'circle_education-right'
                    }
                  >
                    <p className='circle_education_text'>{data.keyword}</p>
                    <div
                      className={index % 2 === 0 ? 'line_left' : 'line_right'}
                    ></div>
                  </div>
                  <h3 className='text_title'>{data.title}</h3>
                  <h4 className='text_subTitle'>
                    {data.subTitle} <br />
                    {data.date}
                  </h4>
                  <p className='content'>{data.content}</p>
                  <button className='data-icon' onClick={handlePopup}>
                    {data.icon}
                  </button>
                </div>
              ))}
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            </div>
            <div className='timeline'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
