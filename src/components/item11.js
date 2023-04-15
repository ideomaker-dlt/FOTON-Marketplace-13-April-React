import React from 'react'

import PropTypes from 'prop-types'

import './item11.css'

const Item11 = (props) => {
  return (
    <div className="item11-item1">
      <div className="item11-image-header"></div>
      <div className="item11-text-box">
        <div className="item11-container">
          <span className="item11-text">{props.text}</span>
        </div>
        <div className="item11-container1">
          <div className="item11-floor">
            <span className="item11-text1 SmallestLabels">{props.text1}</span>
            <span className="item11-text2 Content16SemiBold">
              {props.text2}
            </span>
          </div>
          <div className="item11-volume24">
            <span className="item11-text3 SmallestLabels">{props.text3}</span>
            <span className="item11-text4 Content16SemiBold">
              {props.text4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Item11.defaultProps = {
  text: 'Collection 1',
  text4: '325 K XRD',
  text1: 'floor',
  text2: '16700 XRD',
  text3: '24H Volume',
}

Item11.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default Item11
