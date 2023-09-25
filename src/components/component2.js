import React, { useState } from 'react'

import './component2.css'

const Component2 = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="component2-container">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="component2-image-header"
      >
        <input type="checkbox" className="component2-checkbox" />
      </div>
      {isVisible && (
        <div className="component2-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="component2-out"
          ></div>
          <div className="component2-drawer-right">
            <div className="component2-header">
              <div className="component2-container01">
                <span className="component2-text">Pirate #2045</span>
                <div className="component2-container02">
                  <span className="component2-text001">Collection name</span>
                </div>
              </div>
              <div
                onClick={() => setIsVisible(false)}
                className="component2-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="component2-icon fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="component2-items">
              <div className="component2-item-image">
                <img
                  alt="image"
                  src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_065ba4ec-0904-4c75-9453-fba488a364b4-1500w.png"
                  className="component2-image"
                />
              </div>
              <div className="component2-container-details">
                <div className="component2-line-text">
                  <span className="component2-text002">Status</span>
                  <span className="component2-text003">Draft / Minted</span>
                </div>
                <div className="component2-line-text1">
                  <span className="component2-text004">Creator Royalty</span>
                  <span className="component2-text005">5%</span>
                </div>
                <div className="component2-line-text2">
                  <span className="component2-text006">Rarity Rank</span>
                  <span className="component2-text007">#23</span>
                </div>
                <div className="component2-line-text3">
                  <span className="component2-text008">Traits</span>
                  <span className="component2-text009">37</span>
                </div>
              </div>
              <div className="component2-container03">
                <div className="component2-treat">
                  <div className="component2-container-row">
                    <p className="component2-text010">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container04">
                      <p className="component2-text013">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text016">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row01">
                    <p className="component2-text019">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text022">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat1">
                  <div className="component2-container-row02">
                    <p className="component2-text025">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container05">
                      <p className="component2-text028">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text031">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row03">
                    <p className="component2-text034">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text037">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat2">
                  <div className="component2-container-row04">
                    <p className="component2-text040">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container06">
                      <p className="component2-text043">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text046">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row05">
                    <p className="component2-text049">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text052">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat3">
                  <div className="component2-container-row06">
                    <p className="component2-text055">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container07">
                      <p className="component2-text058">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text061">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row07">
                    <p className="component2-text064">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text067">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat4">
                  <div className="component2-container-row08">
                    <p className="component2-text070">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container08">
                      <p className="component2-text073">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text076">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row09">
                    <p className="component2-text079">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text082">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat5">
                  <div className="component2-container-row10">
                    <p className="component2-text085">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container09">
                      <p className="component2-text088">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text091">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row11">
                    <p className="component2-text094">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text097">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat6">
                  <div className="component2-container-row12">
                    <p className="component2-text100">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container10">
                      <p className="component2-text103">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text106">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row13">
                    <p className="component2-text109">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text112">
                      <span>14%</span>
                      <br></br>
                    </p>
                  </div>
                </div>
                <div className="component2-treat7">
                  <div className="component2-container-row14">
                    <p className="component2-text115">
                      <span>Eyes</span>
                      <br></br>
                    </p>
                    <div className="component2-container11">
                      <p className="component2-text118">
                        <span>243</span>
                        <br></br>
                      </p>
                      <p className="component2-text121">
                        <span>Have it</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="component2-container-row15">
                    <p className="component2-text124">
                      <span>Purple</span>
                      <br></br>
                    </p>
                    <p className="component2-text127">
                      <span>14%</span>
                      <br></br>
                    </p>
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

export default Component2
