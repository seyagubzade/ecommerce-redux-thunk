import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.webp";
import styled from "styled-components";

const SiteFooter = () => {
  return (
    <StyledFooter>
      <Row>
        <Col sm={24} lg={12} xl={6} className="company-brief">
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
        <Col sm={24} lg={12} xl={6}>
          <h3>INFORMATION</h3>
          <ul>
            <li><Link>Prices drop</Link></li>
            <li><Link>New products</Link></li>
            <li><Link>Best sales</Link></li>
            <li><Link>Contact us</Link></li>
            <li><Link>Sitemap</Link></li>
          </ul>
        </Col>
        <Col sm={24} lg={12} xl={6}>
        <h3>INFORMATION</h3>
          <ul>
            <li><Link>Prices drop</Link></li>
            <li><Link>New products</Link></li>
            <li><Link>Best sales</Link></li>
            <li><Link>Contact us</Link></li>
            <li><Link>Sitemap</Link></li>
          </ul>
        </Col>
        <Col sm={24} lg={12} xl={6}>
          4
        </Col>
      </Row>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  .company-brief {
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
  }
`;

export default SiteFooter;
