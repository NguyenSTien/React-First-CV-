import React, { useState } from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './ButtonScrollTop.scss';

const ButtonScrollTop = () => {
  const { lightColor } = useColorContext();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      type='button'
      className={`to-top ${lightColor}`}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i className='fas fa-chevron-up'></i>
    </button>
  );
};

export default ButtonScrollTop;
