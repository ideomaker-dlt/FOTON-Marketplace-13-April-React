import React, { useState } from 'react'

import Script from 'dangerous-html/react'

import './mobile-search.css'

const MobileSearch = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="mobile-search-mobile-search">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="mobile-search-search-button"
      >
        <svg viewBox="0 0 1024 1024" className="mobile-search-icon">
          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
        </svg>
      </div>
      {isVisible && (
        <div className="mobile-search-wrapper-search">
          <div className="mobile-search-header">
            <h1 className="mobile-search-text">Search</h1>
            <div
              onClick={() => setIsVisible(false)}
              className="mobile-search-close"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="mobile-search-icon2 fill-color-white"
              >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="mobile-search-search-bar-results">
            <div className="mobile-search-container">
              <form className="mobile-search-form">
                <div className="mobile-search-container01">
                  <button type="button" className="mobile-search-button button">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="mobile-search-icon4"
                    >
                      <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  id="mainsearch"
                  name="search-field"
                  placeholder="Search collections or users..."
                  className="mobile-search-textinput Content18 focus-reset input"
                />
                <div>
                  <div className="mobile-search-container03">
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
                <div className="mobile-search-container04">
                  <button
                    type="button"
                    className="mobile-search-button1 button"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="mobile-search-icon6"
                    >
                      <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="mobile-search-results">
              <div className="mobile-search-collections">
                <span className="mobile-search-text01">Collections</span>
                <div className="mobile-search-row-result">
                  <div className="mobile-search-container05">
                    <div className="mobile-search-container06"></div>
                    <div className="mobile-search-container07">
                      <span className="mobile-search-text02">
                        Collection Name
                      </span>
                      <span className="mobile-search-text03">
                        By Project Name
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container08">
                    <span className="mobile-search-text04">12000 items</span>
                  </div>
                </div>
                <div className="mobile-search-row-result01">
                  <div className="mobile-search-container09">
                    <div className="mobile-search-container10"></div>
                    <div className="mobile-search-container11">
                      <span className="mobile-search-text05">
                        Collection Name 2
                      </span>
                      <span className="mobile-search-text06">
                        By Project Name
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container12">
                    <span className="mobile-search-text07">12000 items</span>
                  </div>
                </div>
                <div className="mobile-search-row-result02">
                  <div className="mobile-search-container13">
                    <div className="mobile-search-container14"></div>
                    <div className="mobile-search-container15">
                      <span className="mobile-search-text08">
                        Collection Name 3
                      </span>
                      <span className="mobile-search-text09">
                        By Project Name
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container16">
                    <span className="mobile-search-text10">12000 items</span>
                  </div>
                </div>
              </div>
              <div className="mobile-search-users">
                <span className="mobile-search-text11">Users</span>
                <div className="mobile-search-row-result03">
                  <div className="mobile-search-container17">
                    <div className="mobile-search-container18"></div>
                    <div className="mobile-search-container19">
                      <span className="mobile-search-text12">User Name</span>
                      <span className="mobile-search-text13">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container20">
                    <span className="mobile-search-text14">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result04">
                  <div className="mobile-search-container21">
                    <div className="mobile-search-container22"></div>
                    <div className="mobile-search-container23">
                      <span className="mobile-search-text15">User Name</span>
                      <span className="mobile-search-text16">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container24">
                    <span className="mobile-search-text17">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result05">
                  <div className="mobile-search-container25">
                    <div className="mobile-search-container26"></div>
                    <div className="mobile-search-container27">
                      <span className="mobile-search-text18">User Name</span>
                      <span className="mobile-search-text19">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container28">
                    <span className="mobile-search-text20">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result06">
                  <div className="mobile-search-container29">
                    <div className="mobile-search-container30"></div>
                    <div className="mobile-search-container31">
                      <span className="mobile-search-text21">User Name</span>
                      <span className="mobile-search-text22">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container32">
                    <span className="mobile-search-text23">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result07">
                  <div className="mobile-search-container33">
                    <div className="mobile-search-container34"></div>
                    <div className="mobile-search-container35">
                      <span className="mobile-search-text24">User Name</span>
                      <span className="mobile-search-text25">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container36">
                    <span className="mobile-search-text26">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result08">
                  <div className="mobile-search-container37">
                    <div className="mobile-search-container38"></div>
                    <div className="mobile-search-container39">
                      <span className="mobile-search-text27">User Name</span>
                      <span className="mobile-search-text28">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container40">
                    <span className="mobile-search-text29">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result09">
                  <div className="mobile-search-container41">
                    <div className="mobile-search-container42"></div>
                    <div className="mobile-search-container43">
                      <span className="mobile-search-text30">User Name</span>
                      <span className="mobile-search-text31">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container44">
                    <span className="mobile-search-text32">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result10">
                  <div className="mobile-search-container45">
                    <div className="mobile-search-container46"></div>
                    <div className="mobile-search-container47">
                      <span className="mobile-search-text33">User Name</span>
                      <span className="mobile-search-text34">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container48">
                    <span className="mobile-search-text35">327 followers</span>
                  </div>
                </div>
                <div className="mobile-search-row-result11">
                  <div className="mobile-search-container49">
                    <div className="mobile-search-container50"></div>
                    <div className="mobile-search-container51">
                      <span className="mobile-search-text36">User Name</span>
                      <span className="mobile-search-text37">
                        account...hs7fg0
                      </span>
                    </div>
                  </div>
                  <div className="mobile-search-container52">
                    <span className="mobile-search-text38">327 followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileSearch
