import React, { useState } from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './style.scss';
import profile from '../../../../assets/images/profile.png';
import background from '../../../../assets/images/background.jpg';
import { cardData } from '../../../../utils/Mockdata';

const Index = () => {
  const { color, setColor } = useColorContext();
  const { lightColor, setLightColor } = useColorContext();
  const { border, setBorder } = useColorContext();
  const { textColor, setTextColor } = useColorContext();
  const { borderBottom, setBorderBottom } = useColorContext();
  const { white, setWhite } = useColorContext();
  const handleColor = (value) => {
    if (value === 'blue') {
      setColor('blue');
      setLightColor('orange');
      setBorder('border_orange');
      setTextColor('text_orange');
      setBorderBottom('border_bottom_orange');
    }
    if (value === 'dGreen') {
      setColor('dGreen');
      setLightColor('purple');
      setBorder('border_purple');
      setTextColor('text_purple');
      setBorderBottom('border_bottom_purple');
    }
    if (value === 'lBrown') {
      setColor('lBrown');
      setLightColor('orange');
      setBorder('border_orange');
      setTextColor('text_orange');
      setBorderBottom('border_bottom_orange');
    }
    if (value === 'green') {
      setColor('green');
    }
    if (value === 'purple') {
      setColor('purple');
      setLightColor('pink');
      setBorder('border_pink');
      setTextColor('text_pink');
      setBorderBottom('border_bottom_pink');
    }
    if (value === 'brown') {
      setColor('brown');
      setLightColor('blue');
    }
    if (value === 'red') {
      setColor('red');
      setLightColor('lOr');
      setBorder('border_orange');
      setTextColor('text_orange');
      setBorderBottom('border_bottom_orange');
    }
    if (value === 'pink') {
      setColor('pink');
      setLightColor('purple');
      setBorder('border_purple');
      setTextColor('text_purple');
      setBorderBottom('border_bottom_purple');
    }
    if (value === 'white') {
      setColor('green');
      setBorder('border_green');
      setTextColor('text_green');
      setLightColor('green');
      setWhite('white');
    }
  };
  const [changeMenu, setChangeMenu] = useState('');
  const handleClick = () => {
    setChangeMenu(!changeMenu);
  };
  return (
    <>
      <div id='home' className='wrap__background'>
        <figure className='background'>
          <img src={background} alt='imgBgr'></img>
        </figure>
      </div>
      <section className='wrapCard animate__animated animate__fadeInUp'>
        <div className='container'>
          <div className='nameCard'>
            <div className={`${color} ${'card'}`}>
              <div className='cardContent'>
                <h4 className='cardContentName'>JOHN DOE</h4>
                <h6 className='cardContentPosition'>
                  Software Engineer & UI/UX Expert
                </h6>
                <div className='cardContentInfo'>
                  {cardData.map((data, index) => (
                    <p key={index} className='card_content_icon'>
                      {data.icon}
                      <span className='card_content_text'>{data.content}</span>
                    </p>
                  ))}
                </div>
                <div className='cardContentIcon'>
                  <div className='circle facebook'>
                    <div className='fbIcon'>
                      <i className='fa-brands fa-facebook-f'></i>
                    </div>
                  </div>
                  <div className='circle twitter'>
                    <i className='fa-brands fa-twitter'></i>
                  </div>
                  <div className='circle google'>
                    <i className='fa-brands fa-google-plus-g'></i>
                  </div>
                  <div className='circle linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </div>
                  <div className='circle wifi'>
                    <i className='fa-solid fa-wifi'></i>
                  </div>
                </div>
              </div>
            </div>
            <figure className='imgProfile'>
              <img src={profile} alt='profile' />
            </figure>
            <div className='extra'>
              <div className={`${'plus'} ${lightColor}`}>
                <i className='fa-solid fa-plus'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          changeMenu ? 'changeColor changeColor-active' : 'changeColor'
        }
      >
        <button className='change_icon' onClick={handleClick}>
          <i class={`${'fa-solid fa-gear'} ${'icon_active'}`}></i>
        </button>
        <div className='change_title'>
          <p>Pick a Color</p>
          <div className='colorBase'>
            <button
              className={color === 'blue' ? 'blue' : 'blue'}
              onClick={() => handleColor('blue')}
            ></button>
            <button
              className={color === 'dGreen' ? 'dGreen' : 'dGreen'}
              onClick={() => handleColor('dGreen')}
            ></button>
            <button
              className={color === 'lBrown' ? 'lBrown' : 'lBrown'}
              onClick={() => handleColor('lBrown')}
            ></button>
            <button
              className={color === 'green' ? 'green' : 'green'}
              onClick={() => handleColor('green')}
            ></button>
            <button
              className={color === 'purple' ? 'purple' : 'purple'}
              onClick={() => handleColor('purple')}
            ></button>
            <button
              className={color === 'brown' ? 'brown' : 'brown'}
              onClick={() => handleColor('brown')}
            ></button>
            <button
              className={color === 'red' ? 'red' : 'red'}
              onClick={() => handleColor('red')}
            ></button>
            <button
              className={color === 'pink' ? 'pink' : 'pink'}
              onClick={() => handleColor('pink')}
            ></button>
          </div>
        </div>
        <div className='change_title'>
          <p>Blend & Dark</p>
          <div className='colorBase_blend'>
            <button
              className={color === 'blue' ? 'blue' : 'blue'}
              onClick={() => handleColor('blue')}
            ></button>
            <button
              className={color === 'green' ? 'green' : 'green'}
              onClick={() => handleColor('green')}
            ></button>
            <button
              className={color === 'white' ? 'white' : 'white'}
              onClick={() => handleColor('white')}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
