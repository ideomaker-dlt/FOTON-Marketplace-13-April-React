import React, { useState } from 'react'

import './component1.css'

const Component1 = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="component1-container"
    >
      <h2 className="component1-text">Features</h2>
      <h2 className="component1-text01">
        <span>
          NFTs and Digital Assets for the next gen of Web 3 applications
        </span>
        <br></br>
      </h2>
      <div className="component1-container1">
        <div className="component1-info-bubble">
          <span className="component1-text04">UNLIMITED POWER &amp; SCALE</span>
        </div>
        <div className="component1-info-bubble1">
          <span className="component1-text05">FOR MASS ADOPTION</span>
        </div>
      </div>
      {isVisible && (
        <div className="component1-spinner">
          <img
            alt="image"
            src="/tesseract-spinner%20(1).svg"
            className="component1-image"
          />
          <span className="component1-text06">
            <span>
              AVAILABLE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>SOON</span>
          </span>
        </div>
      )}
    </div>
  )
}

export default Component1
