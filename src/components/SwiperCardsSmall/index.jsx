import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

import { Grid, Pagination } from 'swiper/modules';
import CustomCard from '../CustomCard';
import styled from 'styled-components';
const SwiperCardsSmall = ({ items, slidesPerView = 3, rows = 2, spaceBetween = 12, isSmall }) => {
    console.log(isSmall)
    return (
        <StyledSwiper>
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
                    items.map((item) => (
                        <SwiperSlide>
                            <CustomCard item={item} />
                        </SwiperSlide>))
                }
            </Swiper>
        </StyledSwiper>
    )
}

const StyledSwiper = styled.div`
img{
    width: 120px!important;
    height: 150px!important;
}
`

export default SwiperCardsSmall
