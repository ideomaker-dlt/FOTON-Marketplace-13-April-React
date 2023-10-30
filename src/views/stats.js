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
          Stats - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Stats - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
        />
        <meta
          property="og:description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/960fd433-f55d-424c-a4b7-18ebfa3fe35e/73f897ab-0871-4173-9275-412ff9f275f2?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name13">
        <div className="stats-tabs-row">
          <span className="stats-text">Collections Stats</span>
        </div>
        <div className="stats-tabs-row1">
          <span className="stats-text1">Trending</span>
          <span className="stats-text2">Newest</span>
          <span className="stats-text3">Following</span>
        </div>
        <div className="stats-container1">
          <RankingList rootClassName="ranking-list-root-class-name5"></RankingList>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Stats
