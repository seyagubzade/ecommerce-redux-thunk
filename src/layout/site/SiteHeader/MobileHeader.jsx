import React, { Fragment, useState } from 'react'
import { Button, Col, Drawer, Menu, Row } from 'antd'
import styled from 'styled-components'
import Logo from '../../../assets/img/logo.webp'
import { Link } from 'react-router-dom'
import MenuItem from 'antd/es/menu/MenuItem'
import { useMediaQuery } from 'react-responsive'

const MobileHeader = ({ items }) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <StyledHeader>
            <Row className="header-top"  align="center" >
                <Col span={5}>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </Col>
                <Col span={12} className='nav-links'>
                    <Link to='/shop'><i class="fa-light fa-bag-shopping" style={{ fontSize: '24px', color: '#333' }}></i></Link>
                    <StyledHamburger type="primary" onClick={showDrawer} className='hamburger-menu'>
                        <i class="fa-light fa-bars"></i>
                    </StyledHamburger>

                </Col>
            </Row>
            <Drawer placement="right" onClose={onClose} open={open}>
                <Menu mode="vertical" >
                    {
                        items.map((item) => {
                            return <MenuItem style={{
                                paddingbottom: '13px',
                                marginbottom: '13px',
                                borderbottom: "1px solid #ececec"
                            }}><Link to={item.path}>{item.name}</Link></MenuItem>
                        })
                    }
                </Menu>
            </Drawer>

            {/* <Menu mode="horizontal" >
                        {
                            items.map((item) => {
                                return <MenuItem><Link to={item.path}>{item.name}</Link></MenuItem>
                            })
                        }
                    </Menu> */}

            {/* <Row className="header-bottom" justify="space-between">
                <Col >
                    <StyledHeaderSearch className="header-search-block">
                        <input type="text" placeholder="Search entire store here" />
                        <button>Search</button>
                    </StyledHeaderSearch>
                </Col>
                <Col className='cart' >
                    <Row justify="end" style={{ width: 'max-content' }}>
                        <Row align='center' style={{ display: 'flex', flexWrap: 'nowrap' }}>
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
    min-width: 100%;
    height: 99px;
    margin: 12px auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ant-row{
      display:flex;
      align-items:center;
    }
    .header-top{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      height: 78px
      .logo{
        width:180px;
        height: auto;
      }
    }
    .ant-menu-root.ant-menu-vertical{
        border-inline-end: none!important;
    }
    .nav-links{
      display: flex;
      justify-content: flex-end;
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
        border: none;
    }


    @media screen and (min-width: 1200px){
    width: 1140px;
    }
    `;

const StyledHamburger = styled.button`
    background: none;
    outline: none;
    border: none;
    font-size: 26px;
    margin-left: 12px;
`


const StyledHeaderSearch = styled.div`
    position: relative;
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
export default MobileHeader