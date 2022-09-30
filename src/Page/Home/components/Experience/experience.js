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
          <section className='section'>
            <SectionTitle title='EXPERIENCE' icon={layers} />
          </section>
          <div className='wrap_time_exp'>
            <section className='section time__exp'>
              {experienceData.map((data, index) => (
                <section
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? 'section name__exp '
                      : 'section name__exp_right'
                  } ${border}`}
                >
                  <section
                    className={`${
                      index % 2 === 0
                        ? 'section circle_exp'
                        : 'section circle_exp-right'
                    } ${color}`}
                  >
                    <p className='circle_exp_text'>{data.keyword}</p>
                    <section
                      className={`${
                        index % 2 === 0
                          ? 'section line_left'
                          : 'section line_right'
                      } ${color}`}
                    ></section>
                  </section>
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
                </section>
              ))}
            </section>
          </div>
          <div className={`time ${color}`}></div>
        </div>
      </div>
    </>
  );
};

export default Experience;
