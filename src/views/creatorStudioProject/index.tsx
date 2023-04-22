import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import {
  CollectionItemsContainer,
  LayoutWithSidebar,
  TabsRowWithButtons,
} from '@components'
import { CollectionList, GoBack, Header, HelmetComponent } from './components'
import styles from "./styles.module.scss"

export const CreatorStudioProject = memo(() => {
  return (
    <div className={styles.creatorStudioProjectContainer}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name3'>
        <Header />
        <GoBack />
        <CollectionList />
        <TabsRowWithButtons />
        <CollectionItemsContainer />
      </LayoutWithSidebar>
    </div>
  )
})
