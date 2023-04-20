import React from 'react'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import CollectionItemsContainer from '../components/collection-items-container'
import './collection-page.css'

const CollectionPage = (props) => {
  return (
    <div className="collection-page-container">
      <Helmet>
        <title>
          Collection-Page - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Collection-Page - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name4">
        <div className="collection-page-container01">
          <div className="collection-page-container02">
            <img
              src="/playground_assets/vlad__foton.is__radix.stream_pirates_tropical_island_illustrati_766cf345-d799-426c-ac63-a659abb90994-1500w.png"
              alt="image"
              className="collection-page-image"
            />
          </div>
          <div className="collection-page-container03">
            <div className="collection-page-container04">
              <div className="collection-page-avatar-logo">
                <img
                  src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="collection-page-image1"
                />
              </div>
              <div className="collection-page-container05">
                <h1 className="collection-page-text">Collection One</h1>
                <div className="collection-page-container06">
                  <h1 className="collection-page-text01">
                    <span>By Smooth Collective</span>
                    <br></br>
                  </h1>
                  <h1 className="collection-page-text04">
                    <span>Verified</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <div className="collection-page-container07">
              <div className="collection-page-description-collection">
                <div className="collection-page-container08">
                  <h1 className="collection-page-text07">
                    <span>
                      The crew of pirates gathered around a campfire on a
                      tropical island, their ship anchored offshore. They
                      toasted their recent plunder and shared stories of
                      adventure. The sound of waves and the scent of saltwater
                      filled the air, as they planned their next raid under the
                      glow of the moon.
                    </span>
                    <br></br>
                  </h1>
                  <h1 className="collection-page-text10">
                    <span>
                      Created on 23 Apr 2023 · Last updated 28 Apr 2023 
                    </span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <div className="collection-page-small-stats">
              <div className="collection-page-small-card">
                <span className="collection-page-text13">10000</span>
                <span className="collection-page-text14">Items</span>
              </div>
              <div className="collection-page-small-card1">
                <span className="collection-page-text15">573</span>
                <span className="collection-page-text16">Followers</span>
              </div>
              <div className="collection-page-small-card2">
                <span className="collection-page-text17">28k</span>
                <span className="collection-page-text18">Views</span>
              </div>
              <div className="collection-page-small-card3">
                <span className="collection-page-text19">5%</span>
                <span className="collection-page-text20">Creator Earnings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-page-tabs-row">
          <span className="collection-page-text21">Items</span>
          <span className="collection-page-text22">About</span>
          <span className="collection-page-text23">Followers</span>
        </div>
        <div className="collection-page-container09">
          <CollectionItemsContainer></CollectionItemsContainer>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default CollectionPage
