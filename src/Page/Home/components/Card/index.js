import React from 'react';
import './style.scss';
import profile from '../../../../assets/images/profile.png';
import background from '../../../../assets/images/background.jpg';

const index = () => {
  return (
    <>
      <div id='home' className='wrap__background'>
        <figure className='background'>
          <img src={background} alt='asdsad'></img>
        </figure>
      </div>
      <section className='wrapCard'>
        <div className='container'>
          <div className='nameCard'>
            <div className='card'>
              <div className='cardContent'>
                <h4 className='cardContentName'>JOHN DOE</h4>
                <h6 className='cardContentPosition'>
                  Software Engineer & UI/UX Expert
                </h6>
                <div className='cardContentInfo'>
                  <p className='cardContentInfoIcon'>
                    <i className='fa-solid fa-envelope'></i>
                    email@mailprovider.com
                  </p>
                  <p className='cardContentInfoIcon'>
                    <i class='fa-solid fa-globe'></i>yourpersonalwebsite.com
                  </p>
                  <p className='cardContentInfoIcon'>
                    <i className='fa-brands fa-skype'></i>yourusername@skype.com
                  </p>
                  <p className='cardContentInfoIcon'>
                    <i className='fa-solid fa-phone'></i>+152 25634 254 846
                  </p>
                  <p className='cardContentInfoIcon'>
                    <i className='fa-solid fa-location-dot'></i>LampStreet 34/3,
                    London, UK
                  </p>
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
              <div className='plus'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
