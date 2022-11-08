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
                  Hello! I’m Nguyen Tien. Web Developer with over 3 month of
                  experience front end development .Having an knowledge
                  including HTML5, CSS, ES7, CSS3, SASS, ReactJS, React Hook,
                  Redux ,JavaScript.
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
