import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection2.css'

const AddCollection2 = (props) => {
  return (
    <div className="add-collection2-container">
      <Helmet>
        <title>
          Add-Collection2 - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2 - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name6">
        <div className="add-collection2-header-creator">
          <div className="add-collection2-container01">
            <div className="add-collection2-container02">
              <div className="add-collection2-container03">
                <h1 className="add-collection2-text">Create New Collection</h1>
              </div>
            </div>
          </div>
          <div className="add-collection2-mask-overlay"></div>
        </div>
        <div className="add-collection2-tabs-row">
          <div className="add-collection2-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection2-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection2-container05">
              <button type="button" className="add-collection2-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-icon fill-color-white"
                >
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
                <span className="add-collection2-text001">
                  <span>Define Collection</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection2-button01">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-icon02 fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection2-text004">
                  <span>Organise</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection2-button02">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-icon04 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection2-text007">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection2-button03">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection2-icon06 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection2-text010">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection2-container-form">
          <div className="add-collection2-under-header">
            <div className="add-collection2-card">
              <form className="add-collection2-side-layers">
                <div className="add-collection2-field-image">
                  <label className="add-collection2-text013 padding-4px-left">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Add Layers - Attributes:</span>
                  </label>
                  <div className="add-collection2-container06">
                    <input
                      type="text"
                      placeholder="Layer Name..."
                      className="add-collection2-textinput Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-collection2-button04 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon08"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-container-layer">
                    <div className="add-collection2-container07">
                      <div className="add-collection2-container08">
                        <span className="add-collection2-text016 Content16SemiBold">
                          <span>Head</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text019">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon10 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection2-button05 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon12 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-container-layer1">
                    <div className="add-collection2-container09">
                      <div className="add-collection2-container10">
                        <span className="add-collection2-text022 Content16SemiBold">
                          <span>Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text025">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon14 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection2-button06 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon16 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection2-container-layer2">
                    <div className="add-collection2-container11">
                      <div className="add-collection2-container12">
                        <span className="add-collection2-text028 Content16SemiBold">
                          <span>Mouth</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text031">
                          <span>2 Files - 72% Rarity</span>
                          <br></br>
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon18 fill-color-gray"
                      >
                        <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                      </svg>
                    </div>
                    <button className="add-collection2-button07 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon20 fill-color-white"
                      >
                        <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                      </svg>
                    </button>
                  </div>
                  <label className="add-collection2-text034 padding-4px-left">
                    * Organise layers by dragging them. The order of the layers
                    above is reversed when it generates your images. Ex: First
                    layer at the top will be the Background of your avatar.
                  </label>
                </div>
              </form>
              <div className="add-collection2-container-images">
                <div className="add-collection2-tabs-row1">
                  <div className="add-collection2-container13">
                    <span className="add-collection2-text035">
                      Add Images - Treats:
                    </span>
                  </div>
                  <div className="add-collection2-filter-buttons">
                    <div className="add-collection2-container14">
                      <button
                        type="button"
                        className="add-collection2-button08"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-icon22 fill-color-white"
                        >
                          <path d="M362 576l-148 192h596l-192-256-148 192zM896 810q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596q34 0 60 26t26 60v596z"></path>
                        </svg>
                        <span className="add-collection2-text036">
                          <span>Add Files</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-collection2-button09"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection2-icon24 fill-color-gray"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-collection2-text039">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button type="button" className="add-collection2-button10">
                      <span className="add-collection2-text042">
                        <span>Continue</span>
                        <br></br>
                      </span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon26 fill-color-white"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="add-collection2-container15">
                  <div className="add-collection2-item1">
                    <div className="add-collection2-image-header">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox"
                      />
                    </div>
                    <div className="add-collection2-text-box">
                      <div className="add-collection2-container16">
                        <div className="add-collection2-floor">
                          <span className="add-collection2-text045 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text046">Black</span>
                        </div>
                        <div className="add-collection2-volume24">
                          <span className="add-collection2-text047 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container17">
                            <span className="add-collection2-text048">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item11">
                    <div className="add-collection2-image-header1">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox01"
                      />
                    </div>
                    <div className="add-collection2-text-box1">
                      <div className="add-collection2-container18">
                        <div className="add-collection2-floor1">
                          <span className="add-collection2-text049 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text050">Black</span>
                        </div>
                        <div className="add-collection2-volume241">
                          <span className="add-collection2-text051 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container19">
                            <span className="add-collection2-text052">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item12">
                    <div className="add-collection2-image-header2">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox02"
                      />
                    </div>
                    <div className="add-collection2-text-box2">
                      <div className="add-collection2-container20">
                        <div className="add-collection2-floor2">
                          <span className="add-collection2-text053 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text054">Black</span>
                        </div>
                        <div className="add-collection2-volume242">
                          <span className="add-collection2-text055 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container21">
                            <span className="add-collection2-text056">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item13">
                    <div className="add-collection2-image-header3">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox03"
                      />
                    </div>
                    <div className="add-collection2-text-box3">
                      <div className="add-collection2-container22">
                        <div className="add-collection2-floor3">
                          <span className="add-collection2-text057 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text058">Black</span>
                        </div>
                        <div className="add-collection2-volume243">
                          <span className="add-collection2-text059 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container23">
                            <span className="add-collection2-text060">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item14">
                    <div className="add-collection2-image-header4">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox04"
                      />
                    </div>
                    <div className="add-collection2-text-box4">
                      <div className="add-collection2-container24">
                        <div className="add-collection2-floor4">
                          <span className="add-collection2-text061 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text062">Black</span>
                        </div>
                        <div className="add-collection2-volume244">
                          <span className="add-collection2-text063 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container25">
                            <span className="add-collection2-text064">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item15">
                    <div className="add-collection2-image-header5">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox05"
                      />
                    </div>
                    <div className="add-collection2-text-box5">
                      <div className="add-collection2-container26">
                        <div className="add-collection2-floor5">
                          <span className="add-collection2-text065 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text066">Black</span>
                        </div>
                        <div className="add-collection2-volume245">
                          <span className="add-collection2-text067 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container27">
                            <span className="add-collection2-text068">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item16">
                    <div className="add-collection2-image-header6">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox06"
                      />
                    </div>
                    <div className="add-collection2-text-box6">
                      <div className="add-collection2-container28">
                        <div className="add-collection2-floor6">
                          <span className="add-collection2-text069 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text070">Black</span>
                        </div>
                        <div className="add-collection2-volume246">
                          <span className="add-collection2-text071 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container29">
                            <span className="add-collection2-text072">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item17">
                    <div className="add-collection2-image-header7">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox07"
                      />
                    </div>
                    <div className="add-collection2-text-box7">
                      <div className="add-collection2-container30">
                        <div className="add-collection2-floor7">
                          <span className="add-collection2-text073 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text074">Black</span>
                        </div>
                        <div className="add-collection2-volume247">
                          <span className="add-collection2-text075 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container31">
                            <span className="add-collection2-text076">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item18">
                    <div className="add-collection2-image-header8">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox08"
                      />
                    </div>
                    <div className="add-collection2-text-box8">
                      <div className="add-collection2-container32">
                        <div className="add-collection2-floor8">
                          <span className="add-collection2-text077 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text078">Black</span>
                        </div>
                        <div className="add-collection2-volume248">
                          <span className="add-collection2-text079 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container33">
                            <span className="add-collection2-text080">38%</span>
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
        <div className="add-collection2-overlay-rarity">
          <div className="add-collection2-container34">
            <div className="add-collection2-field">
              <label className="add-collection2-text081 padding-4px-left Content">
                Name Layer - Attribute:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="Eyes..."
                className="add-collection2-textinput01 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-field1">
              <label className="add-collection2-text082 padding-4px-left Content">
                Layer Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="78%"
                className="add-collection2-textinput02 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-tabs-row2">
              <div className="add-collection2-container35">
                <Link to="/creator-studio" className="add-collection2-navlink1">
                  &lt; go back
                </Link>
                <span className="add-collection2-text083">
                  Layer content - Treats:
                </span>
              </div>
              <div className="add-collection2-filter-buttons1">
                <div className="add-collection2-timeframe">
                  <button className="add-collection2-button11">
                    <span className="add-collection2-text084">
                      <span>1h</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-collection2-button12">
                    <span className="add-collection2-text087">
                      <span>6h</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-collection2-button13">
                    <span className="add-collection2-text090">
                      <span>24h</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-collection2-button14">
                    <span className="add-collection2-text093">
                      <span>7d</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="add-collection2-sort-by list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="add-collection2-dropdown-toggle"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection2-icon28"
                    >
                      <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                    </svg>
                    <span className="add-collection2-text096">
                      Sort by Name
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="add-collection2-dropdown-arrow"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection2-icon30"
                      >
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="add-collection2-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="add-collection2-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-dropdown-toggle1"
                      >
                        <span className="add-collection2-text097">Name</span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-dropdown-toggle2"
                      >
                        <span className="add-collection2-text098">
                          Most Rare
                        </span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-dropdown-toggle3"
                      >
                        <span className="add-collection2-text099">
                          Newest Added
                        </span>
                      </div>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="add-collection2-dropdown-toggle4"
                      >
                        <span className="add-collection2-text100">Oldest</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" className="add-collection2-button15">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="add-collection2-icon32"
                  >
                    <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                  </svg>
                  <span className="add-collection2-text101">
                    <span>Select All</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="add-collection2-row-image">
              <div className="add-collection2-container36">
                <input type="checkbox" className="add-collection2-checkbox09" />
                <div className="add-collection2-container37"></div>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Treat Name...Blue..."
                  className="add-collection2-textinput03 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <label className="add-collection2-text104 padding-4px-left Content">
                {' '}
                Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="47%..."
                className="add-collection2-textinput04 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-row-image1">
              <div className="add-collection2-container38">
                <input type="checkbox" className="add-collection2-checkbox10" />
                <div className="add-collection2-container39"></div>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Treat Name...Blue..."
                  className="add-collection2-textinput05 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <label className="add-collection2-text105 padding-4px-left Content">
                {' '}
                Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="47%..."
                className="add-collection2-textinput06 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-row-image2">
              <div className="add-collection2-container40">
                <input type="checkbox" className="add-collection2-checkbox11" />
                <div className="add-collection2-container41"></div>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Treat Name...Blue..."
                  className="add-collection2-textinput07 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <label className="add-collection2-text106 padding-4px-left Content">
                {' '}
                Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="47%..."
                className="add-collection2-textinput08 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-row-image3">
              <div className="add-collection2-container42">
                <input type="checkbox" className="add-collection2-checkbox12" />
                <div className="add-collection2-container43"></div>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Treat Name...Blue..."
                  className="add-collection2-textinput09 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <label className="add-collection2-text107 padding-4px-left Content">
                {' '}
                Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="47%..."
                className="add-collection2-textinput10 focus-reset-forms Content16SemiBold input"
              />
            </div>
            <div className="add-collection2-row-image4">
              <div className="add-collection2-container44">
                <input type="checkbox" className="add-collection2-checkbox13" />
                <div className="add-collection2-container45"></div>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="Treat Name...Blue..."
                  className="add-collection2-textinput11 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <label className="add-collection2-text108 padding-4px-left Content">
                {' '}
                Rarity:
              </label>
              <input
                type="text"
                enctype="The Funky Apes Crew..."
                placeholder="47%..."
                className="add-collection2-textinput12 focus-reset-forms Content16SemiBold input"
              />
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection2
