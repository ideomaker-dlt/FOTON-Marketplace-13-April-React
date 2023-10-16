import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={`app-component-container ${props.rootClassName} `}
    >
      {isVisible && (
        <div className="app-component-overlay">
          <div className="app-component-arrow-btn">
            <svg
              viewBox="0 0 1024 1024"
              className="app-component-icon fill-color-white"
            >
              <path
                d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
