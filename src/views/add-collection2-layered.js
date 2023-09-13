import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import ContainerLayer from '../components/container-layer'
import ContainerLayerModal from '../components/container-layer-modal'
import './add-collection2-layered.css'

const AddCollection2Layered = (props) => {
  return (
    <div className="add-collection2layered-container">
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
        <div className="add-collection2layered-header-creator">
          <div className="add-collection2layered-container01">
            <div className="add-collection2layered-container02">
              <div className="add-collection2layered-container03">
                <h1 className="add-collection2layered-text">
                  Add Batch - Generate Items
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection2layered-mask-overlay"></div>
        </div>
        <div className="add-collection2layered-tabs-row">
          <div className="add-collection2layered-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection2layered-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection2layered-container05">
              <button type="button" className="add-collection2layered-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2layered-icon fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection2layered-text001">
                  <span>Organise</span>
                  <br></br>
                </span>
              </button>
              <Link
                to="/add-collection2-layered-preview"
                className="add-collection2layered-navlink1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2layered-icon02 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection2layered-text004">
                  <span>Preview</span>
                  <br></br>
                </span>
              </Link>
              <button type="button" className="add-collection2layered-button01">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2layered-icon04 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection2layered-text007">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection2layered-container-form">
          <div className="add-collection2layered-under-header">
            <div className="add-collection2layered-card">
              <form className="add-collection2layered-side-layers">
                <div className="add-collection2layered-field-image">
                  <label className="add-collection2layered-text010 padding-4px-left">
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
                    <span className="add-collection2layered-text013">
                      ● Attributes:
                    </span>
                  </label>
                  <div className="add-collection2layered-container06">
                    <input
                      type="text"
                      placeholder="Layer Name..."
                      className="add-collection2layered-textinput Content16SemiBold focus-reset-forms input"
                    />
                    <button
                      type="button"
                      className="add-collection2layered-button02 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon06"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2layered-container-layer">
                    <div className="add-collection2layered-container07">
                      <div className="add-collection2layered-container08">
                        <span className="add-collection2layered-text014 Content16SemiBold">
                          <span>Head</span>
                          <br></br>
                        </span>
                        <span className="add-collection2layered-text017">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon08 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="add-collection2layered-button03 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon10 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <ContainerLayer></ContainerLayer>
                  <ContainerLayerModal></ContainerLayerModal>
                  <div className="add-collection2layered-container-layer1">
                    <div className="add-collection2layered-container09">
                      <div className="add-collection2layered-container10">
                        <span className="add-collection2layered-text020 Content16SemiBold">
                          <span>Mouth</span>
                          <br></br>
                        </span>
                        <span className="add-collection2layered-text023">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon12 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="add-collection2layered-button04 button Content16SemiBold"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon14 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2layered-container11">
                    <label className="add-collection2layered-text026 padding-4px-left">
                      <span>Organise layers by dragging them.</span>
                      <br></br>
                    </label>
                    <div className="add-collection2layered-tooltip">
                      <svg
                        id="tooltip1"
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon16 tooltipclass"
                      >
                        <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                      </svg>
                      <div className="add-collection2layered-div">
                        <Script
                          html={`<script>
      // With the above scripts loaded, you can call \`tippy()\` with a CSS
      // selector and a \`content\` prop:
      tippy('#tooltip1', { theme: 'lemon',
        content: 'The order of the layers above is reversed when it generates your images. Ex: First layer at the top will be the Background of your avatar.',
      });

      
    </script>

`}
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="add-collection2layered-container-images">
                <div className="add-collection2layered-tabs-row1">
                  <div className="add-collection2layered-container12">
                    <span className="add-collection2layered-text029">
                      <span className="add-collection2layered-text030">
                        Current Layer:
                      </span>
                      <span> Eyes</span>
                    </span>
                  </div>
                  <div className="add-collection2layered-filter-buttons">
                    <div className="add-collection2layered-container13">
                      <button
                        type="button"
                        className="add-collection2layered-button05"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon18 fill-color-white"
                        >
                          <path d="M362 576l-148 192h596l-192-256-148 192zM896 810q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596q34 0 60 26t26 60v596z"></path>
                        </svg>
                        <span className="add-collection2layered-text032">
                          <span>Add Files</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection2layered-button06"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon20 fill-color-gray"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text035">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <Link
                      to="/add-collection2-layered-preview"
                      className="add-collection2layered-navlink2"
                    >
                      <span className="add-collection2layered-text038">
                        <span>Continue</span>
                        <br></br>
                      </span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon22 fill-color-white"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="add-collection2layered-container14">
                  <div className="item-layer add-collection2layered-item1">
                    <div className="add-collection2layered-image-header">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox"
                      />
                      <div className="add-collection2layered-replace-image">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon24 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box">
                      <div className="add-collection2layered-container15">
                        <div className="add-collection2layered-floor">
                          <span className="add-collection2layered-text041 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text042">
                            Shy
                          </span>
                        </div>
                        <div className="add-collection2layered-volume24">
                          <span className="add-collection2layered-text043 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container16">
                            <span className="add-collection2layered-text044">
                              38%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item11">
                    <div className="add-collection2layered-image-header1">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox01"
                      />
                      <div className="add-collection2layered-replace-image1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon26 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box1">
                      <div className="add-collection2layered-container17">
                        <div className="add-collection2layered-floor1">
                          <span className="add-collection2layered-text045 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text046">
                            Blue
                          </span>
                        </div>
                        <div className="add-collection2layered-volume241">
                          <span className="add-collection2layered-text047 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container18">
                            <span className="add-collection2layered-text048">
                              21%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer">
                    <div className="add-collection2layered-image-header2">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox02"
                      />
                      <div className="add-collection2layered-replace-image2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon28 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box2">
                      <div className="add-collection2layered-container19">
                        <div className="add-collection2layered-floor2">
                          <span className="add-collection2layered-text049 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text050">
                            Unequal
                          </span>
                        </div>
                        <div className="add-collection2layered-volume242">
                          <span className="add-collection2layered-text051 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container20">
                            <span className="add-collection2layered-text052">
                              8%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item13">
                    <div className="add-collection2layered-image-header3">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox03"
                      />
                      <div className="add-collection2layered-replace-image3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon30 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box3">
                      <div className="add-collection2layered-container21">
                        <div className="add-collection2layered-floor3">
                          <span className="add-collection2layered-text053 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text054">
                            Glasses
                          </span>
                        </div>
                        <div className="add-collection2layered-volume243">
                          <span className="add-collection2layered-text055 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container22">
                            <span className="add-collection2layered-text056">
                              2%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item14">
                    <div className="add-collection2layered-image-header4">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox04"
                      />
                      <div className="add-collection2layered-replace-image4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon32 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box4">
                      <div className="add-collection2layered-container23">
                        <div className="add-collection2layered-floor4">
                          <span className="add-collection2layered-text057 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text058">
                            Pirate
                          </span>
                        </div>
                        <div className="add-collection2layered-volume244">
                          <span className="add-collection2layered-text059 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container24">
                            <span className="add-collection2layered-text060">
                              39%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item15">
                    <div className="add-collection2layered-image-header5">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox05"
                      />
                      <div className="add-collection2layered-replace-image5">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon34 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box5">
                      <div className="add-collection2layered-container25">
                        <div className="add-collection2layered-floor5">
                          <span className="add-collection2layered-text061 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text062">
                            One Eye
                          </span>
                        </div>
                        <div className="add-collection2layered-volume245">
                          <span className="add-collection2layered-text063 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container26">
                            <span className="add-collection2layered-text064">
                              4%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item16">
                    <div className="add-collection2layered-image-header6">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox06"
                      />
                      <div className="add-collection2layered-replace-image6">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon36 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box6">
                      <div className="add-collection2layered-container27">
                        <div className="add-collection2layered-floor6">
                          <span className="add-collection2layered-text065 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text066">
                            Regular
                          </span>
                        </div>
                        <div className="add-collection2layered-volume246">
                          <span className="add-collection2layered-text067 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container28">
                            <span className="add-collection2layered-text068">
                              55%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item17">
                    <div className="add-collection2layered-image-header7">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox07"
                      />
                      <div className="add-collection2layered-replace-image7">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon38 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box7">
                      <div className="add-collection2layered-container29">
                        <div className="add-collection2layered-floor7">
                          <span className="add-collection2layered-text069 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text070">
                            Green
                          </span>
                        </div>
                        <div className="add-collection2layered-volume247">
                          <span className="add-collection2layered-text071 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container30">
                            <span className="add-collection2layered-text072">
                              43%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer add-collection2layered-item18">
                    <div className="add-collection2layered-image-header8">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox08"
                      />
                      <div className="add-collection2layered-replace-image8">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon40 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="add-collection2layered-text-box8">
                      <div className="add-collection2layered-container31">
                        <div className="add-collection2layered-floor8">
                          <span className="add-collection2layered-text073 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2layered-text074">
                            Two Way
                          </span>
                        </div>
                        <div className="add-collection2layered-volume248">
                          <span className="add-collection2layered-text075 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2layered-container32">
                            <span className="add-collection2layered-text076">
                              18%
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
        <div className="add-collection2layered-overlay-rarity">
          <div id="appOverlay" className="add-collection2layered-container33">
            <div className="add-collection2layered-container34">
              <label className="add-collection2layered-text077">Eyes</label>
            </div>
            <div className="add-collection2layered-container35">
              <div className="add-collection2layered-code-embed">
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
              <div className="add-collection2layered-field">
                <label className="add-collection2layered-text078 padding-4px-left">
                  Layer Name:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Eyes..."
                  className="add-collection2layered-textinput01 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="add-collection2layered-field1">
                <label className="add-collection2layered-text079 Content padding-4px-left">
                  Layer Rarity within collection:
                </label>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="78%"
                  className="add-collection2layered-textinput02 focus-reset-forms input Content16SemiBold"
                />
              </div>
              <div className="add-collection2layered-layer-items-treats">
                <div className="add-collection2layered-tabs-row2">
                  <div className="add-collection2layered-container36">
                    <span className="add-collection2layered-text080">
                      &lt; go back
                    </span>
                    <span className="add-collection2layered-text081">
                      Layer Assets 
                    </span>
                    <span className="add-collection2layered-text082">
                      Rules
                    </span>
                  </div>
                  <div className="add-collection2layered-filter-buttons1">
                    <div className="add-collection2layered-timeframe">
                      <button className="add-collection2layered-button07">
                        <span className="add-collection2layered-text083">
                          <span>1h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2layered-button08">
                        <span className="add-collection2layered-text086">
                          <span>6h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2layered-button09">
                        <span className="add-collection2layered-text089">
                          <span>24h</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="add-collection2layered-button10">
                        <span className="add-collection2layered-text092">
                          <span>7d</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="add-collection2layered-sort-by list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2layered-dropdown-toggle"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon42"
                        >
                          <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className="add-collection2layered-text095">
                          Sort by Name
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="add-collection2layered-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection2layered-icon44"
                          >
                            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="add-collection2layered-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="add-collection2layered-dropdown list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2layered-dropdown-toggle1"
                          >
                            <span className="add-collection2layered-text096">
                              Name
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2layered-dropdown-toggle2"
                          >
                            <span className="add-collection2layered-text097">
                              Most Rare
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2layered-dropdown-toggle3"
                          >
                            <span className="add-collection2layered-text098">
                              Newest Added
                            </span>
                          </div>
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="add-collection2layered-dropdown-toggle4"
                          >
                            <span className="add-collection2layered-text099">
                              Oldest
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="add-collection2layered-button11"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon46"
                      >
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                      </svg>
                      <span className="add-collection2layered-text100">
                        <span>Select All</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection2layered-button12"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2layered-icon48 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                      <span className="add-collection2layered-text103">
                        <span>Delete</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection2layered-tabs-row3">
                  <div className="add-collection2layered-container37">
                    <div className="add-collection2layered-container38">
                      <span className="add-collection2layered-text106 Labels13CAPS">
                        Open
                      </span>
                    </div>
                    <div className="add-collection2layered-container39">
                      <span className="add-collection2layered-text107 Labels13CAPS">
                        name
                      </span>
                    </div>
                  </div>
                  <div className="add-collection2layered-container40">
                    <span className="add-collection2layered-text108 Labels13CAPS">
                      Rarity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="add-collection2layered-container41">
                  <div className="add-collection2layered-row-image">
                    <div className="add-collection2layered-container42">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox09"
                      />
                      <div className="add-collection2layered-container43"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput03 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection2layered-container44">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput04 Content16SemiBold focus-reset-forms input"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button13"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon50 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text109">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image1">
                    <div className="add-collection2layered-container45">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox10"
                      />
                      <div className="add-collection2layered-container46"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput05 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection2layered-container47">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button14"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon52 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text112">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image2">
                    <div className="add-collection2layered-container48">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox11"
                      />
                      <div className="add-collection2layered-container49"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput07 Content16SemiBold focus-reset-forms input"
                      />
                    </div>
                    <div className="add-collection2layered-container50">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button15"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon54 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text115">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image3">
                    <div className="add-collection2layered-container51">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox12"
                      />
                      <div className="add-collection2layered-container52"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2layered-container53">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput10 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button16"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon56 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text118">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image4">
                    <div className="add-collection2layered-container54">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox13"
                      />
                      <div className="add-collection2layered-container55"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput11 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                    <div className="add-collection2layered-container56">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput12 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button17"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon58 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text121">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image5">
                    <div className="add-collection2layered-container57">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox14"
                      />
                      <div className="add-collection2layered-container58"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput13 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2layered-container59">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput14 focus-reset-forms input Content16SemiBold"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button18"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon60 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text124">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image6">
                    <div className="add-collection2layered-container60">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox15"
                      />
                      <div className="add-collection2layered-container61"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput15 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2layered-container62">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput16 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button19"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon62 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text127">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="add-collection2layered-row-image7">
                    <div className="add-collection2layered-container63">
                      <input
                        type="checkbox"
                        className="add-collection2layered-checkbox16"
                      />
                      <div className="add-collection2layered-container64"></div>
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="Blue..."
                        className="add-collection2layered-textinput17 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                    <div className="add-collection2layered-container65">
                      <input
                        type="text"
                        enctype="The Funky Apes Crew..."
                        placeholder="47%..."
                        className="add-collection2layered-textinput18 focus-reset-forms Content16SemiBold input"
                      />
                      <button
                        type="button"
                        className="add-collection2layered-button20"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2layered-icon64 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2layered-text130">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-collection2layered-close-window-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2layered-icon66 fill-color-white"
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
