import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import ContainerLayer from '../components/container-layer'
import ContainerLayerModal from '../components/container-layer-modal'
import EditButton from '../components/edit-button'
import './add-collection2-layered-organise.css'

const AddCollection2LayeredOrganise = (props) => {
  return (
    <div className="add-collection-layered-organise-container">
      <Helmet>
        <title>
          Add-Collection2-Layered-Organise - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Layered-Organise - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name27">
        <div className="add-collection-layered-organise-header-creator">
          <div className="add-collection-layered-organise-container001">
            <div className="add-collection-layered-organise-container002">
              <div className="add-collection-layered-organise-container003">
                <h1 className="add-collection-layered-organise-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-layered-organise-mask-overlay"></div>
        </div>
        <div className="add-collection-layered-organise-progress-navigation">
          <div className="add-collection-layered-organise-container004">
            <div className="add-collection-layered-organise-left">
              <Link
                to="/add-items-sets"
                className="add-collection-layered-organise-navlink"
              >
                &lt; go back
              </Link>
              <div className="add-collection-layered-organise-container005">
                <button
                  type="button"
                  className="add-collection-layered-organise-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-organise-icon fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection-layered-organise-text001">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </button>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-organise-icon002 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-inspect"
                  className="add-collection-layered-organise-navlink1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-organise-icon004 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection-layered-organise-text004">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-organise-icon006 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-generate"
                  className="add-collection-layered-organise-navlink2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection-layered-organise-icon008 fill-color-white"
                  >
                    <path d="M632 572l134 134 88-88v236h-236l88-88-134-134zM618 170h236v236l-88-88-536 536-60-60 536-536zM452 392l-60 60-222-222 60-60z"></path>
                  </svg>
                  <span className="add-collection-layered-organise-text007">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
            <div className="add-collection-layered-organise-right">
              <Link
                to="/add-collection2-layered-inspect"
                className="add-collection-layered-organise-navlink3"
              >
                <span className="add-collection-layered-organise-text010">
                  <span>Continue</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-organise-icon010 fill-color-white"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-organise-container-form">
          <div className="add-collection-layered-organise-under-header">
            <div className="add-collection-layered-organise-card">
              <div className="add-collection-layered-organise-set-box">
                <div className="add-collection-layered-organise-set-layers">
                  <div className="add-collection-layered-organise-add-layer">
                    <div className="add-collection-layered-organise-container006">
                      <label className="add-collection-layered-organise-text013 padding-4px-left">
                        Humans
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                      <div className="add-collection-layered-organise-container007">
                        <div className="add-collection-layered-organise-container008">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon012 fill-color-white"
                          >
                            <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                          </svg>
                        </div>
                        <div className="add-collection-layered-organise-container009">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon014"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-layers">
                    <div className="add-collection-layered-organise-container-layer">
                      <div className="add-collection-layered-organise-container010">
                        <div className="add-collection-layered-organise-container011">
                          <span className="add-collection-layered-organise-text014 Content16SemiBold">
                            <span>Accessories</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text017">
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
                          className="add-collection-layered-organise-icon016 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-organise-container-layer1">
                      <div className="add-collection-layered-organise-container012">
                        <div className="add-collection-layered-organise-container013">
                          <span className="add-collection-layered-organise-text020 Content16SemiBold">
                            <span>Head</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text023">
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
                          className="add-collection-layered-organise-icon018 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-organise-container-layer2">
                      <div className="add-collection-layered-organise-container014">
                        <div className="add-collection-layered-organise-container015">
                          <span className="add-collection-layered-organise-text026 Content16SemiBold">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text029">
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
                          className="add-collection-layered-organise-icon020 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-organise-container-layer3">
                      <div className="add-collection-layered-organise-container016">
                        <div className="add-collection-layered-organise-container017">
                          <span className="add-collection-layered-organise-text032 Content16SemiBold">
                            <span>Nose</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text035">
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
                          className="add-collection-layered-organise-icon022 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-organise-container-layer4">
                      <div className="add-collection-layered-organise-container018">
                        <div className="add-collection-layered-organise-container019">
                          <span className="add-collection-layered-organise-text038 Content16SemiBold">
                            <span>Eyes</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text041">
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
                          className="add-collection-layered-organise-icon024 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-organise-container-layer5">
                      <div className="add-collection-layered-organise-container020">
                        <div className="add-collection-layered-organise-container021">
                          <span className="add-collection-layered-organise-text044 Content16SemiBold">
                            <span>Background</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text047">
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
                          className="add-collection-layered-organise-icon026 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <ContainerLayer rootClassName="container-layer-root-class-name"></ContainerLayer>
                    <ContainerLayerModal rootClassName="container-layer-modal-root-class-name"></ContainerLayerModal>
                    <div className="add-collection-layered-organise-container-layer6">
                      <div className="add-collection-layered-organise-container022">
                        <div className="add-collection-layered-organise-container023">
                          <span className="add-collection-layered-organise-text050 Content16SemiBold">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <span className="add-collection-layered-organise-text053">
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
                          className="add-collection-layered-organise-icon028 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                      <button
                        type="button"
                        className="add-collection-layered-organise-button01 Content16SemiBold button"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon030 fill-color-white"
                        >
                          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="add-collection-layered-organise-footer-label">
                      <label className="add-collection-layered-organise-text056 padding-4px-left">
                        <span>Drag layers to organise them</span>
                        <br></br>
                      </label>
                      <div className="add-collection-layered-organise-tooltip">
                        <svg
                          id="tooltip1"
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon032 tooltipclass"
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
              <div className="add-collection-layered-organise-layers-content">
                <div
                  id="Accessories"
                  className="add-collection-layered-organise-layer-box"
                >
                  <div className="add-collection-layered-organise-tabs-row">
                    <div className="add-collection-layered-organise-container024">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon034 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text059">
                        Accessories
                      </span>
                    </div>
                    <div className="add-collection-layered-organise-filter-buttons">
                      <div className="add-collection-layered-organise-container025">
                        <button
                          type="button"
                          className="add-collection-layered-organise-button02"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon036 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text060">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button03"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon038 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text063">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <EditButton></EditButton>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-container026">
                    <div className="item-layer add-collection-layered-organise-trait">
                      <div className="add-collection-layered-organise-container-bg">
                        <div className="add-collection-layered-organise-image-item">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox"
                          />
                          <div className="add-collection-layered-organise-replace-image">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon040 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box">
                        <div className="add-collection-layered-organise-container027">
                          <div className="add-collection-layered-organise-name-item">
                            <span className="add-collection-layered-organise-text066">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity">
                            <span className="add-collection-layered-organise-text067">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait01">
                      <div className="add-collection-layered-organise-container-bg01">
                        <div className="add-collection-layered-organise-image-item01">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox01"
                          />
                          <div className="add-collection-layered-organise-replace-image01">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon042 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box01">
                        <div className="add-collection-layered-organise-container028">
                          <div className="add-collection-layered-organise-name-item01">
                            <span className="add-collection-layered-organise-text068">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity01">
                            <span className="add-collection-layered-organise-text069">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait02">
                      <div className="add-collection-layered-organise-container-bg02">
                        <div className="add-collection-layered-organise-image-item02">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox02"
                          />
                          <div className="add-collection-layered-organise-replace-image02">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon044 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box02">
                        <div className="add-collection-layered-organise-container029">
                          <div className="add-collection-layered-organise-name-item02">
                            <span className="add-collection-layered-organise-text070">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity02">
                            <span className="add-collection-layered-organise-text071">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait03">
                      <div className="add-collection-layered-organise-container-bg03">
                        <div className="add-collection-layered-organise-image-item03">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox03"
                          />
                          <div className="add-collection-layered-organise-replace-image03">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon046 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box03">
                        <div className="add-collection-layered-organise-container030">
                          <div className="add-collection-layered-organise-name-item03">
                            <span className="add-collection-layered-organise-text072">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity03">
                            <span className="add-collection-layered-organise-text073">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait04">
                      <div className="add-collection-layered-organise-container-bg04">
                        <div className="add-collection-layered-organise-image-item04">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox04"
                          />
                          <div className="add-collection-layered-organise-replace-image04">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon048 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box04">
                        <div className="add-collection-layered-organise-container031">
                          <div className="add-collection-layered-organise-name-item04">
                            <span className="add-collection-layered-organise-text074">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity04">
                            <span className="add-collection-layered-organise-text075">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait05">
                      <div className="add-collection-layered-organise-container-bg05">
                        <div className="add-collection-layered-organise-image-item05">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox05"
                          />
                          <div className="add-collection-layered-organise-replace-image05">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon050 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box05">
                        <div className="add-collection-layered-organise-container032">
                          <div className="add-collection-layered-organise-name-item05">
                            <span className="add-collection-layered-organise-text076">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity05">
                            <span className="add-collection-layered-organise-text077">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait06">
                      <div className="add-collection-layered-organise-container-bg06">
                        <div className="add-collection-layered-organise-image-item06">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox06"
                          />
                          <div className="add-collection-layered-organise-replace-image06">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon052 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box06">
                        <div className="add-collection-layered-organise-container033">
                          <div className="add-collection-layered-organise-name-item06">
                            <span className="add-collection-layered-organise-text078">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity06">
                            <span className="add-collection-layered-organise-text079">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait07">
                      <div className="add-collection-layered-organise-container-bg07">
                        <div className="add-collection-layered-organise-image-item07">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox07"
                          />
                          <div className="add-collection-layered-organise-replace-image07">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon054 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box07">
                        <div className="add-collection-layered-organise-container034">
                          <div className="add-collection-layered-organise-name-item07">
                            <span className="add-collection-layered-organise-text080">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity07">
                            <span className="add-collection-layered-organise-text081">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait08">
                      <div className="add-collection-layered-organise-container-bg08">
                        <div className="add-collection-layered-organise-image-item08">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox08"
                          />
                          <div className="add-collection-layered-organise-replace-image08">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon056 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box08">
                        <div className="add-collection-layered-organise-container035">
                          <div className="add-collection-layered-organise-name-item08">
                            <span className="add-collection-layered-organise-text082">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity08">
                            <span className="add-collection-layered-organise-text083">
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
                  className="add-collection-layered-organise-layer-box1"
                >
                  <div className="add-collection-layered-organise-tabs-row1">
                    <div className="add-collection-layered-organise-container036">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon058 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text084">
                        Head
                      </span>
                    </div>
                    <div className="add-collection-layered-organise-filter-buttons1">
                      <div className="add-collection-layered-organise-container037">
                        <button
                          type="button"
                          className="add-collection-layered-organise-button04"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon060 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text085">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button05"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon062 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text088">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button06"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon064 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text091">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-container038">
                    <div className="item-layer add-collection-layered-organise-trait09">
                      <div className="add-collection-layered-organise-container-bg09">
                        <div className="add-collection-layered-organise-image-item09">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox09"
                          />
                          <div className="add-collection-layered-organise-replace-image09">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon066 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box09">
                        <div className="add-collection-layered-organise-container039">
                          <div className="add-collection-layered-organise-name-item09">
                            <span className="add-collection-layered-organise-text094">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity09">
                            <span className="add-collection-layered-organise-text095">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait10">
                      <div className="add-collection-layered-organise-container-bg10">
                        <div className="add-collection-layered-organise-image-item10">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox10"
                          />
                          <div className="add-collection-layered-organise-replace-image10">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon068 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box10">
                        <div className="add-collection-layered-organise-container040">
                          <div className="add-collection-layered-organise-name-item10">
                            <span className="add-collection-layered-organise-text096">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity10">
                            <span className="add-collection-layered-organise-text097">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait11">
                      <div className="add-collection-layered-organise-container-bg11">
                        <div className="add-collection-layered-organise-image-item11">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox11"
                          />
                          <div className="add-collection-layered-organise-replace-image11">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon070 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box11">
                        <div className="add-collection-layered-organise-container041">
                          <div className="add-collection-layered-organise-name-item11">
                            <span className="add-collection-layered-organise-text098">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity11">
                            <span className="add-collection-layered-organise-text099">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait12">
                      <div className="add-collection-layered-organise-container-bg12">
                        <div className="add-collection-layered-organise-image-item12">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox12"
                          />
                          <div className="add-collection-layered-organise-replace-image12">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon072 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box12">
                        <div className="add-collection-layered-organise-container042">
                          <div className="add-collection-layered-organise-name-item12">
                            <span className="add-collection-layered-organise-text100">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity12">
                            <span className="add-collection-layered-organise-text101">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait13">
                      <div className="add-collection-layered-organise-container-bg13">
                        <div className="add-collection-layered-organise-image-item13">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox13"
                          />
                          <div className="add-collection-layered-organise-replace-image13">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon074 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box13">
                        <div className="add-collection-layered-organise-container043">
                          <div className="add-collection-layered-organise-name-item13">
                            <span className="add-collection-layered-organise-text102">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity13">
                            <span className="add-collection-layered-organise-text103">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait14">
                      <div className="add-collection-layered-organise-container-bg14">
                        <div className="add-collection-layered-organise-image-item14">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox14"
                          />
                          <div className="add-collection-layered-organise-replace-image14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon076 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box14">
                        <div className="add-collection-layered-organise-container044">
                          <div className="add-collection-layered-organise-name-item14">
                            <span className="add-collection-layered-organise-text104">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity14">
                            <span className="add-collection-layered-organise-text105">
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
                  className="add-collection-layered-organise-layer-box2"
                >
                  <div className="add-collection-layered-organise-tabs-row2">
                    <div className="add-collection-layered-organise-container045">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon078 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text106">
                        Mouth
                      </span>
                    </div>
                    <div className="add-collection-layered-organise-filter-buttons2">
                      <div className="add-collection-layered-organise-container046">
                        <button
                          type="button"
                          className="add-collection-layered-organise-button07"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon080 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text107">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button08"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon082 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text110">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button09"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon084 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text113">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-container047">
                    <div className="item-layer add-collection-layered-organise-trait15">
                      <div className="add-collection-layered-organise-container-bg15">
                        <div className="add-collection-layered-organise-image-item15">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox15"
                          />
                          <div className="add-collection-layered-organise-replace-image15">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon086 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box15">
                        <div className="add-collection-layered-organise-container048">
                          <div className="add-collection-layered-organise-name-item15">
                            <span className="add-collection-layered-organise-text116">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity15">
                            <span className="add-collection-layered-organise-text117">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait16">
                      <div className="add-collection-layered-organise-container-bg16">
                        <div className="add-collection-layered-organise-image-item16">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox16"
                          />
                          <div className="add-collection-layered-organise-replace-image16">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon088 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box16">
                        <div className="add-collection-layered-organise-container049">
                          <div className="add-collection-layered-organise-name-item16">
                            <span className="add-collection-layered-organise-text118">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity16">
                            <span className="add-collection-layered-organise-text119">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait17">
                      <div className="add-collection-layered-organise-container-bg17">
                        <div className="add-collection-layered-organise-image-item17">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox17"
                          />
                          <div className="add-collection-layered-organise-replace-image17">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon090 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box17">
                        <div className="add-collection-layered-organise-container050">
                          <div className="add-collection-layered-organise-name-item17">
                            <span className="add-collection-layered-organise-text120">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity17">
                            <span className="add-collection-layered-organise-text121">
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
                  className="add-collection-layered-organise-layer-box3"
                >
                  <div className="add-collection-layered-organise-tabs-row3">
                    <div className="add-collection-layered-organise-container051">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon092 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text122">
                        Nose
                      </span>
                    </div>
                    <div className="add-collection-layered-organise-filter-buttons3">
                      <div className="add-collection-layered-organise-container052">
                        <button
                          type="button"
                          className="add-collection-layered-organise-button10"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon094 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text123">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button11"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon096 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text126">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection-layered-organise-button12"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon098 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection-layered-organise-text129">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-container053">
                    <div className="item-layer add-collection-layered-organise-trait18">
                      <div className="add-collection-layered-organise-container-bg18">
                        <div className="add-collection-layered-organise-image-item18">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox18"
                          />
                          <div className="add-collection-layered-organise-replace-image18">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon100 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box18">
                        <div className="add-collection-layered-organise-container054">
                          <div className="add-collection-layered-organise-name-item18">
                            <span className="add-collection-layered-organise-text132">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity18">
                            <span className="add-collection-layered-organise-text133">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection-layered-organise-trait19">
                      <div className="add-collection-layered-organise-container-bg19">
                        <div className="add-collection-layered-organise-image-item19">
                          <input
                            type="checkbox"
                            className="add-collection-layered-organise-checkbox19"
                          />
                          <div className="add-collection-layered-organise-replace-image19">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection-layered-organise-icon102 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection-layered-organise-text-box19">
                        <div className="add-collection-layered-organise-container055">
                          <div className="add-collection-layered-organise-name-item19">
                            <span className="add-collection-layered-organise-text134">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection-layered-organise-rarity19">
                            <span className="add-collection-layered-organise-text135">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-organise-item-preview">
                <div className="add-collection-layered-organise-composed-image">
                  <div className="add-collection-layered-organise-label">
                    <span className="add-collection-layered-organise-text136">
                      Preview sample item
                    </span>
                  </div>
                  <div className="add-collection-layered-organise-image"></div>
                  <div className="add-collection-layered-organise-label1">
                    <span className="add-collection-layered-organise-text137">
                      Sample  item
                    </span>
                    <div className="add-collection-layered-organise-container056">
                      <button
                        type="button"
                        className="add-collection-layered-organise-button13"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon104 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text138">
                          <span>Random</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection-layered-organise-button14"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon106 fill-color-white"
                        >
                          <path d="M554 540l112-110 60 60-214 214-214-214 60-60 112 110v-412h84v412zM810 512h86v298q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-298h86v298h596v-298z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text141">
                          <span>Save</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-collection-layered-organise-composing-layers">
                  <div className="add-collection-layered-organise-container057">
                    <span className="add-collection-layered-organise-text144">
                      Item sample layers
                    </span>
                  </div>
                  <div className="add-collection-layered-organise-trait-layer">
                    <div className="add-collection-layered-organise-container058">
                      <div className="add-collection-layered-organise-lasyer-image">
                        <div className="add-collection-layered-organise-container059"></div>
                      </div>
                      <div className="add-collection-layered-organise-container060">
                        <span className="add-collection-layered-organise-text145">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-organise-text148">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button15 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon108 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-organise-trait-layer1">
                    <div className="add-collection-layered-organise-container061">
                      <div className="add-collection-layered-organise-lasyer-image1">
                        <div className="add-collection-layered-organise-container062"></div>
                      </div>
                      <div className="add-collection-layered-organise-container063">
                        <span className="add-collection-layered-organise-text151">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-organise-text154">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button16 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon110 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-organise-trait-layer2">
                    <div className="add-collection-layered-organise-container064">
                      <div className="add-collection-layered-organise-lasyer-image2">
                        <div className="add-collection-layered-organise-container065"></div>
                      </div>
                      <div className="add-collection-layered-organise-container066">
                        <span className="add-collection-layered-organise-text157">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-organise-text160">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button17 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon112 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-organise-trait-layer3">
                    <div className="add-collection-layered-organise-container067">
                      <div className="add-collection-layered-organise-lasyer-image3">
                        <div className="add-collection-layered-organise-container068"></div>
                      </div>
                      <div className="add-collection-layered-organise-container069">
                        <span className="add-collection-layered-organise-text163">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-organise-text166">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button18 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon114 fill-color-white"
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
        <div className="add-collection-layered-organise-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection-layered-organise-container070"
          >
            <div className="add-collection-layered-organise-container071">
              <label className="add-collection-layered-organise-text169">
                Eyes
              </label>
            </div>
            <div className="add-collection-layered-organise-container072">
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
              <div className="add-collection-layered-organise-field">
                <label className="add-collection-layered-organise-text170 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection-layered-organise-textinput focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection-layered-organise-field1">
                <label className="add-collection-layered-organise-text171 padding-4px-left Content">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection-layered-organise-textinput01 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-organise-layer-items-treats">
                <div className="add-collection-layered-organise-tabs-row4">
                  <div className="add-collection-layered-organise-container073">
                    <span className="add-collection-layered-organise-text172">
                      &lt; go back
                    </span>
                    <span className="add-collection-layered-organise-text173">
                      Layer Assets 
                    </span>
                    <span className="add-collection-layered-organise-text174">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection-layered-organise-filter-buttons4">
                    <div className="add-collection-layered-organise-timeframe">
                      <button className="add-collection-layered-organise-button19">
                        <span className="add-collection-layered-organise-text175">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-organise-button20">
                        <span className="add-collection-layered-organise-text178">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-organise-button21">
                        <span className="add-collection-layered-organise-text181">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-organise-button22">
                        <span className="add-collection-layered-organise-text184">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-organise-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-organise-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon116"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text187">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-organise-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-organise-icon118"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-organise-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-organise-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-organise-dropdown-toggle1"
                          >
                            <span className="add-collection-layered-organise-text188">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-organise-dropdown-toggle2"
                          >
                            <span className="add-collection-layered-organise-text189">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-organise-dropdown-toggle3"
                          >
                            <span className="add-collection-layered-organise-text190">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-organise-dropdown-toggle4"
                          >
                            <span className="add-collection-layered-organise-text191">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button23"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon120"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text192">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-layered-organise-button24"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-organise-icon122 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection-layered-organise-text195">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-organise-tabs-row5">
                  <div className="add-collection-layered-organise-container074">
                    <div className="add-collection-layered-organise-container075">
                      <span className="add-collection-layered-organise-text198 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection-layered-organise-container076">
                      <span className="add-collection-layered-organise-text199 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-container077">
                    <span className="add-collection-layered-organise-text200 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection-layered-organise-container078">
                  <div className="add-collection-layered-organise-row-image">
                    <div className="add-collection-layered-organise-container079">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox20"
                      />
                      <div className="add-collection-layered-organise-container080"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput02 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container081">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput03 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button25"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon124 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text201">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image1">
                    <div className="add-collection-layered-organise-container082">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox21"
                      />
                      <div className="add-collection-layered-organise-container083"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput04 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container084">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput05 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button26"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon126 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text204">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image2">
                    <div className="add-collection-layered-organise-container085">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox22"
                      />
                      <div className="add-collection-layered-organise-container086"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container087">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput07 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button27"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon128 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text207">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image3">
                    <div className="add-collection-layered-organise-container088">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox23"
                      />
                      <div className="add-collection-layered-organise-container089"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container090">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button28"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon130 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text210">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image4">
                    <div className="add-collection-layered-organise-container091">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox24"
                      />
                      <div className="add-collection-layered-organise-container092"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput10 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container093">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button29"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon132 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text213">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image5">
                    <div className="add-collection-layered-organise-container094">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox25"
                      />
                      <div className="add-collection-layered-organise-container095"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput12 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container096">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button30"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon134 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text216">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image6">
                    <div className="add-collection-layered-organise-container097">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox26"
                      />
                      <div className="add-collection-layered-organise-container098"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput14 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container099">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput15 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button31"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon136 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text219">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-organise-row-image7">
                    <div className="add-collection-layered-organise-container100">
                      <input
                        type="checkbox"
                        className="add-collection-layered-organise-checkbox27"
                      />
                      <div className="add-collection-layered-organise-container101"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-organise-textinput16 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-organise-container102">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-organise-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-organise-button32"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-organise-icon138 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-organise-text222">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-organise-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-organise-icon140 fill-color-white"
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

export default AddCollection2LayeredOrganise
