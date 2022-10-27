import React from 'react';
import ReactDOM from 'react-dom';
import { experienceModalData } from '../../../../../utils/MapData';
import './ModalExperience.scss';
import ModalExperienceItem from './ModalExperienceItem';

function ModalExperience({ clsModal, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modal' onClick={() => clsModal(false)}>
        <div className='container'>
          {experienceModalData.map(
            (data, index) =>
              indexValue === index && (
                <ModalExperienceItem data={data} index={index} />
              )
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalExperience;
