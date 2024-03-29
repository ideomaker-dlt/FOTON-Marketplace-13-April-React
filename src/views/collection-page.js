import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import CollectionItemsContainer from '../components/collection-items-container'
import './collection-page.css'

const CollectionPage = (props) => {
  return (
    <div className="collection-page-container">
      <Helmet>
        <title>
          Collection-Page - FOTON - Web3's Digital Assets Hub and NFTs
          Marketplace on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Collection-Page - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name4">
        <div className="collection-page-collection-header">
          <div className="collection-page-image-header">
            <img
              alt="image"
              src="/vlad__foton.is__radix.stream_pirates_tropical_island_illustrati_766cf345-d799-426c-ac63-a659abb90994-1500w.png"
              className="collection-page-image"
            />
          </div>
          <div className="collection-page-collection-info-box">
            <div className="collection-page-container01">
              <div className="collection-page-avatar-logo">
                <img
                  src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="collection-page-image1"
                />
              </div>
              <div className="collection-page-container02">
                <h1 className="collection-page-text">Collection One</h1>
                <div className="collection-page-container03">
                  <p className="collection-page-text01">
                    <span>By Smooth Collective</span>
                    <br></br>
                  </p>
                  <p className="collection-page-text04">
                    <span>Verified</span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="collection-page-container04">
              <div className="collection-page-description-collection">
                <div className="collection-page-container05">
                  <h2 className="collection-page-text07">
                    <span>
                      The crew of pirates gathered around a campfire on a
                      tropical island, their ship anchored offshore. They
                      toasted their recent plunder and shared stories of
                      adventure. The sound of waves and the scent of saltwater
                      filled the air, as they planned their next raid under the
                      glow of the moon.
                    </span>
                    <br></br>
                  </h2>
                  <div className="collection-page-container06">
                    <p className="collection-page-text10">
                      <span>
                        10000 items ● Created on 23 Apr 2023 ● Creator royalties
                        3%
                      </span>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-page-small-stats">
              <div className="collection-page-small-card">
                <span className="collection-page-text13">10000</span>
                <span className="collection-page-text14">Items</span>
              </div>
              <div className="collection-page-small-card1">
                <span className="collection-page-text15">15778 XRD</span>
                <span className="collection-page-text16">Total volume</span>
              </div>
              <div className="collection-page-small-card2">
                <span className="collection-page-text17">157078 XRD</span>
                <span className="collection-page-text18">Floor price</span>
              </div>
              <div className="collection-page-small-card3">
                <span className="collection-page-text19">573</span>
                <span className="collection-page-text20">Owners</span>
              </div>
              <div className="collection-page-small-card4">
                <span className="collection-page-text21">28k</span>
                <span className="collection-page-text22">Followers</span>
              </div>
              <div className="collection-page-small-card5">
                <span className="collection-page-text23">570</span>
                <span className="collection-page-text24">Listed</span>
              </div>
            </div>
            <div className="collection-page-container07">
              <button type="button" className="collection-page-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-page-icon fill-color-white"
                >
                  <path d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"></path>
                </svg>
                <span className="collection-page-text25">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-page-button01">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-page-icon02 fill-color-gray"
                >
                  <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="collection-page-text28">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-page-button02">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="collection-page-icon04 fill-color-gray"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <span className="collection-page-text31">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-page-button03">
                <span className="collection-page-text34">
                  <span>Follow</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-page-icon06 fill-color-gray"
                >
                  <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                </svg>
              </button>
              <button type="button" className="collection-page-button04">
                <span className="collection-page-text37">
                  <span>Follow</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="collection-page-icon08 fill-color-gray"
                >
                  <path d="M731.429 682.857c0-67.429-54.857-122.286-121.714-122.286-32 0-61.143 12.571-82.857 33.143l-137.714-68.571c0.571-4.571 1.143-8.571 1.143-13.143s-0.571-8.571-1.143-13.143l137.714-68.571c21.714 20.571 50.857 33.143 82.857 33.143 66.857 0 121.714-54.857 121.714-122.286 0-66.857-54.857-121.714-121.714-121.714-67.429 0-122.286 54.857-122.286 121.714 0 4.571 0.571 8.571 1.143 13.143l-137.714 68.571c-21.714-20-50.857-32.571-82.857-32.571-66.857 0-121.714 54.286-121.714 121.714s54.857 121.714 121.714 121.714c32 0 61.143-12.571 82.857-32.571l137.714 68.571c-0.571 4.571-1.143 8.571-1.143 13.143 0 66.857 54.857 121.714 122.286 121.714 66.857 0 121.714-54.857 121.714-121.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </button>
              <button type="button" className="collection-page-button05">
                <span className="collection-page-text40">
                  <span>Follow</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-page-icon10 fill-color-gray"
                >
                  <path d="M448 576v416l-160-160-192 192-96-96 192-192-160-160zM1024 96l-192 192 160 160h-416v-416l160 160 192-192z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="collection-page-tabs-row">
          <span className="collection-page-text43">Items</span>
          <span className="collection-page-text44">About</span>
          <span className="collection-page-text45">Followers</span>
        </div>
        <div className="collection-page-tabs-row-filters">
          <div className="collection-page-filter-buttons">
            <div className="collection-page-timeframe">
              <button className="collection-page-button06">
                <span className="collection-page-text46">
                  <span>1h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button07">
                <span className="collection-page-text49">
                  <span>6h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button08">
                <span className="collection-page-text52">
                  <span>24h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button09">
                <span className="collection-page-text55">
                  <span>7d</span>
                  <br></br>
                </span>
              </button>
            </div>
            <button type="button" className="collection-page-button10">
              <svg viewBox="0 0 1024 1024" className="collection-page-icon12">
                <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
              </svg>
              <span className="collection-page-text58">
                <span>Filters</span>
                <br></br>
              </span>
            </button>
            <div className="collection-page-searchbar">
              <form className="collection-page-form">
                <button className="collection-page-button11 button">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="collection-page-icon14"
                  >
                    <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  id="mainsearch"
                  name="search-field"
                  placeholder="Search by name..."
                  className="collection-page-textinput Content18 focus-reset input"
                />
                <div>
                  <div className="collection-page-container09">
                    <Script
                      html={`<style>
input::placeholder #searchfield { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: red;
opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Internet Explorer 10-11 */
color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
color: red;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
-webkit-appearance:none;
}
</style>`}
                    ></Script>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="collection-page-filter-buttons1">
            <div className="collection-page-timeframe1">
              <button className="collection-page-button12">
                <span className="collection-page-text61">
                  <span>1h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button13">
                <span className="collection-page-text64">
                  <span>6h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button14">
                <span className="collection-page-text67">
                  <span>24h</span>
                  <br></br>
                </span>
              </button>
              <button className="collection-page-button15">
                <span className="collection-page-text70">
                  <span>7d</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div
              data-thq="thq-dropdown"
              className="collection-page-sort-by list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="collection-page-dropdown-toggle"
              >
                <svg viewBox="0 0 1024 1024" className="collection-page-icon16">
                  <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                </svg>
                <span className="collection-page-text73">Sort by Status</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="collection-page-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="collection-page-icon18"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="collection-page-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="collection-page-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle1"
                  >
                    <span className="collection-page-text74">Name</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle2"
                  >
                    <span className="collection-page-text75">
                      Price Low to High
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle3"
                  >
                    <span className="collection-page-text76">
                      Price High to Low
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle4"
                  >
                    <span className="collection-page-text77">Status</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle5"
                  >
                    <span className="collection-page-text78">Most Rare</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle6"
                  >
                    <span className="collection-page-text79">
                      Newest Listed
                    </span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="collection-page-dropdown-toggle7"
                  >
                    <span className="collection-page-text80">Oldest</span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" className="collection-page-button16">
              <svg viewBox="0 0 1024 1024" className="collection-page-icon20">
                <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
              </svg>
              <span className="collection-page-text81">
                <span>Select All</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="collection-page-container10">
          <CollectionItemsContainer></CollectionItemsContainer>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default CollectionPage
