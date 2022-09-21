import React from 'react';
import './style.scss';
import layers from '../../../../assets/images/layers.png';
import { experienceData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title';

const Index = () => {
  return (
    <>
      <div id='experience' className='wrap_experience'>
        <div className='container'>
          <SectionTitle title='EXPERIENCE' icon={layers} />
          <div className='wrap_time_exp'>
            <div className='time__exp'>
              {experienceData.map((data, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? 'name__exp' : 'name__exp_right'}
                >
                  <div
                    className={
                      index % 2 === 0 ? 'circle_exp' : 'circle_exp-right'
                    }
                  >
                    <p className='circle_exp_text'>{data.keyword}</p>
                    <div
                      className={index % 2 === 0 ? 'line_left' : 'line_right'}
                    ></div>
                  </div>
                  <h3 className='text_title'>{data.title}</h3>
                  <h4 className='text_subTitle'>
                    {data.subTitle}
                    <br />
                    {data.date}
                  </h4>
                  <p className='content'>{data.content}</p>
                  <a href='#' className='data-icon'>
                    {data.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='time'></div>
        </div>
      </div>
    </>
  );
};

export default Index;
