import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
                      <span className="buy-drawer-collection-name01">
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
                      <span className="buy-drawer-collection-name02">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name03">
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
                      <span className="buy-drawer-collection-name04">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name05">
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
                      <span className="buy-drawer-collection-name06">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name07">
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
              <div className="buy-drawer-item-added4">
                <div className="buy-drawer-container31">
                  <div className="buy-drawer-container32"></div>
                  <div className="buy-drawer-container33">
                    <span className="buy-drawer-name4">Pirate #2045</span>
                    <div className="buy-drawer-container34">
                      <span className="buy-drawer-collection-name08">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name09">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container35">
                  <span className="buy-drawer-price4">245 XRD</span>
                  <div className="buy-drawer-container36">
                    <span className="buy-drawer-price-fiat4">126 $</span>
                  </div>
                  <div className="buy-drawer-container37">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon12 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added5">
                <div className="buy-drawer-container38">
                  <div className="buy-drawer-container39"></div>
                  <div className="buy-drawer-container40">
                    <span className="buy-drawer-name5">Pirate #2045</span>
                    <div className="buy-drawer-container41">
                      <span className="buy-drawer-collection-name10">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name11">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container42">
                  <span className="buy-drawer-price5">245 XRD</span>
                  <div className="buy-drawer-container43">
                    <span className="buy-drawer-price-fiat5">126 $</span>
                  </div>
                  <div className="buy-drawer-container44">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon14 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added6">
                <div className="buy-drawer-container45">
                  <div className="buy-drawer-container46"></div>
                  <div className="buy-drawer-container47">
                    <span className="buy-drawer-name6">Pirate #2045</span>
                    <div className="buy-drawer-container48">
                      <span className="buy-drawer-collection-name12">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name13">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container49">
                  <span className="buy-drawer-price6">245 XRD</span>
                  <div className="buy-drawer-container50">
                    <span className="buy-drawer-price-fiat6">126 $</span>
                  </div>
                  <div className="buy-drawer-container51">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon16 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="buy-drawer-item-added7">
                <div className="buy-drawer-container52">
                  <div className="buy-drawer-container53"></div>
                  <div className="buy-drawer-container54">
                    <span className="buy-drawer-name7">Pirate #2045</span>
                    <div className="buy-drawer-container55">
                      <span className="buy-drawer-collection-name14">
                        Collection One
                      </span>
                      <span className="buy-drawer-collection-name15">
                        Creator Royalties: 3%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="buy-drawer-container56">
                  <span className="buy-drawer-price7">245 XRD</span>
                  <div className="buy-drawer-container57">
                    <span className="buy-drawer-price-fiat7">126 $</span>
                  </div>
                  <div className="buy-drawer-container58">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="buy-drawer-icon18 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-drawer-total-summary">
              <div className="buy-drawer-container59">
                <div className="buy-drawer-container60">
                  <span className="buy-drawer-text08">Total price:</span>
                  <span className="buy-drawer-text09">490 XRD</span>
                </div>
                <div className="buy-drawer-container61">
                  <div className="buy-drawer-container62">
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
                  <div className="buy-drawer-container63">
                    <span className="buy-drawer-text12">
                      Creator royalties:
                    </span>
                    <span className="buy-drawer-text13">17 XRD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy-drawer-container64">
              <Link
                to="/add-collection2-layered"
                className="buy-drawer-navlink button"
              >
                <span className="buy-drawer-text14">
                  <span>Complete Purchase</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="buy-drawer-icon20">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BuyDrawer
