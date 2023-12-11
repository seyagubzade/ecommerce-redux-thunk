import React from 'react'
import SiteHeader from '../../layout/site/SiteHeader'
import SiteFooter from '../../layout/site/SiteFooter'
import { Outlet } from 'react-router'

const Site = () => {
  return (
    <div>
        <SiteHeader />
        Site
        <Outlet />
        <SiteFooter />
    </div>
  )
}

export default Site