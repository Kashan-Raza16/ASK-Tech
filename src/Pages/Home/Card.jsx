import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../../style.css';

const Card = () => {
  return (
    <div className='pl-28 pr-28 h-screen bg-white-900'>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
         loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen pb-5 "
      >
        <SwiperSlide className='text-gray-800'>slide1</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 2</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 3</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 4</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 5</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 6</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 7</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 8</SwiperSlide>
        <SwiperSlide className='text-gray-800'>Slide 9</SwiperSlide>
      </Swiper>
      
    </div>

  )
}

export default Card