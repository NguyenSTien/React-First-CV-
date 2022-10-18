import React from 'react';
import ReactDOM from 'react-dom';
import { modalEducationData } from '../../../../../utils/Mockdata';
import './ModalEducation.scss';
import ModalEducationItem from './ModalEducationItem';

function ModalEducation({ clsModal, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modal' onClick={() => clsModal(false)}>
        <div className='container'>
          {modalEducationData.map(
            (data, index) =>
              indexValue === index && (
                <ModalEducationItem data={data} index={index} />
              )
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalEducation;
