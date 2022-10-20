import React from 'react';
import { logoData, dribbleData } from '../../../../../utils/Mockdata';
import ReactDOM from 'react-dom';
import './LogoItem.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

function ModalLogo({ clsLogo, indexValue }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo' onClick={() => clsLogo(false)}>
        <div className='container'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            speed={1000}
            loop={true}
            autoHeight={true}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {logoData.map((data, index) => (
              <SwiperSlide>
                <div
                  className={`wrap_modalLogo_content ${data.classNameModal}`}
                  key={index}
                >
                  <figure className='img_modalLogo'>
                    <img src={data.img} alt='imgLogo'></img>
                  </figure>
                  <button className='cls_logo' onClick={() => clsLogo(false)}>
                    <i className='fa fa-close' />
                  </button>
                </div>
              </SwiperSlide>
            ))}
            {dribbleData.map((data, index) => (
              <SwiperSlide>
                <div
                  className={`wrap_modalLogo_content ${data.classNameModal}`}
                  key={index}
                >
                  <figure className='img_modalLogo'>
                    <img src={data.img} alt='imgLogo'></img>
                  </figure>
                  <button className='cls_logo' onClick={() => clsLogo(false)}>
                    <i className='fa fa-close' />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default ModalLogo;
