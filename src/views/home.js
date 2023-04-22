import React from 'react'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import TrendingCarousel1 from '../components/trending-carousel1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar>
        <div className="home-categories">
          <div className="home-sort">
            <span className="home-text">
              <span>All</span>
              <br></br>
            </span>
          </div>
          <div className="home-sort1">
            <span className="home-text03">
              <span>Avatars</span>
              <br></br>
            </span>
          </div>
          <div className="home-sort2">
            <span className="home-text06">
              <span>Art</span>
              <br></br>
            </span>
          </div>
          <div className="home-sort3">
            <span className="home-text09">
              <span>Games</span>
              <br></br>
            </span>
          </div>
          <div className="home-sort4">
            <span className="home-text12">
              <span>Memberships</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-header">
          <div className="article-container home-container01">
            <div className="home-container-pop article-img-holder">
              <div className="home-mask-overlay"></div>
            </div>
            <div className="home-gray-overlay article-title-link">
              <div className="home-container02">
                <div className="home-text-header">
                  <h1 className="home-text15 Heading1">Featured Collection</h1>
                  <h3 className="home-text16">By Sharp Collective</h3>
                  <div className="home-container03">
                    <div className="home-container04">
                      <div className="home-container05">
                        <div className="home-dot"></div>
                        <span className="home-text17">MINTING STARTS</span>
                      </div>
                      <div className="home-container06">
                        <span className="home-text18">1 JUL 2023</span>
                      </div>
                    </div>
                    <div className="home-container07">
                      <span className="home-text19">view drop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-featured-projects">
            <div className="home-container08"></div>
            <div className="home-container09"></div>
            <div className="home-container10"></div>
            <div className="home-container11"></div>
            <div className="home-container12"></div>
          </div>
        </div>
        <div className="home-collections">
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name"></TrendingCarousel1>
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name2"></TrendingCarousel1>
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name1"></TrendingCarousel1>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Home
