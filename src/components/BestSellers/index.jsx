import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SwiperCardList from "../SwiperCardList";
import SwiperCardsSmall from "../SwiperCardsSmall";

const BestSellers = ({ items }) => {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    let newData = items.filter((item) => item.isBestSeller == true);
    setBestSellers([...newData]);
    console.log(newData);
  }, [items]);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://htmldemo.net/pustok/pustok/image/bg-images/best-seller-bg.jpg')",
        padding: "40px 20px",
      }}
    >
      <StyledContainer>
        <div class="section-title section-title--bordered mb-0">
          <h2>Best BEST SELLER BOOKS</h2>
        </div>
        <div className="best-seller-block">
          <Row>
            <Col xs={24} md={10} lg={12}>
              <div class="author-image">
                <img
                  src="https://htmldemo.net/pustok/pustok/image/others/best-seller-author.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col xs={24} md={14} lg={12} style={{ padding: "0 10px" }}>
              {bestSellers && (
                <SwiperCardList
                  items={bestSellers}
                  rows={1}
                  slidesPerView={2}
                  isSmall={true}
                />
              )}
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </div>
  );
};
const StyledContainer = styled.div`
  max-width: 920px;
  margin: 20px auto;
  .product-card img {
    width: 120px !important;
    height: 150px !important;
  }
  .swiper-slide {
    height: 300px !important;
  }
  .swiper-slide > div {
    margin: 0 !important;
  }
  .swiper-pagination {
    bottom: 0;
    margin-top: 12px;
  }
  .section-title--bordered {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
  }
  .section-title {
    text-align: center;
    margin-top: -8px;
    margin-bottom: 30px;
  }
  .section-title h2 {
    position: relative;
    text-transform: uppercase;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    line-height: 30px;
    color: #222222;
    font-weight: 600;
  }
  .best-seller-block {
    background: #fff;
    border-radius: 3px;
    padding: 30px;
  }
  .author-image img {
    width: 100%
  }
  @media screen and (max-width: 920px) {
    max-width: 720px;
  }
`;

export default BestSellers;
