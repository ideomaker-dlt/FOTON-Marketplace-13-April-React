import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import SideMenu from './side-menu'
import Footer from './footer'
import './layout-with-sidebar.css'

const LayoutWithSidebar = (props) => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false)
  return (
    <div className={`layout-with-sidebar-container ${props.rootClassName} `}>
      <div className="layout-with-sidebar-navbar">
        <div className="layout-with-sidebar-container1">
          <div
            onClick={() => setSideMenuIsVisible(!sideMenuIsVisible)}
            className="layout-with-sidebar-sidenav-button"
          >
            <div className="layout-with-sidebar-icon"></div>
          </div>
          <Link to="/" className="layout-with-sidebar-navlink">
            <div className="layout-with-sidebar-logo-container"></div>
          </Link>
          <div className="layout-with-sidebar-searchbar">
            <form className="layout-with-sidebar-form">
              <button className="layout-with-sidebar-button button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="layout-with-sidebar-icon1"
                >
                  <path
                    d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                    className=""
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                id="mainsearch"
                name="search-field"
                placeholder="Search..."
                className="layout-with-sidebar-textinput focus-reset Content18 input"
              />
              <div className="">
                <DangerousHTML
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
                  className=""
                ></DangerousHTML>
              </div>
            </form>
          </div>
          <div className="layout-with-sidebar-wrapper-right">
            <div className="layout-with-sidebar-container-right">
              <div className="layout-with-sidebar-items">
                <button className="layout-with-sidebar-button1">Drops</button>
                <Link
                  to="/stats"
                  className="layout-with-sidebar-navlink1 Content"
                >
                  Stats
                </Link>
                <Link
                  to="/creator-studio"
                  className="layout-with-sidebar-navlink2 Content"
                >
                  Create
                </Link>
                <button className="layout-with-sidebar-button2 Content">
                  More
                </button>
              </div>
            </div>
            <div className="layout-with-sidebar-mobile-search">
              <svg
                viewBox="0 0 1024 1024"
                className="layout-with-sidebar-icon3"
              >
                <path
                  d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="layout-with-sidebar-cart material-symbols-outlined">
              <svg
                viewBox="0 0 1024 1024"
                className="layout-with-sidebar-icon5"
              >
                <path
                  d="M469.333 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM938.667 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM308.096 298.667h621.653l-58.496 306.816c-1.963 9.728-7.083 18.133-14.165 24.235-7.68 6.656-17.621 10.496-29.355 10.283h-415.317c-9.899 0.128-19.243-3.029-26.709-8.661-8.107-6.101-14.037-14.976-16.171-25.728zM42.667 85.333h135.68l36.181 180.864c4.608 18.645 21.419 32.469 41.472 32.469h52.096l-17.067-85.333h-35.029c-23.552 0-42.667 19.115-42.667 42.667 0 2.261 0.171 4.48 0.512 6.613 0.171 1.195 0.427 2.432 0.725 3.584l71.296 356.139c6.357 32.043 24.277 59.008 48.64 77.269 22.229 16.725 49.92 26.155 79.104 25.728h414.123c31.915 0.64 62.080-11.136 85.12-31.019 21.077-18.176 36.181-43.221 42.027-71.808l68.352-358.485c4.395-23.168-10.752-45.483-33.92-49.92-2.773-0.555-5.547-0.811-7.979-0.768h-690.347l-35.84-179.029c-4.011-19.712-21.205-34.304-41.813-34.304h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  className=""
                ></path>
              </svg>
              <span className="layout-with-sidebar-text">shopping_cart</span>
            </div>
            <div className="layout-with-sidebar-mobile-menu">
              <div
                data-thq="thq-dropdown"
                className="layout-with-sidebar-category list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="layout-with-sidebar-dropdown-toggle"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="layout-with-sidebar-icon7"
                  >
                    <path
                      d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="layout-with-sidebar-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-big-buttons list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-user-persona"
                    >
                      <span className="layout-with-sidebar-text01 material-symbols-outlined">
                        account_circle
                      </span>
                      <div className="layout-with-sidebar-container2">
                        <span className="layout-with-sidebar-name">
                          Danoshi Hughemoto
                        </span>
                        <span className="layout-with-sidebar-radix-address">
                          rdxdhsj...sdg765sg
                        </span>
                      </div>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-collector-profile"
                    >
                      <span className="layout-with-sidebar-text02 material-symbols-outlined">
                        category
                      </span>
                      <span className="layout-with-sidebar-text03">
                        Collector Profile
                      </span>
                    </div>
                    <Link to="/creator-studio" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-creator-studio"
                      >
                        <span className="layout-with-sidebar-text04 material-symbols-outlined">
                          deblur
                        </span>
                        <span className="layout-with-sidebar-text05">
                          Creator Studio
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-user-settings list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle01"
                    >
                      <span className="layout-with-sidebar-text06 material-symbols-outlined">
                        water_drop
                      </span>
                      <span className="layout-with-sidebar-text07">Drops</span>
                    </div>
                    <Link to="/collection-page" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle02"
                      >
                        <span className="layout-with-sidebar-text08 material-symbols-outlined">
                          insights
                        </span>
                        <span className="layout-with-sidebar-text09">
                          Stats
                        </span>
                      </div>
                    </Link>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle03"
                    >
                      <span className="layout-with-sidebar-text10 material-symbols-outlined">
                        grid_view
                      </span>
                      <span className="layout-with-sidebar-text11">More</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle04"
                    >
                      <span className="layout-with-sidebar-text12 material-symbols-outlined">
                        manage_accounts
                      </span>
                      <span className="layout-with-sidebar-text13">
                        Profile Settings
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-log-out list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle05"
                    >
                      <span className="layout-with-sidebar-text14 material-symbols-outlined">
                        logout
                      </span>
                      <span className="layout-with-sidebar-text15">
                        Log Out
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="layout-with-sidebar-user">
              <div className="layout-with-sidebar-avatar"></div>
            </div>
            <div className="layout-with-sidebar-user1">
              <div
                data-thq="thq-dropdown"
                className="layout-with-sidebar-category1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="layout-with-sidebar-dropdown-toggle06"
                >
                  <div className="layout-with-sidebar-avatar1"></div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="layout-with-sidebar-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-big-buttons1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-user-persona1"
                    >
                      <span className="layout-with-sidebar-text16 material-symbols-outlined">
                        account_circle
                      </span>
                      <div className="layout-with-sidebar-container3">
                        <span className="layout-with-sidebar-name1">
                          Danoshi Hughemoto
                        </span>
                        <span className="layout-with-sidebar-radix-address1">
                          rdxdhsj...sdg765sg
                        </span>
                      </div>
                    </div>
                    <Link to="/collector-profile" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-collector-profile1"
                      >
                        <span className="layout-with-sidebar-text17 material-symbols-outlined">
                          category
                        </span>
                        <span className="layout-with-sidebar-text18">
                          Collector Profile
                        </span>
                      </div>
                    </Link>
                    <Link to="/creator-studio" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-creator-studio1"
                      >
                        <span className="layout-with-sidebar-text19 material-symbols-outlined">
                          deblur
                        </span>
                        <span className="layout-with-sidebar-text20">
                          Creator Studio
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-user-settings1 list-item"
                  >
                    <Link to="/user-profile-settings" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle07"
                      >
                        <span className="layout-with-sidebar-text21 material-symbols-outlined">
                          manage_accounts
                        </span>
                        <span className="layout-with-sidebar-text22">
                          Profile Settings
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-log-out1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle08"
                    >
                      <span className="layout-with-sidebar-text23 material-symbols-outlined">
                        logout
                      </span>
                      <span className="layout-with-sidebar-text24">
                        Log Out
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="layout-with-sidebar-connect-qr">
              <div
                data-thq="thq-dropdown"
                className="layout-with-sidebar-category2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="layout-with-sidebar-dropdown-toggle09"
                >
                  <div className="layout-with-sidebar-content">
                    <img
                      alt="image"
                      src="/playground_assets/group%20489.svg"
                      className="layout-with-sidebar-image"
                    />
                    <span className="layout-with-sidebar-text25">Connect</span>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="layout-with-sidebar-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-big-buttons2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-user-persona2"
                    >
                      <div className="layout-with-sidebar-container4">
                        <span className="layout-with-sidebar-name2">
                          Scan QR with the Radix Stream mobile app to connect
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-user-settings2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle10"
                    ></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-log-out2 list-item"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-with-sidebar-contain-all">
        {sideMenuIsVisible && (
          <div className="layout-with-sidebar-side-menu-wrapper">
            <SideMenu
              text="Project"
              text1="Store"
              text2="Settings"
              text3="Settings"
              text4="Analytics"
              image_src1="/playground_assets/tune.svg"
              image_src2="/playground_assets/chart_data.svg"
              rootClassName="side-menu-root-class-name5"
              className=""
            ></SideMenu>
          </div>
        )}
        <div className="layout-with-sidebar-main-menu">
          <div className="layout-with-sidebar-wrapper-content">
            {props.children}
          </div>
          <Footer rootClassName="footer-root-class-name" className=""></Footer>
        </div>
      </div>
    </div>
  )
}

LayoutWithSidebar.defaultProps = {
  rootClassName: '',
}

LayoutWithSidebar.propTypes = {
  rootClassName: PropTypes.string,
}

export default LayoutWithSidebar
