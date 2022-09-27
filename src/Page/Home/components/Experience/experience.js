import React from 'react';
import './Experience.scss';
import { useColorContext } from '../../../../contexts/ColorContext';
import ModalExperience from './ModalExperience/ModalExperience';
import layers from '../../../../assets/images/layers.png';
import { experienceData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/Title';
import { useState } from 'react';

const Experience = () => {
  const { color, border, textColor } = useColorContext();
  const [buttonModal, setButtonModal] = useState(false);
  const handleModal = () => {
    setButtonModal(true);
  };
  return (
    <>
      <div className='wrap_experience animate__animated animate__zoomIn'>
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
                    onClick={() => handleModal(true)}
                  >
                    {data.icon}
                  </button>
                  {buttonModal && <ModalExperience clsModal={setButtonModal} />}
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

export default Experience;
