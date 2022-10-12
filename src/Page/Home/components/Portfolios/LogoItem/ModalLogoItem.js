import React from 'react';
import './LogoItem.scss';

const ModalLogoItem = ({ data, index, clsLogo }) => {
  return (
    <div
      className='wrap_modalLogo_content animate__animated animate__flipInY'
      key={index}
    >
      <figure className='img_modalLogo'>
        <img src={data.img} alt='imgLogo'></img>
      </figure>
      <button className='cls_logo' onClick={() => clsLogo(false)}>
        <i className='fa fa-close' />
      </button>
    </div>
  );
};

export default ModalLogoItem;
