import React from 'react'
import SiteHeader from '../../layout/site/SiteHeader'
import SiteFooter from '../../layout/site/SiteFooter'
import { Outlet } from 'react-router'
import Layout, { Content } from 'antd/es/layout/layout'

const Site = () => {
  return (
    <Layout>
      <SiteHeader />
      <Content style={{ minHeight: '100vh', background: "#fff" }}>
        <Outlet />
      </Content>
      <SiteFooter />
    </Layout>

  )
}

export default Site