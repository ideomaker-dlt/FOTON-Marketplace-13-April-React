import React, { useState } from 'react'

import './buy-drawer.css'

const BuyDrawer = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="buy-drawer-container">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="buy-drawer-button button"
      >
        <span className="buy-drawer-text">
          <span>Buy Now</span>
          <br></br>
        </span>
        <svg viewBox="0 0 1024 1024" className="buy-drawer-icon">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </button>
      {isVisible && (
        <div className="buy-drawer-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="buy-drawer-out"
          ></div>
          <div className="buy-drawer-drawer-right">
            <div className="buy-drawer-header">
              <div className="buy-drawer-container01">
                <span className="buy-drawer-text03">Your basket</span>
                <div className="buy-drawer-container02">
                  <span className="buy-drawer-text04">
                    <span>
                      Added items:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="buy-drawer-text06">2</span>
                  </span>
                  <span className="buy-drawer-text07">Remove all</span>
                </div>
              </div>
              <div
                onClick={() => setIsVisible(false)}
                className="buy-drawer-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="buy-drawer-icon02 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="buy-drawer-items">
              <div className="buy-drawer-item-added">
                <div className="buy-drawer-container03">
                  <div className="buy-drawer-container04"></div>
                  <div className="buy-drawer-container05">
                    <span className="buy-drawer-name">Pirate #2045</span>
                    <div className="buy-drawer-container06">
                      <span className="buy-drawer-collection-name">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name1">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container07">
                  <span className="buy-drawer-price">245 XRD</span>
                  <div className="buy-drawer-container08">
                    <span className="buy-drawer-price-fiat">126 $</span>
                  </div>
                  <div className="buy-drawer-container09">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon04 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added1">
                <div className="buy-drawer-container10">
                  <div className="buy-drawer-container11"></div>
                  <div className="buy-drawer-container12">
                    <span className="buy-drawer-name1">Pirate #2045</span>
                    <div className="buy-drawer-container13">
                      <span className="buy-drawer-collection-name2">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name3">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container14">
                  <span className="buy-drawer-price1">245 XRD</span>
                  <div className="buy-drawer-container15">
                    <span className="buy-drawer-price-fiat1">126 $</span>
                  </div>
                  <div className="buy-drawer-container16">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon06 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added2">
                <div className="buy-drawer-container17">
                  <div className="buy-drawer-container18"></div>
                  <div className="buy-drawer-container19">
                    <span className="buy-drawer-name2">Pirate #2045</span>
                    <div className="buy-drawer-container20">
                      <span className="buy-drawer-collection-name4">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name5">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container21">
                  <span className="buy-drawer-price2">245 XRD</span>
                  <div className="buy-drawer-container22">
                    <span className="buy-drawer-price-fiat2">126 $</span>
                  </div>
                  <div className="buy-drawer-container23">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon08 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added3">
                <div className="buy-drawer-container24">
                  <div className="buy-drawer-container25"></div>
                  <div className="buy-drawer-container26">
                    <span className="buy-drawer-name3">Pirate #2045</span>
                    <div className="buy-drawer-container27">
                      <span className="buy-drawer-collection-name6">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name7">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container28">
                  <span className="buy-drawer-price3">245 XRD</span>
                  <div className="buy-drawer-container29">
                    <span className="buy-drawer-price-fiat3">126 $</span>
                  </div>
                  <div className="buy-drawer-container30">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon10 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-drawer-total-summary">
              <div className="buy-drawer-container31">
                <div className="buy-drawer-container32">
                  <span className="buy-drawer-text08">Total price:</span>
                  <span className="buy-drawer-text09">490 XRD</span>
                </div>
                <div className="buy-drawer-container33">
                  <div className="buy-drawer-container34">
                    <span className="buy-drawer-text10">Price in fiat:</span>
                    <span className="buy-drawer-text11">
                      252 $
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="buy-drawer-container35">
                    <span className="buy-drawer-text12">
                      Creator royalties:
                    </span>
                    <span className="buy-drawer-text13">17 XRD</span>
                  </div>
                  <div className="buy-drawer-container36">
                    <span className="buy-drawer-text14">FOTON fees: 2.5%</span>
                    <span className="buy-drawer-text15">15 XRD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-drawer-container37">
              <button className="buy-drawer-button1 button">
                <span className="buy-drawer-text16">
                  <span>Complete Purchase</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="buy-drawer-icon12">
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

export default BuyDrawer
