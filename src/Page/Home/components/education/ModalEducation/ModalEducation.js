import React from 'react';
import ReactDOM from 'react-dom';
import ImgModalEducation from '../../../../../assets/images/education1.jpg';
import './ModalEducation.scss';

function ModalEducation({ clsModal }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modal'>
        <div className='container'>
          <div className='content_modal_education'>
            <h4 className='modal_title'>GRADUATION AT ASHTON UNI</h4>
            <p className='modal_time'>Jan 2014 - Mar 2015</p>
            <figure>
              <img src={ImgModalEducation} alt='imgModal'></img>
            </figure>
            <p className='modal_content'>
              I have learned a great many things from participating in varsity
              football. It has changed my entire outlook on and attitude toward
              life. Before my freshman year at [high-school], I was shy, had low
              self-esteem and turned away from seemingly impossible challenges.
              Football has altered all of these qualities. On the first day of
              freshman practice, the team warmed up with a game of touch
              football. The players were split up and the game began. However,
              during the game, I noticed that I didn't run as hard as I could,
              nor did I try to evade my defender and get open. The fact of the
              matter is that I really did not want to be thrown the ball. I
              didn't want to be the one at fault if I dropped the ball and the
              play didn't succeed. I did not want the responsibility of helping
              the team because I was too afraid of making a mistake. That aspect
              of my character led the first years of my high school life. All
              the while, I went to practice.
            </p>
            <button className='cls_btn' onClick={() => clsModal(false)}>
              <i className='fa fa-close' />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalEducation;
