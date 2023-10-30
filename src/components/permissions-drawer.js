import React, { useState } from 'react'

import './permissions-drawer.css'

const PermissionsDrawer = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="permissions-drawer-permissions-drawer">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="permissions-drawer-button"
      >
        <img
          alt="image"
          src="/Icons Imported/conversion_path.svg"
          className="permissions-drawer-image"
        />
        <span className="permissions-drawer-text">
          <span>Applies to</span>
          <br></br>
        </span>
      </button>
      {isVisible && (
        <div className="permissions-drawer-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="permissions-drawer-out"
          ></div>
          <div className="permissions-drawer-drawer-right">
            <div className="permissions-drawer-header">
              <div className="permissions-drawer-container">
                <span className="permissions-drawer-text03">Can Edit</span>
                <div className="permissions-drawer-container01">
                  <span className="permissions-drawer-text04">
                    This Permission Applies to:
                  </span>
                  <div className="permissions-drawer-master-toggle">
                    <span className="permissions-drawer-text05">All</span>
                    <div className="permissions-drawer-small-toggle">
                      <div className="permissions-drawer-container02">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setIsVisible(false)}
                className="permissions-drawer-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="permissions-drawer-icon fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="permissions-drawer-items">
              <div className="permissions-drawer-projects">
                <div className="permissions-drawer-container03">
                  <span className="permissions-drawer-text06">Projects</span>
                  <div className="permissions-drawer-small-toggle1">
                    <div className="permissions-drawer-container04">
                      <img
                        alt="image"
                        src="/Icons Imported/check.svg"
                        className="permissions-drawer-image2"
                      />
                    </div>
                  </div>
                </div>
                <div className="permissions-drawer-item-added">
                  <div className="permissions-drawer-container05">
                    <div className="permissions-drawer-container06"></div>
                    <div className="permissions-drawer-container07">
                      <span className="permissions-drawer-name">
                        Project Name 1
                      </span>
                      <div className="permissions-drawer-container08">
                        <span className="permissions-drawer-collection-name">
                          3 members use it
                        </span>
                        <span className="permissions-drawer-collection-name01">
                          5 Badges have it
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="permissions-drawer-container09">
                    <span className="permissions-drawer-price">245 XRD</span>
                    <div className="permissions-drawer-container10">
                      <span className="permissions-drawer-price-fiat">
                        126 $
                      </span>
                    </div>
                    <div className="permissions-drawer-container11">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="permissions-drawer-icon02 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                    <div className="permissions-drawer-container12">
                      <div className="permissions-drawer-container13">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="permissions-drawer-item-added1">
                  <div className="permissions-drawer-container14">
                    <div className="permissions-drawer-container15"></div>
                    <div className="permissions-drawer-container16">
                      <span className="permissions-drawer-name1">
                        Project Name 1
                      </span>
                      <div className="permissions-drawer-container17">
                        <span className="permissions-drawer-collection-name02">
                          3 members use it
                        </span>
                        <span className="permissions-drawer-collection-name03">
                          5 Badges have it
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="permissions-drawer-container18">
                    <span className="permissions-drawer-price1">245 XRD</span>
                    <div className="permissions-drawer-container19">
                      <span className="permissions-drawer-price-fiat1">
                        126 $
                      </span>
                    </div>
                    <div className="permissions-drawer-container20">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="permissions-drawer-icon04 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                    <div className="permissions-drawer-container21">
                      <div className="permissions-drawer-container22">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="permissions-drawer-collections">
                <div className="permissions-drawer-container23">
                  <span className="permissions-drawer-text07">Collections</span>
                  <div className="permissions-drawer-small-toggle2">
                    <div className="permissions-drawer-container24">
                      <img
                        alt="image"
                        src="/Icons Imported/check.svg"
                        className="permissions-drawer-image5"
                      />
                    </div>
                  </div>
                </div>
                <div className="permissions-drawer-item-added2">
                  <div className="permissions-drawer-container25">
                    <div className="permissions-drawer-container26"></div>
                    <div className="permissions-drawer-container27">
                      <span className="permissions-drawer-name2">
                        Collection Name 1
                      </span>
                      <div className="permissions-drawer-container28">
                        <span className="permissions-drawer-collection-name04">
                          3 members use it
                        </span>
                        <span className="permissions-drawer-collection-name05">
                          5 Badges have it
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="permissions-drawer-container29">
                    <span className="permissions-drawer-price2">245 XRD</span>
                    <div className="permissions-drawer-container30">
                      <span className="permissions-drawer-price-fiat2">
                        126 $
                      </span>
                    </div>
                    <div className="permissions-drawer-container31">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="permissions-drawer-icon06 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                    <div className="permissions-drawer-container32">
                      <div className="permissions-drawer-container33">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="permissions-drawer-item-added3">
                  <div className="permissions-drawer-container34">
                    <div className="permissions-drawer-container35"></div>
                    <div className="permissions-drawer-container36">
                      <span className="permissions-drawer-name3">
                        Collection Name 2
                      </span>
                      <div className="permissions-drawer-container37">
                        <span className="permissions-drawer-collection-name06">
                          3 members use it
                        </span>
                        <span className="permissions-drawer-collection-name07">
                          5 Badges have it
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="permissions-drawer-container38">
                    <span className="permissions-drawer-price3">245 XRD</span>
                    <div className="permissions-drawer-container39">
                      <span className="permissions-drawer-price-fiat3">
                        126 $
                      </span>
                    </div>
                    <div className="permissions-drawer-container40">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="permissions-drawer-icon08 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                    <div className="permissions-drawer-container41">
                      <div className="permissions-drawer-container42">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="permissions-drawer-item-added4">
                  <div className="permissions-drawer-container43">
                    <div className="permissions-drawer-container44"></div>
                    <div className="permissions-drawer-container45">
                      <span className="permissions-drawer-name4">
                        Collection Name 3
                      </span>
                      <div className="permissions-drawer-container46">
                        <span className="permissions-drawer-collection-name08">
                          3 members use it
                        </span>
                        <span className="permissions-drawer-collection-name09">
                          5 Badges have it
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="permissions-drawer-container47">
                    <span className="permissions-drawer-price4">245 XRD</span>
                    <div className="permissions-drawer-container48">
                      <span className="permissions-drawer-price-fiat4">
                        126 $
                      </span>
                    </div>
                    <div className="permissions-drawer-container49">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="permissions-drawer-icon10 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                    <div className="permissions-drawer-container50">
                      <div className="permissions-drawer-container51">
                        <img
                          alt="image"
                          src="/Icons Imported/check.svg"
                          className="permissions-drawer-image8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permissions-drawer-total-summary">
              <div className="permissions-drawer-container52">
                <div className="permissions-drawer-container53">
                  <span className="permissions-drawer-text08">
                    Total price:
                  </span>
                  <span className="permissions-drawer-text09">490 XRD</span>
                </div>
                <div className="permissions-drawer-container54">
                  <div className="permissions-drawer-container55">
                    <span className="permissions-drawer-text10">
                      Price in fiat:
                    </span>
                    <span className="permissions-drawer-text11">
                      252 $
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="permissions-drawer-container56">
                    <span className="permissions-drawer-text12">
                      Creator royalties:
                    </span>
                    <span className="permissions-drawer-text13">17 XRD</span>
                  </div>
                  <div className="permissions-drawer-container57">
                    <span className="permissions-drawer-text14">
                      FOTON fees: 2.5%
                    </span>
                    <span className="permissions-drawer-text15">15 XRD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="permissions-drawer-container58">
              <button className="permissions-drawer-button1 button">
                <span className="permissions-drawer-text16">
                  <span>Complete Purchase</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="permissions-drawer-icon12"
                >
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

export default PermissionsDrawer
