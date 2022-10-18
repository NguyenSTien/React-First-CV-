import React from 'react';
import '../LogoItem/LogoItem.scss';

const ModalDribbleItem = ({ data, index, clsDribble }) => {
  return (
    <div
      className={`wrap_modalLogo_content ${data.classNameModal}`}
      key={index}
    >
      <figure className='img_modalLogo'>
        <img src={data.img} alt='imgLogo'></img>
      </figure>
      <button className='cls_logo' onClick={() => clsDribble(false)}>
        <i className='fa fa-close' />
      </button>
    </div>
  );
};

export default ModalDribbleItem;
