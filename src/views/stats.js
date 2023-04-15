import React from 'react'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import RankingList from '../components/ranking-list'
import './stats.css'

const Stats = (props) => {
  return (
    <div className="stats-container">
      <Helmet>
        <title>
          Stats - FOTON Marketplace for NFTs and Digital Collectibles on Radix
          DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Stats - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name4">
        <div className="stats-tabs-row">
          <span className="stats-text">Collections Stats</span>
        </div>
        <div className="stats-tabs-row1">
          <span className="stats-text1">Trending</span>
          <span className="stats-text2">Newest</span>
          <span className="stats-text3">Following</span>
        </div>
        <div className="stats-container1">
          <RankingList rootClassName="ranking-list-root-class-name4"></RankingList>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Stats
