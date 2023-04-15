import React from 'react'

import PropTypes from 'prop-types'

import './item12.css'

const Item12 = (props) => {
  return (
    <div className="item12-item1">
      <div className="item12-image-header"></div>
      <div className="item12-text-box">
        <div className="item12-container">
          <span className="item12-text">{props.text}</span>
        </div>
        <div className="item12-container1">
          <div className="item12-floor">
            <span className="item12-text1 SmallestLabels">{props.text1}</span>
            <span className="item12-text2 Content16SemiBold">
              {props.text2}
            </span>
          </div>
          <div className="item12-volume24">
            <span className="item12-text3 SmallestLabels">{props.text3}</span>
            <span className="item12-text4 Content16SemiBold">
              {props.text4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Item12.defaultProps = {
  text: 'Collection 1',
  text2: '16700 XRD',
  text4: '325 K XRD',
  text1: 'floor',
  text3: '24H Volume',
}

Item12.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default Item12
