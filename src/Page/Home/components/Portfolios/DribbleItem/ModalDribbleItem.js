import React, { useState } from 'react';
import { dribbleData } from '../../../../../utils/MapData';

const ModalDribbleItem = ({ data, index, length }) => {
  const [activeDribble, setActiveDribble] = useState(index);
  console.log(activeDribble);

  return (
    <div
      className={`wrap_modalLogo_content ${data.classNameModal}`}
      key={index}
    >
      <figure className='img_modalLogo'>
        {dribbleData.map((data, index) => {
          return activeDribble === index ? (
            <img key={index} src={data.img} alt='imgDribble'></img>
          ) : (
            ''
          );
        })}
      </figure>

      <button
        className='btn__next'
        onClick={() =>
          setActiveDribble(
            activeDribble + 1 === length ? activeDribble : activeDribble + 1
          )
        }
      >
        <i className='fa-solid fa-chevron-right'></i>
      </button>
      <button
        className='btn__prev'
        onClick={() =>
          setActiveDribble(
            activeDribble === 0 ? activeDribble : activeDribble - 1
          )
        }
      >
        <i className='fa-solid fa-chevron-left'></i>
      </button>
    </div>
  );
};

export default ModalDribbleItem;
