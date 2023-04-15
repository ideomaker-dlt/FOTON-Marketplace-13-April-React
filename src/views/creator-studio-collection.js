import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import CollectionItemsContainer from '../components/collection-items-container'
import './creator-studio-collection.css'

const CreatorStudioCollection = (props) => {
  return (
    <div className="creator-studio-collection-container">
      <Helmet>
        <title>
          Creator-Studio-Collection - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Collection - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name7">
        <div className="creator-studio-collection-header-creator">
          <div className="creator-studio-collection-gray-overlay"></div>
          <div className="creator-studio-collection-container1">
            <div className="creator-studio-collection-container2">
              <div className="creator-studio-collection-avatar-logo">
                <img
                  src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="creator-studio-collection-image"
                />
              </div>
              <div className="creator-studio-collection-container3">
                <h1 className="creator-studio-collection-text">
                  Collection One
                </h1>
                <div className="creator-studio-collection-container4">
                  <h1 className="creator-studio-collection-text01">
                    <span>1500 items</span>
                    <br></br>
                  </h1>
                  <h1 className="creator-studio-collection-text04">
                    <span>Unlisted</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <div className="creator-studio-collection-buttons">
              <Link
                to="/add-project"
                className="creator-studio-collection-navlink button"
              >
                <span className="creator-studio-collection-text07">
                  <span>Add Items</span>
                  <br></br>
                </span>
              </Link>
              <button className="creator-studio-collection-button button">
                <span className="creator-studio-collection-text10">
                  <span>List</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="creator-studio-collection-tabs-row">
          <div className="creator-studio-collection-container5">
            <Link
              to="/creator-studio-project"
              className="creator-studio-collection-navlink1"
            >
              &lt; go back
            </Link>
            <span className="creator-studio-collection-text13">My Items</span>
          </div>
          <div className="creator-studio-collection-filter-buttons">
            <button type="button" className="creator-studio-collection-button1">
              <svg
                viewBox="0 0 1024 1024"
                className="creator-studio-collection-icon"
              >
                <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
              </svg>
              <span className="creator-studio-collection-text14">
                <span>Filters</span>
                <br></br>
              </span>
            </button>
            <div className="creator-studio-collection-timeframe">
              <button className="creator-studio-collection-button2">
                <span className="creator-studio-collection-text17">
                  <span>1h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button3">
                <span className="creator-studio-collection-text20">
                  <span>6h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button4">
                <span className="creator-studio-collection-text23">
                  <span>24h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button5">
                <span className="creator-studio-collection-text26">
                  <span>7d</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div
              data-thq="thq-dropdown"
              className="creator-studio-collection-sort-by list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-collection-dropdown-toggle"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-collection-icon2"
                >
                  <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                </svg>
                <span className="creator-studio-collection-text29">
                  Sort by Status
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-collection-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-collection-icon4"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-collection-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-collection-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle1"
                  >
                    <span className="creator-studio-collection-text30">
                      Name
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle2"
                  >
                    <span className="creator-studio-collection-text31">
                      Price Low to High
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle3"
                  >
                    <span className="creator-studio-collection-text32">
                      Price High to Low
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle4"
                  >
                    <span className="creator-studio-collection-text33">
                      Status
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle5"
                  >
                    <span className="creator-studio-collection-text34">
                      Most Rare
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle6"
                  >
                    <span className="creator-studio-collection-text35">
                      Newest Listed
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle7"
                  >
                    <span className="creator-studio-collection-text36">
                      Oldest
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" className="creator-studio-collection-button6">
              <svg
                viewBox="0 0 1024 1024"
                className="creator-studio-collection-icon6"
              >
                <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
              </svg>
              <span className="creator-studio-collection-text37">
                <span>Select All</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <CollectionItemsContainer></CollectionItemsContainer>
      </LayoutWithSidebar>
    </div>
  )
}

export default CreatorStudioCollection
