import React from 'react'

import PropTypes from 'prop-types'

import './item1.css'

const Item1 = (props) => {
  return (
    <div className="item1-item1">
      <div className="item1-image-header"></div>
      <div className="item1-text-box">
        <div className="item1-container">
          <span className="item1-text">{props.text}</span>
        </div>
        <div className="item1-container1">
          <div className="item1-floor">
            <span className="item1-text1 SmallestLabels">{props.text1}</span>
            <span className="item1-text2 Content16SemiBold">{props.text2}</span>
          </div>
          <div className="item1-volume24">
            <span className="item1-text3 SmallestLabels">{props.text3}</span>
            <span className="item1-text4 Content16SemiBold">{props.text4}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Item1.defaultProps = {
  text3: '24H Volume',
  text4: '325 K XRD',
  text: 'Collection 1',
  text2: '16700 XRD',
  text1: 'floor',
}

Item1.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default Item1
