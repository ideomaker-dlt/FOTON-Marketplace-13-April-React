import React, { useState } from 'react'

import './list-drawer.css'

const ListDrawer = (props) => {
  const [isVisible2, setIsVisible2] = useState(false)
  return (
    <div className="list-drawer-container">
      <button
        onClick={() => setIsVisible2(!isVisible2)}
        className="list-drawer-button button"
      >
        <span className="list-drawer-text">
          <span>List for Sale</span>
          <br></br>
        </span>
        <svg viewBox="0 0 1024 1024" className="list-drawer-icon">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </button>
      {isVisible2 && (
        <div className="list-drawer-wrapper">
          <div
            onClick={() => setIsVisible2(false)}
            className="list-drawer-out"
          ></div>
          <div className="list-drawer-drawer-right">
            <div className="list-drawer-header">
              <div className="list-drawer-container01">
                <span className="list-drawer-text03">List for Sale</span>
                <div className="list-drawer-container02">
                  <span className="list-drawer-text04">
                    <span>
                      Added items:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="list-drawer-text06">4</span>
                  </span>
                  <span className="list-drawer-text07">Remove all</span>
                </div>
              </div>
              <div
                onClick={() => setIsVisible2(false)}
                className="list-drawer-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="list-drawer-icon02 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="list-drawer-items">
              <div className="list-drawer-item-added">
                <div className="list-drawer-container03">
                  <div className="list-drawer-container04">
                    <div className="list-drawer-container05"></div>
                    <div className="list-drawer-container06">
                      <span className="list-drawer-name">Pirate #2045</span>
                      <div className="list-drawer-container07">
                        <span className="list-drawer-collection-name">
                          Collection One
                        </span>
                        <span className="list-drawer-collection-name1">
                          Creator Royalties: 3%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="list-drawer-container08">
                    <span className="list-drawer-price">245 XRD</span>
                    <div className="list-drawer-container09">
                      <span className="list-drawer-price-fiat">126 $</span>
                    </div>
                    <div className="list-drawer-container10">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-drawer-icon04 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="list-drawer-container11">
                  <div className="list-drawer-container12">
                    <span className="list-drawer-label">Starting Price:</span>
                    <div className="list-drawer-amount">
                      <input
                        type="text"
                        required="true"
                        placeholder="Amount..."
                        className="list-drawer-textinput focus-reset-forms input"
                      />
                      <div className="list-drawer-container13">
                        <span className="list-drawer-text08">XRD</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-drawer-container14">
                    <div className="list-drawer-container15">
                      <span className="list-drawer-label1">Duration:</span>
                      <div className="list-drawer-container16">
                        <span className="list-drawer-label2">Ends:</span>
                        <span className="list-drawer-label3">
                          23 Oct 2023 - 14:43
                        </span>
                      </div>
                    </div>
                    <div className="list-drawer-container17">
                      <div className="list-drawer-amount1">
                        <input
                          type="text"
                          required="true"
                          placeholder="Amount..."
                          className="list-drawer-textinput1 focus-reset-forms input"
                        />
                        <div className="list-drawer-container18">
                          <span className="list-drawer-text09">Days</span>
                        </div>
                      </div>
                      <div className="list-drawer-amount2">
                        <input
                          type="text"
                          required="true"
                          placeholder="Amount..."
                          className="list-drawer-textinput2 focus-reset-forms input"
                        />
                        <div className="list-drawer-container19">
                          <span className="list-drawer-text10">Hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-drawer-item-added1">
                <div className="list-drawer-container20">
                  <div className="list-drawer-container21"></div>
                  <div className="list-drawer-container22">
                    <span className="list-drawer-name1">Pirate #2045</span>
                    <div className="list-drawer-container23">
                      <span className="list-drawer-collection-name2">
                        Collection One
                      </span>
                      <span className="list-drawer-collection-name3">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-drawer-container24">
                  <span className="list-drawer-price1">245 XRD</span>
                  <div className="list-drawer-container25">
                    <span className="list-drawer-price-fiat1">126 $</span>
                  </div>
                  <div className="list-drawer-container26">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="list-drawer-icon06 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="list-drawer-item-added2">
                <div className="list-drawer-container27">
                  <div className="list-drawer-container28"></div>
                  <div className="list-drawer-container29">
                    <span className="list-drawer-name2">Pirate #2045</span>
                    <div className="list-drawer-container30">
                      <span className="list-drawer-collection-name4">
                        Collection One
                      </span>
                      <span className="list-drawer-collection-name5">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-drawer-container31">
                  <span className="list-drawer-price2">245 XRD</span>
                  <div className="list-drawer-container32">
                    <span className="list-drawer-price-fiat2">126 $</span>
                  </div>
                  <div className="list-drawer-container33">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="list-drawer-icon08 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-drawer-total-summary">
              <div className="list-drawer-container34">
                <div className="list-drawer-container35">
                  <span className="list-drawer-text11">
                    Total Potential Earnings:
                  </span>
                  <span className="list-drawer-text12">490 XRD</span>
                </div>
                <div className="list-drawer-container36">
                  <div className="list-drawer-container37">
                    <span className="list-drawer-text13">Value in fiat:</span>
                    <span className="list-drawer-text14">
                      252 $
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="list-drawer-container38">
                    <span className="list-drawer-text15">
                      Creator royalties:
                    </span>
                    <span className="list-drawer-text16">17 XRD</span>
                  </div>
                  <div className="list-drawer-container39">
                    <span className="list-drawer-text17">FOTON fees: 2.5%</span>
                    <span className="list-drawer-text18">15 XRD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-drawer-container40">
              <button className="list-drawer-button1 button">
                <span className="list-drawer-text19">
                  <span>Complete Listing</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="list-drawer-icon10">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListDrawer
