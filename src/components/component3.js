import React, { useState } from 'react'

import './component3.css'

const Component3 = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="component3-container">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="component3-button button"
      >
        <svg viewBox="0 0 1024 1024" className="component3-icon">
          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
        </svg>
      </button>
      {isVisible && (
        <div className="component3-results">
          <div className="component3-collections">
            <span className="component3-text">Collections</span>
            <div className="component3-row-result">
              <div className="component3-container1">
                <span className="component3-text01">Collection Name</span>
                <span className="component3-text02">By Project name</span>
              </div>
              <div className="component3-container2">
                <span className="component3-text03">12000 items</span>
              </div>
            </div>
            <div className="component3-row-result1">
              <div className="component3-container3">
                <span className="component3-text04">Collection Name</span>
                <span className="component3-text05">By Project name</span>
              </div>
              <div className="component3-container4">
                <span className="component3-text06">12000 items</span>
              </div>
            </div>
          </div>
          <div className="component3-users">
            <span className="component3-text07">Users</span>
            <div className="component3-row-result2">
              <div className="component3-container5">
                <span className="component3-text08">User Name 1</span>
                <span className="component3-text09">account...hk6ds</span>
              </div>
              <div className="component3-container6">
                <span className="component3-text10">12000 items</span>
              </div>
            </div>
            <div className="component3-row-result3">
              <div className="component3-container7">
                <span className="component3-text11">User Name 2</span>
                <span className="component3-text12">account...hk657</span>
              </div>
              <div className="component3-container8">
                <span className="component3-text13">12000 items</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Component3
