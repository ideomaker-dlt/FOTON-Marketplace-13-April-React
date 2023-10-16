import React, { useState } from 'react'

import './cart-drawer.css'

const CartDrawer = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="cart-drawer-cart-drawer">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="cart-drawer-cart-button material-symbols-outlined"
      >
        <svg viewBox="0 0 1024 1024" className="cart-drawer-icon">
          <path d="M469.333 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM938.667 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM308.096 298.667h621.653l-58.496 306.816c-1.963 9.728-7.083 18.133-14.165 24.235-7.68 6.656-17.621 10.496-29.355 10.283h-415.317c-9.899 0.128-19.243-3.029-26.709-8.661-8.107-6.101-14.037-14.976-16.171-25.728zM42.667 85.333h135.68l36.181 180.864c4.608 18.645 21.419 32.469 41.472 32.469h52.096l-17.067-85.333h-35.029c-23.552 0-42.667 19.115-42.667 42.667 0 2.261 0.171 4.48 0.512 6.613 0.171 1.195 0.427 2.432 0.725 3.584l71.296 356.139c6.357 32.043 24.277 59.008 48.64 77.269 22.229 16.725 49.92 26.155 79.104 25.728h414.123c31.915 0.64 62.080-11.136 85.12-31.019 21.077-18.176 36.181-43.221 42.027-71.808l68.352-358.485c4.395-23.168-10.752-45.483-33.92-49.92-2.773-0.555-5.547-0.811-7.979-0.768h-690.347l-35.84-179.029c-4.011-19.712-21.205-34.304-41.813-34.304h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <span className="cart-drawer-text">shopping_cart</span>
      </div>
      {isVisible && (
        <div className="cart-drawer-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="cart-drawer-out"
          ></div>
          <div className="cart-drawer-drawer-right">
            <div className="cart-drawer-header">
              <div className="cart-drawer-container">
                <span className="cart-drawer-text01">Your basket</span>
                <div className="cart-drawer-container01">
                  <span className="cart-drawer-text02">
                    <span>
                      Added items:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="cart-drawer-text04">2</span>
                  </span>
                  <span className="cart-drawer-text05">Remove all</span>
                </div>
              </div>
              <div
                onClick={() => setIsVisible(false)}
                className="cart-drawer-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="cart-drawer-icon02 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="cart-drawer-items">
              <div className="cart-drawer-item-added">
                <div className="cart-drawer-container02">
                  <div className="cart-drawer-container03"></div>
                  <div className="cart-drawer-container04">
                    <span className="cart-drawer-name">Pirate #2045</span>
                    <div className="cart-drawer-container05">
                      <span className="cart-drawer-collection-name">
                        Collection One
                      </span>
                      <span className="cart-drawer-collection-name1">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cart-drawer-container06">
                  <span className="cart-drawer-price">245 XRD</span>
                  <div className="cart-drawer-container07">
                    <span className="cart-drawer-price-fiat">126 $</span>
                  </div>
                  <div className="cart-drawer-container08">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cart-drawer-icon04 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cart-drawer-item-added1">
                <div className="cart-drawer-container09">
                  <div className="cart-drawer-container10"></div>
                  <div className="cart-drawer-container11">
                    <span className="cart-drawer-name1">Pirate #2045</span>
                    <div className="cart-drawer-container12">
                      <span className="cart-drawer-collection-name2">
                        Collection One
                      </span>
                      <span className="cart-drawer-collection-name3">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cart-drawer-container13">
                  <span className="cart-drawer-price1">245 XRD</span>
                  <div className="cart-drawer-container14">
                    <span className="cart-drawer-price-fiat1">126 $</span>
                  </div>
                  <div className="cart-drawer-container15">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cart-drawer-icon06 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cart-drawer-item-added2">
                <div className="cart-drawer-container16">
                  <div className="cart-drawer-container17"></div>
                  <div className="cart-drawer-container18">
                    <span className="cart-drawer-name2">Pirate #2045</span>
                    <div className="cart-drawer-container19">
                      <span className="cart-drawer-collection-name4">
                        Collection One
                      </span>
                      <span className="cart-drawer-collection-name5">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cart-drawer-container20">
                  <span className="cart-drawer-price2">245 XRD</span>
                  <div className="cart-drawer-container21">
                    <span className="cart-drawer-price-fiat2">126 $</span>
                  </div>
                  <div className="cart-drawer-container22">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cart-drawer-icon08 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cart-drawer-item-added3">
                <div className="cart-drawer-container23">
                  <div className="cart-drawer-container24"></div>
                  <div className="cart-drawer-container25">
                    <span className="cart-drawer-name3">Pirate #2045</span>
                    <div className="cart-drawer-container26">
                      <span className="cart-drawer-collection-name6">
                        Collection One
                      </span>
                      <span className="cart-drawer-collection-name7">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cart-drawer-container27">
                  <span className="cart-drawer-price3">245 XRD</span>
                  <div className="cart-drawer-container28">
                    <span className="cart-drawer-price-fiat3">126 $</span>
                  </div>
                  <div className="cart-drawer-container29">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cart-drawer-icon10 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-drawer-total-summary">
              <div className="cart-drawer-container30">
                <div className="cart-drawer-container31">
                  <span className="cart-drawer-text06">Total price:</span>
                  <span className="cart-drawer-text07">490 XRD</span>
                </div>
                <div className="cart-drawer-container32">
                  <div className="cart-drawer-container33">
                    <span className="cart-drawer-text08">Price in fiat:</span>
                    <span className="cart-drawer-text09">
                      252 $
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="cart-drawer-container34">
                    <span className="cart-drawer-text10">
                      Creator royalties:
                    </span>
                    <span className="cart-drawer-text11">17 XRD</span>
                  </div>
                  <div className="cart-drawer-container35">
                    <span className="cart-drawer-text12">FOTON fees: 2.5%</span>
                    <span className="cart-drawer-text13">15 XRD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-drawer-container36">
              <button className="cart-drawer-button button">
                <span className="cart-drawer-text14">
                  <span>Complete Purchase</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="cart-drawer-icon12">
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

export default CartDrawer
