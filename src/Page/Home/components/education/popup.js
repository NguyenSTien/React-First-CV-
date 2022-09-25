import React from 'react';
import { educationClickData } from '../../../../utils/Mockdata';
import './education.scss';

const Popup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup_inner'>
        {educationClickData.map((data, index) => (
          <div key={index} className={`wrap_popup`} id={data.id}>
            <div className='container'>
              <div className={`popup_main  ${data.className}`}>
                <h4 className='wrap_popup_title'>{data.title}</h4>
                <p className='wrap_popup_time'>{data.time}</p>
                <figure className='wrap_popup_img'>
                  <img src={data.img} alt='imgPopup'></img>
                </figure>
                <p className='wrap_popup_content'>{data.content}</p>
              </div>
              <button
                className='close_btn'
                onClick={() => props.setTrigger(false)}
              >
                x
              </button>
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
