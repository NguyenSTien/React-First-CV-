/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from 'react-scroll';
import John from '../../../../assets/images/john.png';
import { menuData } from '../../../../utils/Mockdata';
import { useState } from 'react';
import './style.scss';

const Index = ({ menu_move }) => {
  const [move, setMove] = useState(false);
  const handleClick = () => {
    setMove(!move);
  };
  return (
    <>
      <nav className={move ? 'menu menu-active' : 'menu'}>
        <div className='menu_container'>
          <div className='menu_all'>
            <div className='menu_header'>
              <figure className='menu_img'>
                <img src={John} alt='asdsad' />
              </figure>
              <div className='menu_option'>
                {menuData.map((data, index) => (
                  <div key={index} className='menu_option_wrap'>
                    <Link
                      to={data.link}
                      smooth={true}
                      spy={true}
                      duration={1000}
                      className='menu_option_icon'
                      onClick={handleClick}
                    >
                      {data.icon}
                      <span className='menu_option_text'>{data.content}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button className='button_menu' onClick={handleClick}>
              <div className='line_menu'></div>
              <div className='line_menu_two'></div>
              <div className='line_menu_there'></div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
