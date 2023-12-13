import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.webp";
import styled from "styled-components";

const SiteFooter = () => {
  return (
    <StyledFooter>
      <Row className="footer-top">
        <Col sm={24} md={12} lg={7} xl={7} className="company-brief">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="company-details">
            <b>Address:</b>
            <span>Example Street 98, HH2 BacHa, New York, USA</span>
          </div>
          <div className="company-details">
            <b>Phone:</b>
            <span>+18088 234 5678</span>
          </div>
          <div className="company-details">
            <b>Email:</b>
            <span>suport@hastech.com</span>
          </div>
        </Col>
        <Col sm={24} md={12} lg={5} xl={5}>
          <h3>INFORMATION</h3>
          <ul>
            <li>
              <Link>Prices drop</Link>
            </li>
            <li>
              <Link>New products</Link>
            </li>
            <li>
              <Link>Best sales</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Sitemap</Link>
            </li>
          </ul>
        </Col>
        <Col sm={24} md={12} lg={6} xl={6}>
          <h3>EXTRAS</h3>
          <ul>
            <li>
              <Link>Delivery</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Stores</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Sitemap</Link>
            </li>
          </ul>
        </Col>
        <Col sm={24} md={12} lg={6} xl={6}>
          <h3>NEWSLETTER SUBSCRIBE</h3>
          <div>
            <input
              type="text"
              className="form-item"
              placeholder="Enter Your Email Address Here..."
            />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </Col>
      </Row>
      <Row className="footer-bottom">
        <div class="container">
          <p class="copyright-heading">
            Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor.
            Etiam vel magna volutpat, posuere eros
          </p>
          <a href="#" class="payment-block">
            <img src="https://htmldemo.net/pustok/pustok/image/icon/payment.png" alt="" />
          </a>
          <p class="copyright-text">
            Copyright © 2022{" "}
            <a href="#" class="author">
              Pustok
            </a>
            . All Right Reserved.
            <br />
            Design By Pustok
          </p>
        </div>
      </Row>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  .footer-top{
    padding: 40px 60px;
    background: #fff;
  }
  .logo {
    img {
      width: 150px;
      height: auto;
    }
  }
  .company-details {
    margin-top: 12px;
  }
  li {
    list-style: none;
    margin-bottom: 8px;
    font-size: 14px;
    a {
      color: #333;
    }
  }
  h3 {
    margin-bottom: 12px;
  }
  .ant-col {
    margin-bottom: 30px;
  }
  .form-item {
    display: inline-block;
    padding: 10px 15px;
    line-height: 30px;
    height: 52px;
    color: #7b7b7b;
    font-size: 15px;
    width: 100%;
    border: 2px solid #eeeeee;
    background: #fff;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .subscribe-btn {
    background: #62ab00;
    color: #fff;
    align-items: center;
    min-height: 50px;
    font-size: 13px;
    font-weight: 600;
    padding: 0 50px;
    border-radius: 3px;
    text-transform: uppercase;
    line-height: 1;
    width: 100% !important;
    outline: none;
    border: none;
    margin-top: 8px;
  }

  .footer-bottom{
    padding: 55px 0;
    text-align: center;
    background: #333;
    .container{
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      .copyright-heading{
        color: #fff;
        margin-bottom: 40px;
      }
      .copyright-text {
        background: none;
        text-transform: capitalize;
        font-weight: 400;
        margin-top: 30px;
        line-height: 24px;
        color: #fff;
        margin-bottom: 0;
        a{
          color: #62ab00;
        }
    }
    }

  }
`;

export default SiteFooter;
