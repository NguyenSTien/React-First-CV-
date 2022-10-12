import React, { useState } from 'react';
import ModalLogo from './ModalLogo';

const LogoItem = ({ data, index }) => {
  const [buttonLogo, setButtonLogo] = useState(false);
  const handleLogo = () => {
    setButtonLogo(true);
  };
  return (
    <div key={index} className='logo_portfolios'>
      <button
        className={`btn_port ${data.className}`}
        onClick={() => handleLogo(true)}
      >
        <figure className={`img_logo ${data.className}`}>
          <img src={data.img} alt='logoImg'></img>
        </figure>
        <div className='bgr_white'></div>
        <div className='bgr_black'></div>
        <p className={`logo_icon ${data.className}`}>{data.icon}</p>
        <p className={`content_hover ${data.className}`}>
          {data.contentHover}
          <span className='content_hover--bold'>{data.content}</span>
        </p>
        <p className={`sub_hover ${data.className}`}>{data.subContentHover}</p>
      </button>
      {buttonLogo && <ModalLogo indexValue={index} clsLogo={setButtonLogo} />}
    </div>
  );
};

export default LogoItem;
