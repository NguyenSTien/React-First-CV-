import React from 'react';
import './Experience.scss';
import { useColorContext } from '../../../../contexts/ColorContext';

import layers from '../../../../assets/images/layers.png';
import { experienceData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/Title';

import ExperienceItem from './ExperienceItem/ExperienceItem';

const Experience = () => {
  const { color } = useColorContext();

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
                <ExperienceItem data={data} index={index} />
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
