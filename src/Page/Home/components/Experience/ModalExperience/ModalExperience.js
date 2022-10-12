import React from 'react';
import ReactDOM from 'react-dom';
import './ModalExperience.scss';

function ModalExperience({ clsModal }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modal' onClick={() => clsModal(false)}>
        <div className='container'>
          <div className='content_modal_experience animate__animated animate__fadeInDownBig'>
            <div>
              <h4 className='modal_title'>EXPERIENCE AT M</h4>
              <p className='modal_time'>Jan 2014 - Mar 2015</p>
              <p className='modal_content'>
                Jan 2014 - Mar 2015 I have learned a great many things from
                participating in varsity football. It has changed my entire
                outlook on and attitude toward life. Before my freshman year at
                [high-school], I was shy, had low self-esteem and turned away
                from seemingly impossible challenges. Football has altered all
                of these qualities. On the first day of freshman practice, the
                team warmed up with a game of touch football. The players were
                split up and the game began. However,
              </p>
              <button
                className='cls_btn_experience'
                onClick={() => clsModal(false)}
              >
                <i className='fa fa-close' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalExperience;
