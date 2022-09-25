import React from 'react';
import { portfolioPopupData } from '../../../../../utils/Mockdata';
import '../portfolios.scss';

const Popup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup_inner'>
        {portfolioPopupData.map((data, index) => (
          <div key={index} className='wrap_popup' id={data.id}>
            <div className='container'>
              <div className={`popup_main_port ${data.className}`}>
                <div>
                  <figure className='img_popup'>
                    <img src={data.img} alt='imgPopup'></img>
                  </figure>
                </div>
                <button
                  className='close_btn_port'
                  onClick={() => props.setTrigger(false)}
                >
                  x
                </button>
              </div>
            </div>
          </div>
        ))}

        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
