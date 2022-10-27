import React from 'react';
import { dribbleData } from '../../../../../utils/MapData';
import ReactDOM from 'react-dom';
import '../LogoItem/LogoItem.scss';
import ModalDribbleItem from './ModalDribbleItem';

function ModalDribble({ clsDribble, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo'>
        <div className='container'>
          {dribbleData.map(
            (data, index) =>
              indexValue === index && (
                <ModalDribbleItem
                  data={data}
                  index={index}
                  key={index}
                  length={dribbleData.length}
                />
              )
          )}
          <button className='cls_logo' onClick={() => clsDribble(false)}>
            <i className='fa fa-close' />
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalDribble;
