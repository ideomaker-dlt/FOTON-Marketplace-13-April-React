import React, { useState } from 'react'

import Script from 'dangerous-html/react'

import './searchbar.css'

const Searchbar = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="searchbar-searchbar">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="searchbar-container"
      >
        <form className="searchbar-form">
          <div className="searchbar-container01">
            <button type="button" className="searchbar-button button">
              <svg viewBox="0 0 1024 1024" className="searchbar-icon">
                <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </button>
          </div>
          <input
            type="text"
            id="mainsearch"
            name="search-field"
            placeholder="Search..."
            className="searchbar-textinput focus-reset Content18 input"
          />
          <div>
            <div className="searchbar-container03">
              <Script
                html={`<style>
input::placeholder #searchfield { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: red;
opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Internet Explorer 10-11 */
color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
color: red;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
-webkit-appearance:none;
}
</style>`}
              ></Script>
            </div>
          </div>
        </form>
        {isVisible && (
          <div className="searchbar-results">
            <div className="searchbar-collections">
              <span className="searchbar-text">Collections</span>
              <div className="searchbar-row-result">
                <div className="searchbar-container04">
                  <div className="searchbar-container05"></div>
                  <div className="searchbar-container06">
                    <span className="searchbar-text01">Collection Name</span>
                    <span className="searchbar-text02">By Project Name</span>
                  </div>
                </div>
                <div className="searchbar-container07">
                  <span className="searchbar-text03">12000 items</span>
                </div>
              </div>
              <div className="searchbar-row-result1">
                <div className="searchbar-container08">
                  <div className="searchbar-container09"></div>
                  <div className="searchbar-container10">
                    <span className="searchbar-text04">Collection Name 2</span>
                    <span className="searchbar-text05">By Project Name</span>
                  </div>
                </div>
                <div className="searchbar-container11">
                  <span className="searchbar-text06">12000 items</span>
                </div>
              </div>
              <div className="searchbar-row-result2">
                <div className="searchbar-container12">
                  <div className="searchbar-container13"></div>
                  <div className="searchbar-container14">
                    <span className="searchbar-text07">Collection Name 3</span>
                    <span className="searchbar-text08">By Project Name</span>
                  </div>
                </div>
                <div className="searchbar-container15">
                  <span className="searchbar-text09">12000 items</span>
                </div>
              </div>
            </div>
            <div className="searchbar-users">
              <span className="searchbar-text10">Users</span>
              <div className="searchbar-row-result3">
                <div className="searchbar-container16">
                  <div className="searchbar-container17"></div>
                  <div className="searchbar-container18">
                    <span className="searchbar-text11">User Name</span>
                    <span className="searchbar-text12">account...hs7fg0</span>
                  </div>
                </div>
                <div className="searchbar-container19">
                  <span className="searchbar-text13">327 followers</span>
                </div>
              </div>
              <div className="searchbar-row-result4">
                <div className="searchbar-container20">
                  <div className="searchbar-container21"></div>
                  <div className="searchbar-container22">
                    <span className="searchbar-text14">User Name</span>
                    <span className="searchbar-text15">account...hs7fg0</span>
                  </div>
                </div>
                <div className="searchbar-container23">
                  <span className="searchbar-text16">327 followers</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => setIsVisible(false)}
              className="searchbar-click-out"
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Searchbar
