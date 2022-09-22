import React from 'react';
import '../Lazy/style.scss';

function Loading() {
  return (
    <div className='wrap_lazy'>
      <div className='container'>
        <div
          className={`lazy_box ${'animate__animated animate__bounceInDown'}`}
        ></div>
        <h4 className='lazy_title'>JOHN DOE</h4>
        <p className='lazy_subTitle'>Software Engineer & UI/UX Expert</p>
      </div>
    </div>
  );
}
export default Loading;
