import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import styles from "./styles.module.scss"
import { AddItem, Header, HelmetComponent, Menu } from './components'

export const AddItemsSelector = memo(() => {
  return (
    <div className={styles.addItemsSelectorContainer}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name10'>
        <Header />
        <Menu />
        <AddItem />
      </LayoutWithSidebar>
    </div>
  )
})
