import React, { useState } from 'react';
import SectionTitle from '../Title';
import safe from '../../../../assets/images/safe.png';
import Dribble from './Dribble.js';
import Logo from './Logo.js';
import Website from './Website.js';
import './style.scss';

const Index = () => {
  const [text, setText] = useState('');

  const handleClick = value => {
    if (value === 'logo') {
      setText('logo');
    }
    if (value === 'dribble') {
      setText('dribble');
    }
    if (value === 'websites') {
      setText('websites');
    }
  };

  return (
    <>
      <div className='wrap_portfolios'>
        <div className='container'>
          <SectionTitle title='PORTFOLIOS' icon={safe} />
          <div className='portfolios'>
            <div className='button_all'>
              <button
                className='button_text'
                onClick={() => handleClick('all')}
              >
                ALL
              </button>
              <button
                className='button_text '
                onClick={() => handleClick('logo')}
              >
                LOGO
              </button>
              <button
                className='button_text'
                onClick={() => handleClick('dribble')}
              >
                DRIBBLE
              </button>
              <button
                className='button_text'
                onClick={() => handleClick('websites')}
              >
                WEBSITES
              </button>
            </div>
            <div
              className={`slider_port fade ${
                text === 'logo' || text === '' ? 'block' : ''
              }`}
            >
              <Logo />
            </div>
            <div
              className={`slider_port fade ${
                text === 'dribble' ? 'block' : ''
              }`}
            >
              <Dribble />
            </div>
            <div
              className={`slider_port fade ${
                text === 'websites' ? 'block' : ''
              }`}
            >
              <Website />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
