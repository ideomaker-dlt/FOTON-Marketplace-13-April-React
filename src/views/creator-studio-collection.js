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
              <div
                data-thq="thq-dropdown"
                className="creator-studio-collection-category list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="creator-studio-collection-dropdown-toggle"
                >
                  <span className="creator-studio-collection-text">
                    Category
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="creator-studio-collection-dropdown-arrow"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-collection-icon"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-collection-icon02 fill-color-gray"
                  >
                    <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                  </svg>
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
                      className="creator-studio-collection-dropdown-toggle01"
                    >
                      <span className="creator-studio-collection-text01">
                        Edit
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="creator-studio-collection-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-collection-dropdown-toggle02"
                    >
                      <span className="creator-studio-collection-text02">
                        Duplicate
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="creator-studio-collection-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-collection-dropdown-toggle03"
                    >
                      <span className="creator-studio-collection-text03">
                        Delete
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="creator-studio-collection-container3">
            <div className="creator-studio-collection-container4">
              <div className="creator-studio-collection-container5">
                <div className="creator-studio-collection-avatar-logo">
                  <img
                    src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                    className="creator-studio-collection-image"
                  />
                </div>
                <div className="creator-studio-collection-container6">
                  <h1 className="creator-studio-collection-text04">
                    Collection One
                  </h1>
                  <div className="creator-studio-collection-container7">
                    <h1 className="creator-studio-collection-text05">
                      <span>1500 items</span>
                      <br></br>
                    </h1>
                    <h1 className="creator-studio-collection-text08">
                      <span>Unlisted</span>
                      <br></br>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="creator-studio-collection-buttons">
                <Link
                  to="/add-items-selector"
                  className="creator-studio-collection-navlink button"
                >
                  <span className="creator-studio-collection-text11">
                    <span>Add Items</span>
                    <br></br>
                  </span>
                </Link>
                <button className="creator-studio-collection-button button">
                  <span className="creator-studio-collection-text14">
                    <span>List</span>
                    <br></br>
                  </span>
                </button>
                <button className="creator-studio-collection-button1 button">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-collection-icon04 fill-color-white"
                  >
                    <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                  </svg>
                  <span className="creator-studio-collection-text17">
                    <span>Edit</span>
                    <br></br>
                  </span>
                </button>
                <div
                  data-thq="thq-dropdown"
                  className="creator-studio-collection-category1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle04"
                  >
                    <span className="creator-studio-collection-text20">
                      List
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="creator-studio-collection-dropdown-arrow1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="creator-studio-collection-icon06"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-collection-icon08 fill-color-gray"
                    >
                      <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                    </svg>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="creator-studio-collection-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="creator-studio-collection-dropdown3 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="creator-studio-collection-dropdown-toggle05"
                      >
                        <span className="creator-studio-collection-text21">
                          List via Drops
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="creator-studio-collection-dropdown4 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="creator-studio-collection-dropdown-toggle06"
                      >
                        <span className="creator-studio-collection-text22">
                          List for Minting 
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="creator-studio-collection-dropdown5 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="creator-studio-collection-dropdown-toggle07"
                      >
                        <span className="creator-studio-collection-text23">
                          Mint it Myself
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-studio-collection-tabs-row">
          <div className="creator-studio-collection-container8">
            <Link
              to="/creator-studio-project"
              className="creator-studio-collection-navlink1"
            >
              &lt; go back
            </Link>
            <span className="creator-studio-collection-text24">My Items</span>
          </div>
          <div className="creator-studio-collection-filter-buttons">
            <button type="button" className="creator-studio-collection-button2">
              <svg
                viewBox="0 0 1024 1024"
                className="creator-studio-collection-icon10"
              >
                <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
              </svg>
              <span className="creator-studio-collection-text25">
                <span>Filters</span>
                <br></br>
              </span>
            </button>
            <div className="creator-studio-collection-timeframe">
              <button className="creator-studio-collection-button3">
                <span className="creator-studio-collection-text28">
                  <span>1h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button4">
                <span className="creator-studio-collection-text31">
                  <span>6h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button5">
                <span className="creator-studio-collection-text34">
                  <span>24h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-collection-button6">
                <span className="creator-studio-collection-text37">
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
                className="creator-studio-collection-dropdown-toggle08"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-collection-icon12"
                >
                  <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                </svg>
                <span className="creator-studio-collection-text40">
                  Sort by Status
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-collection-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-collection-icon14"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-collection-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-collection-dropdown6 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle09"
                  >
                    <span className="creator-studio-collection-text41">
                      Name
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle10"
                  >
                    <span className="creator-studio-collection-text42">
                      Price Low to High
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle11"
                  >
                    <span className="creator-studio-collection-text43">
                      Price High to Low
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle12"
                  >
                    <span className="creator-studio-collection-text44">
                      Status
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle13"
                  >
                    <span className="creator-studio-collection-text45">
                      Most Rare
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle14"
                  >
                    <span className="creator-studio-collection-text46">
                      Newest Listed
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-collection-dropdown-toggle15"
                  >
                    <span className="creator-studio-collection-text47">
                      Oldest
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" className="creator-studio-collection-button7">
              <svg
                viewBox="0 0 1024 1024"
                className="creator-studio-collection-icon16"
              >
                <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
              </svg>
              <span className="creator-studio-collection-text48">
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
