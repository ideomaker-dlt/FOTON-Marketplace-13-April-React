import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './tabs-row-with-buttons.css'

const TabsRowWithButtons = (props) => {
  return (
    <div className={`tabs-row-with-buttons-tabs-row ${props.rootClassName} `}>
      <div className="tabs-row-with-buttons-container">
        <Link to="/creator-studio" className="tabs-row-with-buttons-navlink">
          {props.text}
        </Link>
        <span className="tabs-row-with-buttons-text">{props.text1}</span>
      </div>
      <div className="tabs-row-with-buttons-filter-buttons">
        <button type="button" className="tabs-row-with-buttons-button">
          <svg viewBox="0 0 1024 1024" className="tabs-row-with-buttons-icon">
            <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
          </svg>
          <span className="tabs-row-with-buttons-text01">
            <span>Filters</span>
            <br></br>
          </span>
        </button>
        <div className="tabs-row-with-buttons-timeframe">
          <button className="tabs-row-with-buttons-button1">
            <span className="tabs-row-with-buttons-text04">
              <span>1h</span>
              <br></br>
            </span>
          </button>
          <button className="tabs-row-with-buttons-button2">
            <span className="tabs-row-with-buttons-text07">
              <span>6h</span>
              <br></br>
            </span>
          </button>
          <button className="tabs-row-with-buttons-button3">
            <span className="tabs-row-with-buttons-text10">
              <span>24h</span>
              <br></br>
            </span>
          </button>
          <button className="tabs-row-with-buttons-button4">
            <span className="tabs-row-with-buttons-text13">
              <span>7d</span>
              <br></br>
            </span>
          </button>
        </div>
        <div
          data-thq="thq-dropdown"
          className="tabs-row-with-buttons-sort-by list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="tabs-row-with-buttons-dropdown-toggle"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="tabs-row-with-buttons-icon2"
            >
              <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
            </svg>
            <span className="tabs-row-with-buttons-text16">Sort by Status</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="tabs-row-with-buttons-dropdown-arrow"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="tabs-row-with-buttons-icon4"
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="tabs-row-with-buttons-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="tabs-row-with-buttons-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle1"
              >
                <span className="tabs-row-with-buttons-text17">Name</span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle2"
              >
                <span className="tabs-row-with-buttons-text18">
                  Price Low to High
                </span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle3"
              >
                <span className="tabs-row-with-buttons-text19">
                  Price High to Low
                </span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle4"
              >
                <span className="tabs-row-with-buttons-text20">Status</span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle5"
              >
                <span className="tabs-row-with-buttons-text21">Most Rare</span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle6"
              >
                <span className="tabs-row-with-buttons-text22">
                  Newest Listed
                </span>
              </div>
              <div
                data-thq="thq-dropdown-toggle"
                className="tabs-row-with-buttons-dropdown-toggle7"
              >
                <span className="tabs-row-with-buttons-text23">Oldest</span>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" className="tabs-row-with-buttons-button5">
          <svg viewBox="0 0 1024 1024" className="tabs-row-with-buttons-icon6">
            <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
          </svg>
          <span className="tabs-row-with-buttons-text24">
            <span>Select All</span>
            <br></br>
          </span>
        </button>
      </div>
    </div>
  )
}

TabsRowWithButtons.defaultProps = {
  text1: 'My Items',
  rootClassName: '',
  text7: 'Descending',
  SelectAll: 'Select All',
  text6: 'Ascending',
  text3: 'Price',
  text5: 'A to Z',
  text2: 'Sort by Status',
  text: '< go back',
  text4: 'Status',
}

TabsRowWithButtons.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text7: PropTypes.string,
  SelectAll: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default TabsRowWithButtons
