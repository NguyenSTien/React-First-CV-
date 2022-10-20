import React from 'react';
import { dribbleData } from '../../../../../utils/Mockdata';
import ReactDOM from 'react-dom';
import '../LogoItem/LogoItem.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

function ModalDribble({ clsDribble }) {
  return ReactDOM.createPortal(
    <div>
      <div className='wrap_modalLogo' onClick={() => clsDribble(false)}>
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
            {dribbleData.map((data, index) => (
              // indexValue === index && (
              <SwiperSlide>
                <div
                  className={`wrap_modalLogo_content ${data.classNameModal}`}
                  key={index}
                >
                  <figure className='img_modalLogo'>
                    <img src={data.img} alt='imgLogo'></img>
                  </figure>
                  <button
                    className='cls_logo'
                    onClick={() => clsDribble(false)}
                  >
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

export default ModalDribble;
