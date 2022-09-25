import React from 'react';
import './experience.scss';
import { useColorContext } from '../../../../contexts/ColorContext';
import layers from '../../../../assets/images/layers.png';
import { experienceData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/title';
import Popup from './popup.js';
import { useState } from 'react';

const Index = () => {
  const { color, border, textColor } = useColorContext();
  const [buttonPopup, setButtonPopup] = useState('');
  const handlePopup = () => {
    setButtonPopup(true);
  };
  return (
    <>
      <div
        id='experience'
        className='wrap_experience animate__animated animate__zoomIn'
      >
        <div className='container'>
          <SectionTitle title='EXPERIENCE' icon={layers} />
          <div className='wrap_time_exp'>
            <div className='time__exp'>
              {experienceData.map((data, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? 'name__exp animate__animated animate__zoomIn'
                      : 'name__exp_right animate__animated animate__zoomIn'
                  } ${border}`}
                >
                  <div
                    className={`${
                      index % 2 === 0
                        ? 'circle_exp animate__animated animate__zoomIn'
                        : 'circle_exp-right animate__animated animate__zoomIn'
                    } ${color}`}
                  >
                    <p className='circle_exp_text'>{data.keyword}</p>
                    <div
                      className={`${
                        index % 2 === 0 ? 'line_left' : 'line_right'
                      } ${color}`}
                    ></div>
                  </div>
                  <h3 className='text_title'>{data.title}</h3>
                  <h4 className='text_subTitle'>
                    {data.subTitle}
                    <br />
                    {data.date}
                  </h4>
                  <p className='content'>{data.content}</p>
                  <button
                    className={`data-icon ${textColor}`}
                    onClick={handlePopup}
                  >
                    {data.icon}
                  </button>
                  <Popup
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                  ></Popup>
                </div>
              ))}
            </div>
          </div>
          <div className={`time ${color}`}></div>
        </div>
      </div>
    </>
  );
};

export default Index;