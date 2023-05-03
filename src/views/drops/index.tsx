import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import styles from './styles.module.scss'
import { DropList, Header, HelmetComponent, Tabs } from './components'

export const Drops = memo(() => {
  return (
    <div className={styles.container}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name17">
        <div className={styles.row}>
          <span>Drops</span>
        </div>
        <div className={styles.container01}></div>
        <Header />
        <Tabs />
        <DropList />
      </LayoutWithSidebar>
    </div>
  )
})
