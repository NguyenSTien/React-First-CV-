import React from 'react';
import { useColorContext } from '../../../../contexts/ColorContext';
import './Card.scss';
import profile from '../../../../assets/images/imgCV.png';
import background from '../../../../assets/images/background.jpg';
import { cardData } from '../../../../utils/MapData';

const Card = () => {
  const { color, lightColor } = useColorContext();

  return (
    <>
      <section>
        <div id='home' className='wrap__background'>
          <figure className='background'>
            <img src={background} alt='imgBgr'></img>
          </figure>
        </div>
        <section className='wrapCard animate__animated animate__fadeInUp'>
          <div className='container'>
            <div className='nameCard section'>
              <div className={`${color} card`}>
                <div className='cardContent'>
                  <h4 className={`cardContentName ${color}`}>Nguyen Sy Tien</h4>
                  <h6 className={`cardContentPosition ${color}`}>
                    Front End Developer
                  </h6>
                  <div className='cardContentInfo'>
                    {cardData.map((data, index) => (
                      <p key={index} className={`card_content_icon ${color}`}>
                        {data.icon}
                        <span className={`card_content_text ${color}`}>
                          {data.content}
                        </span>
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
                <div className={`plus ${lightColor}`}>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Card;
