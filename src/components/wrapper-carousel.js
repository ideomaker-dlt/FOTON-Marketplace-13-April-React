import React from 'react'

import PropTypes from 'prop-types'

import Item1 from './item1'
import './wrapper-carousel.css'

const WrapperCarousel = (props) => {
  return (
    <div className="wrapper-carousel-wrapper-carousel">
      <Item1></Item1>
      <div className="wrapper-carousel-item2">
        <div className="wrapper-carousel-image-header"></div>
        <div className="wrapper-carousel-text-box">
          <div className="wrapper-carousel-container">
            <span className="wrapper-carousel-text">{props.text}</span>
          </div>
          <div className="wrapper-carousel-container1">
            <div className="wrapper-carousel-floor">
              <span className="wrapper-carousel-text01 SmallestLabels">
                {props.text4}
              </span>
              <span className="wrapper-carousel-text02 Content16SemiBold">
                {props.text5}
              </span>
            </div>
            <div className="wrapper-carousel-volume24">
              <span className="wrapper-carousel-text03 SmallestLabels">
                {props.text6}
              </span>
              <span className="wrapper-carousel-text04 Content16SemiBold">
                {props.text7}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel-item3">
        <div className="wrapper-carousel-image-header1"></div>
        <div className="wrapper-carousel-text-box1">
          <div className="wrapper-carousel-container2">
            <span className="wrapper-carousel-text05">{props.text1}</span>
          </div>
          <div className="wrapper-carousel-container3">
            <div className="wrapper-carousel-floor1">
              <span className="wrapper-carousel-text06 SmallestLabels">
                {props.text8}
              </span>
              <span className="wrapper-carousel-text07 Content16SemiBold">
                {props.text9}
              </span>
            </div>
            <div className="wrapper-carousel-volume241">
              <span className="wrapper-carousel-text08 SmallestLabels">
                {props.text10}
              </span>
              <span className="wrapper-carousel-text09 Content16SemiBold">
                {props.text11}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel-item4">
        <div className="wrapper-carousel-image-header2"></div>
        <div className="wrapper-carousel-text-box2">
          <div className="wrapper-carousel-container4">
            <span className="wrapper-carousel-text10">{props.text2}</span>
          </div>
          <div className="wrapper-carousel-container5">
            <div className="wrapper-carousel-floor2">
              <span className="wrapper-carousel-text11 SmallestLabels">
                {props.text12}
              </span>
              <span className="wrapper-carousel-text12 Content16SemiBold">
                {props.text13}
              </span>
            </div>
            <div className="wrapper-carousel-volume242">
              <span className="wrapper-carousel-text13 SmallestLabels">
                {props.text14}
              </span>
              <span className="wrapper-carousel-text14 Content16SemiBold">
                {props.text15}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-carousel-item5">
        <div className="wrapper-carousel-image-header3"></div>
        <div className="wrapper-carousel-text-box3">
          <div className="wrapper-carousel-container6">
            <span className="wrapper-carousel-text15">{props.text3}</span>
          </div>
          <div className="wrapper-carousel-container7">
            <div className="wrapper-carousel-floor3">
              <span className="wrapper-carousel-text16 SmallestLabels">
                {props.text16}
              </span>
              <span className="wrapper-carousel-text17 Content16SemiBold">
                {props.text17}
              </span>
            </div>
            <div className="wrapper-carousel-volume243">
              <span className="wrapper-carousel-text18 SmallestLabels">
                {props.text18}
              </span>
              <span className="wrapper-carousel-text19 Content16SemiBold">
                {props.text19}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WrapperCarousel.defaultProps = {
  text: 'Collection 2',
  text2: 'Collection 4',
  text7: '325 K XRD',
  text5: '16700 XRD',
  text16: 'floor',
  text4: 'floor',
  text14: '24H Volume',
  text13: '16700 XRD',
  text11: '325 K XRD',
  text9: '16700 XRD',
  text3: 'Collection 5',
  text19: '325 K XRD',
  text12: 'floor',
  text18: '24H Volume',
  text10: '24H Volume',
  text8: 'floor',
  text15: '325 K XRD',
  text6: '24H Volume',
  text17: '16700 XRD',
  text1: 'Collection 3',
}

WrapperCarousel.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  text16: PropTypes.string,
  text4: PropTypes.string,
  text14: PropTypes.string,
  text13: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text19: PropTypes.string,
  text12: PropTypes.string,
  text18: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  text15: PropTypes.string,
  text6: PropTypes.string,
  text17: PropTypes.string,
  text1: PropTypes.string,
}

export default WrapperCarousel
