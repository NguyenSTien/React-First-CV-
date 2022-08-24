import React from 'react';
import SectionTitle from '../Title';
import safe from '../../../../assets/images/safe.png';
import Dribble from './Dribble.js';
import Logo from './Logo.js';
import Website from './Website.js';
import './style.scss';

const index = () => {
  let sliderIndex = 1;
  function showSlider(n) {
    let i;
    let slides = document.getElementsByClassName('slider_port');
    let dots = document.getElementsByClassName('button_text');
    if (n > slides.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].className += ' active';
  }
  showSlider(sliderIndex);
  function currentSlide(n) {
    showSlider((sliderIndex = n));
  }

  return (
    <>
      <div className='wrap_portfolios'>
        <div className='container'>
          <SectionTitle title='PORTFOLIOS' icon={safe} />
          <div className='portfolios'>
            <div className='button_all'>
              <button className='button_text' onClick={currentSlide(1)}>
                ALL
              </button>
              <button className='button_text' onClick={currentSlide(2)}>
                LOGO
              </button>
              <button className='button_text' onClick={currentSlide(3)}>
                DRIBBLE
              </button>
              <button className='button_text' onClick={currentSlide(4)}>
                WEBSITES
              </button>
            </div>
            <div className='slider_port fade'>
              <Logo />
            </div>
            <div className='slider_port fade'>
              <Dribble />
            </div>
            <div className='slider_port fade'>
              <Website />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
