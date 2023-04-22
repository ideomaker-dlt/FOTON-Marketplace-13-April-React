import React, { memo } from 'react'
import { CollectionItemsContainer, LayoutWithSidebar } from '@components'
import styles from "./styles.module.scss"
import { Filter, Header, HelmetComponent } from './components'

export const CreatorStudioCollection = memo(() => {
  return (
    <div className={styles.creatorStudioCollectionContainer}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name7'>
        <Header />
        <Filter />
        <CollectionItemsContainer />
      </LayoutWithSidebar>
    </div>
  )
})
