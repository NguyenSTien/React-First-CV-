import React from 'react';

const ModalEducationItem = ({ index, data, clsModal }) => {
  return (
    <div
      key={index}
      className='content_modal_education animate__animated animate__fadeInDownBig'
    >
      <div>
        <h4 className='modal_title'>{data.title}</h4>
        <p className='modal_time'>{data.time}</p>
        <figure>
          <img src={data.imgModal} alt='img_modal'></img>
        </figure>
        <p className='modal_content'>{data.content}</p>
      </div>
      <button className='cls_btn' onClick={() => clsModal(false)}>
        <i className='fa fa-close' />
      </button>
    </div>
  );
};

export default ModalEducationItem;
