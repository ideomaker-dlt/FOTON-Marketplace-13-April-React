import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import styles from "./styles.module.scss"
import { Form, Header, HelmetComponent, Menu } from './components'

export const AddCollection1 = memo(() => {
  return (
    <div className={styles.addCollection1Container}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name9'>
        <Header />
        <Menu />
        <Form />
      </LayoutWithSidebar>
    </div>
  )
})
