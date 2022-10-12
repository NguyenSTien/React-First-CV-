import React from 'react';
import { dribbleData } from '../../../../../utils/Mockdata';
import ReactDOM from 'react-dom';
import '../LogoItem/LogoItem.scss';
import ModalDribbleItem from './ModalDribbleItem';

function ModalDribble({ clsDribble, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo' onClick={() => clsDribble(false)}>
        <div className='container'>
          {dribbleData.map(
            (data, index) =>
              indexValue === index && (
                <ModalDribbleItem data={data} key={index} />
              )
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalDribble;
