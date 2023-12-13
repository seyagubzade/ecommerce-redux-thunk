import React from "react";
import { Carousel, Col, Row } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
const contentStyle = {
  margin: 0,
  height: "470px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f5f4fa",
  display: 'flex',
  flexDirection:'column',
  justifyContent:'center'
};

const HomeCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <StyledCarousel>
      <Carousel afterChange={onChange}>
        <div>
          <div style={contentStyle}>
            <Row>
              <Col span={12}>
                <img
                  src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png"
                  alt=""
                  style={{ height: "100%", width: "auto", margin:'20px' }}
                />
              </Col>
              <Col span={12}>
                <h1>
                  J.D. Kurtness 
                  De Vengeance
                </h1>
                <h2>Cover Up Front Of Books and Leave Summary</h2>
                <div style={{display:'flex'}}>
                <Link to="/shop" class="btn btn-outlined--primary" tabindex="0">
                  $78.09 - Learn More
                </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={{...contentStyle, backgroundColor: "#EDEDED"}}>
            <Row>
              <Col span={12}>
                <h1>
                  J.D. Kurtness
                  De Vengeance
                </h1>
                <h2>Cover Up Front Of Books and Leave Summary</h2>
                <div style={{display:'flex'}}>
                <Link to="/shop" class="btn btn-outlined--primary" tabindex="0">
                  $78.09 - Learn More
                </Link>
                </div>
              </Col>
              <Col span={12}>
                <img
                  src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png"
                  alt=""
                  style={{ height: "100%", width: "auto"}}
                />
              </Col>
            </Row>
          </div>
        </div>
        
      </Carousel>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  text-align: left;
  .slick-dots li {
    width: 12px;
    height: 12px;
  }
  .slick-dots li button {
    background: #333;
    opacity: 0.3;
    height: 100% !important;
    border-radius: 50px;
  }
  .ant-carousel .slick-dots .slick-active button {
    background: #62ab00;
    opacity: 0.7;
  }
  .ant-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
  }
  img{
    object-fit: contain;
  }
  h1 {
    line-height: 1;
    font-size: 40px;
    color: #333333;
    text-transform: capitalize;
    font-weight: 600;
    position: relative;
    padding: 0;
    line-height: 1.2;
    margin-bottom: 20px;
    text-align: left;
  }
  h2 {
    color: #333;
    font-weight: 300;
    font-style: italic;
    text-transform: capitalize;
    margin: 0;
    line-height: 1.2;
    padding: 0;
    font-size: 16px;
    text-align: left;
  }
  .btn-outlined--primary {
    background: transparent;
    border: 2px solid #62ab00 !important;
    color: #62ab00;
    margin-top: 45px;
    padding: 0 30px;
    
  }
  .btn {
    font-size: 13px;
    text-transform: capitalize;
    margin-top: 30px;
    padding: 0 20px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
`;

export default HomeCarousel;
