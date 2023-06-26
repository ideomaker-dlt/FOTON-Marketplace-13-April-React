import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ButtonExpand from './button-expand'
import './item-open.css'

const ItemOpen = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="item-open-item-open"
    >
      <div className="item-open-image-header">
        <input type="checkbox" className="item-open-checkbox" />
        {isVisible && (
          <div className="item-open-gray-overlay">
            <ButtonExpand></ButtonExpand>
          </div>
        )}
      </div>
      <div className="item-open-text-box">
        <div className="item-open-container">
          <span className="item-open-text">{props.text}</span>
          <div className="item-open-container1">
            <span className="item-open-text1">{props.text1}</span>
          </div>
        </div>
        <div className="item-open-overlay-view-details">
          <div className="item-open-container2">
            <svg
              viewBox="0 0 1024 1024"
              className="item-open-icon fill-color-white"
            >
              <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
            </svg>
            <span className="item-open-text2">Buy Now</span>
            <span className="item-open-text3">Add to Cart</span>
          </div>
        </div>
        <div className="item-open-container3">
          <div className="item-open-floor">
            <span className="item-open-text4 SmallestLabels">
              {props.text2}
            </span>
            <span className="item-open-text5 Content16SemiBold">
              {props.text3}
            </span>
          </div>
          <div className="item-open-volume24">
            <span className="item-open-text6 SmallestLabels">
              {props.text4}
            </span>
            <div className="item-open-container4">
              <span className="item-open-text7">{props.text5}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemOpen.defaultProps = {
  text11: '# 2537',
  text6: 'Continue',
  text: 'Blob #00001',
  text61: 'Continue',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text4: 'LISTED',
  text7: 'Text',
  button: 'Button',
  text2: 'Price',
  text5: '4',
  text1: '# 2537',
  text3: '16700 XRD',
}

ItemOpen.propTypes = {
  text11: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text61: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default ItemOpen
