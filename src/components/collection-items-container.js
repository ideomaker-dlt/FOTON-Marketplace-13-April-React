import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Component2 from './component2'
import './collection-items-container.css'

const CollectionItemsContainer = (props) => {
  return (
    <div
      className={`collection-items-container-collection-items-container ${props.rootClassName} `}
    >
      <div className="collection-items-container-container">
        <div className="collection-items-container-filters-side-menu">
          <div className="collection-items-container-header-sticky-mobile">
            <div className="collection-items-container-header-filter-menu">
              <div className="collection-items-container-container01">
                <span className="collection-items-container-text">
                  <span className="collection-items-container-text01">
                    Filters
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-apply-button">
                <span className="collection-items-container-text03">
                  <span className="collection-items-container-text04">
                    Apply
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-close-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-big-button">
              <div className="collection-items-container-submit">
                <button className="collection-items-container-button button">
                  <span className="collection-items-container-text06">
                    <span>Apply</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion">
            <div className="collection-items-container-accordion-header">
              <div className="collection-items-container-container02">
                <span className="collection-items-container-text09">
                  <span className="collection-items-container-text10">
                    Rarity Rank
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-container03">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon02"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer">
              <div className="collection-items-container-range">
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="1"
                  className="collection-items-container-textinput focus-reset-forms input Content16SemiBold"
                />
                <span className="collection-items-container-text12">To</span>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="350"
                  className="collection-items-container-textinput1 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="collection-items-container-submit1">
                <button className="collection-items-container-button1 button">
                  <span className="collection-items-container-text13">
                    <span>Apply</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion1">
            <div className="collection-items-container-accordion-header1">
              <div className="collection-items-container-container04">
                <span className="collection-items-container-text16">
                  <span className="collection-items-container-text17">
                    Status
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-container05">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon04"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer1">
              <div className="collection-items-container-accordion-item">
                <div className="collection-items-container-container06">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox"
                  />
                  <span className="collection-items-container-text19">
                    Listed
                  </span>
                </div>
                <span className="collection-items-container-how-many">20</span>
              </div>
              <div className="collection-items-container-accordion-item01">
                <div className="collection-items-container-container07">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox01"
                  />
                  <span className="collection-items-container-text20">
                    Unlisted
                  </span>
                </div>
                <span className="collection-items-container-how-many01">
                  80
                </span>
              </div>
              <div className="collection-items-container-accordion-item02">
                <div className="collection-items-container-container08">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox02"
                  />
                  <span className="collection-items-container-text21">
                    Has Offers
                  </span>
                </div>
                <span className="collection-items-container-how-many02">4</span>
              </div>
              <div className="collection-items-container-accordion-item03">
                <div className="collection-items-container-container09">
                  <input
                    type="checkbox"
                    checked
                    className="collection-items-container-checkbox03"
                  />
                  <span className="collection-items-container-text22">
                    Auctioned
                  </span>
                </div>
                <span className="collection-items-container-how-many03">4</span>
              </div>
            </div>
          </div>
          <div className="collection-items-container-separation-line"></div>
          <div className="collection-items-container-accordion2">
            <div className="collection-items-container-accordion-header2">
              <div className="collection-items-container-container10">
                <span className="collection-items-container-text23">
                  Attribute one
                </span>
              </div>
              <div className="collection-items-container-container11">
                <span className="collection-items-container-how-many04">
                  328
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon06"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer2">
              <div className="collection-items-container-accordion-item04">
                <div className="collection-items-container-container12">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox04"
                  />
                  <span className="collection-items-container-text24">
                    Trait nr 1
                  </span>
                </div>
                <span className="collection-items-container-how-many05">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item05">
                <div className="collection-items-container-container13">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox05"
                  />
                  <span className="collection-items-container-text25">
                    Trait nr 2
                  </span>
                </div>
                <span className="collection-items-container-how-many06">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item06">
                <div className="collection-items-container-container14">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox06"
                  />
                  <span className="collection-items-container-text26">
                    Trait nr 3
                  </span>
                </div>
                <span className="collection-items-container-how-many07">
                  328
                </span>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion3">
            <div className="collection-items-container-accordion-header3">
              <div className="collection-items-container-container15">
                <span className="collection-items-container-text27">
                  Attribute two
                </span>
              </div>
              <div className="collection-items-container-container16">
                <span className="collection-items-container-how-many08">
                  328
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon08"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer3">
              <div className="collection-items-container-accordion-item07">
                <div className="collection-items-container-container17">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox07"
                  />
                  <span className="collection-items-container-text28">
                    Trait nr 1
                  </span>
                </div>
                <span className="collection-items-container-how-many09">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item08">
                <div className="collection-items-container-container18">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox08"
                  />
                  <span className="collection-items-container-text29">
                    Trait nr 2
                  </span>
                </div>
                <span className="collection-items-container-how-many10">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item09">
                <div className="collection-items-container-container19">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox09"
                  />
                  <span className="collection-items-container-text30">
                    Trait nr 3
                  </span>
                </div>
                <span className="collection-items-container-how-many11">
                  328
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-items-container-grid-items">
          <div className="collection-items-container-container20">
            <div className="collection-items-container-item1">
              <Component2></Component2>
              <div className="collection-items-container-text-box">
                <div className="collection-items-container-container21">
                  <span className="collection-items-container-text31">
                    {props.text4}
                  </span>
                  <div className="collection-items-container-container22">
                    <span className="collection-items-container-text32">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container23">
                  <div className="collection-items-container-floor">
                    <span className="collection-items-container-text33 SmallestLabels">
                      {props.text20}
                    </span>
                    <span className="collection-items-container-text34 Content16SemiBold">
                      {props.text21}
                    </span>
                  </div>
                  <div className="collection-items-container-volume24">
                    <span className="collection-items-container-text35 SmallestLabels">
                      {props.text22}
                    </span>
                    <div className="collection-items-container-container24">
                      <span className="collection-items-container-text36">
                        {props.text36}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/item-page">
              <div className="collection-items-container-item101">
                <div className="collection-items-container-container25">
                  <div className="collection-items-container-image-header">
                    <input
                      type="checkbox"
                      className="collection-items-container-checkbox10"
                    />
                  </div>
                </div>
                <div className="collection-items-container-text-box01">
                  <div className="collection-items-container-container26">
                    <span className="collection-items-container-text37">
                      Item one
                    </span>
                    <div className="collection-items-container-container27">
                      <span className="collection-items-container-text38">
                        # 2537
                      </span>
                    </div>
                  </div>
                  <div className="collection-items-container-container28">
                    <div className="collection-items-container-floor01">
                      <span className="collection-items-container-text39 SmallestLabels">
                        Price
                      </span>
                      <span className="collection-items-container-text40 Content16SemiBold">
                        16700 XRD
                      </span>
                    </div>
                    <div className="collection-items-container-volume2401">
                      <span className="collection-items-container-text41 SmallestLabels">
                        LISTED
                      </span>
                      <div className="collection-items-container-container29">
                        <span className="collection-items-container-text42">
                          4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="collection-items-container-item102">
              <div className="collection-items-container-image-header01">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox11"
                />
              </div>
              <div className="collection-items-container-text-box02">
                <div className="collection-items-container-container30">
                  <span className="collection-items-container-text43">
                    Item one
                  </span>
                  <div className="collection-items-container-container31">
                    <span className="collection-items-container-text44">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container32">
                  <div className="collection-items-container-floor02">
                    <span className="collection-items-container-text45 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text46 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2402">
                    <span className="collection-items-container-text47 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container33">
                      <span className="collection-items-container-text48">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item103">
              <div className="collection-items-container-image-header02">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox12"
                />
              </div>
              <div className="collection-items-container-text-box03">
                <div className="collection-items-container-container34">
                  <span className="collection-items-container-text49">
                    Item one
                  </span>
                  <div className="collection-items-container-container35">
                    <span className="collection-items-container-text50">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container36">
                  <div className="collection-items-container-floor03">
                    <span className="collection-items-container-text51 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text52 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2403">
                    <span className="collection-items-container-text53 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container37">
                      <span className="collection-items-container-text54">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item104">
              <div className="collection-items-container-image-header03">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox13"
                />
              </div>
              <div className="collection-items-container-text-box04">
                <div className="collection-items-container-container38">
                  <span className="collection-items-container-text55">
                    Item one
                  </span>
                  <div className="collection-items-container-container39">
                    <span className="collection-items-container-text56">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container40">
                  <div className="collection-items-container-floor04">
                    <span className="collection-items-container-text57 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text58 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2404">
                    <span className="collection-items-container-text59 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container41">
                      <span className="collection-items-container-text60">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item105">
              <div className="collection-items-container-image-header04">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox14"
                />
              </div>
              <div className="collection-items-container-text-box05">
                <div className="collection-items-container-container42">
                  <span className="collection-items-container-text61">
                    Item one
                  </span>
                  <div className="collection-items-container-container43">
                    <span className="collection-items-container-text62">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container44">
                  <div className="collection-items-container-floor05">
                    <span className="collection-items-container-text63 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text64 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2405">
                    <span className="collection-items-container-text65 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container45">
                      <span className="collection-items-container-text66">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item106">
              <div className="collection-items-container-image-header05">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox15"
                />
              </div>
              <div className="collection-items-container-text-box06">
                <div className="collection-items-container-container46">
                  <span className="collection-items-container-text67">
                    Item one
                  </span>
                  <div className="collection-items-container-container47">
                    <span className="collection-items-container-text68">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container48">
                  <div className="collection-items-container-floor06">
                    <span className="collection-items-container-text69 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text70 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2406">
                    <span className="collection-items-container-text71 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container49">
                      <span className="collection-items-container-text72">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item107">
              <div className="collection-items-container-image-header06">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox16"
                />
              </div>
              <div className="collection-items-container-text-box07">
                <div className="collection-items-container-container50">
                  <span className="collection-items-container-text73">
                    Item one
                  </span>
                  <div className="collection-items-container-container51">
                    <span className="collection-items-container-text74">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container52">
                  <div className="collection-items-container-floor07">
                    <span className="collection-items-container-text75 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text76 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2407">
                    <span className="collection-items-container-text77 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container53">
                      <span className="collection-items-container-text78">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item108">
              <div className="collection-items-container-image-header07">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox17"
                />
              </div>
              <div className="collection-items-container-text-box08">
                <div className="collection-items-container-container54">
                  <span className="collection-items-container-text79">
                    Item one
                  </span>
                  <div className="collection-items-container-container55">
                    <span className="collection-items-container-text80">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container56">
                  <div className="collection-items-container-floor08">
                    <span className="collection-items-container-text81 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text82 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2408">
                    <span className="collection-items-container-text83 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container57">
                      <span className="collection-items-container-text84">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item109">
              <div className="collection-items-container-image-header08">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox18"
                />
              </div>
              <div className="collection-items-container-text-box09">
                <div className="collection-items-container-container58">
                  <span className="collection-items-container-text85">
                    Item one
                  </span>
                  <div className="collection-items-container-container59">
                    <span className="collection-items-container-text86">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container60">
                  <div className="collection-items-container-floor09">
                    <span className="collection-items-container-text87 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text88 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2409">
                    <span className="collection-items-container-text89 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container61">
                      <span className="collection-items-container-text90">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item110">
              <div className="collection-items-container-image-header09">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox19"
                />
              </div>
              <div className="collection-items-container-text-box10">
                <div className="collection-items-container-container62">
                  <span className="collection-items-container-text91">
                    Item one
                  </span>
                  <div className="collection-items-container-container63">
                    <span className="collection-items-container-text92">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container64">
                  <div className="collection-items-container-floor10">
                    <span className="collection-items-container-text93 SmallestLabels">
                      Price
                    </span>
                    <span className="collection-items-container-text94 Content16SemiBold">
                      16700 XRD
                    </span>
                  </div>
                  <div className="collection-items-container-volume2410">
                    <span className="collection-items-container-text95 SmallestLabels">
                      LISTED
                    </span>
                    <div className="collection-items-container-container65">
                      <span className="collection-items-container-text96">
                        4
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
  )
}

CollectionItemsContainer.defaultProps = {
  text35: '3',
  text14: 'Price',
  text20: 'Price',
  text23: 'Price',
  text27: '16700 XRD',
  text16: 'LISTED',
  text1: 'Item one',
  text8: 'Price',
  text37: '2 offers',
  text22: 'LISTED',
  text10: 'LISTED',
  rootClassName: '',
  text19: 'LISTED',
  text33: 'no offers',
  text36: '4',
  text24: '16700 XRD',
  text38: '2 offers',
  text39: '2 offers',
  text25: 'LISTED',
  text13: 'UNlisted',
  text17: 'Price',
  text3: 'Item one',
  text18: '16700 XRD',
  text12: '16700 XRD',
  text9: '16700 XRD',
  text5: 'Item one',
  text21: '16700 XRD',
  text29: 'Price',
  text2: 'Item one',
  text15: '16700 XRD',
  text32: '2 offers',
  text11: 'Price',
  text26: 'Price',
  text31: 'LISTED',
  text34: '2 offers',
  text: 'Item one',
  text28: 'LISTED',
  text7: 'Item one',
  text4: 'Item one',
  text6: 'Item one',
  text30: '16700 XRD',
}

CollectionItemsContainer.propTypes = {
  text35: PropTypes.string,
  text14: PropTypes.string,
  text20: PropTypes.string,
  text23: PropTypes.string,
  text27: PropTypes.string,
  text16: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text37: PropTypes.string,
  text22: PropTypes.string,
  text10: PropTypes.string,
  rootClassName: PropTypes.string,
  text19: PropTypes.string,
  text33: PropTypes.string,
  text36: PropTypes.string,
  text24: PropTypes.string,
  text38: PropTypes.string,
  text39: PropTypes.string,
  text25: PropTypes.string,
  text13: PropTypes.string,
  text17: PropTypes.string,
  text3: PropTypes.string,
  text18: PropTypes.string,
  text12: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  text21: PropTypes.string,
  text29: PropTypes.string,
  text2: PropTypes.string,
  text15: PropTypes.string,
  text32: PropTypes.string,
  text11: PropTypes.string,
  text26: PropTypes.string,
  text31: PropTypes.string,
  text34: PropTypes.string,
  text: PropTypes.string,
  text28: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text30: PropTypes.string,
}

export default CollectionItemsContainer
