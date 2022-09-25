import { useState } from 'react';
import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './pickColor.scss';

const pickColor = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { color, setColor } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setLightColor } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setBorder } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setTextColor } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setBorderBottom } = useColorContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      setColor('wGreen');
      setBorder('border_green');
      setTextColor('text_green');
      setLightColor('green');
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [changeMenu, setChangeMenu] = useState('');
  const handleClick = () => {
    setChangeMenu(!changeMenu);
  };
  return (
    <div>
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
    </div>
  );
};

export default pickColor;
