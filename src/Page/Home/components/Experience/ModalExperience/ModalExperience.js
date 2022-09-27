import React from 'react';
import { experienceClickData } from '../../../../../utils/Mockdata';
import './ModalExperience.scss';

function ModalExperience({ clsModal }) {
  return (
    <div>
      <div className='wrap_modal'>
        <div className='container'>
          {experienceClickData.map((data, index) => (
            <div key={index} className={data.className2}>
              <h4 className='modal_title'>{data.title}</h4>
              <p className='modal_time'>{data.time}</p>
              <p className='modal_content'>{data.content}</p>
              <button className='cls_btn' onClick={() => clsModal(false)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalExperience;
