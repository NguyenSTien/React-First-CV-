import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './skill.scss';
import skill from '../../../../assets/images/mixer.png';
import { skillData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/title';

const Index = () => {
  const { color } = useColorContext();

  return (
    <>
      <div id='skill' className='skill animate__animated animate__zoomIn'>
        <div className='container'>
          <SectionTitle title='SKILL' icon={skill} />
          <div className={`wrap_skill ${color}`}>
            <div className='wrap_soft'>
              {skillData.map((data, index) => {
                return (
                  <div key={index} className='software'>
                    <div className='professional_text'>
                      <p className='prof_head'>{data.title}</p>
                      {data.content.map((data, index) => (
                        <div key={index} className='prof_text'>
                          <p className='prof_text_key'>{data.skill}</p>
                          <p className='prof_text_cont'>{data?.percent}</p>
                          <div
                            className='percent'
                            style={{ width: `${data.percent}%` }}
                          ></div>
                          <div className={`line_percent ${color}`}></div>
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

export default Index;
