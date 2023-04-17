import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import { Header, Projects, Resources } from './components'
import styles from './styles.module.scss'

export const CreatorStudio = memo(() => {
  return (
    <div className={styles.creatorStudioContainer}>
      <Helmet>
        <title>
          Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name='description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
        <meta
          property='og:title'
          content='Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT'
        />
        <meta
          property='og:description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
      </Helmet>
      <LayoutWithSidebar>
        <Header />
        <div className={styles.creatorStudioTabsHeader}>
          <div>
            <span>My Projects</span>
          </div>
        </div>
        <Projects />
        <div className={styles.creatorStudioTabsHeader}>
          <div>
            <span>Resources</span>
          </div>
        </div>
        <Resources />
      </LayoutWithSidebar>
    </div>
  )
})
