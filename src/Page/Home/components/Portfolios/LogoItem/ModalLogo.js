import React from 'react';
import { logoData } from '../../../../../utils/Mockdata';
import ReactDOM from 'react-dom';
import './LogoItem.scss';
import ModalLogoItem from './ModalLogoItem';

function ModalLogo({ clsLogo, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo' onClick={() => clsLogo(false)}>
        <div className='container'>
          {logoData.map(
            (data, index) =>
              indexValue === index && <ModalLogoItem data={data} key={index} />
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalLogo;
