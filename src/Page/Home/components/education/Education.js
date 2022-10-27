import React from 'react';
import './Education.scss';
import { useColorContext } from '../../../../contexts/ColorContext';
import education from '../../../../assets/images/book.png';
import { educationData } from '../../../../utils/MapData';
import SectionTitle from '../Title/Title';
import EducationItem from './EducationItem/EducationItem';

const Education = () => {
  const { color } = useColorContext();

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
                <EducationItem data={data} index={index} key={index} />
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
