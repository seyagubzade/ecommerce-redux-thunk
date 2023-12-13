import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const Features = ({allFeatures}) => {

  return (
    <StyledFeatures>
      <Row>
        {allFeatures.map((item, index) => {
          return (
            <Col sm={24} md={12} lg={12} xl={6}>
              <div className="feature-box">
                <Row>
                    <Col span={5} className="icon">{item.icon}</Col>
                    <Col span={19} className="text">
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </StyledFeatures>
  );
};

const StyledFeatures = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    .feature-box{
        border: 2px solid #e5e5e5;
        padding: 15px;
        margin: 8px;
    }
    i{
        font-size: 32px;
        color: #62ab00;
    }
`;
export default Features;
