import React from 'react'

import PropTypes from 'prop-types'

import './ranking-preview.css'

const RankingPreview = (props) => {
  return (
    <div className={`ranking-preview-ranking-list ${props.rootClassName} `}>
      <div className="ranking-preview-categories">
        <div className="ranking-preview-container">
          <div
            data-thq="thq-dropdown"
            className="ranking-preview-category list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="ranking-preview-dropdown-toggle"
            >
              <span className="ranking-preview-text">Category</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="ranking-preview-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon">
                  <path
                    d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="ranking-preview-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle01"
                >
                  <span className="ranking-preview-text01">Avatars</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle02"
                >
                  <span className="ranking-preview-text02">Art</span>
                </div>
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle03"
                >
                  <span className="ranking-preview-text03">Games</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle04"
                >
                  <span className="ranking-preview-text04">Memberships</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="ranking-preview-filter-buttons">
          <div className="ranking-preview-timeframe">
            <button className="ranking-preview-button">
              <span className="ranking-preview-text05">1h</span>
            </button>
            <button className="ranking-preview-button01">
              <span className="ranking-preview-text06">6h</span>
            </button>
            <button className="ranking-preview-button02">
              <span className="ranking-preview-text07">24h</span>
            </button>
            <button className="ranking-preview-button03">
              <span className="ranking-preview-text08">1d</span>
            </button>
            <button className="ranking-preview-button04">
              <span className="ranking-preview-text09">7d</span>
            </button>
            <button className="ranking-preview-button05">
              <span className="ranking-preview-text10">All</span>
            </button>
          </div>
        </div>
      </div>
      <div className="ranking-preview-categories1">
        <div className="ranking-preview-container1">
          <div className="ranking-preview-top">
            <span className="ranking-preview-text11 BigTabs">
              <span className="">Top</span>
              <br className=""></br>
            </span>
          </div>
          <div className="ranking-preview-newest">
            <span className="ranking-preview-text14 BigTabs">
              <span className="">Newest</span>
              <br className=""></br>
            </span>
          </div>
        </div>
        <div className="ranking-preview-filter-buttons1">
          <div className="ranking-preview-timeframe1">
            <button className="ranking-preview-button06">
              <span className="ranking-preview-text17">
                <span className="">1h</span>
                <br className=""></br>
              </span>
            </button>
            <button className="ranking-preview-button07">
              <span className="ranking-preview-text20">
                <span className="">6h</span>
                <br className=""></br>
              </span>
            </button>
            <button className="ranking-preview-button08">
              <span className="ranking-preview-text23">
                <span className="">24h</span>
                <br className=""></br>
              </span>
            </button>
            <button className="ranking-preview-button09">
              <span className="ranking-preview-text26">
                <span className="">7d</span>
                <br className=""></br>
              </span>
            </button>
          </div>
          <div
            data-thq="thq-dropdown"
            className="ranking-preview-category1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="ranking-preview-dropdown-toggle05"
            >
              <span className="ranking-preview-text29">Category</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="ranking-preview-dropdown-arrow1"
              >
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon02">
                  <path
                    d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="ranking-preview-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle06"
                >
                  <span className="ranking-preview-text30">Avatars</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle07"
                >
                  <span className="ranking-preview-text31">{props.text58}</span>
                </div>
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle08"
                >
                  <span className="ranking-preview-text32">{props.text59}</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview-dropdown-toggle09"
                >
                  <span className="ranking-preview-text33">Memberships</span>
                </div>
              </li>
            </ul>
          </div>
          <span className="ranking-preview-text34 button">View All</span>
        </div>
      </div>
      <div className="ranking-preview-top-collections">
        <div className="ranking-preview-header-table">
          <div className="header-first-column">
            <span className="ranking-preview-text35 Content16SemiBold">#</span>
          </div>
          <div className="header-second-column">
            <div className="ranking-preview-group1">
              <div className="ranking-preview-name">
                <span className="ranking-preview-text36 Content16SemiBold">
                  Collection
                </span>
              </div>
              <div className="ranking-preview-volume">
                <span className="ranking-preview-text37 Content16SemiBold">
                  Volume
                </span>
              </div>
            </div>
            <div className="ranking-preview-group2">
              <div className="ranking-preview-change">
                <span className="ranking-preview-text38 Content16SemiBold">
                  Change
                </span>
              </div>
              <div className="ranking-preview-floor">
                <span className="ranking-preview-text39 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text40 Content16SemiBold">
                  Floor
                </span>
              </div>
              <div className="ranking-preview-change01">
                <span className="ranking-preview-text41 Content16SemiBold">
                  Sales
                </span>
              </div>
            </div>
            <div className="ranking-preview-group-3">
              <div className="ranking-preview-owners">
                <span className="ranking-preview-text42">Owners</span>
              </div>
              <div className="ranking-preview-listed">
                <span className="ranking-preview-text43 Content16SemiBold">
                  Listed
                </span>
              </div>
              <div className="ranking-preview-follow">
                <span className="ranking-preview-text44 Content16SemiBold">
                  Follow
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text45">1</span>
            <div className="ranking-preview-image"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group11">
              <div className="ranking-preview-name1">
                <span className="ranking-preview-text46 Content16SemiBold">
                  Micro Astronauts
                </span>
              </div>
              <div className="ranking-preview-volume1">
                <span className="ranking-preview-text47 Content16SemiBold">
                  182 M XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group21">
              <div className="ranking-preview-change02">
                <span className="ranking-preview-text48 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor1">
                <span className="ranking-preview-text-mobile Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text49 Content16SemiBold">
                  12645 XRD
                </span>
              </div>
              <div className="ranking-preview-change03">
                <span className="ranking-preview-text50">15000</span>
                <span className="ranking-preview-change-mobile">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-31">
              <div className="ranking-preview-owners1">
                <span className="ranking-preview-text51 Content16SemiBold">
                  9478
                </span>
              </div>
              <div className="ranking-preview-listed1">
                <span className="ranking-preview-text52 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow1">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon04">
                  <path
                    d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text53">
              <span className="ranking-preview-text54">2</span>
              <br className=""></br>
            </span>
            <div className="ranking-preview-image1"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group12">
              <div className="ranking-preview-name2">
                <span className="ranking-preview-text56 Content16SemiBold">
                  Scrypto Ninja
                </span>
              </div>
              <div className="ranking-preview-volume2">
                <span className="ranking-preview-text57 Content16SemiBold">
                  379 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group22">
              <div className="ranking-preview-change04">
                <span className="ranking-preview-text58 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor2">
                <span className="ranking-preview-text-mobile1 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text59 Content16SemiBold">
                  4245 XRD
                </span>
              </div>
              <div className="ranking-preview-change05">
                <span className="ranking-preview-text60">8888</span>
                <span className="ranking-preview-change-mobile1">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-32">
              <div className="ranking-preview-owners2">
                <span className="ranking-preview-text61 Content16SemiBold">
                  8637
                </span>
              </div>
              <div className="ranking-preview-listed2">
                <span className="ranking-preview-text62 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow2">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon06">
                  <path
                    d="M399.445 390.741c0 0-134.827 14.933-224.768 24.917-8.107 0.981-15.275 6.4-17.963 14.635s0 16.811 5.973 22.229c66.816 60.971 167.211 152.277 167.211 152.277-0.085 0-27.563 132.821-45.824 221.44-1.536 8.021 1.365 16.512 8.363 21.589 6.955 5.077 15.915 5.163 22.955 1.195 78.677-44.715 196.523-111.957 196.523-111.957s117.888 67.243 196.437 112c7.168 3.925 16.128 3.84 23.083-1.237 6.997-5.077 9.899-13.568 8.32-21.547-18.261-88.661-45.696-221.483-45.696-221.483s100.395-91.307 167.211-152.149c5.973-5.589 8.619-14.165 5.973-22.357s-9.813-13.611-17.92-14.549c-89.941-10.069-224.811-25.003-224.811-25.003s-55.893-123.648-93.141-206.080c-3.499-7.381-10.837-12.544-19.456-12.544s-16 5.205-19.328 12.544c-37.291 82.432-93.141 206.080-93.141 206.080z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text63">3</span>
            <div className="ranking-preview-image2"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group13">
              <div className="ranking-preview-name3">
                <span className="ranking-preview-text64 Content16SemiBold">
                  Keyboard Samurai
                </span>
              </div>
              <div className="ranking-preview-volume3">
                <span className="ranking-preview-text65 Content16SemiBold">
                  245 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group23">
              <div className="ranking-preview-change06">
                <span className="ranking-preview-text66 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor3">
                <span className="ranking-preview-text-mobile2 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text67 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview-change07">
                <span className="ranking-preview-text68">15000</span>
                <span className="ranking-preview-change-mobile2">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-33">
              <div className="ranking-preview-owners3">
                <span className="ranking-preview-text69 Content16SemiBold">
                  9478
                </span>
              </div>
              <div className="ranking-preview-listed3">
                <span className="ranking-preview-text70 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow3">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon08">
                  <path
                    d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text71">4</span>
            <div className="ranking-preview-image3"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group14">
              <div className="ranking-preview-name4">
                <span className="ranking-preview-text72 Content16SemiBold">
                  Digi Mecha Ultimate
                </span>
              </div>
              <div className="ranking-preview-volume4">
                <span className="ranking-preview-text73 Content16SemiBold">
                  45 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group24">
              <div className="ranking-preview-change08">
                <span className="ranking-preview-text74 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor4">
                <span className="ranking-preview-text-mobile3 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text75 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview-change09">
                <span className="ranking-preview-text76">15000</span>
                <span className="ranking-preview-change-mobile3">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-34">
              <div className="ranking-preview-owners4">
                <span className="ranking-preview-text77 Content16SemiBold">
                  9478
                </span>
              </div>
              <div className="ranking-preview-listed4">
                <span className="ranking-preview-text78 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow4">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon10">
                  <path
                    d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text79">5</span>
            <div className="ranking-preview-image4"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group15">
              <div className="ranking-preview-name5">
                <span className="ranking-preview-text80 Content16SemiBold">
                  Super Blade
                </span>
              </div>
              <div className="ranking-preview-volume5">
                <span className="ranking-preview-text81 Content16SemiBold">
                  43 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group25">
              <div className="ranking-preview-change10">
                <span className="ranking-preview-text82 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor5">
                <span className="ranking-preview-text-mobile4 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text83 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview-change11">
                <span className="ranking-preview-text84">15000</span>
                <span className="ranking-preview-change-mobile4">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-35">
              <div className="ranking-preview-owners5">
                <span className="ranking-preview-text85 Content16SemiBold">
                  9478
                </span>
              </div>
              <div className="ranking-preview-listed5">
                <span className="ranking-preview-text86 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow5">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon12">
                  <path
                    d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview-text87">100</span>
            <div className="ranking-preview-image5"></div>
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview-group16">
              <div className="ranking-preview-name6">
                <span className="ranking-preview-text88 Content16SemiBold">
                  Philosophical Pirates
                </span>
              </div>
              <div className="ranking-preview-volume6">
                <span className="ranking-preview-text89 Content16SemiBold">
                  32 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview-group26">
              <div className="ranking-preview-change12">
                <span className="ranking-preview-text90 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview-floor6">
                <span className="ranking-preview-text-mobile5 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview-text91 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview-change13">
                <span className="ranking-preview-text92">15000</span>
                <span className="ranking-preview-change-mobile5">+31%</span>
              </div>
            </div>
            <div className="ranking-preview-group-36">
              <div className="ranking-preview-owners6">
                <span className="ranking-preview-text93 Content16SemiBold">
                  9478
                </span>
              </div>
              <div className="ranking-preview-listed6">
                <span className="ranking-preview-text94 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview-follow6">
                <svg viewBox="0 0 1024 1024" className="ranking-preview-icon14">
                  <path
                    d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

RankingPreview.defaultProps = {
  text59: 'Games',
  rootClassName: '',
  text58: 'Art',
}

RankingPreview.propTypes = {
  text59: PropTypes.string,
  rootClassName: PropTypes.string,
  text58: PropTypes.string,
}

export default RankingPreview
