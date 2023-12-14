import React from 'react'
import SiteHeader from '../../layout/site/SiteHeader'
import SiteFooter from '../../layout/site/SiteFooter'
import { Outlet } from 'react-router'
import Layout, { Content } from 'antd/es/layout/layout'
import ScrollToTop from '../../utils/ScrollToTop'
import { Toaster } from 'react-hot-toast'

const Site = () => {
  return (
    <Layout>
      <ScrollToTop />
      <SiteHeader />
      <Content style={{ minHeight: '100vh', background: "#fff" }}>
        <Outlet />
      </Content>
      <SiteFooter />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Layout>

  )
}

export default Site