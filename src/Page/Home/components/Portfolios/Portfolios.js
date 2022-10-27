import React, { useState } from 'react';
import SectionTitle from '../Title/Title';
import safe from '../../../../assets/images/safe.png';
import Dribble from './components/Dribble';
import Logo from './components/Logo';
import Website from './components/Website';
import './Portfolios.scss';

const Portfolios = () => {
  const [text, setText] = useState('');
  const [extra, setExtra] = useState(false);
  const handleClickChange = () => {
    setExtra(!extra);
  };
  const handleClick = (value) => {
    setText(value);
  };
  var buttons = document.querySelectorAll('.button_text');

  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
  });

  function createRipple(event) {
    var ripple = document.createElement('span');
    ripple.classList.add('ripple');

    var max = Math.max(this.offsetWidth, this.offsetHeight);

    ripple.style.width = ripple.style.height = max * 2 + 'px';

    var rect = this.getBoundingClientRect();

    ripple.style.left = event.clientX - rect.left - max + 'px';
    ripple.style.top = event.clientY - rect.top - max + 'px';

    this.appendChild(ripple);
  }
  return (
    <>
      <div className='wrap_portfolios'>
        <div className='container'>
          <section className='section'>
            <SectionTitle title='PORTFOLIOS' icon={safe} />
          </section>
          <section className='section portfolios'>
            <section className='section button_all'>
              <button
                data-mdb-ripple-color='#696666'
                className={`btn btn-primary btn-lg ${
                  text === 'all' || text === ''
                    ? 'button_text-active'
                    : 'button_text'
                }`}
                onClick={() => handleClick('all')}
              >
                ALL
              </button>
              <button
                data-mdb-ripple-color='#696666'
                className={`btn btn-primary btn-lg ${
                  text === 'logo' ? 'button_text-active' : 'button_text'
                }`}
                onClick={() => handleClick('logo')}
              >
                LOGO
              </button>
              <button
                data-mdb-ripple-color='#696666'
                className={`btn btn-primary btn-lg ${
                  text === 'dribble' ? 'button_text-active' : 'button_text'
                }`}
                onClick={() => handleClick('dribble')}
              >
                DRIBBLE
              </button>
              <button
                data-mdb-ripple-color='#696666'
                className={`btn btn-primary btn-lg ${
                  text === 'websites' ? 'button_text-active' : 'button_text'
                }`}
                onClick={() => handleClick('websites')}
              >
                WEBSITES
              </button>
            </section>
            <div
              className={`slider_port fade ${
                text === 'all' || text === '' ? 'block' : ''
              }`}
            >
              <div className={extra ? 'all_extra-active' : 'all_extra'}>
                <div className='all_logo'>
                  <Logo />
                </div>
                <div className='all_block'>
                  <Dribble />
                </div>
                <div className='all_web'>
                  <Website />
                </div>
              </div>
            </div>
            <div
              className={`slider_port fade ${text === 'logo' ? 'block' : ''}`}
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
          </section>
          <div
            className={
              text === 'all' ? 'extra_portfolios-active' : 'extra_portfolios'
            }
          >
            <button className='button_extra' onClick={handleClickChange}>
              <i className='fa-solid fa-plus'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
