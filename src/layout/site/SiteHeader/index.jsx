import { Col, Menu, Row } from 'antd'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import Logo from '../../../assets/img/logo.webp'
import { Link } from 'react-router-dom'
import MenuItem from 'antd/es/menu/MenuItem'
import { useMediaQuery } from 'react-responsive'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const SiteHeader = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 959px)' })
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Cart', path: '/cart' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <HeaderContent>
    {
      isTabletOrMobile && <MobileHeader items={items}/>
    }
     {
      isDesktopOrLaptop && <DesktopHeader items={items}/>
     }
    </HeaderContent>
  )
}

const HeaderContent=styled.div`
width: 100%;
background: #fff;
`

export default SiteHeader