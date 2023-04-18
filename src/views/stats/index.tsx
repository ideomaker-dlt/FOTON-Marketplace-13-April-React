import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

import { LayoutWithSidebar, RankingList } from '@components'
import styles from './styles.module.scss'

export const Stats = memo(() => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          Stats - FOTON Marketplace for NFTs and Digital Collectibles on Radix
          DLT
        </title>
        <meta
          name='description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
        <meta
          property='og:title'
          content='Stats - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT'
        />
        <meta
          property='og:description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
      </Helmet>
      <LayoutWithSidebar>
        <div className={styles.headline}>
          <span>Collections Stats</span>
        </div>
        <div className={styles.filters}>
          <span>Trending</span>
          <span>Newest</span>
          <span>Following</span>
        </div>
        <div className={styles.statsContainer}>
          <RankingList />
        </div>
      </LayoutWithSidebar>
    </div>
  )
})
