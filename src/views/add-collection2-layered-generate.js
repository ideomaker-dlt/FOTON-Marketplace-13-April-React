import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection2-layered-generate.css'

const AddCollection2LayeredGenerate = (props) => {
  return (
    <div className="add-collection-layered-generate-container">
      <Helmet>
        <title>
          Add-Collection2-Layered-Generate - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Layered-Generate - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name29">
        <div className="add-collection-layered-generate-header-creator">
          <div className="add-collection-layered-generate-container01">
            <div className="add-collection-layered-generate-container02">
              <div className="add-collection-layered-generate-container03">
                <h1 className="add-collection-layered-generate-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-layered-generate-mask-overlay"></div>
        </div>
        <div className="add-collection-layered-generate-progress-navigation">
          <div className="add-collection-layered-generate-container04">
            <div className="add-collection-layered-generate-left">
              <Link
                to="/add-items-sets"
                className="add-collection-layered-generate-navlink"
              >
                &lt; go back
              </Link>
              <div className="add-collection-layered-generate-container05">
                <Link
                  to="/add-collection2-layered-organise"
                  className="add-collection-layered-generate-navlink1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-generate-icon fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection-layered-generate-text001">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-generate-icon02 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-inspect"
                  className="add-collection-layered-generate-navlink2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-generate-icon04 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection-layered-generate-text004">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-generate-icon06 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <button
                  type="button"
                  className="add-collection-layered-generate-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-generate-icon08 fill-color-white"
                  >
                    <path d="M632 572l134 134 88-88v236h-236l88-88-134-134zM618 170h236v236l-88-88-536 536-60-60 536-536zM452 392l-60 60-222-222 60-60z"></path>
                  </svg>
                  <span className="add-collection-layered-generate-text007">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="add-collection-layered-generate-right">
              <button
                type="button"
                className="add-collection-layered-generate-button01"
              >
                <span className="add-collection-layered-generate-text010">
                  <span>Confirm Items</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-generate-icon10 fill-color-white"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-generate-container-form">
          <div className="add-collection-layered-generate-under-header">
            <div className="add-collection-layered-generate-card">
              <div className="add-collection-layered-generate-tabs-row-filters">
                <div className="add-collection-layered-generate-filter-buttons-left">
                  <button
                    type="button"
                    className="add-collection-layered-generate-button02"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-layered-generate-icon12"
                    >
                      <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
                    </svg>
                    <span className="add-collection-layered-generate-text013">
                      <span>Filters</span>
                      <br></br>
                    </span>
                  </button>
                  <div className="add-collection-layered-generate-searchbar">
                    <form className="add-collection-layered-generate-form">
                      <button className="add-collection-layered-generate-button03 button">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon14"
                        >
                          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="mainsearch"
                        name="search-field"
                        placeholder="Search by name..."
                        className="add-collection-layered-generate-textinput focus-reset input Content18"
                      />
                      <div>
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
                    </form>
                  </div>
                </div>
                <div className="add-collection-layered-generate-filter-buttons-right">
                  <div
                    data-thq="thq-dropdown"
                    className="add-collection-layered-generate-sort-by list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="add-collection-layered-generate-dropdown-toggle"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-generate-icon16"
                      >
                        <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                      </svg>
                      <span className="add-collection-layered-generate-text016">
                        Sort by Name
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="add-collection-layered-generate-dropdown-arrow"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon18"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="add-collection-layered-generate-dropdown-list"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="add-collection-layered-generate-dropdown list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="add-collection-layered-generate-dropdown-toggle1"
                        >
                          <span className="add-collection-layered-generate-text017">
                            Name
                          </span>
                        </div>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="add-collection-layered-generate-dropdown-toggle2"
                        >
                          <span className="add-collection-layered-generate-text018">
                            Most Rare
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="add-collection-layered-generate-button04"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-layered-generate-icon20 fill-color-white"
                    >
                      <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
                    </svg>
                    <span className="add-collection-layered-generate-text019">
                      <span>Add Uniques</span>
                      <br></br>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="add-collection-layered-generate-button05"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-layered-generate-icon22 fill-color-white"
                    >
                      <path d="M682 598h256v256h-84v-86q-128 170-342 170-154 0-271-97t-147-243h88q28 110 120 183t210 73q92 0 171-47t123-125h-124v-84zM342 426h-256v-256h84v86q128-170 342-170 154 0 271 97t147 243h-88q-28-110-120-183t-210-73q-92 0-171 47t-123 125h124v84zM384 512q0-52 38-90t90-38 90 38 38 90-38 90-90 38-90-38-38-90z"></path>
                    </svg>
                    <span className="add-collection-layered-generate-text022">
                      <span>Generate Again</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
              <div className="add-collection-layered-generate-collection-items-container">
                <div className="add-collection-layered-generate-container06">
                  <div className="add-collection-layered-generate-filters-side-menu">
                    <div className="add-collection-layered-generate-header-sticky-mobile">
                      <div className="add-collection-layered-generate-header-filter-menu">
                        <div className="add-collection-layered-generate-container07">
                          <span className="add-collection-layered-generate-text025">
                            <span className="add-collection-layered-generate-text026">
                              Filters
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-apply-button">
                          <span className="add-collection-layered-generate-text028">
                            <span className="add-collection-layered-generate-text029">
                              Apply
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-close-button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon24"
                          >
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-big-button">
                        <div className="add-collection-layered-generate-submit">
                          <button className="add-collection-layered-generate-button06 button">
                            <span className="add-collection-layered-generate-text031">
                              <span>Apply</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-generate-accordion">
                      <div className="add-collection-layered-generate-accordion-header">
                        <div className="add-collection-layered-generate-container08">
                          <span className="add-collection-layered-generate-text034">
                            <span className="add-collection-layered-generate-text035">
                              Rarity Rank
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-container09">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon26"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-accordion-drawer">
                        <div className="add-collection-layered-generate-range">
                          <input
                            type="text"
                            enctype="The Funky Apes Crew..."
                            placeholder="1"
                            className="add-collection-layered-generate-textinput01 focus-reset-forms input Content16SemiBold"
                          />
                          <span className="add-collection-layered-generate-text037">
                            To
                          </span>
                          <input
                            type="text"
                            enctype="The Funky Apes Crew..."
                            placeholder="350"
                            className="add-collection-layered-generate-textinput02 focus-reset-forms input Content16SemiBold"
                          />
                        </div>
                        <div className="add-collection-layered-generate-submit1">
                          <button className="add-collection-layered-generate-button07 button">
                            <span className="add-collection-layered-generate-text038">
                              <span>Apply</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-generate-accordion1">
                      <div className="add-collection-layered-generate-accordion-header1">
                        <div className="add-collection-layered-generate-container10">
                          <span className="add-collection-layered-generate-text041">
                            <span className="add-collection-layered-generate-text042">
                              Status
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-container11">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon28"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-accordion-drawer1">
                        <div className="add-collection-layered-generate-accordion-item">
                          <div className="add-collection-layered-generate-container12">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox"
                            />
                            <span className="add-collection-layered-generate-text044">
                              Listed
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many">
                            20
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item01">
                          <div className="add-collection-layered-generate-container13">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox01"
                            />
                            <span className="add-collection-layered-generate-text045">
                              Unlisted
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many01">
                            80
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item02">
                          <div className="add-collection-layered-generate-container14">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox02"
                            />
                            <span className="add-collection-layered-generate-text046">
                              Has Offers
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many02">
                            4
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item03">
                          <div className="add-collection-layered-generate-container15">
                            <input
                              type="checkbox"
                              checked
                              className="add-collection-layered-generate-checkbox03"
                            />
                            <span className="add-collection-layered-generate-text047">
                              Auctioned
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many03">
                            4
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-generate-separation-line"></div>
                    <div className="add-collection-layered-generate-accordion2">
                      <div className="add-collection-layered-generate-accordion-header2">
                        <div className="add-collection-layered-generate-container16">
                          <span className="add-collection-layered-generate-text048">
                            Attribute one
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-container17">
                          <span className="add-collection-layered-generate-how-many04">
                            328
                          </span>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon30"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-accordion-drawer2">
                        <div className="add-collection-layered-generate-accordion-item04">
                          <div className="add-collection-layered-generate-container18">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox04"
                            />
                            <span className="add-collection-layered-generate-text049">
                              Trait nr 1
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many05">
                            328
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item05">
                          <div className="add-collection-layered-generate-container19">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox05"
                            />
                            <span className="add-collection-layered-generate-text050">
                              Trait nr 2
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many06">
                            328
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item06">
                          <div className="add-collection-layered-generate-container20">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox06"
                            />
                            <span className="add-collection-layered-generate-text051">
                              Trait nr 3
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many07">
                            328
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-generate-accordion3">
                      <div className="add-collection-layered-generate-accordion-header3">
                        <div className="add-collection-layered-generate-container21">
                          <span className="add-collection-layered-generate-text052">
                            Attribute two
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-container22">
                          <span className="add-collection-layered-generate-how-many08">
                            328
                          </span>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon32"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-accordion-drawer3">
                        <div className="add-collection-layered-generate-accordion-item07">
                          <div className="add-collection-layered-generate-container23">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox07"
                            />
                            <span className="add-collection-layered-generate-text053">
                              Trait nr 1
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many09">
                            328
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item08">
                          <div className="add-collection-layered-generate-container24">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox08"
                            />
                            <span className="add-collection-layered-generate-text054">
                              Trait nr 2
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many10">
                            328
                          </span>
                        </div>
                        <div className="add-collection-layered-generate-accordion-item09">
                          <div className="add-collection-layered-generate-container25">
                            <input
                              type="checkbox"
                              className="add-collection-layered-generate-checkbox09"
                            />
                            <span className="add-collection-layered-generate-text055">
                              Trait nr 3
                            </span>
                          </div>
                          <span className="add-collection-layered-generate-how-many11">
                            328
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-grid-items">
                    <div className="add-collection-layered-generate-container26">
                      <div className="add-collection-layered-generate-item1">
                        <div className="add-collection-layered-generate-image-header">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox10"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box">
                          <div className="add-collection-layered-generate-container27">
                            <span className="add-collection-layered-generate-text056">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container28">
                            <div className="add-collection-layered-generate-floor">
                              <span className="add-collection-layered-generate-text057 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item101">
                        <div className="add-collection-layered-generate-image-header01">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox11"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box01">
                          <div className="add-collection-layered-generate-container29">
                            <span className="add-collection-layered-generate-text058">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container30">
                            <div className="add-collection-layered-generate-floor01">
                              <span className="add-collection-layered-generate-text059 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item102">
                        <div className="add-collection-layered-generate-image-header02">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox12"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box02">
                          <div className="add-collection-layered-generate-container31">
                            <span className="add-collection-layered-generate-text060">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container32">
                            <div className="add-collection-layered-generate-floor02">
                              <span className="add-collection-layered-generate-text061 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item103">
                        <div className="add-collection-layered-generate-image-header03">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox13"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box03">
                          <div className="add-collection-layered-generate-container33">
                            <span className="add-collection-layered-generate-text062">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container34">
                            <div className="add-collection-layered-generate-floor03">
                              <span className="add-collection-layered-generate-text063 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item104">
                        <div className="add-collection-layered-generate-image-header04">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox14"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box04">
                          <div className="add-collection-layered-generate-container35">
                            <span className="add-collection-layered-generate-text064">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container36">
                            <div className="add-collection-layered-generate-floor04">
                              <span className="add-collection-layered-generate-text065 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item105">
                        <div className="add-collection-layered-generate-image-header05">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox15"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box05">
                          <div className="add-collection-layered-generate-container37">
                            <span className="add-collection-layered-generate-text066">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container38">
                            <div className="add-collection-layered-generate-floor05">
                              <span className="add-collection-layered-generate-text067 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item106">
                        <div className="add-collection-layered-generate-image-header06">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox16"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box06">
                          <div className="add-collection-layered-generate-container39">
                            <span className="add-collection-layered-generate-text068">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container40">
                            <div className="add-collection-layered-generate-floor06">
                              <span className="add-collection-layered-generate-text069 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item107">
                        <div className="add-collection-layered-generate-image-header07">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox17"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box07">
                          <div className="add-collection-layered-generate-container41">
                            <span className="add-collection-layered-generate-text070">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container42">
                            <div className="add-collection-layered-generate-floor07">
                              <span className="add-collection-layered-generate-text071 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item108">
                        <div className="add-collection-layered-generate-image-header08">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox18"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box08">
                          <div className="add-collection-layered-generate-container43">
                            <span className="add-collection-layered-generate-text072">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container44">
                            <div className="add-collection-layered-generate-floor08">
                              <span className="add-collection-layered-generate-text073 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item109">
                        <div className="add-collection-layered-generate-image-header09">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox19"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box09">
                          <div className="add-collection-layered-generate-container45">
                            <span className="add-collection-layered-generate-text074">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container46">
                            <div className="add-collection-layered-generate-floor09">
                              <span className="add-collection-layered-generate-text075 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-generate-item110">
                        <div className="add-collection-layered-generate-image-header10">
                          <input
                            type="checkbox"
                            className="add-collection-layered-generate-checkbox20"
                          />
                        </div>
                        <div className="add-collection-layered-generate-text-box10">
                          <div className="add-collection-layered-generate-container47">
                            <span className="add-collection-layered-generate-text076">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection-layered-generate-container48">
                            <div className="add-collection-layered-generate-floor10">
                              <span className="add-collection-layered-generate-text077 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-generate-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection-layered-generate-container49"
          >
            <div className="add-collection-layered-generate-container50">
              <label className="add-collection-layered-generate-text078">
                Eyes
              </label>
            </div>
            <div className="add-collection-layered-generate-container51">
              <div>
                <Script
                  html={`<style>
  
/* width */
#appOverlay::-webkit-scrollbar {
  width: 16px;
  height: calc(100% - 60px);
}

/* Track */
#appOverlay::-webkit-scrollbar-track {
  background: #1D1D1D;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 14px;
  
}
 
/* Handle */
#appOverlay::-webkit-scrollbar-thumb {
  background: #2F2F2F; 
  border-radius: 12px;
  border: 3px solid #1D1D1D
}

/* Handle on hover */
#appOverlay::-webkit-scrollbar-thumb:hover {
  background: #838383; 
}

@media only screen and (max-width: 767px) {
#appOverlay::-webkit-scrollbar {
  width: 10px;
  height: 100%;
}
#appOverlay::-webkit-scrollbar-thumb {
  background: #424242; 
  border-radius: 10px;
  border: 2px solid #1D1D1D;
}

}


</style>`}
                ></Script>
              </div>
              <div className="add-collection-layered-generate-field">
                <label className="add-collection-layered-generate-text079 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection-layered-generate-textinput03 focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection-layered-generate-field1">
                <label className="add-collection-layered-generate-text080 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection-layered-generate-textinput04 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-generate-layer-items-treats">
                <div className="add-collection-layered-generate-tabs-row">
                  <div className="add-collection-layered-generate-container52">
                    <span className="add-collection-layered-generate-text081">
                      &lt; go back
                    </span>
                    <span className="add-collection-layered-generate-text082">
                      Layer Assets 
                    </span>
                    <span className="add-collection-layered-generate-text083">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection-layered-generate-filter-buttons">
                    <div className="add-collection-layered-generate-timeframe">
                      <button className="add-collection-layered-generate-button08">
                        <span className="add-collection-layered-generate-text084">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-generate-button09">
                        <span className="add-collection-layered-generate-text087">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-generate-button10">
                        <span className="add-collection-layered-generate-text090">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-generate-button11">
                        <span className="add-collection-layered-generate-text093">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-generate-sort-by1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-generate-dropdown-toggle3"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon34"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text096">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-generate-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-generate-icon36"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-generate-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-generate-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-generate-dropdown-toggle4"
                          >
                            <span className="add-collection-layered-generate-text097">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-generate-dropdown-toggle5"
                          >
                            <span className="add-collection-layered-generate-text098">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-generate-dropdown-toggle6"
                          >
                            <span className="add-collection-layered-generate-text099">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-generate-dropdown-toggle7"
                          >
                            <span className="add-collection-layered-generate-text100">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-generate-button12"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-generate-icon38"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-generate-text101">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-layered-generate-button13"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-generate-icon40 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection-layered-generate-text104">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-generate-tabs-row1">
                  <div className="add-collection-layered-generate-container53">
                    <div className="add-collection-layered-generate-container54">
                      <span className="add-collection-layered-generate-text107 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection-layered-generate-container55">
                      <span className="add-collection-layered-generate-text108 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-container56">
                    <span className="add-collection-layered-generate-text109 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection-layered-generate-container57">
                  <div className="add-collection-layered-generate-row-image">
                    <div className="add-collection-layered-generate-container58">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox21"
                      />
                      <div className="add-collection-layered-generate-container59"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput05 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container60">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button14"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon42 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text110">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image1">
                    <div className="add-collection-layered-generate-container61">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox22"
                      />
                      <div className="add-collection-layered-generate-container62"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput07 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container63">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput08 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button15"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon44 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text113">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image2">
                    <div className="add-collection-layered-generate-container64">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox23"
                      />
                      <div className="add-collection-layered-generate-container65"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container66">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button16"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon46 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text116">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image3">
                    <div className="add-collection-layered-generate-container67">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox24"
                      />
                      <div className="add-collection-layered-generate-container68"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container69">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput12 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button17"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon48 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text119">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image4">
                    <div className="add-collection-layered-generate-container70">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox25"
                      />
                      <div className="add-collection-layered-generate-container71"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container72">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput14 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button18"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon50 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text122">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image5">
                    <div className="add-collection-layered-generate-container73">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox26"
                      />
                      <div className="add-collection-layered-generate-container74"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput15 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container75">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput16 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button19"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon52 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text125">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image6">
                    <div className="add-collection-layered-generate-container76">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox27"
                      />
                      <div className="add-collection-layered-generate-container77"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container78">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput18 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button20"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon54 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text128">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-generate-row-image7">
                    <div className="add-collection-layered-generate-container79">
                      <input
                        type="checkbox"
                        className="add-collection-layered-generate-checkbox28"
                      />
                      <div className="add-collection-layered-generate-container80"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-generate-textinput19 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-generate-container81">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-generate-textinput20 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-generate-button21"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-generate-icon56 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-generate-text131">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-generate-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-generate-icon58 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection2LayeredGenerate
