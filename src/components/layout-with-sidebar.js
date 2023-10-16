import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Searchbar from './searchbar'
import MobileSearch from './mobile-search'
import CartDrawer from './cart-drawer'
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
          <Searchbar className=""></Searchbar>
          <div className="layout-with-sidebar-wrapper-right">
            <div className="layout-with-sidebar-container-right">
              <div className="layout-with-sidebar-items">
                <button className="layout-with-sidebar-button Content">
                  Explore
                </button>
                <Link to="/drops" className="layout-with-sidebar-navlink01">
                  Drops
                </Link>
                <Link
                  to="/stats"
                  className="layout-with-sidebar-navlink02 Content"
                >
                  Stats
                </Link>
                <Link
                  to="/discover"
                  className="layout-with-sidebar-navlink03 Content"
                >
                  Discover
                </Link>
              </div>
            </div>
            <MobileSearch className=""></MobileSearch>
            <CartDrawer className=""></CartDrawer>
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
                    className="layout-with-sidebar-icon1"
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
                      <div className="layout-with-sidebar-avatar"></div>
                      <div className="layout-with-sidebar-container2">
                        <span className="layout-with-sidebar-name">
                          Danoshi Hughemoto
                        </span>
                        <span className="layout-with-sidebar-radix-address">
                          account...r78d7k
                        </span>
                      </div>
                    </div>
                    <Link to="/collector-hub" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-collector-profile"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/category_300.svg"
                          className="layout-with-sidebar-image"
                        />
                        <span className="layout-with-sidebar-text">
                          Collector Hub
                        </span>
                      </div>
                    </Link>
                    <Link to="/creator-studio" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-creator-studio"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/deblur.svg"
                          className="layout-with-sidebar-image01"
                        />
                        <span className="layout-with-sidebar-text01">
                          Creator Studio
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-higher-menu list-item"
                  >
                    <Link to="/drops" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle01"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/browse.svg"
                          className="layout-with-sidebar-image02"
                        />
                        <span className="layout-with-sidebar-text02">
                          Explore
                        </span>
                      </div>
                    </Link>
                    <Link to="/drops" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle02"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/water_drop.svg"
                          className="layout-with-sidebar-image03"
                        />
                        <span className="layout-with-sidebar-text03">
                          Drops
                        </span>
                      </div>
                    </Link>
                    <Link to="/stats" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle03"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/query_stats.svg"
                          className="layout-with-sidebar-image04"
                        />
                        <span className="layout-with-sidebar-text04">
                          Stats
                        </span>
                      </div>
                    </Link>
                    <Link to="/discover" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle04"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/tactic1.svg"
                          className="layout-with-sidebar-image05"
                        />
                        <span className="layout-with-sidebar-text05">
                          Discover
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-lower-menu list-item"
                  >
                    <Link to="/user-profile-settings" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle05"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/manage_accounts.svg"
                          className="layout-with-sidebar-image06"
                        />
                        <span className="layout-with-sidebar-text06">
                          Profile Settings
                        </span>
                      </div>
                    </Link>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle06"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/logout.svg"
                        className="layout-with-sidebar-image07"
                      />
                      <span className="layout-with-sidebar-text07">
                        Log Out
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="layout-with-sidebar-user">
              <div className="layout-with-sidebar-avatar1"></div>
            </div>
            <div className="layout-with-sidebar-user1">
              <div
                data-thq="thq-dropdown"
                className="layout-with-sidebar-category1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="layout-with-sidebar-dropdown-toggle07"
                >
                  <div className="layout-with-sidebar-avatar2"></div>
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
                      <div className="layout-with-sidebar-avatar3"></div>
                      <div className="layout-with-sidebar-container3">
                        <span className="layout-with-sidebar-name1">
                          Danoshi Hughemoto
                        </span>
                        <span className="layout-with-sidebar-radix-address1">
                          rdxdhsj...sdg765sg
                        </span>
                      </div>
                    </div>
                    <Link to="/collector-hub" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-collector-profile1"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/category_300.svg"
                          className="layout-with-sidebar-image08"
                        />
                        <span className="layout-with-sidebar-text08">
                          Collector Hub
                        </span>
                      </div>
                    </Link>
                    <Link to="/creator-studio" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-creator-studio1"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/deblur.svg"
                          className="layout-with-sidebar-image09"
                        />
                        <span className="layout-with-sidebar-text09">
                          Creator Studio
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-user-settings list-item"
                  >
                    <Link to="/user-profile-settings" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="layout-with-sidebar-dropdown-toggle08"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/manage_accounts.svg"
                          className="layout-with-sidebar-image10"
                        />
                        <span className="layout-with-sidebar-text10">
                          Profile Settings
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-log-out list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle09"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/login.svg"
                        className="layout-with-sidebar-image11"
                      />
                      <span className="layout-with-sidebar-text11">
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
                  className="layout-with-sidebar-dropdown-toggle10"
                >
                  <div className="layout-with-sidebar-content">
                    <img
                      alt="image"
                      src="/group%20489.svg"
                      className="layout-with-sidebar-image12"
                    />
                    <span className="layout-with-sidebar-text12">Connect</span>
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
                    className="layout-with-sidebar-user-settings1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="layout-with-sidebar-dropdown-toggle11"
                    ></div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="layout-with-sidebar-log-out1 list-item"
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
              image_src1="/tune.svg"
              image_src2="/chart_data.svg"
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
