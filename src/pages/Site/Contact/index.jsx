import { Col, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact>
      <Typography style={{ marginBottom: "30px" }}>
        <Title level={5}>
          <Link to="/">Home</Link> / Cart
        </Title>
      </Typography>
      <Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2saz!4v1702731633046!5m2!1sen!2saz"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Row>
      <Row  style={{marginTop: '60px'}}>
        <Col xs={24} md={12}>
          <div class="contact_adress">
            <div class="ct_address">
              <h3 class="ct_title">Location &amp; Details</h3>
              <p>
                It is a long established fact that readewill be distracted by
                the readable content of a page when looking at ilayout.
              </p>
            </div>
            <div class="address_wrapper">
              <div class="address">
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-info-text">
                  <p>
                    <span>Address:</span> 1234 - Bandit Tringi lAliquam <br />{" "}
                    Vitae. New York
                  </p>
                </div>
              </div>
              <div class="address">
                <div class="icon">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="contact-info-text">
                  <p>
                    <span>Email: </span> support@example.com{" "}
                  </p>
                </div>
              </div>
              <div class="address">
                <div class="icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="contact-info-text">
                  <p>
                    <span>Phone:</span> (800) 0123 456 789{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div class="contact_form">
            <h3 class="ct_title">Send Us a Message</h3>
            <form
              id="contact-form"
              action="php/mail.php"
              method="post"
              class="contact-form"
            >
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>
                      Your Name <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="con_name"
                      name="con_name"
                      class="form-control"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>
                      Your Email <span class="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="con_email"
                      name="con_email"
                      class="form-control"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Your Phone*</label>
                    <input
                      type="text"
                      id="con_phone"
                      name="con_phone"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Your Message</label>
                    <textarea
                      id="con_message"
                      name="con_message"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-btn">
                    <button
                      type="submit"
                      value="submit"
                      id="submit"
                      class="btn btn-black"
                      name="submit"
                    >
                      send
                    </button>
                  </div>
                  <div class="form__output"></div>
                </div>
              </div>
            </form>
            <div class="form-output">
              <p class="form-messege"></p>
            </div>
          </div>
        </Col>
      </Row>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  background-color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #333;
  font-size: 14px;
  line-height: 1.75;
  padding: 0 40px;
  margin: 0 auto;
  .ant-typography a {
    color: #333;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }
  p {
    margin-bottom: 1rem;
  }
  .ct_title {
    color: #555555;
    font-weight: 400;
    margin-bottom: 15px;
    font-size: calc(1.3rem + 0.6vw);
  }
  .ct_address p {
    color: #555555;
    line-height: 28px;
    margin-bottom: 35px;
    font-size: 14px;
  }
  .address_wrapper .address {
    display: flex;
    margin-bottom: 15px;
  }
  .address_wrapper .address .icon {
    min-width: 35px;
  }
  .address_wrapper .address .icon i {
    color: #555555;
    font-size: 22px;
  }
  .address .contact-info-text p span {
    font-weight: 600;
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .contact-form label {
    color: #555555;
  }
  .form-control {
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
  .contact-form input {
    border-radius: 3px;
    height: 45px;
    outline: none;
  }
  .contact-form .form-control {
    background: transparent;
    font-size: 14px;
    color: #252525;
  }
  .contact_form textarea {
    border-radius: 3px;
    height: 150px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
  }
  .contact-form .form-control:focus {
    outline: none;
    box-shadow: none;
    border-color: #62ab00;
  }
  button {
    height: 50px;
    padding: 0 40px;
  }
  .btn-black {
    align-items: center;
    color: #fff;
    background: #333;
    font-size: 13px;
    font-weight: 500;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    display: inline-flex;
    border: none;
    outline: none;
    text-shadow: none;
    text-transform: uppercase;
  }
  @media screen and (min-width: 920px) {
    width: 720px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;
