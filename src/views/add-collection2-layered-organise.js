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
    <div className="add-collection2-layered-organise-container">
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
        <div className="add-collection2-layered-organise-header-creator">
          <div className="add-collection2-layered-organise-container001">
            <div className="add-collection2-layered-organise-container002">
              <div className="add-collection2-layered-organise-container003">
                <h1 className="add-collection2-layered-organise-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection2-layered-organise-mask-overlay"></div>
        </div>
        <div className="add-collection2-layered-organise-progress-navigation">
          <div className="add-collection2-layered-organise-container004">
            <div className="add-collection2-layered-organise-left">
              <Link
                to="/add-items-sets"
                className="add-collection2-layered-organise-navlink"
              >
                &lt; go back
              </Link>
              <div className="add-collection2-layered-organise-container005">
                <Link
                  to="/add-items-sets"
                  className="add-collection2-layered-organise-navlink1"
                >
                  Humans
                </Link>
                <div className="add-collection2-layered-organise-set-settings">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon"
                  >
                    <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                  </svg>
                </div>
              </div>
              <div className="add-collection2-layered-organise-container006">
                <button
                  type="button"
                  className="add-collection2-layered-organise-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon002 fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text001">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </button>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon004 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-inspect"
                  className="add-collection2-layered-organise-navlink2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon006 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text004">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon008 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-generate"
                  className="add-collection2-layered-organise-navlink3"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon010 fill-color-white"
                  >
                    <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text007">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
            <div className="add-collection2-layered-organise-right">
              <div className="add-collection2-layered-organise-container007">
                <button
                  type="button"
                  className="add-collection2-layered-organise-button01"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon012 fill-color-white"
                  >
                    <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text010">
                    <span>Organise</span>
                    <br></br>
                  </span>
                </button>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon014 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-inspect"
                  className="add-collection2-layered-organise-navlink4"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon016 fill-color-white"
                  >
                    <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text013">
                    <span>Inspect</span>
                    <br></br>
                  </span>
                </Link>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon018 fill-color-gray"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
                <Link
                  to="/add-collection2-layered-generate"
                  className="add-collection2-layered-organise-navlink5"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-layered-organise-icon020 fill-color-white"
                  >
                    <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                  </svg>
                  <span className="add-collection2-layered-organise-text016">
                    <span>Generate</span>
                    <br></br>
                  </span>
                </Link>
              </div>
              <Link
                to="/add-collection2-layered-inspect"
                className="add-collection2-layered-organise-navlink6"
              >
                <span className="add-collection2-layered-organise-text019">
                  <span>Continue</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon022 fill-color-white"
                >
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="add-collection2-layered-organise-container-form">
          <div className="add-collection2-layered-organise-under-header">
            <div className="add-collection2-layered-organise-card">
              <div className="add-collection2-layered-organise-set-box">
                <div className="add-collection2-layered-organise-set-layers">
                  <div className="add-collection2-layered-organise-add-layer">
                    <div className="add-collection2-layered-organise-container008">
                      <div className="add-collection2-layered-organise-container009">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon024 fill-color-white"
                        >
                          <path d="M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"></path>
                        </svg>
                        <label className="add-collection2-layered-organise-text022 padding-4px-left">
                          Layers
                        </label>
                      </div>
                      <div className="add-collection2-layered-organise-container010">
                        <div className="add-collection2-layered-organise-set-settings1">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon026"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                        </div>
                      </div>
                      <label className="add-collection2-layered-organise-text023 padding-4px-left">
                        6
                      </label>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-add-layer1">
                    <div className="add-collection2-layered-organise-container011">
                      <div className="add-collection2-layered-organise-container012">
                        <label className="add-collection2-layered-organise-text024 padding-4px-left">
                          New layer name...
                        </label>
                      </div>
                      <div className="add-collection2-layered-organise-container013">
                        <div className="add-collection2-layered-organise-set-settings2">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon028"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                        </div>
                        <div className="add-collection2-layered-organise-add-layer2">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon030 fill-color-white"
                          >
                            <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-layers">
                    <div className="add-collection2-layered-organise-container-layer">
                      <div className="add-collection2-layered-organise-container014">
                        <div className="add-collection2-layered-organise-container015">
                          <span className="add-collection2-layered-organise-text025 Content16SemiBold">
                            <span>Hat</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container016">
                            <span className="add-collection2-layered-organise-text028">
                              <span>
                                72%
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container017">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon032 fill-color-white"
                              >
                                <path d="M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"></path>
                              </svg>
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon034 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text031">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon036 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer1">
                      <div className="add-collection2-layered-organise-container018">
                        <div className="add-collection2-layered-organise-container019">
                          <span className="add-collection2-layered-organise-text034 Content16SemiBold">
                            <span>Nose</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container020">
                            <span className="add-collection2-layered-organise-text037">
                              <span>
                                22%
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container021">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon038 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text040">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon040 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer2">
                      <div className="add-collection2-layered-organise-container022">
                        <div className="add-collection2-layered-organise-container023">
                          <span className="add-collection2-layered-organise-text043 Content16SemiBold">
                            <span>Eyes</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container024">
                            <span className="add-collection2-layered-organise-text046">
                              <span>100%</span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container025">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon042 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text049">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon044 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer3">
                      <div className="add-collection2-layered-organise-container026">
                        <div className="add-collection2-layered-organise-container027">
                          <span className="add-collection2-layered-organise-text052 Content16SemiBold">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container028">
                            <span className="add-collection2-layered-organise-text055">
                              <span>
                                72%
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container029">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon046 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text058">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon048 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer4">
                      <div className="add-collection2-layered-organise-container030">
                        <div className="add-collection2-layered-organise-container031">
                          <span className="add-collection2-layered-organise-text061 Content16SemiBold">
                            <span>Head</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container032">
                            <span className="add-collection2-layered-organise-text064">
                              <span>
                                72%
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container033">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon050 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text067">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon052 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer5">
                      <div className="add-collection2-layered-organise-container034">
                        <div className="add-collection2-layered-organise-container035">
                          <span className="add-collection2-layered-organise-text070 Content16SemiBold">
                            <span>Background</span>
                            <br></br>
                          </span>
                          <div className="add-collection2-layered-organise-container036">
                            <span className="add-collection2-layered-organise-text073">
                              <span>
                                72%
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                            </span>
                            <div className="add-collection2-layered-organise-container037">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="add-collection2-layered-organise-icon054 fill-color-white"
                              >
                                <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                              </svg>
                              <span className="add-collection2-layered-organise-text076">
                                <span>
                                  9
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <br></br>
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon056 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-container-layer6">
                      <div className="add-collection2-layered-organise-container038">
                        <div className="add-collection2-layered-organise-container039">
                          <span className="add-collection2-layered-organise-text079 Content16SemiBold">
                            <span>Head</span>
                            <br></br>
                          </span>
                          <span className="add-collection2-layered-organise-text082">
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
                          className="add-collection2-layered-organise-icon058 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                    </div>
                    <ContainerLayer rootClassName="container-layer-root-class-name"></ContainerLayer>
                    <ContainerLayerModal rootClassName="container-layer-modal-root-class-name"></ContainerLayerModal>
                    <div className="add-collection2-layered-organise-container-layer7">
                      <div className="add-collection2-layered-organise-container040">
                        <div className="add-collection2-layered-organise-container041">
                          <span className="add-collection2-layered-organise-text085 Content16SemiBold">
                            <span>Mouth</span>
                            <br></br>
                          </span>
                          <span className="add-collection2-layered-organise-text088">
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
                          className="add-collection2-layered-organise-icon060 fill-color-gray"
                        >
                          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                        </svg>
                      </div>
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button02 Content16SemiBold button"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon062 fill-color-white"
                        >
                          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="add-collection2-layered-organise-footer-label">
                      <label className="add-collection2-layered-organise-text091 padding-4px-left">
                        <span>Drag layers to organise them</span>
                        <br></br>
                      </label>
                      <div className="add-collection2-layered-organise-tooltip">
                        <svg
                          id="tooltip1"
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon064 tooltipclass"
                        >
                          <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                        </svg>
                        <div>
                          <div className="add-collection2-layered-organise-container043">
                            <Script
                              html={`<script>
      // With the above scripts loaded, you can call \`tippy()\` with a CSS
      // selector and a \`content\` prop:
      tippy('#tooltip1', { theme: 'lemon',
        content: 'The order of the Layers is as seen. Ex: bottom layer is the background of your artwork.',
      });
        tippy('#tooltip2', { theme: 'lemon',
        content: 'Drag the slider to the left to make the Trait rare or to the right to make it common. You can also change values by typing them!',
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
              </div>
              <div className="add-collection2-layered-organise-layers-content">
                <div
                  id="Accessories"
                  className="add-collection2-layered-organise-layer-box"
                >
                  <div className="add-collection2-layered-organise-tabs-row">
                    <div className="add-collection2-layered-organise-container044">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon066 fill-color-white"
                      >
                        <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text094">
                        Accessories
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons">
                      <div className="add-collection2-layered-organise-container045">
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button03"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon068 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text095">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button04"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon070 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text098">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <EditButton></EditButton>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-tabs-row1">
                    <div className="add-collection2-layered-organise-container046">
                      <div className="add-collection2-layered-organise-tab-layer">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon072 fill-color-white"
                        >
                          <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text101">
                          Traits
                        </span>
                      </div>
                      <div className="add-collection2-layered-organise-tab-layer1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon074 fill-color-white"
                        >
                          <path d="M810 426h86v172h-86v-172zM640 768v-512h86v512h-86zM128 598v-172h86v172h-86zM470 938v-852h84v852h-84zM298 768v-512h86v512h-86z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text102">
                          Rarity
                        </span>
                      </div>
                      <div className="add-collection2-layered-organise-tab-layer2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon076 fill-color-white"
                        >
                          <path d="M426 170l-98 98 226 226v360h-84v-324l-202-202-98 98v-256h256zM598 170h256v256l-98-98-124 124-60-60 124-124z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text103">
                          Rules
                        </span>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons1">
                      <div className="add-collection2-layered-organise-container047">
                        <EditButton></EditButton>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button05"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon078 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text104">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button06"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon080 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text107">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container048">
                    <div className="item-layer add-collection2-layered-organise-trait">
                      <div className="add-collection2-layered-organise-container-bg">
                        <div className="add-collection2-layered-organise-image-item">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox"
                          />
                          <div className="add-collection2-layered-organise-replace-image">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon082 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box">
                        <div className="add-collection2-layered-organise-container049">
                          <div className="add-collection2-layered-organise-name-item">
                            <span className="add-collection2-layered-organise-text110">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity">
                            <span className="add-collection2-layered-organise-text111">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait01">
                      <div className="add-collection2-layered-organise-container-bg01">
                        <div className="add-collection2-layered-organise-image-item01">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox01"
                          />
                          <div className="add-collection2-layered-organise-replace-image01">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon084 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box01">
                        <div className="add-collection2-layered-organise-container050">
                          <div className="add-collection2-layered-organise-name-item01">
                            <span className="add-collection2-layered-organise-text112">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity01">
                            <span className="add-collection2-layered-organise-text113">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait02">
                      <div className="add-collection2-layered-organise-container-bg02">
                        <div className="add-collection2-layered-organise-image-item02">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox02"
                          />
                          <div className="add-collection2-layered-organise-replace-image02">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon086 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box02">
                        <div className="add-collection2-layered-organise-container051">
                          <div className="add-collection2-layered-organise-name-item02">
                            <span className="add-collection2-layered-organise-text114">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity02">
                            <span className="add-collection2-layered-organise-text115">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait03">
                      <div className="add-collection2-layered-organise-container-bg03">
                        <div className="add-collection2-layered-organise-image-item03">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox03"
                          />
                          <div className="add-collection2-layered-organise-replace-image03">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon088 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box03">
                        <div className="add-collection2-layered-organise-container052">
                          <div className="add-collection2-layered-organise-name-item03">
                            <span className="add-collection2-layered-organise-text116">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity03">
                            <span className="add-collection2-layered-organise-text117">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait04">
                      <div className="add-collection2-layered-organise-container-bg04">
                        <div className="add-collection2-layered-organise-image-item04">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox04"
                          />
                          <div className="add-collection2-layered-organise-replace-image04">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon090 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box04">
                        <div className="add-collection2-layered-organise-container053">
                          <div className="add-collection2-layered-organise-name-item04">
                            <span className="add-collection2-layered-organise-text118">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity04">
                            <span className="add-collection2-layered-organise-text119">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait05">
                      <div className="add-collection2-layered-organise-container-bg05">
                        <div className="add-collection2-layered-organise-image-item05">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox05"
                          />
                          <div className="add-collection2-layered-organise-replace-image05">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon092 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box05">
                        <div className="add-collection2-layered-organise-container054">
                          <div className="add-collection2-layered-organise-name-item05">
                            <span className="add-collection2-layered-organise-text120">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity05">
                            <span className="add-collection2-layered-organise-text121">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait06">
                      <div className="add-collection2-layered-organise-container-bg06">
                        <div className="add-collection2-layered-organise-image-item06">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox06"
                          />
                          <div className="add-collection2-layered-organise-replace-image06">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon094 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box06">
                        <div className="add-collection2-layered-organise-container055">
                          <div className="add-collection2-layered-organise-name-item06">
                            <span className="add-collection2-layered-organise-text122">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity06">
                            <span className="add-collection2-layered-organise-text123">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait07">
                      <div className="add-collection2-layered-organise-container-bg07">
                        <div className="add-collection2-layered-organise-image-item07">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox07"
                          />
                          <div className="add-collection2-layered-organise-replace-image07">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon096 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box07">
                        <div className="add-collection2-layered-organise-container056">
                          <div className="add-collection2-layered-organise-name-item07">
                            <span className="add-collection2-layered-organise-text124">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity07">
                            <span className="add-collection2-layered-organise-text125">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait08">
                      <div className="add-collection2-layered-organise-container-bg08">
                        <div className="add-collection2-layered-organise-image-item08">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox08"
                          />
                          <div className="add-collection2-layered-organise-replace-image08">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon098 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box08">
                        <div className="add-collection2-layered-organise-container057">
                          <div className="add-collection2-layered-organise-name-item08">
                            <span className="add-collection2-layered-organise-text126">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity08">
                            <span className="add-collection2-layered-organise-text127">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait09">
                      <div className="add-collection2-layered-organise-container-bg09">
                        <div className="add-collection2-layered-organise-image-item09">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox09"
                          />
                          <div className="add-collection2-layered-organise-replace-image09">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon100 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box09">
                        <div className="add-collection2-layered-organise-container058">
                          <div className="add-collection2-layered-organise-name-item09">
                            <span className="add-collection2-layered-organise-text128">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity09">
                            <span className="add-collection2-layered-organise-text129">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait10">
                      <div className="add-collection2-layered-organise-container-bg10">
                        <div className="add-collection2-layered-organise-image-item10">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox10"
                          />
                          <div className="add-collection2-layered-organise-replace-image10">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon102 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box10">
                        <div className="add-collection2-layered-organise-container059">
                          <div className="add-collection2-layered-organise-name-item10">
                            <span className="add-collection2-layered-organise-text130">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity10">
                            <span className="add-collection2-layered-organise-text131">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait11">
                      <div className="add-collection2-layered-organise-container-bg11">
                        <div className="add-collection2-layered-organise-image-item11">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox11"
                          />
                          <div className="add-collection2-layered-organise-replace-image11">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon104 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box11">
                        <div className="add-collection2-layered-organise-container060">
                          <div className="add-collection2-layered-organise-name-item11">
                            <span className="add-collection2-layered-organise-text132">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity11">
                            <span className="add-collection2-layered-organise-text133">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait12">
                      <div className="add-collection2-layered-organise-container-bg12">
                        <div className="add-collection2-layered-organise-image-item12">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox12"
                          />
                          <div className="add-collection2-layered-organise-replace-image12">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon106 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box12">
                        <div className="add-collection2-layered-organise-container061">
                          <div className="add-collection2-layered-organise-name-item12">
                            <span className="add-collection2-layered-organise-text134">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity12">
                            <span className="add-collection2-layered-organise-text135">
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
                  className="add-collection2-layered-organise-layer-box1"
                >
                  <div className="add-collection2-layered-organise-tabs-row2">
                    <div className="add-collection2-layered-organise-container062">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon108 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text136">
                        Head
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons2">
                      <div className="add-collection2-layered-organise-container063">
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button07"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon110 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text137">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button08"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon112 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text140">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button09"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon114 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text143">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container064">
                    <div className="item-layer add-collection2-layered-organise-trait13">
                      <div className="add-collection2-layered-organise-container-bg13">
                        <div className="add-collection2-layered-organise-image-item13">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox13"
                          />
                          <div className="add-collection2-layered-organise-replace-image13">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon116 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box13">
                        <div className="add-collection2-layered-organise-container065">
                          <div className="add-collection2-layered-organise-name-item13">
                            <span className="add-collection2-layered-organise-text146">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity13">
                            <span className="add-collection2-layered-organise-text147">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait14">
                      <div className="add-collection2-layered-organise-container-bg14">
                        <div className="add-collection2-layered-organise-image-item14">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox14"
                          />
                          <div className="add-collection2-layered-organise-replace-image14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon118 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box14">
                        <div className="add-collection2-layered-organise-container066">
                          <div className="add-collection2-layered-organise-name-item14">
                            <span className="add-collection2-layered-organise-text148">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity14">
                            <span className="add-collection2-layered-organise-text149">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait15">
                      <div className="add-collection2-layered-organise-container-bg15">
                        <div className="add-collection2-layered-organise-image-item15">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox15"
                          />
                          <div className="add-collection2-layered-organise-replace-image15">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon120 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box15">
                        <div className="add-collection2-layered-organise-container067">
                          <div className="add-collection2-layered-organise-name-item15">
                            <span className="add-collection2-layered-organise-text150">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity15">
                            <span className="add-collection2-layered-organise-text151">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait16">
                      <div className="add-collection2-layered-organise-container-bg16">
                        <div className="add-collection2-layered-organise-image-item16">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox16"
                          />
                          <div className="add-collection2-layered-organise-replace-image16">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon122 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box16">
                        <div className="add-collection2-layered-organise-container068">
                          <div className="add-collection2-layered-organise-name-item16">
                            <span className="add-collection2-layered-organise-text152">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity16">
                            <span className="add-collection2-layered-organise-text153">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait17">
                      <div className="add-collection2-layered-organise-container-bg17">
                        <div className="add-collection2-layered-organise-image-item17">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox17"
                          />
                          <div className="add-collection2-layered-organise-replace-image17">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon124 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box17">
                        <div className="add-collection2-layered-organise-container069">
                          <div className="add-collection2-layered-organise-name-item17">
                            <span className="add-collection2-layered-organise-text154">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity17">
                            <span className="add-collection2-layered-organise-text155">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait18">
                      <div className="add-collection2-layered-organise-container-bg18">
                        <div className="add-collection2-layered-organise-image-item18">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox18"
                          />
                          <div className="add-collection2-layered-organise-replace-image18">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon126 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box18">
                        <div className="add-collection2-layered-organise-container070">
                          <div className="add-collection2-layered-organise-name-item18">
                            <span className="add-collection2-layered-organise-text156">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity18">
                            <span className="add-collection2-layered-organise-text157">
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
                  className="add-collection2-layered-organise-layer-box2"
                >
                  <div className="add-collection2-layered-organise-tabs-row3">
                    <div className="add-collection2-layered-organise-container071">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon128 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text158">
                        Mouth
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons3">
                      <div className="add-collection2-layered-organise-container072">
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button10"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon130 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text159">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button11"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon132 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text162">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button12"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon134 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text165">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container073">
                    <div className="item-layer add-collection2-layered-organise-trait19">
                      <div className="add-collection2-layered-organise-container-bg19">
                        <div className="add-collection2-layered-organise-image-item19">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox19"
                          />
                          <div className="add-collection2-layered-organise-replace-image19">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon136 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box19">
                        <div className="add-collection2-layered-organise-container074">
                          <div className="add-collection2-layered-organise-name-item19">
                            <span className="add-collection2-layered-organise-text168">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity19">
                            <span className="add-collection2-layered-organise-text169">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait20">
                      <div className="add-collection2-layered-organise-container-bg20">
                        <div className="add-collection2-layered-organise-image-item20">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox20"
                          />
                          <div className="add-collection2-layered-organise-replace-image20">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon138 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box20">
                        <div className="add-collection2-layered-organise-container075">
                          <div className="add-collection2-layered-organise-name-item20">
                            <span className="add-collection2-layered-organise-text170">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity20">
                            <span className="add-collection2-layered-organise-text171">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait21">
                      <div className="add-collection2-layered-organise-container-bg21">
                        <div className="add-collection2-layered-organise-image-item21">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox21"
                          />
                          <div className="add-collection2-layered-organise-replace-image21">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon140 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box21">
                        <div className="add-collection2-layered-organise-container076">
                          <div className="add-collection2-layered-organise-name-item21">
                            <span className="add-collection2-layered-organise-text172">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity21">
                            <span className="add-collection2-layered-organise-text173">
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
                  className="add-collection2-layered-organise-layer-box3"
                >
                  <div className="add-collection2-layered-organise-tabs-row4">
                    <div className="add-collection2-layered-organise-container077">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon142 fill-color-white"
                      >
                        <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86zM680 440l152 200h-470l118-150 84 100z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text174">
                        Nose
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons4">
                      <div className="add-collection2-layered-organise-container078">
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button13"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon144 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text175">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button14"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon146 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text178">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button15"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon148 fill-color-white"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text181">
                            <span>Edit</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container079">
                    <div className="item-layer add-collection2-layered-organise-trait22">
                      <div className="add-collection2-layered-organise-container-bg22">
                        <div className="add-collection2-layered-organise-image-item22">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox22"
                          />
                          <div className="add-collection2-layered-organise-replace-image22">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon150 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box22">
                        <div className="add-collection2-layered-organise-container080">
                          <div className="add-collection2-layered-organise-name-item22">
                            <span className="add-collection2-layered-organise-text184">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity22">
                            <span className="add-collection2-layered-organise-text185">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-layer add-collection2-layered-organise-trait23">
                      <div className="add-collection2-layered-organise-container-bg23">
                        <div className="add-collection2-layered-organise-image-item23">
                          <input
                            type="checkbox"
                            className="add-collection2-layered-organise-checkbox23"
                          />
                          <div className="add-collection2-layered-organise-replace-image23">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon152 fill-color-white"
                            >
                              <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-text-box23">
                        <div className="add-collection2-layered-organise-container081">
                          <div className="add-collection2-layered-organise-name-item23">
                            <span className="add-collection2-layered-organise-text186">
                              Shy
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-rarity23">
                            <span className="add-collection2-layered-organise-text187">
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
                  className="add-collection2-layered-organise-layer-box4"
                >
                  <div className="add-collection2-layered-organise-tabs-row5">
                    <div className="add-collection2-layered-organise-container082">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon154 fill-color-white"
                      >
                        <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text188">
                        Accessories
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons5">
                      <div className="add-collection2-layered-organise-container083">
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button16"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon156 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text189">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button17"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon158 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text192">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <EditButton></EditButton>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-tabs-row6">
                    <div className="add-collection2-layered-organise-container084">
                      <div className="add-collection2-layered-organise-tab-layer3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon160 fill-color-white"
                        >
                          <path d="M298 298h598v86h-598v-86zM128 726v-86h598v86h-598zM214 554v-84h596v84h-596z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text195">
                          Traits
                        </span>
                      </div>
                      <div className="add-collection2-layered-organise-tab-layer4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon162 fill-color-white"
                        >
                          <path d="M810 426h86v172h-86v-172zM640 768v-512h86v512h-86zM128 598v-172h86v172h-86zM470 938v-852h84v852h-84zM298 768v-512h86v512h-86z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text196">
                          Rarity
                        </span>
                      </div>
                      <div className="add-collection2-layered-organise-tab-layer5">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon164 fill-color-white"
                        >
                          <path d="M426 170l-98 98 226 226v360h-84v-324l-202-202-98 98v-256h256zM598 170h256v256l-98-98-124 124-60-60 124-124z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text197">
                          Rules
                        </span>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-filter-buttons6">
                      <div className="add-collection2-layered-organise-container085">
                        <EditButton></EditButton>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button18"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon166 fill-color-white"
                          >
                            <path d="M128 810h426l-136-182-106 138-78-92zM42 470h598v426h-512q-34 0-60-26t-26-60v-340zM214 128h84v86h-84v-86zM384 128h86v86h-86v-86zM128 128v86h-86q0-32 27-59t59-27zM726 810h84v86h-84v-86zM726 128h84v86h-84v-86zM42 298h86v86h-86v-86zM896 128q32 0 59 27t27 59h-86v-86zM896 298h86v86h-86v-86zM554 128h86v86h-86v-86zM982 810q0 32-27 59t-59 27v-86h86zM896 470h86v84h-86v-84zM896 640h86v86h-86v-86z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text198">
                            <span>Blank</span>
                            <br></br>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button19"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon168 fill-color-white"
                          >
                            <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text201">
                            <span>Add</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container086">
                    <div className="add-collection2-layered-organise-trait-row">
                      <div className="add-collection2-layered-organise-container-left">
                        <div className="add-collection2-layered-organise-container-image">
                          <div className="add-collection2-layered-organise-image-trait"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container087">
                          <div className="add-collection2-layered-organise-container088">
                            <span className="add-collection2-layered-organise-name-trait">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container089">
                            <span className="add-collection2-layered-organise-name-trait01">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon170 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait02">
                              32
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right">
                        <div className="add-collection2-layered-organise-container090">
                          <div className="add-collection2-layered-organise-slider">
                            <span className="add-collection2-layered-organise-percentage-value-start">
                              50%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container092">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button20"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon172 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text204">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-trait-row1">
                      <div className="add-collection2-layered-organise-container-left1">
                        <div className="add-collection2-layered-organise-container-image1">
                          <div className="add-collection2-layered-organise-image-trait1"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container093">
                          <div className="add-collection2-layered-organise-container094">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon174 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait03">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container095">
                            <span className="add-collection2-layered-organise-name-trait04">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon176 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait05">
                              32
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right1">
                        <div className="add-collection2-layered-organise-container096">
                          <div className="add-collection2-layered-organise-slider1">
                            <span className="add-collection2-layered-organise-percentage-value-start1">
                              50%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput01 range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container098">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button21"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon178 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text207">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-trait-row2">
                      <div className="add-collection2-layered-organise-container-left2">
                        <div className="add-collection2-layered-organise-container-image2">
                          <div className="add-collection2-layered-organise-image-trait2"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container099">
                          <div className="add-collection2-layered-organise-container100">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon180 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait06">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container101">
                            <span className="add-collection2-layered-organise-name-trait07">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon182 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait08">
                              345
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right2">
                        <div className="add-collection2-layered-organise-container102">
                          <div className="add-collection2-layered-organise-slider2">
                            <span className="add-collection2-layered-organise-percentage-value-start2">
                              100%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput02 range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container104">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button22"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon184 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text210">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-trait-row3">
                      <div className="add-collection2-layered-organise-container-left3">
                        <div className="add-collection2-layered-organise-container-image3">
                          <div className="add-collection2-layered-organise-image-trait3"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container105">
                          <div className="add-collection2-layered-organise-container106">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon186 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait09">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container107">
                            <span className="add-collection2-layered-organise-name-trait10">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon188 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait11">
                              32
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right3">
                        <div className="add-collection2-layered-organise-container108">
                          <div className="add-collection2-layered-organise-slider3">
                            <span className="add-collection2-layered-organise-percentage-value-start3">
                              50%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput03 range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container110">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button23"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon190 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text213">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-trait-row4">
                      <div className="add-collection2-layered-organise-container-left4">
                        <div className="add-collection2-layered-organise-container-image4">
                          <div className="add-collection2-layered-organise-image-trait4"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container111">
                          <div className="add-collection2-layered-organise-container112">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon192 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait12">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container113">
                            <span className="add-collection2-layered-organise-name-trait13">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon194 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait14">
                              32
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right4">
                        <div className="add-collection2-layered-organise-container114">
                          <div className="add-collection2-layered-organise-slider4">
                            <span className="add-collection2-layered-organise-percentage-value-start4">
                              50%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput04 range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container116">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button24"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon196 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text216">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="add-collection2-layered-organise-trait-row5">
                      <div className="add-collection2-layered-organise-container-left5">
                        <div className="add-collection2-layered-organise-container-image5">
                          <div className="add-collection2-layered-organise-image-trait5"></div>
                        </div>
                        <div className="add-collection2-layered-organise-container117">
                          <div className="add-collection2-layered-organise-container118">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon198 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait15">
                              Eyes Right
                            </span>
                          </div>
                          <div className="add-collection2-layered-organise-container119">
                            <span className="add-collection2-layered-organise-name-trait16">
                              Have it:
                            </span>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="add-collection2-layered-organise-icon200 fill-color-white"
                            >
                              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                            </svg>
                            <span className="add-collection2-layered-organise-name-trait17">
                              32
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add-collection2-layered-organise-container-right5">
                        <div className="add-collection2-layered-organise-container120">
                          <div className="add-collection2-layered-organise-slider5">
                            <span className="add-collection2-layered-organise-percentage-value-start5">
                              50%
                            </span>
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="add-collection2-layered-organise-textinput05 range range2"
                            />
                            <div>
                              <div className="add-collection2-layered-organise-container122">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="add-collection2-layered-organise-button25"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon202 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="add-collection2-layered-organise-text219">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection2-layered-organise-item-preview">
                <div className="add-collection2-layered-organise-composed-image">
                  <div className="add-collection2-layered-organise-label">
                    <span className="add-collection2-layered-organise-text222">
                      Preview sample item
                    </span>
                  </div>
                  <div className="add-collection2-layered-organise-image"></div>
                  <div className="add-collection2-layered-organise-label1">
                    <span className="add-collection2-layered-organise-text223">
                      Sample  item
                    </span>
                    <div className="add-collection2-layered-organise-container123">
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button26"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon204 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text224">
                          <span>Random</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button27"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon206 fill-color-white"
                        >
                          <path d="M554 540l112-110 60 60-214 214-214-214 60-60 112 110v-412h84v412zM810 512h86v298q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-298h86v298h596v-298z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text227">
                          <span>Save</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-collection2-layered-organise-composing-layers">
                  <div className="add-collection2-layered-organise-container124">
                    <span className="add-collection2-layered-organise-text230">
                      Item sample layers
                    </span>
                  </div>
                  <div className="add-collection2-layered-organise-trait-layer">
                    <div className="add-collection2-layered-organise-container125">
                      <div className="add-collection2-layered-organise-lasyer-image">
                        <div className="add-collection2-layered-organise-container126"></div>
                      </div>
                      <div className="add-collection2-layered-organise-container127">
                        <span className="add-collection2-layered-organise-text231">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-layered-organise-text234">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button28 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon208 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-layered-organise-trait-layer1">
                    <div className="add-collection2-layered-organise-container128">
                      <div className="add-collection2-layered-organise-lasyer-image1">
                        <div className="add-collection2-layered-organise-container129"></div>
                      </div>
                      <div className="add-collection2-layered-organise-container130">
                        <span className="add-collection2-layered-organise-text237">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-layered-organise-text240">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button29 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon210 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-layered-organise-trait-layer2">
                    <div className="add-collection2-layered-organise-container131">
                      <div className="add-collection2-layered-organise-lasyer-image2">
                        <div className="add-collection2-layered-organise-container132"></div>
                      </div>
                      <div className="add-collection2-layered-organise-container133">
                        <span className="add-collection2-layered-organise-text243">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-layered-organise-text246">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button30 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon212 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-layered-organise-trait-layer3">
                    <div className="add-collection2-layered-organise-container134">
                      <div className="add-collection2-layered-organise-lasyer-image3">
                        <div className="add-collection2-layered-organise-container135"></div>
                      </div>
                      <div className="add-collection2-layered-organise-container136">
                        <span className="add-collection2-layered-organise-text249">
                          <span>Red Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-layered-organise-text252">
                          <span>Name Atribute it belongs to</span>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button31 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon214 fill-color-white"
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
        <div className="add-collection2-layered-organise-overlay-rarity">
          <div
            id="appOverlay"
            className="add-collection2-layered-organise-container137"
          >
            <div className="add-collection2-layered-organise-container138">
              <label className="add-collection2-layered-organise-text255">
                Eyes
              </label>
            </div>
            <div className="add-collection2-layered-organise-container139">
              <div className="add-collection2-layered-organise-field">
                <label className="add-collection2-layered-organise-text256 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection2-layered-organise-textinput06 focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection2-layered-organise-field1">
                <label className="add-collection2-layered-organise-text257 padding-4px-left Content">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection2-layered-organise-textinput07 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection2-layered-organise-layer-items-treats">
                <div className="add-collection2-layered-organise-tabs-row7">
                  <div className="add-collection2-layered-organise-container140">
                    <span className="add-collection2-layered-organise-text258">
                      &lt; go back
                    </span>
                    <span className="add-collection2-layered-organise-text259">
                      Layer Assets 
                    </span>
                    <span className="add-collection2-layered-organise-text260">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection2-layered-organise-filter-buttons7">
                    <div className="add-collection2-layered-organise-timeframe">
                      <button className="add-collection2-layered-organise-button32">
                        <span className="add-collection2-layered-organise-text261">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-organise-button33">
                        <span className="add-collection2-layered-organise-text264">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-organise-button34">
                        <span className="add-collection2-layered-organise-text267">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2-layered-organise-button35">
                        <span className="add-collection2-layered-organise-text270">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection2-layered-organise-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-layered-organise-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon216"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text273">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection2-layered-organise-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2-layered-organise-icon218"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection2-layered-organise-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection2-layered-organise-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-organise-dropdown-toggle1"
                          >
                            <span className="add-collection2-layered-organise-text274">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-organise-dropdown-toggle2"
                          >
                            <span className="add-collection2-layered-organise-text275">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-organise-dropdown-toggle3"
                          >
                            <span className="add-collection2-layered-organise-text276">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2-layered-organise-dropdown-toggle4"
                          >
                            <span className="add-collection2-layered-organise-text277">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button36"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon220"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text278">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection2-layered-organise-button37"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-layered-organise-icon222 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection2-layered-organise-text281">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection2-layered-organise-tabs-row8">
                  <div className="add-collection2-layered-organise-container141">
                    <div className="add-collection2-layered-organise-container142">
                      <span className="add-collection2-layered-organise-text284 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection2-layered-organise-container143">
                      <span className="add-collection2-layered-organise-text285 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-container144">
                    <span className="add-collection2-layered-organise-text286 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection2-layered-organise-container145">
                  <div className="add-collection2-layered-organise-row-image">
                    <div className="add-collection2-layered-organise-container146">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox24"
                      />
                      <div className="add-collection2-layered-organise-container147"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput08 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container148">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput09 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button38"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon224 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text287">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image1">
                    <div className="add-collection2-layered-organise-container149">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox25"
                      />
                      <div className="add-collection2-layered-organise-container150"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container151">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button39"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon226 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text290">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image2">
                    <div className="add-collection2-layered-organise-container152">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox26"
                      />
                      <div className="add-collection2-layered-organise-container153"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput12 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container154">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button40"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon228 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text293">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image3">
                    <div className="add-collection2-layered-organise-container155">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox27"
                      />
                      <div className="add-collection2-layered-organise-container156"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput14 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container157">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput15 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button41"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon230 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text296">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image4">
                    <div className="add-collection2-layered-organise-container158">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox28"
                      />
                      <div className="add-collection2-layered-organise-container159"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput16 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container160">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput17 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button42"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon232 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text299">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image5">
                    <div className="add-collection2-layered-organise-container161">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox29"
                      />
                      <div className="add-collection2-layered-organise-container162"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput18 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container163">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput19 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button43"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon234 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text302">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image6">
                    <div className="add-collection2-layered-organise-container164">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox30"
                      />
                      <div className="add-collection2-layered-organise-container165"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput20 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container166">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput21 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button44"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon236 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text305">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2-layered-organise-row-image7">
                    <div className="add-collection2-layered-organise-container167">
                      <input
                        type="checkbox"
                        className="add-collection2-layered-organise-checkbox31"
                      />
                      <div className="add-collection2-layered-organise-container168"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2-layered-organise-textinput22 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2-layered-organise-container169">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2-layered-organise-textinput23 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2-layered-organise-button45"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-layered-organise-icon238 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-layered-organise-text308">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection2-layered-organise-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-layered-organise-icon240 fill-color-white"
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
