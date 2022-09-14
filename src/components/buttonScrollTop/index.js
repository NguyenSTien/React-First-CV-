import React, { useState } from 'react';
import './style.scss';

const Index = () => {
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
      className={`to-top`}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i className='fas fa-chevron-up'></i>
    </button>
  );
};

export default Index;
