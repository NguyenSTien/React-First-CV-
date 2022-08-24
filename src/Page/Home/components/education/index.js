import React from 'react';
import './style.scss';
import education from '../../../../assets/images/book.png';
import { educationData } from '../../../../utils/Mockdata';
import Sectiontitle from '../Title';

const index = () => {
  return (
    <>
      <div id='education' className='wrap__education'>
        <div className='container'>
          <Sectiontitle title='EDUCATION' icon={education} />
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
                  <h3>{data.title}</h3>
                  <h4>
                    {data.subTitle} <br />
                    {data.date}
                  </h4>
                  <p className='content'>{data.content}</p>
                  <a href='#' className='data-icon'>
                    {data.icon}
                  </a>
                </div>
              ))}
            </div>
            <div className='timeline'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
