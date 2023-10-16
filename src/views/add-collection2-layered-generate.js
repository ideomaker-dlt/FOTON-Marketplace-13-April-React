import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection2-layered-generate.css'

const AddCollection2LayeredGenerate = (props) => {
  return (
    <div className="add-collection2-layered-generate-container">
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
        <div className="add-collection2-layered-generate-header-creator">
          <div className="add-collection2-layered-generate-container01">
            <div className="add-collection2-layered-generate-container02">
              <div className="add-collection2-layered-generate-container03">
                <h1 className="add-collection2-layered-generate-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection2-layered-generate-mask-overlay"></div>
        </div>
        <div className="add-collection2-layered-generate-progress-navigation">
          <div className="add-collection2-layered-generate-container04">
            <div className="add-collection2-layered-generate-left">
              <Link
                to="/add-items-sets"
                className="add-collection2-layered-generate-navlink"
              >
                &lt; go back
              </Link>
              <div className="add-collection2-layered-generate-container05">
                <Link
                  to="/add-collection2-layered-organise"
                  className="add-collection2-layered-generate-navlink1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-generate-icon fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection2-layered-generate-text001">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-generate-icon02 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-inspect"
                  className="add-collection2-layered-generate-navlink2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-generate-icon04 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection2-layered-generate-text004">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-generate-icon06 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <button
                  type="button"
                  className="add-collection2-layered-generate-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-generate-icon08 fill-color-white"
                  >
                    <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                  </svg>
                  <span className="add-collection2-layered-generate-text007">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="add-collection2-layered-generate-right">
              <button
                type="button"
                className="add-collection2-layered-generate-button01"
              >
                <span className="add-collection2-layered-generate-text010">
                  <span>Confirm Items</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-generate-icon10 fill-color-white"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection2-layered-generate-container-form">
          <div className="add-collection2-layered-generate-under-header">
            <div className="add-collection2-layered-generate-card">
              <div className="add-collection2-layered-generate-tabs-row-filters">
                <div className="add-collection2-layered-generate-filter-buttons-left">
                  <button
                    type="button"
                    className="add-collection2-layered-generate-button02"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection2-layered-generate-icon12"
                    >
                      <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
                    </svg>
                    <span className="add-collection2-layered-generate-text013">
                      <span>Filters</span>
                      <br></br>
                    </span>
                  </button>
                  <div className="add-collection2-layered-generate-searchbar">
                    <form className="add-collection2-layered-generate-form">
                      <button className="add-collection2-layered-generate-button03 button">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon14"
                        >
                          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="mainsearch"
                        name="search-field"
                        placeholder="Search by name..."
                        className="add-collection2-layered-generate-textinput focus-reset input Content18"
                      />
                      <div>
                        <div className="add-collection2-layered-generate-container07">
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
                <div className="add-collection2-layered-generate-filter-buttons-right">
                  <div
                    data-thq="thq-dropdown"
                    className="add-collection2-layered-generate-sort-by list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="add-collection2-layered-generate-dropdown-toggle"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-generate-icon16"
                      >
                        <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                      </svg>
                      <span className="add-collection2-layered-generate-text016">
                        Sort by Name
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="add-collection2-layered-generate-dropdown-arrow"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon18"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="add-collection2-layered-generate-dropdown-list"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="add-collection2-layered-generate-dropdown list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="add-collection2-layered-generate-dropdown-toggle1"
                        >
                          <span className="add-collection2-layered-generate-text017">
                            Name
                          </span>
                        </div>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="add-collection2-layered-generate-dropdown-toggle2"
                        >
                          <span className="add-collection2-layered-generate-text018">
                            Most Rare
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="add-collection2-layered-generate-button04"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection2-layered-generate-icon20 fill-color-white"
                    >
                      <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
                    </svg>
                    <span className="add-collection2-layered-generate-text019">
                      <span>Add Uniques</span>
                      <br></br>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="add-collection2-layered-generate-button05"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection2-layered-generate-icon22 fill-color-white"
                    >
                      <path d="M682 598h256v256h-84v-86q-128 170-342 170-154 0-271-97t-147-243h88q28 110 120 183t210 73q92 0 171-47t123-125h-124v-84zM342 426h-256v-256h84v86q128-170 342-170 154 0 271 97t147 243h-88q-28-110-120-183t-210-73q-92 0-171 47t-123 125h124v84zM384 512q0-52 38-90t90-38 90 38 38 90-38 90-90 38-90-38-38-90z"></path>
                    </svg>
                    <span className="add-collection2-layered-generate-text022">
                      <span>Generate Again</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
              <div className="add-collection2-layered-generate-collection-items-container">
                <div className="add-collection2-layered-generate-container08">
                  <div className="add-collection2-layered-generate-filters-side-menu">
                    <div className="add-collection2-layered-generate-header-sticky-mobile">
                      <div className="add-collection2-layered-generate-header-filter-menu">
                        <div className="add-collection2-layered-generate-container09">
                          <span className="add-collection2-layered-generate-text025">
                            <span className="add-collection2-layered-generate-text026">
                              Filters
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-apply-button">
                          <span className="add-collection2-layered-generate-text028">
                            <span className="add-collection2-layered-generate-text029">
                              Apply
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-close-button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon24"
                          >
                            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-big-button">
                        <div className="add-collection2-layered-generate-submit">
                          <button className="add-collection2-layered-generate-button06 button">
                            <span className="add-collection2-layered-generate-text031">
                              <span>Apply</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection2-layered-generate-accordion">
                      <div className="add-collection2-layered-generate-accordion-header">
                        <div className="add-collection2-layered-generate-container10">
                          <span className="add-collection2-layered-generate-text034">
                            <span className="add-collection2-layered-generate-text035">
                              Rarity Rank
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-container11">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon26"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-accordion-drawer">
                        <div className="add-collection2-layered-generate-range">
                          <input
                            type="text"
                            enctype="The Funky Apes Crew..."
                            placeholder="1"
                            className="add-collection2-layered-generate-textinput01 focus-reset-forms input Content16SemiBold"
                          />
                          <span className="add-collection2-layered-generate-text037">
                            To
                          </span>
                          <input
                            type="text"
                            enctype="The Funky Apes Crew..."
                            placeholder="350"
                            className="add-collection2-layered-generate-textinput02 focus-reset-forms input Content16SemiBold"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-submit1">
                          <button className="add-collection2-layered-generate-button07 button">
                            <span className="add-collection2-layered-generate-text038">
                              <span>Apply</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection2-layered-generate-accordion1">
                      <div className="add-collection2-layered-generate-accordion-header1">
                        <div className="add-collection2-layered-generate-container12">
                          <span className="add-collection2-layered-generate-text041">
                            <span className="add-collection2-layered-generate-text042">
                              Status
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-container13">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon28"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-accordion-drawer1">
                        <div className="add-collection2-layered-generate-accordion-item">
                          <div className="add-collection2-layered-generate-container14">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox"
                            />
                            <span className="add-collection2-layered-generate-text044">
                              Listed
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many">
                            20
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item01">
                          <div className="add-collection2-layered-generate-container15">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox01"
                            />
                            <span className="add-collection2-layered-generate-text045">
                              Unlisted
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many01">
                            80
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item02">
                          <div className="add-collection2-layered-generate-container16">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox02"
                            />
                            <span className="add-collection2-layered-generate-text046">
                              Has Offers
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many02">
                            4
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item03">
                          <div className="add-collection2-layered-generate-container17">
                            <input
                              type="checkbox"
                              checked
                              className="add-collection2-layered-generate-checkbox03"
                            />
                            <span className="add-collection2-layered-generate-text047">
                              Auctioned
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many03">
                            4
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection2-layered-generate-separation-line"></div>
                    <div className="add-collection2-layered-generate-accordion2">
                      <div className="add-collection2-layered-generate-accordion-header2">
                        <div className="add-collection2-layered-generate-container18">
                          <span className="add-collection2-layered-generate-text048">
                            Attribute one
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-container19">
                          <span className="add-collection2-layered-generate-how-many04">
                            328
                          </span>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon30"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-accordion-drawer2">
                        <div className="add-collection2-layered-generate-accordion-item04">
                          <div className="add-collection2-layered-generate-container20">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox04"
                            />
                            <span className="add-collection2-layered-generate-text049">
                              Trait nr 1
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many05">
                            328
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item05">
                          <div className="add-collection2-layered-generate-container21">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox05"
                            />
                            <span className="add-collection2-layered-generate-text050">
                              Trait nr 2
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many06">
                            328
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item06">
                          <div className="add-collection2-layered-generate-container22">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox06"
                            />
                            <span className="add-collection2-layered-generate-text051">
                              Trait nr 3
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many07">
                            328
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection2-layered-generate-accordion3">
                      <div className="add-collection2-layered-generate-accordion-header3">
                        <div className="add-collection2-layered-generate-container23">
                          <span className="add-collection2-layered-generate-text052">
                            Attribute two
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-container24">
                          <span className="add-collection2-layered-generate-how-many08">
                            328
                          </span>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon32"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-accordion-drawer3">
                        <div className="add-collection2-layered-generate-accordion-item07">
                          <div className="add-collection2-layered-generate-container25">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox07"
                            />
                            <span className="add-collection2-layered-generate-text053">
                              Trait nr 1
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many09">
                            328
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item08">
                          <div className="add-collection2-layered-generate-container26">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox08"
                            />
                            <span className="add-collection2-layered-generate-text054">
                              Trait nr 2
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many10">
                            328
                          </span>
                        </div>
                        <div className="add-collection2-layered-generate-accordion-item09">
                          <div className="add-collection2-layered-generate-container27">
                            <input
                              type="checkbox"
                              className="add-collection2-layered-generate-checkbox09"
                            />
                            <span className="add-collection2-layered-generate-text055">
                              Trait nr 3
                            </span>
                          </div>
                          <span className="add-collection2-layered-generate-how-many11">
                            328
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-grid-items">
                    <div className="add-collection2-layered-generate-container28">
                      <div className="add-collection2-layered-generate-item1">
                        <div className="add-collection2-layered-generate-image-header">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox10"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box">
                          <div className="add-collection2-layered-generate-container29">
                            <span className="add-collection2-layered-generate-text056">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container30">
                            <div className="add-collection2-layered-generate-floor">
                              <span className="add-collection2-layered-generate-text057 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item101">
                        <div className="add-collection2-layered-generate-image-header01">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox11"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box01">
                          <div className="add-collection2-layered-generate-container31">
                            <span className="add-collection2-layered-generate-text058">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container32">
                            <div className="add-collection2-layered-generate-floor01">
                              <span className="add-collection2-layered-generate-text059 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item102">
                        <div className="add-collection2-layered-generate-image-header02">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox12"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box02">
                          <div className="add-collection2-layered-generate-container33">
                            <span className="add-collection2-layered-generate-text060">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container34">
                            <div className="add-collection2-layered-generate-floor02">
                              <span className="add-collection2-layered-generate-text061 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item103">
                        <div className="add-collection2-layered-generate-image-header03">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox13"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box03">
                          <div className="add-collection2-layered-generate-container35">
                            <span className="add-collection2-layered-generate-text062">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container36">
                            <div className="add-collection2-layered-generate-floor03">
                              <span className="add-collection2-layered-generate-text063 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item104">
                        <div className="add-collection2-layered-generate-image-header04">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox14"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box04">
                          <div className="add-collection2-layered-generate-container37">
                            <span className="add-collection2-layered-generate-text064">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container38">
                            <div className="add-collection2-layered-generate-floor04">
                              <span className="add-collection2-layered-generate-text065 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item105">
                        <div className="add-collection2-layered-generate-image-header05">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox15"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box05">
                          <div className="add-collection2-layered-generate-container39">
                            <span className="add-collection2-layered-generate-text066">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container40">
                            <div className="add-collection2-layered-generate-floor05">
                              <span className="add-collection2-layered-generate-text067 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item106">
                        <div className="add-collection2-layered-generate-image-header06">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox16"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box06">
                          <div className="add-collection2-layered-generate-container41">
                            <span className="add-collection2-layered-generate-text068">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container42">
                            <div className="add-collection2-layered-generate-floor06">
                              <span className="add-collection2-layered-generate-text069 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item107">
                        <div className="add-collection2-layered-generate-image-header07">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox17"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box07">
                          <div className="add-collection2-layered-generate-container43">
                            <span className="add-collection2-layered-generate-text070">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container44">
                            <div className="add-collection2-layered-generate-floor07">
                              <span className="add-collection2-layered-generate-text071 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item108">
                        <div className="add-collection2-layered-generate-image-header08">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox18"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box08">
                          <div className="add-collection2-layered-generate-container45">
                            <span className="add-collection2-layered-generate-text072">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container46">
                            <div className="add-collection2-layered-generate-floor08">
                              <span className="add-collection2-layered-generate-text073 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item109">
                        <div className="add-collection2-layered-generate-image-header09">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox19"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box09">
                          <div className="add-collection2-layered-generate-container47">
                            <span className="add-collection2-layered-generate-text074">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container48">
                            <div className="add-collection2-layered-generate-floor09">
                              <span className="add-collection2-layered-generate-text075 SmallestLabels">
                                #05383
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-generate-item110">
                        <div className="add-collection2-layered-generate-image-header10">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-generate-checkbox20"
                          />
                        </div>
                        <div className="add-collection2-layered-generate-text-box10">
                          <div className="add-collection2-layered-generate-container49">
                            <span className="add-collection2-layered-generate-text076">
                              Item one
                            </span>
                          </div>
                          <div className="add-collection2-layered-generate-container50">
                            <div className="add-collection2-layered-generate-floor10">
                              <span className="add-collection2-layered-generate-text077 SmallestLabels">
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
        <div className="add-collection2-layered-generate-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection2-layered-generate-container51"
          >
            <div className="add-collection2-layered-generate-container52">
              <label className="add-collection2-layered-generate-text078">
                Eyes
              </label>
            </div>
            <div className="add-collection2-layered-generate-container53">
              <div>
                <div className="add-collection2-layered-generate-container55">
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
              </div>
              <div className="add-collection2-layered-generate-field">
                <label className="add-collection2-layered-generate-text079 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection2-layered-generate-textinput03 focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection2-layered-generate-field1">
                <label className="add-collection2-layered-generate-text080 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection2-layered-generate-textinput04 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection2-layered-generate-layer-items-treats">
                <div className="add-collection2-layered-generate-tabs-row">
                  <div className="add-collection2-layered-generate-container56">
                    <span className="add-collection2-layered-generate-text081">
                      &lt; go back
                    </span>
                    <span className="add-collection2-layered-generate-text082">
                      Layer Assets 
                    </span>
                    <span className="add-collection2-layered-generate-text083">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection2-layered-generate-filter-buttons">
                    <div className="add-collection2-layered-generate-timeframe">
                      <button className="add-collection2-layered-generate-button08">
                        <span className="add-collection2-layered-generate-text084">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-generate-button09">
                        <span className="add-collection2-layered-generate-text087">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-generate-button10">
                        <span className="add-collection2-layered-generate-text090">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-generate-button11">
                        <span className="add-collection2-layered-generate-text093">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection2-layered-generate-sort-by1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-layered-generate-dropdown-toggle3"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon34"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text096">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection2-layered-generate-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-generate-icon36"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection2-layered-generate-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection2-layered-generate-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-generate-dropdown-toggle4"
                          >
                            <span className="add-collection2-layered-generate-text097">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-generate-dropdown-toggle5"
                          >
                            <span className="add-collection2-layered-generate-text098">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-generate-dropdown-toggle6"
                          >
                            <span className="add-collection2-layered-generate-text099">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-generate-dropdown-toggle7"
                          >
                            <span className="add-collection2-layered-generate-text100">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-generate-button12"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-generate-icon38"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection2-layered-generate-text101">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection2-layered-generate-button13"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-generate-icon40 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection2-layered-generate-text104">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection2-layered-generate-tabs-row1">
                  <div className="add-collection2-layered-generate-container57">
                    <div className="add-collection2-layered-generate-container58">
                      <span className="add-collection2-layered-generate-text107 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection2-layered-generate-container59">
                      <span className="add-collection2-layered-generate-text108 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-container60">
                    <span className="add-collection2-layered-generate-text109 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection2-layered-generate-container61">
                  <div className="add-collection2-layered-generate-row-image">
                    <div className="add-collection2-layered-generate-container62">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox21"
                      />
                      <div className="add-collection2-layered-generate-container63"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput05 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container64">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button14"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon42 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text110">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image1">
                    <div className="add-collection2-layered-generate-container65">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox22"
                      />
                      <div className="add-collection2-layered-generate-container66"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput07 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container67">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput08 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button15"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon44 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text113">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image2">
                    <div className="add-collection2-layered-generate-container68">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox23"
                      />
                      <div className="add-collection2-layered-generate-container69"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container70">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button16"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon46 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text116">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image3">
                    <div className="add-collection2-layered-generate-container71">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox24"
                      />
                      <div className="add-collection2-layered-generate-container72"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container73">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput12 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button17"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon48 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text119">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image4">
                    <div className="add-collection2-layered-generate-container74">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox25"
                      />
                      <div className="add-collection2-layered-generate-container75"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container76">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput14 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button18"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon50 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text122">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image5">
                    <div className="add-collection2-layered-generate-container77">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox26"
                      />
                      <div className="add-collection2-layered-generate-container78"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput15 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container79">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput16 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button19"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon52 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text125">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image6">
                    <div className="add-collection2-layered-generate-container80">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox27"
                      />
                      <div className="add-collection2-layered-generate-container81"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container82">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput18 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button20"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon54 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text128">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-generate-row-image7">
                    <div className="add-collection2-layered-generate-container83">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-generate-checkbox28"
                      />
                      <div className="add-collection2-layered-generate-container84"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-generate-textinput19 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-generate-container85">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-generate-textinput20 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-generate-button21"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-generate-icon56 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-generate-text131">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection2-layered-generate-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-generate-icon58 fill-color-white"
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
