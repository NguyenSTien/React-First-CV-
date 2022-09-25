import React, { useState } from 'react';
import './education.scss';
import { useColorContext } from '../../../../contexts/ColorContext';
import education from '../../../../assets/images/book.png';
import { educationData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/title';
import Popup from './popup';

const Index = () => {
  const { color, textColor, border } = useColorContext();
  const [buttonPopup, setButtonPopup] = useState('');
  const handlePopup = () => {
    setButtonPopup(true);
  };

  return (
    <>
      <div id='education' data-aos='zoom-in' className='wrap__education'>
        <div className='container'>
          <SectionTitle title='EDUCATION' icon={education} />
          <div className='wrap_time_education'>
            <div className='time__education'>
              {educationData.map((data, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? 'name__education animate__animated animate__zoomIn'
                      : 'name__education_right animate__animated animate__zoomIn'
                  } ${border}`}
                >
                  <div
                    className={`${
                      index % 2 === 0
                        ? 'circle_education animate__animated animate__zoomIn'
                        : 'circle_education-right animate__animated animate__zoomIn'
                    } ${color}`}
                  >
                    <p className='circle_education_text'>{data.keyword}</p>
                    <div
                      className={`${
                        index % 2 === 0 ? 'line_left' : 'line_right'
                      } ${color}`}
                    ></div>
                  </div>
                  <h3 className='text_title'>{data.title}</h3>
                  <h4 className='text_subTitle'>
                    {data.subTitle} <br />
                    {data.date}
                  </h4>
                  <p className='content'>{data.content}</p>
                  <button
                    className={`data-icon ${textColor}`}
                    onClick={handlePopup}
                  >
                    {data.icon}
                  </button>
                </div>
              ))}
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            </div>
            <div className={`timeline ${color}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
