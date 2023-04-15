import React from 'react'

import PropTypes from 'prop-types'

import Item11 from './item11'
import './wrapper-carousel1.css'

const WrapperCarousel1 = (props) => {
  return (
    <div className="wrapper-carousel1-wrapper-carousel">
      <Item11></Item11>
      <div className="wrapper-carousel1-item2">
        <div className="wrapper-carousel1-image-header"></div>
        <div className="wrapper-carousel1-text-box">
          <div className="wrapper-carousel1-container">
            <span className="wrapper-carousel1-text">{props.text}</span>
          </div>
          <div className="wrapper-carousel1-container1">
            <div className="wrapper-carousel1-floor">
              <span className="wrapper-carousel1-text01 SmallestLabels">
                {props.text4}
              </span>
              <span className="wrapper-carousel1-text02 Content16SemiBold">
                {props.text5}
              </span>
            </div>
            <div className="wrapper-carousel1-volume24">
              <span className="wrapper-carousel1-text03 SmallestLabels">
                {props.text6}
              </span>
              <span className="wrapper-carousel1-text04 Content16SemiBold">
                {props.text7}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel1-item3">
        <div className="wrapper-carousel1-image-header1"></div>
        <div className="wrapper-carousel1-text-box1">
          <div className="wrapper-carousel1-container2">
            <span className="wrapper-carousel1-text05">{props.text1}</span>
          </div>
          <div className="wrapper-carousel1-container3">
            <div className="wrapper-carousel1-floor1">
              <span className="wrapper-carousel1-text06 SmallestLabels">
                {props.text8}
              </span>
              <span className="wrapper-carousel1-text07 Content16SemiBold">
                {props.text9}
              </span>
            </div>
            <div className="wrapper-carousel1-volume241">
              <span className="wrapper-carousel1-text08 SmallestLabels">
                {props.text10}
              </span>
              <span className="wrapper-carousel1-text09 Content16SemiBold">
                {props.text11}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel1-item4">
        <div className="wrapper-carousel1-image-header2"></div>
        <div className="wrapper-carousel1-text-box2">
          <div className="wrapper-carousel1-container4">
            <span className="wrapper-carousel1-text10">{props.text2}</span>
          </div>
          <div className="wrapper-carousel1-container5">
            <div className="wrapper-carousel1-floor2">
              <span className="wrapper-carousel1-text11 SmallestLabels">
                {props.text12}
              </span>
              <span className="wrapper-carousel1-text12 Content16SemiBold">
                {props.text13}
              </span>
            </div>
            <div className="wrapper-carousel1-volume242">
              <span className="wrapper-carousel1-text13 SmallestLabels">
                {props.text14}
              </span>
              <span className="wrapper-carousel1-text14 Content16SemiBold">
                {props.text15}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel1-item5">
        <div className="wrapper-carousel1-image-header3"></div>
        <div className="wrapper-carousel1-text-box3">
          <div className="wrapper-carousel1-container6">
            <span className="wrapper-carousel1-text15">{props.text3}</span>
          </div>
          <div className="wrapper-carousel1-container7">
            <div className="wrapper-carousel1-floor3">
              <span className="wrapper-carousel1-text16 SmallestLabels">
                {props.text16}
              </span>
              <span className="wrapper-carousel1-text17 Content16SemiBold">
                {props.text17}
              </span>
            </div>
            <div className="wrapper-carousel1-volume243">
              <span className="wrapper-carousel1-text18 SmallestLabels">
                {props.text18}
              </span>
              <span className="wrapper-carousel1-text19 Content16SemiBold">
                {props.text19}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WrapperCarousel1.defaultProps = {
  text2: 'Collection 4',
  text10: '24H Volume',
  text: 'Collection 2',
  text15: '325 K XRD',
  text16: 'floor',
  text5: '16700 XRD',
  text19: '325 K XRD',
  text13: '16700 XRD',
  text7: '325 K XRD',
  text14: '24H Volume',
  text6: '24H Volume',
  text8: 'floor',
  text4: 'floor',
  text1: 'Collection 3',
  text12: 'floor',
  text3: 'Collection 5',
  text17: '16700 XRD',
  text11: '325 K XRD',
  text9: '16700 XRD',
  text18: '24H Volume',
}

WrapperCarousel1.propTypes = {
  text2: PropTypes.string,
  text10: PropTypes.string,
  text: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text5: PropTypes.string,
  text19: PropTypes.string,
  text13: PropTypes.string,
  text7: PropTypes.string,
  text14: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text3: PropTypes.string,
  text17: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text18: PropTypes.string,
}

export default WrapperCarousel1
