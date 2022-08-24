import React from 'react';
import './style.scss';

const index = () => {
  return (
    <>
      <div id='about'>
        <section className='wrap'>
          <div className='container'>
            <div className='wrap__Content'>
              <p className='experience'>
                Hello! I’m John Doe. Senior Web Developer with over 13 years of
                experience specializing in front end development. Experienced
                with all stages of the development cycle for dynamic web
                projects.Having an in-depth knowledge including advanced HTML5,
                CSS, CSS3, SASS, LESS, JSON, XML, Java, JavaScript, JQuery,
                Angular JS. Strong background in management and leadership.
              </p>
              <div className='about'>
                <a href='#' className='about__content'>
                  DOWLOAD CV
                </a>
                <a href='#' className='about__content'>
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

export default index;
