import React from 'react'

import PropTypes from 'prop-types'

import Item12 from './item12'
import './wrapper-carousel2.css'

const WrapperCarousel2 = (props) => {
  return (
    <div className="wrapper-carousel2-wrapper-carousel">
      <Item12></Item12>
      <div className="wrapper-carousel2-item2">
        <div className="wrapper-carousel2-image-header"></div>
        <div className="wrapper-carousel2-text-box">
          <div className="wrapper-carousel2-container">
            <span className="wrapper-carousel2-text">{props.text}</span>
          </div>
          <div className="wrapper-carousel2-container1">
            <div className="wrapper-carousel2-floor">
              <span className="wrapper-carousel2-text01 SmallestLabels">
                {props.text4}
              </span>
              <span className="wrapper-carousel2-text02 Content16SemiBold">
                {props.text5}
              </span>
            </div>
            <div className="wrapper-carousel2-volume24">
              <span className="wrapper-carousel2-text03 SmallestLabels">
                {props.text6}
              </span>
              <span className="wrapper-carousel2-text04 Content16SemiBold">
                {props.text7}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel2-item3">
        <div className="wrapper-carousel2-image-header1"></div>
        <div className="wrapper-carousel2-text-box1">
          <div className="wrapper-carousel2-container2">
            <span className="wrapper-carousel2-text05">{props.text1}</span>
          </div>
          <div className="wrapper-carousel2-container3">
            <div className="wrapper-carousel2-floor1">
              <span className="wrapper-carousel2-text06 SmallestLabels">
                {props.text8}
              </span>
              <span className="wrapper-carousel2-text07 Content16SemiBold">
                {props.text9}
              </span>
            </div>
            <div className="wrapper-carousel2-volume241">
              <span className="wrapper-carousel2-text08 SmallestLabels">
                {props.text10}
              </span>
              <span className="wrapper-carousel2-text09 Content16SemiBold">
                {props.text11}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel2-item4">
        <div className="wrapper-carousel2-image-header2"></div>
        <div className="wrapper-carousel2-text-box2">
          <div className="wrapper-carousel2-container4">
            <span className="wrapper-carousel2-text10">{props.text2}</span>
          </div>
          <div className="wrapper-carousel2-container5">
            <div className="wrapper-carousel2-floor2">
              <span className="wrapper-carousel2-text11 SmallestLabels">
                {props.text12}
              </span>
              <span className="wrapper-carousel2-text12 Content16SemiBold">
                {props.text13}
              </span>
            </div>
            <div className="wrapper-carousel2-volume242">
              <span className="wrapper-carousel2-text13 SmallestLabels">
                {props.text14}
              </span>
              <span className="wrapper-carousel2-text14 Content16SemiBold">
                {props.text15}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel2-item5">
        <div className="wrapper-carousel2-image-header3"></div>
        <div className="wrapper-carousel2-text-box3">
          <div className="wrapper-carousel2-container6">
            <span className="wrapper-carousel2-text15">{props.text3}</span>
          </div>
          <div className="wrapper-carousel2-container7">
            <div className="wrapper-carousel2-floor3">
              <span className="wrapper-carousel2-text16 SmallestLabels">
                {props.text16}
              </span>
              <span className="wrapper-carousel2-text17 Content16SemiBold">
                {props.text17}
              </span>
            </div>
            <div className="wrapper-carousel2-volume243">
              <span className="wrapper-carousel2-text18 SmallestLabels">
                {props.text18}
              </span>
              <span className="wrapper-carousel2-text19 Content16SemiBold">
                {props.text19}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WrapperCarousel2.defaultProps = {
  text13: '16700 XRD',
  text5: '16700 XRD',
  text14: '24H Volume',
  text19: '325 K XRD',
  text7: '325 K XRD',
  text: 'Collection 2',
  text15: '325 K XRD',
  text1: 'Collection 3',
  text16: 'floor',
  text6: '24H Volume',
  text17: '16700 XRD',
  text8: 'floor',
  text18: '24H Volume',
  text9: '16700 XRD',
  text4: 'floor',
  text11: '325 K XRD',
  text10: '24H Volume',
  text2: 'Collection 4',
  text12: 'floor',
  text3: 'Collection 5',
}

WrapperCarousel2.propTypes = {
  text13: PropTypes.string,
  text5: PropTypes.string,
  text14: PropTypes.string,
  text19: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text15: PropTypes.string,
  text1: PropTypes.string,
  text16: PropTypes.string,
  text6: PropTypes.string,
  text17: PropTypes.string,
  text8: PropTypes.string,
  text18: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  text11: PropTypes.string,
  text10: PropTypes.string,
  text2: PropTypes.string,
  text12: PropTypes.string,
  text3: PropTypes.string,
}

export default WrapperCarousel2
