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
          <section className='section'>
            <SectionTitle title='EDUCATION' icon={education} />
          </section>
          <div className='wrap_time_education'>
            <div className='time__education'>
              {educationData.map((data, index) => (
                <section
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? 'section name__education  '
                      : 'section name__education_right '
                  } ${border}`}
                >
                  <section
                    className={`${
                      index % 2 === 0
                        ? 'section circle_education '
                        : 'section circle_education-right '
                    } ${color}`}
                  >
                    <p className='circle_education_text'>{data.keyword}</p>
                    <div
                      className={`${
                        index % 2 === 0 ? 'line_left' : 'line_right'
                      } ${color}`}
                    ></div>
                  </section>
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
                </section>
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
