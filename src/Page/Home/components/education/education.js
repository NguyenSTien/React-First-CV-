import React, { useState } from 'react';
import './Education.scss';
import ModalEducation from './ModalEducation/ModalEducation.js';
import { useColorContext } from '../../../../contexts/ColorContext';
import education from '../../../../assets/images/book.png';
import { educationData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/Title';

const Education = () => {
  const { color, textColor, border } = useColorContext();
  const [buttonModal, setButtonModal] = useState('');
  const handleModal = () => {
    setButtonModal(true);
  };

  return (
    <>
      <div className='wrap__education'>
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
                    onClick={() => handleModal(true)}
                  >
                    {data.icon}
                  </button>
                  {buttonModal && <ModalEducation clsModal={setButtonModal} />}
                </div>
              ))}
            </div>
            <div className={`timeline ${color}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
