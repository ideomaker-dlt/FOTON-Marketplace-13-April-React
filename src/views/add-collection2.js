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
                <span className="add-collection2-text01">
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
                <span className="add-collection2-text04">
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
                <span className="add-collection2-text07">
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
                <span className="add-collection2-text10">
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
                  <label className="add-collection2-text13 padding-4px-left">
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
                        <span className="add-collection2-text16 Content16SemiBold">
                          <span>Head</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text19">
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
                        <span className="add-collection2-text22 Content16SemiBold">
                          <span>Eyes</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text25">
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
                        <span className="add-collection2-text28 Content16SemiBold">
                          <span>Mouth</span>
                          <br></br>
                        </span>
                        <span className="add-collection2-text31">
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
                  <label className="add-collection2-text34 padding-4px-left">
                    * Organise layers by dragging them. The order of the layers
                    above is reversed when it generates your images. Ex: First
                    layer at the top will be the Background of your avatar.
                  </label>
                </div>
              </form>
              <div className="add-collection2-container-images">
                <div className="add-collection2-tabs-row1">
                  <div className="add-collection2-container13">
                    <span className="add-collection2-text35">
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
                        <span className="add-collection2-text36">
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
                        <span className="add-collection2-text39">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <button type="button" className="add-collection2-button10">
                      <span className="add-collection2-text42">
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
                          <span className="add-collection2-text45 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text46">Black</span>
                        </div>
                        <div className="add-collection2-volume24">
                          <span className="add-collection2-text47 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container17">
                            <span className="add-collection2-text48">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item11">
                    <div className="add-collection2-image-header1">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox1"
                      />
                    </div>
                    <div className="add-collection2-text-box1">
                      <div className="add-collection2-container18">
                        <div className="add-collection2-floor1">
                          <span className="add-collection2-text49 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text50">Black</span>
                        </div>
                        <div className="add-collection2-volume241">
                          <span className="add-collection2-text51 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container19">
                            <span className="add-collection2-text52">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item12">
                    <div className="add-collection2-image-header2">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox2"
                      />
                    </div>
                    <div className="add-collection2-text-box2">
                      <div className="add-collection2-container20">
                        <div className="add-collection2-floor2">
                          <span className="add-collection2-text53 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text54">Black</span>
                        </div>
                        <div className="add-collection2-volume242">
                          <span className="add-collection2-text55 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container21">
                            <span className="add-collection2-text56">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item13">
                    <div className="add-collection2-image-header3">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox3"
                      />
                    </div>
                    <div className="add-collection2-text-box3">
                      <div className="add-collection2-container22">
                        <div className="add-collection2-floor3">
                          <span className="add-collection2-text57 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text58">Black</span>
                        </div>
                        <div className="add-collection2-volume243">
                          <span className="add-collection2-text59 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container23">
                            <span className="add-collection2-text60">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item14">
                    <div className="add-collection2-image-header4">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox4"
                      />
                    </div>
                    <div className="add-collection2-text-box4">
                      <div className="add-collection2-container24">
                        <div className="add-collection2-floor4">
                          <span className="add-collection2-text61 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text62">Black</span>
                        </div>
                        <div className="add-collection2-volume244">
                          <span className="add-collection2-text63 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container25">
                            <span className="add-collection2-text64">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item15">
                    <div className="add-collection2-image-header5">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox5"
                      />
                    </div>
                    <div className="add-collection2-text-box5">
                      <div className="add-collection2-container26">
                        <div className="add-collection2-floor5">
                          <span className="add-collection2-text65 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text66">Black</span>
                        </div>
                        <div className="add-collection2-volume245">
                          <span className="add-collection2-text67 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container27">
                            <span className="add-collection2-text68">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item16">
                    <div className="add-collection2-image-header6">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox6"
                      />
                    </div>
                    <div className="add-collection2-text-box6">
                      <div className="add-collection2-container28">
                        <div className="add-collection2-floor6">
                          <span className="add-collection2-text69 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text70">Black</span>
                        </div>
                        <div className="add-collection2-volume246">
                          <span className="add-collection2-text71 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container29">
                            <span className="add-collection2-text72">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item17">
                    <div className="add-collection2-image-header7">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox7"
                      />
                    </div>
                    <div className="add-collection2-text-box7">
                      <div className="add-collection2-container30">
                        <div className="add-collection2-floor7">
                          <span className="add-collection2-text73 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text74">Black</span>
                        </div>
                        <div className="add-collection2-volume247">
                          <span className="add-collection2-text75 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container31">
                            <span className="add-collection2-text76">38%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-collection2-item18">
                    <div className="add-collection2-image-header8">
                      <input
                        type="checkbox"
                        className="add-collection2-checkbox8"
                      />
                    </div>
                    <div className="add-collection2-text-box8">
                      <div className="add-collection2-container32">
                        <div className="add-collection2-floor8">
                          <span className="add-collection2-text77 SmallestLabels">
                            Name
                          </span>
                          <span className="add-collection2-text78">Black</span>
                        </div>
                        <div className="add-collection2-volume248">
                          <span className="add-collection2-text79 SmallestLabels">
                            rarity
                          </span>
                          <div className="add-collection2-container33">
                            <span className="add-collection2-text80">38%</span>
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
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection2
