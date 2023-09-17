import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-container">
        <div
          id="sidebar-btn"
          onClick={props.toggleSidebar}
          className="navbar-sidenav-button"
        >
          <div className="navbar-icon"></div>
        </div>
        <div className="navbar-logo-container"></div>
        <div className="navbar-searchbar">
          <form className="navbar-form">
            <button className="navbar-button button">
              <svg viewBox="0 0 1024 1024" className="navbar-icon1">
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
              placeholder={props.textinputPlaceholder}
              className="navbar-textinput Content18 input"
            />
            <div className="navbar-div">
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
                className=""
              ></Script>
            </div>
          </form>
        </div>
        <div className="navbar-wrapper-right">
          <div className="navbar-container-right">
            <div className="navbar-items">
              <button className="navbar-button1">{props.button}</button>
              <Link to="/collection-page" className="navbar-navlink Content">
                {props.button1}
              </Link>
              <button className="navbar-button2 Content">
                {props.button2}
              </button>
              <button className="navbar-button3 Content">
                {props.button3}
              </button>
            </div>
          </div>
          <div className="navbar-mobile-search">
            <svg viewBox="0 0 1024 1024" className="navbar-icon3">
              <path
                d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="navbar-cart material-symbols-outlined">
            <svg viewBox="0 0 1024 1024" className="navbar-icon5">
              <path
                d="M469.333 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM938.667 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM308.096 298.667h621.653l-58.496 306.816c-1.963 9.728-7.083 18.133-14.165 24.235-7.68 6.656-17.621 10.496-29.355 10.283h-415.317c-9.899 0.128-19.243-3.029-26.709-8.661-8.107-6.101-14.037-14.976-16.171-25.728zM42.667 85.333h135.68l36.181 180.864c4.608 18.645 21.419 32.469 41.472 32.469h52.096l-17.067-85.333h-35.029c-23.552 0-42.667 19.115-42.667 42.667 0 2.261 0.171 4.48 0.512 6.613 0.171 1.195 0.427 2.432 0.725 3.584l71.296 356.139c6.357 32.043 24.277 59.008 48.64 77.269 22.229 16.725 49.92 26.155 79.104 25.728h414.123c31.915 0.64 62.080-11.136 85.12-31.019 21.077-18.176 36.181-43.221 42.027-71.808l68.352-358.485c4.395-23.168-10.752-45.483-33.92-49.92-2.773-0.555-5.547-0.811-7.979-0.768h-690.347l-35.84-179.029c-4.011-19.712-21.205-34.304-41.813-34.304h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                className=""
              ></path>
            </svg>
            <span className="navbar-text">{props.text}</span>
          </div>
          <div className="navbar-mobile-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon7">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="navbar-user">
            <div className="navbar-avatar"></div>
          </div>
          <div className="navbar-user1">
            <div data-thq="thq-dropdown" className="navbar-category list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle"
              >
                <div className="navbar-avatar1"></div>
              </div>
              <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-user-persona"
                  >
                    <span className="navbar-text01 material-symbols-outlined">
                      account_circle
                    </span>
                    <span className="navbar-text02">Danoshi Hughemoto</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-creator-studio"
                  >
                    <span className="navbar-text03 material-symbols-outlined">
                      deblur
                    </span>
                    <span className="navbar-text04">Creator Studio</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-creator-studio1"
                  >
                    <span className="navbar-text05 material-symbols-outlined">
                      category
                    </span>
                    <span className="navbar-text06">Collector Profile</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle1"
                  >
                    <span className="navbar-text07 material-symbols-outlined">
                      manage_accounts
                    </span>
                    <span className="navbar-text08 Content">Drops</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle2"
                  >
                    <span className="navbar-text09">Stats</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle3"
                  >
                    <span className="navbar-text10">Create</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle4"
                  >
                    <span className="navbar-text11">More</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-connect">
            <button className="navbar-button4 button Content">
              <span className="navbar-text12">
                <span className="">Connect</span>
                <br className=""></br>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
  text: 'shopping_cart',
  button1: 'Stats',
  textinputPlaceholder: 'Search...',
  toggleSidebar: () => {},
  button3: 'More',
  button: 'Drops',
  button2: 'Create',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  toggleSidebar: PropTypes.func,
  button3: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
}

export default Navbar
