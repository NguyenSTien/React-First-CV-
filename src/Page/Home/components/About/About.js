import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './About.scss';

const About = () => {
  const { color } = useColorContext();
  return (
    <>
      <section className='section'>
        <div id='about'>
          <section className='wrap animate__animated animate__fadeInUp'>
            <div className='container'>
              <div className='wrap__content'>
                <p className='experience'>
                  • I'm seeking a front-end developer role to use my thorough
                  knowledge of programming frameworks and development software.
                  My goal is to get more and more challenges to complete my
                  knowledge and become advanced in my front-end career path. And
                  I'm continuously learning and improving my communication and
                  mindset to adapt to any environment I'm working with.
                </p>
                <div className='about'>
                  <a href='./about' className={`about__content ${color}`}>
                    DOWNLOAD CV
                  </a>
                  <a href='./about' className={`about__content ${color}`}>
                    CONTACT ME
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
