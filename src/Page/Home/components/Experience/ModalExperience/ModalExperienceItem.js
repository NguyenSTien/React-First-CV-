import React from 'react';

const ModalExperienceItem = ({ index, data, clsModal }) => {
  return (
    <div
      key={index}
      className='content_modal_experience animate__animated animate__fadeInDownBig'
    >
      <div>
        <h4 className='modal_title'>{data.title}</h4>
        <p className='modal_time'>{data.time}</p>
        <p className='modal_content'>{data.content}</p>
      </div>
      <button className='cls_btn_experience' onClick={() => clsModal(false)}>
        <i className='fa fa-close' />
      </button>
    </div>
  );
};

export default ModalExperienceItem;
