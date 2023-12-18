import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

import { Grid, Pagination } from 'swiper/modules';
import CustomCard from '../CustomCard';
const SwiperCardList = ({items, slidesPerView=3, rows=2, spaceBetween=12, isSmall }) => {
  return (
    <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: rows,
        }}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {
            items.map((item)=>(
            <SwiperSlide>
                <CustomCard item={item}/>
            </SwiperSlide>))
        }
      </Swiper>
  )
}

export default SwiperCardList