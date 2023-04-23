import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection2-layered.css'

const AddCollection2Layered = (props) => {
  return (
    <div className="add-collection-layered-container">
      <Helmet>
        <title>
          Add-Collection2-Layered - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Layered - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name6">
        <div className="add-collection-layered-header-creator">
          <div className="add-collection-layered-container01">
            <div className="add-collection-layered-container02">
              <div className="add-collection-layered-container03">
                <h1 className="add-collection-layered-text">
                  Create New Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-layered-mask-overlay"></div>
        </div>
        <div className="add-collection-layered-tabs-row">
          <div className="add-collection-layered-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection-layered-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection-layered-container05">
              <button type="button" className="add-collection-layered-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-icon fill-color-white"
                >
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
                <span className="add-collection-layered-text001">
                  <span>Define Collection</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection-layered-button01">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-icon02 fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection-layered-text004">
                  <span>Organise</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection-layered-button02">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-icon04 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection-layered-text007">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection-layered-button03">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-icon06 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection-layered-text010">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-container-form">
          <div className="add-collection-layered-under-header">
            <div className="add-collection-layered-card">
              <form className="add-collection-layered-side-layers">
                <div className="add-collection-layered-field-image">
                  <label className="add-collection-layered-text013 padding-4px-left">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Add Layers
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="add-collection-layered-text016">
                      ● Attributes:
                    </span>
                  </label>
                  <div className="add-collection-layered-container06">
                    <input
                      type="text"
                      placeholder="Layer Name..."
                      className="add-collection-layered-textinput Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-collection-layered-button04 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon08"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-container-layer">
                    <div className="add-collection-layered-container07">
                      <div className="add-collection-layered-container08">
                        <span className="add-collection-layered-text017 Content16SemiBold">
                          <span>Head</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-text020">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon10 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection-layered-button05 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon12 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-container-layer1">
                    <div className="add-collection-layered-container09">
                      <div className="add-collection-layered-container10">
                        <span className="add-collection-layered-text023 Content16SemiBold">
                          <span>Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-text026">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon14 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection-layered-button06 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon16 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-layered-container-layer2">
                    <div className="add-collection-layered-container11">
                      <div className="add-collection-layered-container12">
                        <span className="add-collection-layered-text029 Content16SemiBold">
                          <span>Mouth</span>
                          <br></br>
                        </span>
                        <span className="add-collection-layered-text032">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon18 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection-layered-button07 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon20 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <label className="add-collection-layered-text035 padding-4px-left">
                    * Organise layers by dragging them. The order of the layers
                    above is reversed when it generates your images. Ex: First
                    layer at the top will be the Background of your avatar.
                  </label>
                </div>
              </form>
              <div className="add-collection-layered-container-images">
                <div className="add-collection-layered-tabs-row1">
                  <div className="add-collection-layered-container13">
                    <span className="add-collection-layered-text036">
                      <span>
                        Layer Assets
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="add-collection-layered-text038">
                        ● Treats:
                      </span>
                    </span>
                  </div>
                  <div className="add-collection-layered-filter-buttons">
                    <div className="add-collection-layered-container14">
                      <button
                        type="button"
                        className="add-collection-layered-button08"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon22 fill-color-white"
                        >
                          <path d="M362 576l-148 192h596l-192-256-148 192zM896 810q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596q34 0 60 26t26 60v596z"></path>
                        </svg>
                        <span className="add-collection-layered-text039">
                          <span>Add Files</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection-layered-button09"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon24 fill-color-gray"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text042">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-button10"
                    >
                      <span className="add-collection-layered-text045">
                        <span>Continue</span>
                        <br></br>
                      </span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon26 fill-color-white"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-container15">
                  <div className="add-collection-layered-item1">
                    <div className="add-collection-layered-image-header">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox"
                      />
                      <div className="add-collection-layered-replace-image">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon28 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box">
                      <div className="add-collection-layered-container16">
                        <div className="add-collection-layered-floor">
                          <span className="add-collection-layered-text048 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text049">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume24">
                          <span className="add-collection-layered-text050 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container17">
                            <span className="add-collection-layered-text051">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item11">
                    <div className="add-collection-layered-image-header1">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox01"
                      />
                      <div className="add-collection-layered-replace-image1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon30 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box1">
                      <div className="add-collection-layered-container18">
                        <div className="add-collection-layered-floor1">
                          <span className="add-collection-layered-text052 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text053">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume241">
                          <span className="add-collection-layered-text054 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container19">
                            <span className="add-collection-layered-text055">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item12">
                    <div className="add-collection-layered-image-header2">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox02"
                      />
                      <div className="add-collection-layered-replace-image2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon32 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box2">
                      <div className="add-collection-layered-container20">
                        <div className="add-collection-layered-floor2">
                          <span className="add-collection-layered-text056 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text057">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume242">
                          <span className="add-collection-layered-text058 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container21">
                            <span className="add-collection-layered-text059">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item13">
                    <div className="add-collection-layered-image-header3">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox03"
                      />
                      <div className="add-collection-layered-replace-image3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon34 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box3">
                      <div className="add-collection-layered-container22">
                        <div className="add-collection-layered-floor3">
                          <span className="add-collection-layered-text060 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text061">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume243">
                          <span className="add-collection-layered-text062 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container23">
                            <span className="add-collection-layered-text063">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item14">
                    <div className="add-collection-layered-image-header4">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox04"
                      />
                      <div className="add-collection-layered-replace-image4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon36 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box4">
                      <div className="add-collection-layered-container24">
                        <div className="add-collection-layered-floor4">
                          <span className="add-collection-layered-text064 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text065">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume244">
                          <span className="add-collection-layered-text066 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container25">
                            <span className="add-collection-layered-text067">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item15">
                    <div className="add-collection-layered-image-header5">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox05"
                      />
                      <div className="add-collection-layered-replace-image5">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon38 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box5">
                      <div className="add-collection-layered-container26">
                        <div className="add-collection-layered-floor5">
                          <span className="add-collection-layered-text068 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text069">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume245">
                          <span className="add-collection-layered-text070 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container27">
                            <span className="add-collection-layered-text071">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item16">
                    <div className="add-collection-layered-image-header6">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox06"
                      />
                      <div className="add-collection-layered-replace-image6">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon40 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box6">
                      <div className="add-collection-layered-container28">
                        <div className="add-collection-layered-floor6">
                          <span className="add-collection-layered-text072 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text073">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume246">
                          <span className="add-collection-layered-text074 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container29">
                            <span className="add-collection-layered-text075">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item17">
                    <div className="add-collection-layered-image-header7">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox07"
                      />
                      <div className="add-collection-layered-replace-image7">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon42 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box7">
                      <div className="add-collection-layered-container30">
                        <div className="add-collection-layered-floor7">
                          <span className="add-collection-layered-text076 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text077">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume247">
                          <span className="add-collection-layered-text078 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container31">
                            <span className="add-collection-layered-text079">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection-layered-item18">
                    <div className="add-collection-layered-image-header8">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox08"
                      />
                      <div className="add-collection-layered-replace-image8">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon44 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection-layered-text-box8">
                      <div className="add-collection-layered-container32">
                        <div className="add-collection-layered-floor8">
                          <span className="add-collection-layered-text080 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection-layered-text081">
                            Black
                          </span>
                        </div>
                        <div className="add-collection-layered-volume248">
                          <span className="add-collection-layered-text082 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection-layered-container33">
                            <span className="add-collection-layered-text083">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-collection-layered-overlay-rarity">
          <div id="appOverlay" className="add-collection-layered-container34">
            <div className="add-collection-layered-container35">
              <label className="add-collection-layered-text084">Eyes</label>
            </div>
            <div className="add-collection-layered-container36">
              <div>
                <DangerousHTML
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
                ></DangerousHTML>
              </div>
              <div className="add-collection-layered-field">
                <label className="add-collection-layered-text085 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection-layered-textinput01 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection-layered-field1">
                <label className="add-collection-layered-text086 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection-layered-textinput02 focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection-layered-layer-items-treats">
                <div className="add-collection-layered-tabs-row2">
                  <div className="add-collection-layered-container37">
                    <span className="add-collection-layered-text087">
                      &lt; go back
                    </span>
                    <span className="add-collection-layered-text088">
                      Layer Assets 
                    </span>
                    <span className="add-collection-layered-text089">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection-layered-filter-buttons1">
                    <div className="add-collection-layered-timeframe">
                      <button className="add-collection-layered-button11">
                        <span className="add-collection-layered-text090">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-button12">
                        <span className="add-collection-layered-text093">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-button13">
                        <span className="add-collection-layered-text096">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection-layered-button14">
                        <span className="add-collection-layered-text099">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection-layered-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection-layered-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon46"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection-layered-text102">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection-layered-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection-layered-icon48"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection-layered-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection-layered-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-dropdown-toggle1"
                          >
                            <span className="add-collection-layered-text103">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-dropdown-toggle2"
                          >
                            <span className="add-collection-layered-text104">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-dropdown-toggle3"
                          >
                            <span className="add-collection-layered-text105">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection-layered-dropdown-toggle4"
                          >
                            <span className="add-collection-layered-text106">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection-layered-button15"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon50"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection-layered-text107">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-layered-button16"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-layered-icon52 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection-layered-text110">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-layered-tabs-row3">
                  <div className="add-collection-layered-container38">
                    <div className="add-collection-layered-container39">
                      <span className="add-collection-layered-text113 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection-layered-container40">
                      <span className="add-collection-layered-text114 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection-layered-container41">
                    <span className="add-collection-layered-text115 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection-layered-container42">
                  <div className="add-collection-layered-row-image">
                    <div className="add-collection-layered-container43">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox09"
                      />
                      <div className="add-collection-layered-container44"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput03 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-container45">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput04 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button17"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon54 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text116">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image1">
                    <div className="add-collection-layered-container46">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox10"
                      />
                      <div className="add-collection-layered-container47"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput05 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-container48">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button18"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon56 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text119">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image2">
                    <div className="add-collection-layered-container49">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox11"
                      />
                      <div className="add-collection-layered-container50"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput07 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection-layered-container51">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button19"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon58 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text122">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image3">
                    <div className="add-collection-layered-container52">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox12"
                      />
                      <div className="add-collection-layered-container53"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-container54">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button20"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon60 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text125">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image4">
                    <div className="add-collection-layered-container55">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox13"
                      />
                      <div className="add-collection-layered-container56"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection-layered-container57">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput12 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button21"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon62 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text128">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image5">
                    <div className="add-collection-layered-container58">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox14"
                      />
                      <div className="add-collection-layered-container59"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-container60">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput14 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button22"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon64 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text131">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image6">
                    <div className="add-collection-layered-container61">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox15"
                      />
                      <div className="add-collection-layered-container62"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput15 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-container63">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput16 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button23"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon66 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text134">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection-layered-row-image7">
                    <div className="add-collection-layered-container64">
                      <input
                        type="checkbox"
                        className="add-collection-layered-checkbox16"
                      />
                      <div className="add-collection-layered-container65"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection-layered-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection-layered-container66">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection-layered-textinput18 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection-layered-button24"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection-layered-icon68 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection-layered-text137">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection-layered-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-layered-icon70 fill-color-white"
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

export default AddCollection2Layered
