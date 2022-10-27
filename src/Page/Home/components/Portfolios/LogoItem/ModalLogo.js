import React from 'react';
import { modalData } from '../../../../../utils/MapData';
import ReactDOM from 'react-dom';
import './LogoItem.scss';
import ModalLogoItem from './ModalLogoItem';

function ModalLogo({ clsLogo, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo'>
        <div className='container'>
          {modalData.map(
            (data, index) =>
              indexValue === index && (
                <ModalLogoItem
                  data={data}
                  index={index}
                  key={index}
                  length={modalData.length}
                />
              )
          )}
          <button className='cls_logo' onClick={() => clsLogo(false)}>
            <i className='fa fa-close' />
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalLogo;
