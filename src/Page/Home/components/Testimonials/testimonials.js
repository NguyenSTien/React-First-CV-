import React from 'react';
import hand from '../../../../assets/images/handshake.png';
import { useColorContext } from '../../../../contexts/ColorContext';
import { tesData } from '../../../../utils/Mockdata';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { animationData } from '../../../../utils/Mockdata';
import SectionTitle from '../Title/title';
import './testimonials.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
const Testimonials = () => {
  const { color } = useColorContext();
  return (
    <>
      <div
        id='testimonials'
        className='wrap_tes animate__animated animate__zoomIn'
      >
        <div className='container'>
          <SectionTitle title='TESTIMONIALS' icon={hand} />
          <div className={`tes ${color}`}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              speed={1000}
              autoHeight={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {tesData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className='slider'>
                    <figure className='tes_img'>
                      <img src={data.img} alt='imgTes'></img>
                    </figure>
                    <div className='tes_text'>{data.content}</div>
                    <div className='tes_text_footer'>{data.footer}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='animation'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={15}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={6}
              speed={2000}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              loop={true}
              simulateTouch={false}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                375: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                475: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 15,
                },
              }}
            >
              {animationData.map((data, index) => (
                <SwiperSlide key={index}>
                  <figure className='ani_img'>
                    <img src={data.img} alt='imgTes'></img>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
