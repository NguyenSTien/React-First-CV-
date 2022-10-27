import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './Skill.scss';
import skill from '../../../../assets/images/mixer.png';
import { skillData } from '../../../../utils/MapData';
import SectionTitle from '../Title/Title';

const Skill = () => {
  const { color } = useColorContext();

  return (
    <>
      <div className='skill animate__animated animate__zoomIn'>
        <div className='container'>
          <section className='section'>
            <SectionTitle title='SKILL' icon={skill} />
          </section>
          <section className={`section wrap_skill ${color}`}>
            <div className='wrap_soft'>
              {skillData.map((data, index) => {
                return (
                  <div key={index} className='software'>
                    <div className='professional_text'>
                      <p className='prof_head'>{data.title}</p>
                      {data.content.map((data, index) => (
                        <section key={index} className='section prof_text'>
                          <p className='prof_text_key'>{data.skill}</p>
                          <p className='prof_text_cont'>{data?.percent}</p>
                          <div
                            className='percent'
                            style={{ width: `${data.percent}%` }}
                          ></div>
                          <div className={`line_percent ${color}`}></div>
                        </section>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skill;
