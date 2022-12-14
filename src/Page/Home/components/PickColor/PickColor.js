import { useState } from 'react';
import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './PickColor.scss';

const PickColor = () => {
  const { color, setColor } = useColorContext();
  const { setLightColor } = useColorContext();
  const { setBorder } = useColorContext();
  const { setTextColor } = useColorContext();
  const { setBorderBottom } = useColorContext();
  const handleColor = (value) => {
    switch (value) {
      case 'blue':
        setColor('blue');
        setLightColor('orange');
        setBorder('border_orange');
        setTextColor('text_orange');
        setBorderBottom('border_bottom_orange');
        break;

      case 'dGreen':
        setColor('dGreen');
        setLightColor('purple');
        setBorder('border_purple');
        setTextColor('text_purple');
        setBorderBottom('border_bottom_purple');
        break;
      case 'lBrown':
        setColor('lBrown');
        setLightColor('orange');
        setBorder('border_orange');
        setTextColor('text_orange');
        setBorderBottom('border_bottom_orange');
        break;

      case 'green':
        setColor('green');
        break;

      case 'purple':
        setColor('purple');
        setLightColor('pink');
        setBorder('border_pink');
        setTextColor('text_pink');
        setBorderBottom('border_bottom_pink');
        break;

      case 'brown':
        setColor('brown');
        setLightColor('blue');
        break;

      case 'red':
        setColor('red');
        setLightColor('lOr');
        setBorder('border_orange');
        setTextColor('text_orange');
        setBorderBottom('border_bottom_orange');
        break;

      case 'pink':
        setColor('pink');
        setLightColor('purple');
        setBorder('border_purple');
        setTextColor('text_purple');
        setBorderBottom('border_bottom_purple');
        break;

      case 'white':
        setColor('wGreen');
        setBorder('border_green');
        setTextColor('text_green');
        setLightColor('green');
        break;
      default:
        break;
    }
  };
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
          <i className={`fa-solid fa-gear ${'icon_active'}`}></i>
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

export default PickColor;
