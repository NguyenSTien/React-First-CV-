import React from 'react';
import './style.scss';
import skill from '../../../../assets/images/mixer.png';
import { professionalData } from '../../../../utils/Mockdata';
import { personalData } from '../../../../utils/Mockdata';
import { softwarelData } from '../../../../utils/Mockdata';
import { abc } from '../../../../utils/Mockdata';
import Sectiontitle from '../Title';

const index = () => {
  return (
    <>
      <div className='skill'>
        <div className='container'>
          <Sectiontitle title='SKILL' icon={skill} />
          <div className='wrap_skill'>
            <div className='wrap_soft'>
              {abc.map((data, index) => {
                return (
                  <div key={index} className='software'>
                    <div className='professional_text'>
                      <p className='prof_head'>{data.title}</p>
                      {data.content.map((data, index) => (
                        <div className='prof_text'>
                          <p className='prof_text_key'>{data.skill}</p>
                          <p className='prof_text_cont'>{data?.percent}</p>
                          <div
                            className='percent'
                            style={{ width: `${data.percent}%` }}
                          ></div>
                          <div className='line_percent'></div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
