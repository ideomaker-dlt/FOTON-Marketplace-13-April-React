import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import RankingPreview from '../components/ranking-preview'
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
          <div className="home-container01">
            <div className="home-container02 article-container">
              <div className="home-container-pop article-img-holder2">
                <div className="home-mask-overlay"></div>
              </div>
              <div className="home-gray-overlay article-title-link">
                <div className="home-container03">
                  <div className="home-text-header">
                    <h1 className="home-text15">
                      Web3&apos;s Digital Assets Hub
                    </h1>
                    <h3 className="home-text16">
                      Create and Trade NFTs Easily on Radix
                    </h3>
                    <div className="home-container04">
                      <div className="home-container05">
                        <div className="home-container06">
                          <div className="home-dot"></div>
                          <span className="home-text17">start creating</span>
                        </div>
                        <Link
                          to="/collection-drop-page"
                          className="home-navlink"
                        >
                          <div className="home-container07">
                            <span className="home-text18">view drops</span>
                          </div>
                        </Link>
                      </div>
                      <div className="home-container08">
                        <span className="home-text19">view drop</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-container09">
                  <div className="home-text-header1">
                    <div className="home-container10">
                      <h1 className="home-text20">
                        Home of Digital Assets on Radix 
                      </h1>
                      <h3 className="home-text21">
                        Create and Trade NFTs the Easy Way
                      </h3>
                    </div>
                    <div className="home-container11">
                      <div className="home-container12">
                        <div className="home-container13">
                          <div className="home-dot1"></div>
                          <span className="home-text22">start creating</span>
                        </div>
                        <Link
                          to="/collection-drop-page"
                          className="home-navlink1"
                        >
                          <div className="home-container14">
                            <span className="home-text23">view drops</span>
                          </div>
                        </Link>
                      </div>
                      <div className="home-container15">
                        <span className="home-text24">view drop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-featured-projects">
              <div className="home-container16"></div>
              <div className="home-container17"></div>
              <div className="home-container18"></div>
              <div className="home-container19"></div>
              <div className="home-container20"></div>
            </div>
          </div>
          <div className="home-news">
            <Link to="/discover" className="home-navlink2">
              <div className="home-container-top">
                <div className="home-container21">
                  <h2 className="home-heading">Discover All Features</h2>
                  <div className="home-container22">
                    <div className="home-info-bubble">
                      <span className="home-text25">
                        The 1 STOP-SHOP
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-info-bubble1">
                      <span className="home-text26">
                        NFT MARKETPLACE
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-info-bubble2">
                      <span className="home-text27">ON RADIX</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="home-container-bottom">
              <Link to="/discover" className="home-navlink3">
                <div className="home-container23">
                  <h2 className="home-heading1">Climb The Leaderboard </h2>
                  <div className="home-container24">
                    <div className="home-info-bubble3">
                      <span className="home-text28">FOTON SEASONS </span>
                    </div>
                    <div className="home-info-bubble4">
                      <span className="home-text29">
                        <span>TESSERACTS &amp; GLORY</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-header1">
          <div className="article-container home-container25">
            <div className="home-container-pop1 article-img-holder">
              <div className="home-mask-overlay1"></div>
            </div>
            <div className="home-gray-overlay1 article-title-link">
              <div className="home-container26">
                <div className="home-text-header2">
                  <h1 className="home-text32 Heading1">Featured Collection</h1>
                  <h3 className="home-text33">By Sharp Collective</h3>
                  <div className="home-container27">
                    <div className="home-container28">
                      <div className="home-container29">
                        <div className="home-dot2"></div>
                        <span className="home-text34">MINTING STARTS</span>
                      </div>
                      <div className="home-container30">
                        <span className="home-text35">1 JUL 2023</span>
                      </div>
                    </div>
                    <div className="home-container31">
                      <span className="home-text36">view drop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-featured-projects1">
            <div className="home-container32"></div>
            <div className="home-container33"></div>
            <div className="home-container34"></div>
            <div className="home-container35"></div>
            <div className="home-container36"></div>
          </div>
        </div>
        <div className="home-collections">
          <RankingPreview></RankingPreview>
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name"></TrendingCarousel1>
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name2"></TrendingCarousel1>
          <TrendingCarousel1 rootClassName="trending-carousel1-root-class-name1"></TrendingCarousel1>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Home
