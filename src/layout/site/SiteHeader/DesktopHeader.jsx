import React, { Fragment } from 'react'
import { Col, Menu, Row } from 'antd'
import styled from 'styled-components'
import Logo from '../../../assets/img/logo.webp'
import { Link } from 'react-router-dom'
import MenuItem from 'antd/es/menu/MenuItem'
import { useMediaQuery } from 'react-responsive'

const DesktopHeader = ({items}) => {
  return (
    <StyledHeader>
         <Row className="header-top" style={{position: 'sticky', zIndex: '1000'}}>
        <Col span={5}>
          <Link to='/' className='logo'>
            <img src={Logo} alt="logo" />
          </Link>
        </Col>
        <Col span={5} className="support">
          <Row align='center'>
            <Col span={8} className='d-flex-center'>
              <i className="fa-solid fa-headphones-simple" style={{ fontSize: '36px', color: '#62ab00' }}></i>
            </Col>
            <Col span={16} className="support-text">
              <p>Free Support 24/7</p>
              <p style={{textWrap: 'nowrap'}}><b>+01-202-555-0181</b></p>
            </Col>
          </Row>
        </Col>
        <Col span={14} className='nav-links'>
          <Menu mode="horizontal" >
            {
              items.map((item) => {
                return <MenuItem><Link to={item.path}>{item.name}</Link></MenuItem>
              })
            }
          </Menu>
        </Col>

      </Row>
      {/* <Row className="header-bottom" justify="space-between">
        <Col >
          <StyledHeaderSearch className="header-search-block">
            <input type="text" placeholder="Search entire store here" />
            <button>Search</button>
          </StyledHeaderSearch>
        </Col>
        <Col className='cart' >
          <Row justify="end" style={{width: 'max-content'}}>
            <Row align='center' style={{display: 'flex', flexWrap: 'nowrap'}}>
              <Col span={6} className='d-flex-center'>
                <i className="fa-light fa-cart-shopping" style={{ fontSize: '28px', color: '#62ab00' }}></i>
              </Col>
              <Col span={18} className="cart-text">
                <p>Shopping Cart</p>
                <p className="price"><b>£0.00</b></p>
              </Col>
            </Row>
          </Row>

        </Col>

      </Row> */}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #333;
    font-size: 14px;
    line-height: 1.75;
    min-width: 940px;
    margin: 12px auto;
    padding: 0 20px;
    .ant-row{
      display:flex;
      align-items:center;
    }
    .d-flex-center{
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .header-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 78px
      .logo{
        width:180px;
        height: auto;
      }
    }
    .nav-links{
      display: flex;
      justify-content: flex-end;
    }
    .ant-menu-light, :where(.css-dev-only-do-not-override-6j9yrn).ant-menu-light>.ant-menu {
    color: rgba(0, 0, 0, 0.88);
    background: transparent;
    }
    .ant-menu-horizontal {
    line-height: 46px;
    border: 0;
    border-bottom: none;
    box-shadow: none;
    }
    .nav-links li{
      margin-left: 5px;
        margin-right: 5px;
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 400;
        color: #333;
    }
    .ant-menu-item-selected{
      color: #62ab00!important;
    background-color: transparent;
    }
    .ant-menu-item:hover::after{
      border-bottom-width: 2px;
    border-bottom-color: #62ab00!important;
    }
    .ant-menu-item:hover::active {
    border-bottom-width: 2px;
    border-bottom-color: #62ab00!important;
}
.ant-menu-item-selected::after {
    border-bottom-width: 2px;
    border-bottom-color: #62ab00!important;
}
.header-bottom{
  margin-top: 12px;
}
.cart-text{
  width: 120px;
  text-wrap: nowrap;
  margin-right: 21px
}
.price {
    color: #62ab00;
    font-style: normal;
    font-weight: 600;
    display: block;
    font-size: 18px;
    line-height: 1;
}
    @media screen and (min-width: 1200px){
    width: 1140px;
    }
    `;

const StyledHeaderSearch = styled.div`
    position: relative;
    width: 350px;
    input {
      font-size: 16px;
      color: #333;
      width: 100%;
      height: 52px;
      float: none;
      font-weight: 400;
      background: #fff;
      border: 2px solid #eee;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      padding: 0 125px 0 20px;
      outline: none;
    }
   button {
     position: absolute;
     top: 0;
     right: 0;
     background: #62ab00;
     border: 0;
     line-height: 52px;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     margin: 0;
     font-size: 15px;
     font-weight: 700;
     padding: 0 35px;
     color: #fff;
     border-radius: 0;
     border-top-right-radius: 3px;
     border-bottom-right-radius: 3px;
    } 
    `

export default DesktopHeader