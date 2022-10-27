import React, { useState } from 'react';
import { modalData } from '../../../../../utils/MapData';

const ModalLogoItem = ({ data, index, length }) => {
  const [activeButton, setActiveButton] = useState(index);
  console.log(activeButton);
  return (
    <div
      className={`wrap_modalLogo_content ${data.classNameModal} `}
      key={index}
    >
      <figure className='img_modalLogo'>
        {modalData.map((data, index) => {
          return activeButton === index ? (
            <img key={index} src={data.img} alt='imgLogo'></img>
          ) : (
            ''
          );
        })}
      </figure>

      <button
        className='btn__next'
        onClick={() =>
          setActiveButton(
            activeButton + 1 === length ? activeButton : activeButton + 1
          )
        }
      >
        <i className='fa-solid fa-chevron-right'></i>
      </button>
      <button
        className='btn__prev'
        onClick={() =>
          setActiveButton(activeButton === 0 ? activeButton : activeButton - 1)
        }
      >
        <i className='fa-solid fa-chevron-left'></i>
      </button>
    </div>
  );
};

export default ModalLogoItem;
