import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import ItemOpen from '../components/item-open'
import './add-collection2-layered-preview.css'

const AddCollection2LayeredPreview = (props) => {
  return (
    <div className="add-collection-layered-preview-container">
      <Helmet>
        <title>
          Add-Collection2-Layered-Preview - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Layered-Preview - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name24">
        <div className="add-collection-layered-preview-header-creator">
          <div className="add-collection-layered-preview-container01">
            <div className="add-collection-layered-preview-container02">
              <div className="add-collection-layered-preview-container03">
                <h1 className="add-collection-layered-preview-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-layered-preview-mask-overlay"></div>
        </div>
        <div className="add-collection-layered-preview-tabs-row">
          <div className="add-collection-layered-preview-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection-layered-preview-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection-layered-preview-container05">
              <Link
                to="/add-collection2-layered"
                className="add-collection-layered-preview-navlink1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-preview-icon fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection-layered-preview-text001">
                  <span>Organise</span>
                  <br></br>
                </span>
              </Link>
              <button
                type="button"
                className="add-collection-layered-preview-button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-preview-icon02 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection-layered-preview-text004">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button
                type="button"
                className="add-collection-layered-preview-button01"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-preview-icon04 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection-layered-preview-text007">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-preview-container-form">
          <div className="add-collection-layered-preview-under-header">
            <div className="add-collection-layered-preview-card">
              <div className="add-collection-layered-preview-container-images">
                <div className="add-collection-layered-preview-tabs-row1">
                  <div className="add-collection-layered-preview-container06">
                    <span className="add-collection-layered-preview-text010 Content18">
                      <span className="add-collection-layered-preview-text011">
                        Generated items:
                      </span>
                      <span> 10000</span>
                    </span>
                  </div>
                  <div className="add-collection-layered-preview-filter-buttons">
                    <div className="add-collection-layered-preview-container07">
                      <Link
                        to="/add-collection2-layered"
                        className="add-collection-layered-preview-navlink2"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon06 fill-color-white"
                        >
                          <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text013">
                          <span>Layers</span>
                          <br></br>
                        </span>
                      </Link>
                      <button
                        type="button"
                        className="add-collection-layered-preview-button02"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon08 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text016">
                          <span>Generate again</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-preview-button03"
                    >
                      <span className="add-collection-layered-preview-text019">
                        <span>Continue</span>
                        <br></br>
                      </span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-preview-icon10 fill-color-white"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-preview-container08">
                  <div className="item-layer add-collection-layered-preview-item1">
                    <div className="add-collection-layered-preview-image-header">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox"
                      />
                      <div className="add-collection-layered-preview-replace-image">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon12 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box">
                      <div className="add-collection-layered-preview-container09">
                        <div className="add-collection-layered-preview-floor">
                          <span className="add-collection-layered-preview-text022 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text023">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume24">
                          <span className="add-collection-layered-preview-text024 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container10">
                            <span className="add-collection-layered-preview-text025">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item101">
                    <div className="add-collection-layered-preview-image-header01">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox01"
                      />
                      <div className="add-collection-layered-preview-replace-image01">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon14 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box01">
                      <div className="add-collection-layered-preview-container11">
                        <div className="add-collection-layered-preview-floor01">
                          <span className="add-collection-layered-preview-text026 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text027">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2401">
                          <span className="add-collection-layered-preview-text028 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container12">
                            <span className="add-collection-layered-preview-text029">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item102">
                    <div className="add-collection-layered-preview-image-header02">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox02"
                      />
                      <div className="add-collection-layered-preview-replace-image02">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon16 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box02">
                      <div className="add-collection-layered-preview-container13">
                        <div className="add-collection-layered-preview-floor02">
                          <span className="add-collection-layered-preview-text030 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text031">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2402">
                          <span className="add-collection-layered-preview-text032 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container14">
                            <span className="add-collection-layered-preview-text033">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item103">
                    <div className="add-collection-layered-preview-image-header03">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox03"
                      />
                      <div className="add-collection-layered-preview-replace-image03">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon18 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box03">
                      <div className="add-collection-layered-preview-container15">
                        <div className="add-collection-layered-preview-floor03">
                          <span className="add-collection-layered-preview-text034 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text035">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2403">
                          <span className="add-collection-layered-preview-text036 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container16">
                            <span className="add-collection-layered-preview-text037">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item104">
                    <div className="add-collection-layered-preview-image-header04">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox04"
                      />
                      <div className="add-collection-layered-preview-replace-image04">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon20 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box04">
                      <div className="add-collection-layered-preview-container17">
                        <div className="add-collection-layered-preview-floor04">
                          <span className="add-collection-layered-preview-text038 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text039">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2404">
                          <span className="add-collection-layered-preview-text040 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container18">
                            <span className="add-collection-layered-preview-text041">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item105">
                    <div className="add-collection-layered-preview-image-header05">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox05"
                      />
                      <div className="add-collection-layered-preview-replace-image05">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon22 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box05">
                      <div className="add-collection-layered-preview-container19">
                        <div className="add-collection-layered-preview-floor05">
                          <span className="add-collection-layered-preview-text042 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text043">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2405">
                          <span className="add-collection-layered-preview-text044 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container20">
                            <span className="add-collection-layered-preview-text045">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item106">
                    <div className="add-collection-layered-preview-image-header06">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox06"
                      />
                      <div className="add-collection-layered-preview-replace-image06">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon24 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box06">
                      <div className="add-collection-layered-preview-container21">
                        <div className="add-collection-layered-preview-floor06">
                          <span className="add-collection-layered-preview-text046 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text047">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2406">
                          <span className="add-collection-layered-preview-text048 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container22">
                            <span className="add-collection-layered-preview-text049">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item107">
                    <div className="add-collection-layered-preview-image-header07">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox07"
                      />
                      <div className="add-collection-layered-preview-replace-image07">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon26 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box07">
                      <div className="add-collection-layered-preview-container23">
                        <div className="add-collection-layered-preview-floor07">
                          <span className="add-collection-layered-preview-text050 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text051">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2407">
                          <span className="add-collection-layered-preview-text052 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container24">
                            <span className="add-collection-layered-preview-text053">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item108">
                    <div className="add-collection-layered-preview-image-header08">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox08"
                      />
                      <div className="add-collection-layered-preview-replace-image08">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon28 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box08">
                      <div className="add-collection-layered-preview-container25">
                        <div className="add-collection-layered-preview-floor08">
                          <span className="add-collection-layered-preview-text054 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text055">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2408">
                          <span className="add-collection-layered-preview-text056 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container26">
                            <span className="add-collection-layered-preview-text057">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item109">
                    <div className="add-collection-layered-preview-image-header09">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox09"
                      />
                      <div className="add-collection-layered-preview-replace-image09">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon30 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box09">
                      <div className="add-collection-layered-preview-container27">
                        <div className="add-collection-layered-preview-floor09">
                          <span className="add-collection-layered-preview-text058 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text059">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2409">
                          <span className="add-collection-layered-preview-text060 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container28">
                            <span className="add-collection-layered-preview-text061">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item110">
                    <div className="add-collection-layered-preview-image-header10">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox10"
                      />
                      <div className="add-collection-layered-preview-replace-image10">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon32 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box10">
                      <div className="add-collection-layered-preview-container29">
                        <div className="add-collection-layered-preview-floor10">
                          <span className="add-collection-layered-preview-text062 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text063">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2410">
                          <span className="add-collection-layered-preview-text064 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container30">
                            <span className="add-collection-layered-preview-text065">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item111">
                    <div className="add-collection-layered-preview-image-header11">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox11"
                      />
                      <div className="add-collection-layered-preview-replace-image11">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon34 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box11">
                      <div className="add-collection-layered-preview-container31">
                        <div className="add-collection-layered-preview-floor11">
                          <span className="add-collection-layered-preview-text066 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text067">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2411">
                          <span className="add-collection-layered-preview-text068 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container32">
                            <span className="add-collection-layered-preview-text069">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection-layered-preview-item112">
                    <div className="add-collection-layered-preview-image-header12">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox12"
                      />
                      <div className="add-collection-layered-preview-replace-image12">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon36 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-text-box12">
                      <div className="add-collection-layered-preview-container33">
                        <div className="add-collection-layered-preview-floor12">
                          <span className="add-collection-layered-preview-text070 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-preview-text071">
                            Blob #00001
                          </span>
                        </div>
                        <div className="add-collection-layered-preview-volume2412">
                          <span className="add-collection-layered-preview-text072 SmallestLabels">
                            rarity Rank
                          </span>
                          <div className="add-collection-layered-preview-container34">
                            <span className="add-collection-layered-preview-text073">
                              #241
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-collection-layered-preview-tabs-row-filters">
                  <div className="add-collection-layered-preview-filter-buttons1">
                    <div className="add-collection-layered-preview-timeframe">
                      <button className="add-collection-layered-preview-button04">
                        <span className="add-collection-layered-preview-text074">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button05">
                        <span className="add-collection-layered-preview-text077">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button06">
                        <span className="add-collection-layered-preview-text080">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button07">
                        <span className="add-collection-layered-preview-text083">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-preview-button08"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-preview-icon38"
                      >
                        <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
                      </svg>
                      <span className="add-collection-layered-preview-text086">
                        <span>Filters</span>
                        <br></br>
                      </span>
                    </button>
                    <div className="add-collection-layered-preview-searchbar">
                      <form className="add-collection-layered-preview-form">
                        <button className="add-collection-layered-preview-button09 button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-preview-icon40"
                          >
                            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="mainsearch"
                          name="search-field"
                          placeholder="Search by name..."
                          className="add-collection-layered-preview-textinput focus-reset Content18 input"
                        />
                        <div>
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
                      </form>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-preview-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-preview-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon42"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text089">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-preview-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-preview-icon44"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-preview-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-preview-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle1"
                          >
                            <span className="add-collection-layered-preview-text090">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle2"
                          >
                            <span className="add-collection-layered-preview-text091">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle3"
                          >
                            <span className="add-collection-layered-preview-text092">
                              Least Rare
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-filter-buttons2">
                    <div className="add-collection-layered-preview-timeframe1">
                      <button className="add-collection-layered-preview-button10">
                        <span className="add-collection-layered-preview-text093">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button11">
                        <span className="add-collection-layered-preview-text096">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button12">
                        <span className="add-collection-layered-preview-text099">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button13">
                        <span className="add-collection-layered-preview-text102">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-preview-button14"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-preview-icon46"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-preview-text105">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-preview-collection-items-container">
                  <div className="add-collection-layered-preview-container35">
                    <div className="add-collection-layered-preview-filters-side-menu">
                      <div className="add-collection-layered-preview-header-sticky-mobile">
                        <div className="add-collection-layered-preview-header-filter-menu">
                          <div className="add-collection-layered-preview-container36">
                            <span className="add-collection-layered-preview-text108">
                              <span className="add-collection-layered-preview-text109">
                                Filters
                              </span>
                              <br></br>
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-apply-button">
                            <span className="add-collection-layered-preview-text111">
                              <span className="add-collection-layered-preview-text112">
                                Apply
                              </span>
                              <br></br>
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-close-button">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-preview-icon48"
                            >
                              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="add-collection-layered-preview-big-button">
                          <div className="add-collection-layered-preview-submit">
                            <button className="add-collection-layered-preview-button15 button">
                              <span className="add-collection-layered-preview-text114">
                                <span>Apply</span>
                                <br></br>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-preview-accordion">
                        <div className="add-collection-layered-preview-accordion-header">
                          <div className="add-collection-layered-preview-container37">
                            <span className="add-collection-layered-preview-text117">
                              <span className="add-collection-layered-preview-text118">
                                Rarity Rank
                              </span>
                              <br></br>
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-container38">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-preview-icon50"
                            >
                              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="add-collection-layered-preview-accordion-drawer">
                          <div className="add-collection-layered-preview-range">
                            <input
                              type="text"
                              enctype="The Funky Apes Crew..."
                              placeholder="1"
                              className="add-collection-layered-preview-textinput01 focus-reset-forms input Content16SemiBold"
                            />
                            <span className="add-collection-layered-preview-text120">
                              To
                            </span>
                            <input
                              type="text"
                              enctype="The Funky Apes Crew..."
                              placeholder="350"
                              className="add-collection-layered-preview-textinput02 focus-reset-forms Content16SemiBold input"
                            />
                          </div>
                          <div className="add-collection-layered-preview-submit1">
                            <button className="add-collection-layered-preview-button16 button">
                              <span className="add-collection-layered-preview-text121">
                                <span>Apply</span>
                                <br></br>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-preview-accordion1">
                        <div className="add-collection-layered-preview-accordion-header1">
                          <div className="add-collection-layered-preview-container39">
                            <span className="add-collection-layered-preview-text124">
                              <span className="add-collection-layered-preview-text125">
                                Status
                              </span>
                              <br></br>
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-container40">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-preview-icon52"
                            >
                              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="add-collection-layered-preview-accordion-drawer1">
                          <div className="add-collection-layered-preview-accordion-item">
                            <div className="add-collection-layered-preview-container41">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox13"
                              />
                              <span className="add-collection-layered-preview-text127">
                                Inside Collection
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many">
                              10000
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item01">
                            <div className="add-collection-layered-preview-container42">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox14"
                              />
                              <span className="add-collection-layered-preview-text128">
                                Outside Collection
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many01">
                              10500
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item02">
                            <div className="add-collection-layered-preview-container43">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox15"
                              />
                              <span className="add-collection-layered-preview-text129">
                                Selected
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many02">
                              4
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item03">
                            <div className="add-collection-layered-preview-container44">
                              <input
                                type="checkbox"
                                checked
                                className="add-collection-layered-preview-checkbox16"
                              />
                              <span className="add-collection-layered-preview-text130">
                                Removed
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many03">
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-preview-separation-line"></div>
                      <div className="add-collection-layered-preview-accordion2">
                        <div className="add-collection-layered-preview-accordion-header2">
                          <div className="add-collection-layered-preview-container45">
                            <span className="add-collection-layered-preview-text131">
                              Attribute one
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-container46">
                            <span className="add-collection-layered-preview-how-many04">
                              328
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-preview-icon54"
                            >
                              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="add-collection-layered-preview-accordion-drawer2">
                          <div className="add-collection-layered-preview-accordion-item04">
                            <div className="add-collection-layered-preview-container47">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox17"
                              />
                              <span className="add-collection-layered-preview-text132">
                                Trait nr 1
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many05">
                              328
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item05">
                            <div className="add-collection-layered-preview-container48">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox18"
                              />
                              <span className="add-collection-layered-preview-text133">
                                Trait nr 2
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many06">
                              328
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item06">
                            <div className="add-collection-layered-preview-container49">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox19"
                              />
                              <span className="add-collection-layered-preview-text134">
                                Trait nr 3
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many07">
                              328
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-preview-accordion3">
                        <div className="add-collection-layered-preview-accordion-header3">
                          <div className="add-collection-layered-preview-container50">
                            <span className="add-collection-layered-preview-text135">
                              Attribute two
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-container51">
                            <span className="add-collection-layered-preview-how-many08">
                              328
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-preview-icon56"
                            >
                              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="add-collection-layered-preview-accordion-drawer3">
                          <div className="add-collection-layered-preview-accordion-item07">
                            <div className="add-collection-layered-preview-container52">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox20"
                              />
                              <span className="add-collection-layered-preview-text136">
                                Trait nr 1
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many09">
                              328
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item08">
                            <div className="add-collection-layered-preview-container53">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox21"
                              />
                              <span className="add-collection-layered-preview-text137">
                                Trait nr 2
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many10">
                              328
                            </span>
                          </div>
                          <div className="add-collection-layered-preview-accordion-item09">
                            <div className="add-collection-layered-preview-container54">
                              <input
                                type="checkbox"
                                className="add-collection-layered-preview-checkbox22"
                              />
                              <span className="add-collection-layered-preview-text138">
                                Trait nr 3
                              </span>
                            </div>
                            <span className="add-collection-layered-preview-how-many11">
                              328
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-preview-grid-items">
                      <div className="add-collection-layered-preview-container55">
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                        <ItemOpen></ItemOpen>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-preview-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection-layered-preview-container56"
          >
            <div className="add-collection-layered-preview-container57">
              <label className="add-collection-layered-preview-text139">
                Eyes
              </label>
            </div>
            <div className="add-collection-layered-preview-container58">
              <div>
                <Script
                  html={`<style>
  
/* width */
#appOverlay::-webkit-scrollbar {
  width: 16px;
  height: calc(100% - 60px);
}

/* Track */
#appOverlay::-webkit-scrollbar-track {
  background: #1D1D1D;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 14px;
  
}
 
/* Handle */
#appOverlay::-webkit-scrollbar-thumb {
  background: #2F2F2F; 
  border-radius: 12px;
  border: 3px solid #1D1D1D
}

/* Handle on hover */
#appOverlay::-webkit-scrollbar-thumb:hover {
  background: #838383; 
}

@media only screen and (max-width: 767px) {
#appOverlay::-webkit-scrollbar {
  width: 10px;
  height: 100%;
}
#appOverlay::-webkit-scrollbar-thumb {
  background: #424242; 
  border-radius: 10px;
  border: 2px solid #1D1D1D;
}

}


</style>`}
                ></Script>
              </div>
              <div className="add-collection-layered-preview-field">
                <label className="add-collection-layered-preview-text140 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection-layered-preview-textinput03 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-preview-field1">
                <label className="add-collection-layered-preview-text141 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection-layered-preview-textinput04 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-preview-layer-items-treats">
                <div className="add-collection-layered-preview-tabs-row2">
                  <div className="add-collection-layered-preview-container59">
                    <span className="add-collection-layered-preview-text142">
                      &lt; go back
                    </span>
                    <span className="add-collection-layered-preview-text143">
                      Layer Assets 
                    </span>
                    <span className="add-collection-layered-preview-text144">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection-layered-preview-filter-buttons3">
                    <div className="add-collection-layered-preview-timeframe2">
                      <button className="add-collection-layered-preview-button17">
                        <span className="add-collection-layered-preview-text145">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button18">
                        <span className="add-collection-layered-preview-text148">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button19">
                        <span className="add-collection-layered-preview-text151">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-preview-button20">
                        <span className="add-collection-layered-preview-text154">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-preview-sort-by1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-preview-dropdown-toggle4"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon58"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text157">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-preview-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-preview-icon60"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-preview-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-preview-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle5"
                          >
                            <span className="add-collection-layered-preview-text158">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle6"
                          >
                            <span className="add-collection-layered-preview-text159">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle7"
                          >
                            <span className="add-collection-layered-preview-text160">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-preview-dropdown-toggle8"
                          >
                            <span className="add-collection-layered-preview-text161">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-preview-button21"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-preview-icon62"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-preview-text162">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-layered-preview-button22"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-preview-icon64 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection-layered-preview-text165">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-preview-tabs-row3">
                  <div className="add-collection-layered-preview-container60">
                    <div className="add-collection-layered-preview-container61">
                      <span className="add-collection-layered-preview-text168 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection-layered-preview-container62">
                      <span className="add-collection-layered-preview-text169 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-container63">
                    <span className="add-collection-layered-preview-text170 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection-layered-preview-container64">
                  <div className="add-collection-layered-preview-row-image">
                    <div className="add-collection-layered-preview-container65">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox23"
                      />
                      <div className="add-collection-layered-preview-container66"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput05 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container67">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button23"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon66 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text171">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image1">
                    <div className="add-collection-layered-preview-container68">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox24"
                      />
                      <div className="add-collection-layered-preview-container69"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput07 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container70">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button24"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon68 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text174">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image2">
                    <div className="add-collection-layered-preview-container71">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox25"
                      />
                      <div className="add-collection-layered-preview-container72"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput09 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container73">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button25"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon70 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text177">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image3">
                    <div className="add-collection-layered-preview-container74">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox26"
                      />
                      <div className="add-collection-layered-preview-container75"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput11 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container76">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput12 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button26"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon72 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text180">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image4">
                    <div className="add-collection-layered-preview-container77">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox27"
                      />
                      <div className="add-collection-layered-preview-container78"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput13 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container79">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput14 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button27"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon74 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text183">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image5">
                    <div className="add-collection-layered-preview-container80">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox28"
                      />
                      <div className="add-collection-layered-preview-container81"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput15 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container82">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput16 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button28"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon76 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text186">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image6">
                    <div className="add-collection-layered-preview-container83">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox29"
                      />
                      <div className="add-collection-layered-preview-container84"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container85">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput18 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button29"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon78 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text189">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-preview-row-image7">
                    <div className="add-collection-layered-preview-container86">
                      <input
                        type="checkbox"
                        className="add-collection-layered-preview-checkbox30"
                      />
                      <div className="add-collection-layered-preview-container87"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-preview-textinput19 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-preview-container88">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-preview-textinput20 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-preview-button30"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-preview-icon80 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-preview-text192">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-preview-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-preview-icon82 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection2LayeredPreview
