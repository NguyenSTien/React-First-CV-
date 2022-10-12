import React, { useState } from 'react';
import ModalDribble from './ModalDribble';

const DribbleContent = ({ data, index }) => {
  const [buttonDribble, setButtonDribble] = useState(false);
  const handleDribble = () => {
    setButtonDribble(true);
  };
  return (
    <div key={index} className='dribble_portfolios'>
      <button
        className={`btn_port ${data.className}`}
        onClick={() => handleDribble(false)}
      >
        <figure className={`img_dribble ${data.className}`}>
          <img src={data.img} alt='sda'></img>
        </figure>
        <div className='bgr_white'></div>
        <div className='bgr_black'></div>
        <p className='logo_icon'>{data.icon}</p>
        <p className={`content_hover ${data.className}`}>
          {data.contentHover}
          <span className='content_hover--bold'>{data.content}</span>
        </p>
        <p className={`sub_hover ${data.className}`}>{data.subContentHover}</p>
        <p className={`sub_hover_two ${data.className}`}>
          {data.subContentHover2}
        </p>
      </button>
      {buttonDribble && (
        <ModalDribble indexValue={index} clsDribble={setButtonDribble} />
      )}
    </div>
  );
};

export default DribbleContent;
