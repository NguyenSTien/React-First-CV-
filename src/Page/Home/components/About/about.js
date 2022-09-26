import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './about.scss';

const About = () => {
  const { color } = useColorContext();
  return (
    <>
      <div id='about'>
        <section className='wrap animate__animated animate__fadeInUp'>
          <div className='container'>
            <div className='wrap__content'>
              <p className='experience'>
                Hello! I’m John Doe. Senior Web Developer with over 13 years of
                experience specializing in front end development. Experienced
                with all stages of the development cycle for dynamic web
                projects.Having an in-depth knowledge including advanced HTML5,
                CSS, CSS3, SASS, LESS, JSON, XML, Java, JavaScript, JQuery,
                Angular JS. Strong background in management and leadership.
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
    </>
  );
};

export default About;
