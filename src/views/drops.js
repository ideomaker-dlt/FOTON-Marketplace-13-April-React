import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './drops.css'

const Drops = (props) => {
  return (
    <div className="drops-container">
      <Helmet>
        <title>
          Drops - FOTON Marketplace for NFTs and Digital Collectibles on Radix
          DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Drops - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name17">
        <div className="drops-tabs-row">
          <span className="drops-text">Drops</span>
        </div>
        <div className="drops-container01"></div>
        <div className="drops-header">
          <div className="article-container drops-container02">
            <div className="drops-container-pop article-img-holder"></div>
            <div className="drops-gray-overlay article-title-link">
              <div className="drops-container03">
                <div className="drops-text-header">
                  <h1 className="drops-text01 Heading1">Featured Drop</h1>
                  <h3 className="drops-text02">By Sharp Collective</h3>
                  <div className="drops-container04">
                    <div className="drops-container05">
                      <div className="drops-container06">
                        <div className="drops-dot"></div>
                        <span className="drops-text03">Time to DROP</span>
                      </div>
                      <div className="drops-container07">
                        <span className="drops-text04">coming soon</span>
                      </div>
                    </div>
                    <div className="drops-container08">
                      <span className="drops-text05">view drop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drops-mask-overlay"></div>
        </div>
        <div className="drops-tabs-row1">
          <span className="drops-text06">Upcoming</span>
          <span className="drops-text07">Active</span>
          <span className="drops-text08">Past</span>
        </div>
        <div className="drops-drops-container">
          <div className="drops-wrapper-grid">
            <Link to="/collection-drop-page">
              <div className="drops-item1">
                <div className="drops-image-header"></div>
                <div className="drops-text-box">
                  <div className="drops-container09">
                    <span className="drops-text09">Collection 1</span>
                  </div>
                  <div className="drops-container10">
                    <div className="drops-floor">
                      <span className="drops-text10 SmallestLabels">price</span>
                      <span className="drops-text11 Content16SemiBold">
                        TBA
                      </span>
                    </div>
                    <div className="drops-volume24">
                      <span className="drops-text12 SmallestLabels">
                        Minting
                      </span>
                      <span className="drops-text13 Content16SemiBold">
                        SOON
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="drops-item11">
              <div className="drops-image-header1"></div>
              <div className="drops-text-box1">
                <div className="drops-container11">
                  <span className="drops-text14">Collection 1</span>
                </div>
                <div className="drops-container12">
                  <div className="drops-floor1">
                    <span className="drops-text15 SmallestLabels">price</span>
                    <span className="drops-text16 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume241">
                    <span className="drops-text17 SmallestLabels">Minting</span>
                    <span className="drops-text18 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item12">
              <div className="drops-image-header2"></div>
              <div className="drops-text-box2">
                <div className="drops-container13">
                  <span className="drops-text19">Collection 1</span>
                </div>
                <div className="drops-container14">
                  <div className="drops-floor2">
                    <span className="drops-text20 SmallestLabels">price</span>
                    <span className="drops-text21 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume242">
                    <span className="drops-text22 SmallestLabels">Minting</span>
                    <span className="drops-text23 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item13">
              <div className="drops-image-header3"></div>
              <div className="drops-text-box3">
                <div className="drops-container15">
                  <span className="drops-text24">Collection 1</span>
                </div>
                <div className="drops-container16">
                  <div className="drops-floor3">
                    <span className="drops-text25 SmallestLabels">price</span>
                    <span className="drops-text26 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume243">
                    <span className="drops-text27 SmallestLabels">Minting</span>
                    <span className="drops-text28 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item14">
              <div className="drops-image-header4"></div>
              <div className="drops-text-box4">
                <div className="drops-container17">
                  <span className="drops-text29">Collection 1</span>
                </div>
                <div className="drops-container18">
                  <div className="drops-floor4">
                    <span className="drops-text30 SmallestLabels">price</span>
                    <span className="drops-text31 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume244">
                    <span className="drops-text32 SmallestLabels">Minting</span>
                    <span className="drops-text33 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item15">
              <div className="drops-image-header5"></div>
              <div className="drops-text-box5">
                <div className="drops-container19">
                  <span className="drops-text34">Collection 1</span>
                </div>
                <div className="drops-container20">
                  <div className="drops-floor5">
                    <span className="drops-text35 SmallestLabels">price</span>
                    <span className="drops-text36 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume245">
                    <span className="drops-text37 SmallestLabels">Minting</span>
                    <span className="drops-text38 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item16">
              <div className="drops-image-header6"></div>
              <div className="drops-text-box6">
                <div className="drops-container21">
                  <span className="drops-text39">Collection 1</span>
                </div>
                <div className="drops-container22">
                  <div className="drops-floor6">
                    <span className="drops-text40 SmallestLabels">price</span>
                    <span className="drops-text41 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume246">
                    <span className="drops-text42 SmallestLabels">Minting</span>
                    <span className="drops-text43 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item17">
              <div className="drops-image-header7"></div>
              <div className="drops-text-box7">
                <div className="drops-container23">
                  <span className="drops-text44">Collection 1</span>
                </div>
                <div className="drops-container24">
                  <div className="drops-floor7">
                    <span className="drops-text45 SmallestLabels">price</span>
                    <span className="drops-text46 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume247">
                    <span className="drops-text47 SmallestLabels">Minting</span>
                    <span className="drops-text48 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-item18">
              <div className="drops-image-header8"></div>
              <div className="drops-text-box8">
                <div className="drops-container25">
                  <span className="drops-text49">Collection 1</span>
                </div>
                <div className="drops-container26">
                  <div className="drops-floor8">
                    <span className="drops-text50 SmallestLabels">price</span>
                    <span className="drops-text51 Content16SemiBold">TBA</span>
                  </div>
                  <div className="drops-volume248">
                    <span className="drops-text52 SmallestLabels">Minting</span>
                    <span className="drops-text53 Content16SemiBold">SOON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Drops
