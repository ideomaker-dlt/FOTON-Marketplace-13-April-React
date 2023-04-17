import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

import { LayoutWithSidebar, TrendingCarousel } from '@components'
import { Categories, Header } from './components'
import styles from './styles.module.scss'

export const Home = memo(() => {
  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>
          FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT
        </title>
        <meta
          name='description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
        <meta
          property='og:title'
          content='FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT'
        />
        <meta
          property='og:description'
          content='Collect , Trade or Mint NFTs and find your Communities'
        />
      </Helmet>
      <LayoutWithSidebar>
        <Categories />
        <Header />
        <div className={styles.homeCollections}>
          <TrendingCarousel />
          <TrendingCarousel />
          <TrendingCarousel />
        </div>
      </LayoutWithSidebar>
    </div>
  )
})
