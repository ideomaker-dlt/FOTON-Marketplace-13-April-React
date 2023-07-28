import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import ContainerLayer from '../components/container-layer'
import ContainerLayerModal from '../components/container-layer-modal'
import './add-collection2-layered-inspect.css'

const AddCollection2LayeredInspect = (props) => {
  return (
    <div className="add-collection-layered-inspect-container">
      <Helmet>
        <title>
          Add-Collection2-Layered-Inspect - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Layered-Inspect - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name28">
        <div className="add-collection-layered-inspect-header-creator">
          <div className="add-collection-layered-inspect-container001">
            <div className="add-collection-layered-inspect-container002">
              <div className="add-collection-layered-inspect-container003">
                <h1 className="add-collection-layered-inspect-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-layered-inspect-mask-overlay"></div>
        </div>
        <div className="add-collection-layered-inspect-progress-navigation">
          <div className="add-collection-layered-inspect-container004">
            <div className="add-collection-layered-inspect-left">
              <Link
                to="/add-items-sets"
                className="add-collection-layered-inspect-navlink"
              >
                &lt; go back
              </Link>
              <div className="add-collection-layered-inspect-container005">
                <Link
                  to="/add-collection2-layered-organise"
                  className="add-collection-layered-inspect-navlink1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-inspect-icon fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection-layered-inspect-text001">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-inspect-icon002 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <button
                  type="button"
                  className="add-collection-layered-inspect-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-inspect-icon004 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection-layered-inspect-text004">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </button>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-inspect-icon006 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-generate"
                  className="add-collection-layered-inspect-navlink2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-inspect-icon008 fill-color-white"
                  >
                    <path d="M632 572l134 134 88-88v236h-236l88-88-134-134zM618 170h236v236l-88-88-536 536-60-60 536-536zM452 392l-60 60-222-222 60-60z"></path>
                  </svg>
                  <span className="add-collection-layered-inspect-text007">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
            <div className="add-collection-layered-inspect-right">
              <Link
                to="/add-collection2-layered-generate"
                className="add-collection-layered-inspect-navlink3"
              >
                <span className="add-collection-layered-inspect-text010">
                  <span>Continue</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-inspect-icon010 fill-color-white"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-inspect-container-form">
          <div className="add-collection-layered-inspect-under-header">
            <div className="add-collection-layered-inspect-card">
              <div className="add-collection-layered-inspect-sample-item">
                <div className="add-collection-layered-inspect-composed-image">
                  <div className="add-collection-layered-inspect-container006">
                    <div className="add-collection-layered-inspect-image"></div>
                  </div>
                  <div className="add-collection-layered-inspect-label">
                    <span className="add-collection-layered-inspect-text013">
                      Sample  item
                    </span>
                    <div className="add-collection-layered-inspect-container007">
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button01"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon012 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text014">
                          <span>Random</span>
                          <br></br>
                        </span>
                      </button>
                      <div className="add-collection-layered-inspect-container008">
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button02"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon014 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text017">
                            <span>Clear All</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button03"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon016 fill-color-white"
                          >
                            <path d="M554 540l112-110 60 60-214 214-214-214 60-60 112 110v-412h84v412zM810 512h86v298q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-298h86v298h596v-298z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text020">
                            <span>Save</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-selected-mobile">
                      <div className="add-collection-layered-inspect-row">
                        <span className="add-collection-layered-inspect-text023">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row01">
                        <span className="add-collection-layered-inspect-text024">
                          Big Head
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row02">
                        <span className="add-collection-layered-inspect-text025">
                          Small Nose
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row03">
                        <span className="add-collection-layered-inspect-text026">
                          Red hat
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row04">
                        <span className="add-collection-layered-inspect-text027">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row05">
                        <span className="add-collection-layered-inspect-text028">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row06">
                        <span className="add-collection-layered-inspect-text029">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row07">
                        <span className="add-collection-layered-inspect-text030">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row08">
                        <span className="add-collection-layered-inspect-text031">
                          Sunglasses
                        </span>
                      </div>
                      <div className="add-collection-layered-inspect-row09">
                        <span className="add-collection-layered-inspect-text032">
                          Sunglasses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-collection-layered-inspect-set-layers">
                  <div className="add-collection-layered-inspect-add-layer">
                    <div className="add-collection-layered-inspect-container009">
                      <label className="add-collection-layered-inspect-text033 padding-4px-left">
                        Selected traits
                      </label>
                      <div className="add-collection-layered-inspect-container010">
                        <div className="add-collection-layered-inspect-container011">
                          <button
                            type="button"
                            className="add-collection-layered-inspect-button04"
                          >
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon018 fill-color-white"
                            >
                              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                            </svg>
                            <span className="add-collection-layered-inspect-text034">
                              <span>Clear All</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-layers">
                    <div className="add-collection-layered-inspect-container-trait">
                      <div className="add-collection-layered-inspect-container012">
                        <div className="add-collection-layered-inspect-container013">
                          <span className="add-collection-layered-inspect-text037">
                            <span>Accessories</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text040 Content16SemiBold">
                            <span>Sunglasses</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container014">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon020 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-container-trait1">
                      <div className="add-collection-layered-inspect-container015">
                        <div className="add-collection-layered-inspect-container016">
                          <span className="add-collection-layered-inspect-text043">
                            <span>Eyes</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text046 Content16SemiBold">
                            <span>Wide open</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container017">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon022 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-container-trait2">
                      <div className="add-collection-layered-inspect-container018">
                        <div className="add-collection-layered-inspect-container019">
                          <span className="add-collection-layered-inspect-text049">
                            <span>Nose</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text052 Content16SemiBold">
                            <span>Round</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container020">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon024 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-container-trait3">
                      <div className="add-collection-layered-inspect-container021">
                        <div className="add-collection-layered-inspect-container022">
                          <span className="add-collection-layered-inspect-text055">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text058 Content16SemiBold">
                            <span>Smiling</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container023">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon026 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-container-trait4">
                      <div className="add-collection-layered-inspect-container024">
                        <div className="add-collection-layered-inspect-container025">
                          <span className="add-collection-layered-inspect-text061">
                            <span>Ears</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text064 Content16SemiBold">
                            <span>Covered</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container026">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon028 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="add-collection-layered-inspect-container-trait5">
                      <div className="add-collection-layered-inspect-container027">
                        <div className="add-collection-layered-inspect-container028">
                          <span className="add-collection-layered-inspect-text067">
                            <span>Background</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text070 Content16SemiBold">
                            <span>Blue</span>
                            <br></br>
                          </span>
                        </div>
                        <div className="add-collection-layered-inspect-container029">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon030 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ContainerLayer rootClassName="container-layer-root-class-name4"></ContainerLayer>
                    <ContainerLayerModal rootClassName="container-layer-modal-root-class-name4"></ContainerLayerModal>
                    <div className="add-collection-layered-inspect-container-layer">
                      <div className="add-collection-layered-inspect-container030">
                        <div className="add-collection-layered-inspect-container031">
                          <span className="add-collection-layered-inspect-text073 Content16SemiBold">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-inspect-text076">
                            <span>
                              2 Files - 72%
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon032 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button05 button Content16SemiBold"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon034 fill-color-white"
                        >
                          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="add-collection-layered-inspect-footer-label">
                      <label className="add-collection-layered-inspect-text079 padding-4px-left">
                        <span>Drag layers to organise them</span>
                        <br></br>
                      </label>
                      <div className="add-collection-layered-inspect-tooltip">
                        <svg
                          id="tooltip1"
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon036 tooltipclass"
                        >
                          <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                        </svg>
                        <div>
                          <Script
                            html={`<script>
      // With the above scripts loaded, you can call \`tippy()\` with a CSS
      // selector and a \`content\` prop:
      tippy('#tooltip1', { theme: 'lemon',
        content: 'The order of the Layers is as seen. Ex: bottom layer is the background of your artwork.',
      });

      
    </script>

`}
                          ></Script>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-inspect-layers-content">
                <div
                  id="Accessories"
                  className="add-collection-layered-inspect-layer-box"
                >
                  <div className="add-collection-layered-inspect-tabs-row">
                    <div className="add-collection-layered-inspect-container032">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon038 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text082">
                        Accessories
                      </span>
                    </div>
                    <div className="add-collection-layered-inspect-filter-buttons">
                      <div className="add-collection-layered-inspect-container033">
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button06"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon040 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text083">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button07"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon042 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text086">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button08"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon044 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text089">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-container034">
                    <div className="item-layer add-collection-layered-inspect-trait">
                      <div className="add-collection-layered-inspect-container-bg">
                        <div className="add-collection-layered-inspect-image-item">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox"
                          />
                          <div className="add-collection-layered-inspect-replace-image">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon046 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box">
                        <div className="add-collection-layered-inspect-container035">
                          <div className="add-collection-layered-inspect-name-item">
                            <span className="add-collection-layered-inspect-text092">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity">
                            <span className="add-collection-layered-inspect-text093">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait01">
                      <div className="add-collection-layered-inspect-container-bg01">
                        <div className="add-collection-layered-inspect-image-item01">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox01"
                          />
                          <div className="add-collection-layered-inspect-replace-image01">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon048 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box01">
                        <div className="add-collection-layered-inspect-container036">
                          <div className="add-collection-layered-inspect-name-item01">
                            <span className="add-collection-layered-inspect-text094">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity01">
                            <span className="add-collection-layered-inspect-text095">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait02">
                      <div className="add-collection-layered-inspect-container-bg02">
                        <div className="add-collection-layered-inspect-image-item02">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox02"
                          />
                          <div className="add-collection-layered-inspect-replace-image02">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon050 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box02">
                        <div className="add-collection-layered-inspect-container037">
                          <div className="add-collection-layered-inspect-name-item02">
                            <span className="add-collection-layered-inspect-text096">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity02">
                            <span className="add-collection-layered-inspect-text097">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait03">
                      <div className="add-collection-layered-inspect-container-bg03">
                        <div className="add-collection-layered-inspect-image-item03">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox03"
                          />
                          <div className="add-collection-layered-inspect-replace-image03">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon052 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box03">
                        <div className="add-collection-layered-inspect-container038">
                          <div className="add-collection-layered-inspect-name-item03">
                            <span className="add-collection-layered-inspect-text098">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity03">
                            <span className="add-collection-layered-inspect-text099">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait04">
                      <div className="add-collection-layered-inspect-container-bg04">
                        <div className="add-collection-layered-inspect-image-item04">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox04"
                          />
                          <div className="add-collection-layered-inspect-replace-image04">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon054 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box04">
                        <div className="add-collection-layered-inspect-container039">
                          <div className="add-collection-layered-inspect-name-item04">
                            <span className="add-collection-layered-inspect-text100">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity04">
                            <span className="add-collection-layered-inspect-text101">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait05">
                      <div className="add-collection-layered-inspect-container-bg05">
                        <div className="add-collection-layered-inspect-image-item05">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox05"
                          />
                          <div className="add-collection-layered-inspect-replace-image05">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon056 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box05">
                        <div className="add-collection-layered-inspect-container040">
                          <div className="add-collection-layered-inspect-name-item05">
                            <span className="add-collection-layered-inspect-text102">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity05">
                            <span className="add-collection-layered-inspect-text103">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait06">
                      <div className="add-collection-layered-inspect-container-bg06">
                        <div className="add-collection-layered-inspect-image-item06">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox06"
                          />
                          <div className="add-collection-layered-inspect-replace-image06">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon058 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box06">
                        <div className="add-collection-layered-inspect-container041">
                          <div className="add-collection-layered-inspect-name-item06">
                            <span className="add-collection-layered-inspect-text104">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity06">
                            <span className="add-collection-layered-inspect-text105">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait07">
                      <div className="add-collection-layered-inspect-container-bg07">
                        <div className="add-collection-layered-inspect-image-item07">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox07"
                          />
                          <div className="add-collection-layered-inspect-replace-image07">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon060 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box07">
                        <div className="add-collection-layered-inspect-container042">
                          <div className="add-collection-layered-inspect-name-item07">
                            <span className="add-collection-layered-inspect-text106">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity07">
                            <span className="add-collection-layered-inspect-text107">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait08">
                      <div className="add-collection-layered-inspect-container-bg08">
                        <div className="add-collection-layered-inspect-image-item08">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox08"
                          />
                          <div className="add-collection-layered-inspect-replace-image08">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon062 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box08">
                        <div className="add-collection-layered-inspect-container043">
                          <div className="add-collection-layered-inspect-name-item08">
                            <span className="add-collection-layered-inspect-text108">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity08">
                            <span className="add-collection-layered-inspect-text109">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="Accessories"
                  className="add-collection-layered-inspect-layer-box1"
                >
                  <div className="add-collection-layered-inspect-tabs-row1">
                    <div className="add-collection-layered-inspect-container044">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon064 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text110">
                        Head
                      </span>
                    </div>
                    <div className="add-collection-layered-inspect-filter-buttons1">
                      <div className="add-collection-layered-inspect-container045">
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button09"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon066 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text111">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button10"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon068 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text114">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button11"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon070 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text117">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-container046">
                    <div className="item-layer add-collection-layered-inspect-trait09">
                      <div className="add-collection-layered-inspect-container-bg09">
                        <div className="add-collection-layered-inspect-image-item09">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox09"
                          />
                          <div className="add-collection-layered-inspect-replace-image09">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon072 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box09">
                        <div className="add-collection-layered-inspect-container047">
                          <div className="add-collection-layered-inspect-name-item09">
                            <span className="add-collection-layered-inspect-text120">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity09">
                            <span className="add-collection-layered-inspect-text121">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait10">
                      <div className="add-collection-layered-inspect-container-bg10">
                        <div className="add-collection-layered-inspect-image-item10">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox10"
                          />
                          <div className="add-collection-layered-inspect-replace-image10">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon074 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box10">
                        <div className="add-collection-layered-inspect-container048">
                          <div className="add-collection-layered-inspect-name-item10">
                            <span className="add-collection-layered-inspect-text122">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity10">
                            <span className="add-collection-layered-inspect-text123">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait11">
                      <div className="add-collection-layered-inspect-container-bg11">
                        <div className="add-collection-layered-inspect-image-item11">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox11"
                          />
                          <div className="add-collection-layered-inspect-replace-image11">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon076 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box11">
                        <div className="add-collection-layered-inspect-container049">
                          <div className="add-collection-layered-inspect-name-item11">
                            <span className="add-collection-layered-inspect-text124">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity11">
                            <span className="add-collection-layered-inspect-text125">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait12">
                      <div className="add-collection-layered-inspect-container-bg12">
                        <div className="add-collection-layered-inspect-image-item12">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox12"
                          />
                          <div className="add-collection-layered-inspect-replace-image12">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon078 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box12">
                        <div className="add-collection-layered-inspect-container050">
                          <div className="add-collection-layered-inspect-name-item12">
                            <span className="add-collection-layered-inspect-text126">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity12">
                            <span className="add-collection-layered-inspect-text127">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait13">
                      <div className="add-collection-layered-inspect-container-bg13">
                        <div className="add-collection-layered-inspect-image-item13">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox13"
                          />
                          <div className="add-collection-layered-inspect-replace-image13">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon080 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box13">
                        <div className="add-collection-layered-inspect-container051">
                          <div className="add-collection-layered-inspect-name-item13">
                            <span className="add-collection-layered-inspect-text128">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity13">
                            <span className="add-collection-layered-inspect-text129">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait14">
                      <div className="add-collection-layered-inspect-container-bg14">
                        <div className="add-collection-layered-inspect-image-item14">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox14"
                          />
                          <div className="add-collection-layered-inspect-replace-image14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon082 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box14">
                        <div className="add-collection-layered-inspect-container052">
                          <div className="add-collection-layered-inspect-name-item14">
                            <span className="add-collection-layered-inspect-text130">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity14">
                            <span className="add-collection-layered-inspect-text131">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="Accessories"
                  className="add-collection-layered-inspect-layer-box2"
                >
                  <div className="add-collection-layered-inspect-tabs-row2">
                    <div className="add-collection-layered-inspect-container053">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon084 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text132">
                        Mouth
                      </span>
                    </div>
                    <div className="add-collection-layered-inspect-filter-buttons2">
                      <div className="add-collection-layered-inspect-container054">
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button12"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon086 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text133">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button13"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon088 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text136">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button14"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon090 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text139">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-container055">
                    <div className="item-layer add-collection-layered-inspect-trait15">
                      <div className="add-collection-layered-inspect-container-bg15">
                        <div className="add-collection-layered-inspect-image-item15">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox15"
                          />
                          <div className="add-collection-layered-inspect-replace-image15">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon092 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box15">
                        <div className="add-collection-layered-inspect-container056">
                          <div className="add-collection-layered-inspect-name-item15">
                            <span className="add-collection-layered-inspect-text142">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity15">
                            <span className="add-collection-layered-inspect-text143">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait16">
                      <div className="add-collection-layered-inspect-container-bg16">
                        <div className="add-collection-layered-inspect-image-item16">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox16"
                          />
                          <div className="add-collection-layered-inspect-replace-image16">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon094 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box16">
                        <div className="add-collection-layered-inspect-container057">
                          <div className="add-collection-layered-inspect-name-item16">
                            <span className="add-collection-layered-inspect-text144">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity16">
                            <span className="add-collection-layered-inspect-text145">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait17">
                      <div className="add-collection-layered-inspect-container-bg17">
                        <div className="add-collection-layered-inspect-image-item17">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox17"
                          />
                          <div className="add-collection-layered-inspect-replace-image17">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon096 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box17">
                        <div className="add-collection-layered-inspect-container058">
                          <div className="add-collection-layered-inspect-name-item17">
                            <span className="add-collection-layered-inspect-text146">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity17">
                            <span className="add-collection-layered-inspect-text147">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="Accessories"
                  className="add-collection-layered-inspect-layer-box3"
                >
                  <div className="add-collection-layered-inspect-tabs-row3">
                    <div className="add-collection-layered-inspect-container059">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon098 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text148">
                        Nose
                      </span>
                    </div>
                    <div className="add-collection-layered-inspect-filter-buttons3">
                      <div className="add-collection-layered-inspect-container060">
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button15"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon100 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text149">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button16"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon102 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text152">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-inspect-button17"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon104 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-inspect-text155">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-container061">
                    <div className="item-layer add-collection-layered-inspect-trait18">
                      <div className="add-collection-layered-inspect-container-bg18">
                        <div className="add-collection-layered-inspect-image-item18">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox18"
                          />
                          <div className="add-collection-layered-inspect-replace-image18">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon106 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box18">
                        <div className="add-collection-layered-inspect-container062">
                          <div className="add-collection-layered-inspect-name-item18">
                            <span className="add-collection-layered-inspect-text158">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity18">
                            <span className="add-collection-layered-inspect-text159">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-inspect-trait19">
                      <div className="add-collection-layered-inspect-container-bg19">
                        <div className="add-collection-layered-inspect-image-item19">
                          <input
                            type="checkbox"
                            className="add-collection-layered-inspect-checkbox19"
                          />
                          <div className="add-collection-layered-inspect-replace-image19">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-inspect-icon108 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-inspect-text-box19">
                        <div className="add-collection-layered-inspect-container063">
                          <div className="add-collection-layered-inspect-name-item19">
                            <span className="add-collection-layered-inspect-text160">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-inspect-rarity19">
                            <span className="add-collection-layered-inspect-text161">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-inspect-item-preview">
                <div className="add-collection-layered-inspect-composed-image1">
                  <div className="add-collection-layered-inspect-label1">
                    <span className="add-collection-layered-inspect-text162">
                      Preview sample item
                    </span>
                  </div>
                  <div className="add-collection-layered-inspect-image1"></div>
                  <div className="add-collection-layered-inspect-label2">
                    <span className="add-collection-layered-inspect-text163">
                      Sample  item
                    </span>
                    <div className="add-collection-layered-inspect-container064">
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button18"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon110 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text164">
                          <span>Random</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button19"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon112 fill-color-white"
                        >
                          <path d="M554 540l112-110 60 60-214 214-214-214 60-60 112 110v-412h84v412zM810 512h86v298q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-298h86v298h596v-298z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text167">
                          <span>Save</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-collection-layered-inspect-composing-layers">
                  <div className="add-collection-layered-inspect-container065">
                    <span className="add-collection-layered-inspect-text170">
                      Item sample layers
                    </span>
                  </div>
                  <div className="add-collection-layered-inspect-trait-layer">
                    <div className="add-collection-layered-inspect-container066">
                      <div className="add-collection-layered-inspect-lasyer-image">
                        <div className="add-collection-layered-inspect-container067"></div>
                      </div>
                      <div className="add-collection-layered-inspect-container068">
                        <span className="add-collection-layered-inspect-text171">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-inspect-text174">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button20 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon114 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-inspect-trait-layer1">
                    <div className="add-collection-layered-inspect-container069">
                      <div className="add-collection-layered-inspect-lasyer-image1">
                        <div className="add-collection-layered-inspect-container070"></div>
                      </div>
                      <div className="add-collection-layered-inspect-container071">
                        <span className="add-collection-layered-inspect-text177">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-inspect-text180">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button21 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon116 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-inspect-trait-layer2">
                    <div className="add-collection-layered-inspect-container072">
                      <div className="add-collection-layered-inspect-lasyer-image2">
                        <div className="add-collection-layered-inspect-container073"></div>
                      </div>
                      <div className="add-collection-layered-inspect-container074">
                        <span className="add-collection-layered-inspect-text183">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-inspect-text186">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button22 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon118 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-inspect-trait-layer3">
                    <div className="add-collection-layered-inspect-container075">
                      <div className="add-collection-layered-inspect-lasyer-image3">
                        <div className="add-collection-layered-inspect-container076"></div>
                      </div>
                      <div className="add-collection-layered-inspect-container077">
                        <span className="add-collection-layered-inspect-text189">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-inspect-text192">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button23 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon120 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-inspect-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection-layered-inspect-container078"
          >
            <div className="add-collection-layered-inspect-container079">
              <label className="add-collection-layered-inspect-text195">
                Eyes
              </label>
            </div>
            <div className="add-collection-layered-inspect-container080">
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
              <div className="add-collection-layered-inspect-field">
                <label className="add-collection-layered-inspect-text196 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection-layered-inspect-textinput focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-inspect-field1">
                <label className="add-collection-layered-inspect-text197 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection-layered-inspect-textinput01 Content16SemiBold focus-reset-forms input"
                />
              </div>
              <div className="add-collection-layered-inspect-layer-items-treats">
                <div className="add-collection-layered-inspect-tabs-row4">
                  <div className="add-collection-layered-inspect-container081">
                    <span className="add-collection-layered-inspect-text198">
                      &lt; go back
                    </span>
                    <span className="add-collection-layered-inspect-text199">
                      Layer Assets 
                    </span>
                    <span className="add-collection-layered-inspect-text200">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection-layered-inspect-filter-buttons4">
                    <div className="add-collection-layered-inspect-timeframe">
                      <button className="add-collection-layered-inspect-button24">
                        <span className="add-collection-layered-inspect-text201">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-inspect-button25">
                        <span className="add-collection-layered-inspect-text204">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-inspect-button26">
                        <span className="add-collection-layered-inspect-text207">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-inspect-button27">
                        <span className="add-collection-layered-inspect-text210">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-inspect-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-inspect-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon122"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text213">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-inspect-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-inspect-icon124"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-inspect-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-inspect-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-inspect-dropdown-toggle1"
                          >
                            <span className="add-collection-layered-inspect-text214">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-inspect-dropdown-toggle2"
                          >
                            <span className="add-collection-layered-inspect-text215">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-inspect-dropdown-toggle3"
                          >
                            <span className="add-collection-layered-inspect-text216">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-inspect-dropdown-toggle4"
                          >
                            <span className="add-collection-layered-inspect-text217">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button28"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon126"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text218">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-layered-inspect-button29"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-inspect-icon128 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection-layered-inspect-text221">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-inspect-tabs-row5">
                  <div className="add-collection-layered-inspect-container082">
                    <div className="add-collection-layered-inspect-container083">
                      <span className="add-collection-layered-inspect-text224 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection-layered-inspect-container084">
                      <span className="add-collection-layered-inspect-text225 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-container085">
                    <span className="add-collection-layered-inspect-text226 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection-layered-inspect-container086">
                  <div className="add-collection-layered-inspect-row-image">
                    <div className="add-collection-layered-inspect-container087">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox20"
                      />
                      <div className="add-collection-layered-inspect-container088"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput02 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container089">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput03 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button30"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon130 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text227">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image1">
                    <div className="add-collection-layered-inspect-container090">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox21"
                      />
                      <div className="add-collection-layered-inspect-container091"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput04 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container092">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput05 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button31"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon132 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text230">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image2">
                    <div className="add-collection-layered-inspect-container093">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox22"
                      />
                      <div className="add-collection-layered-inspect-container094"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container095">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput07 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button32"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon134 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text233">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image3">
                    <div className="add-collection-layered-inspect-container096">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox23"
                      />
                      <div className="add-collection-layered-inspect-container097"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput08 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container098">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput09 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button33"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon136 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text236">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image4">
                    <div className="add-collection-layered-inspect-container099">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox24"
                      />
                      <div className="add-collection-layered-inspect-container100"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput10 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container101">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput11 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button34"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon138 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text239">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image5">
                    <div className="add-collection-layered-inspect-container102">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox25"
                      />
                      <div className="add-collection-layered-inspect-container103"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput12 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container104">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button35"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon140 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text242">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image6">
                    <div className="add-collection-layered-inspect-container105">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox26"
                      />
                      <div className="add-collection-layered-inspect-container106"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput14 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container107">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput15 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button36"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon142 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text245">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-inspect-row-image7">
                    <div className="add-collection-layered-inspect-container108">
                      <input
                        type="checkbox"
                        className="add-collection-layered-inspect-checkbox27"
                      />
                      <div className="add-collection-layered-inspect-container109"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-inspect-textinput16 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-inspect-container110">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-inspect-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-inspect-button37"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-inspect-icon144 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-inspect-text248">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-inspect-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-inspect-icon146 fill-color-white"
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

export default AddCollection2LayeredInspect
