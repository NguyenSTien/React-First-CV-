import React from 'react';
import './style.scss';

const Index = () => {
  return (
    <div className={`wrap_load ${'animate__animated animate__fadeOut'}`}>
      <div className={`main_load ${'animate__animated animate__bounceInDown'}`}>
        <div className='box'>
          <div className='box_inner'></div>
        </div>
      </div>
      <div className='content_load'>
        <h4 className='load_title'>JOHN DOE</h4>
        <p className='load_subTitle'>Software Engineer & UI/UX Expert</p>
      </div>
    </div>
  );
};

export default Index;
