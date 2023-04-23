import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection2-non-layered.css'

const AddCollection2NonLayered = (props) => {
  return (
    <div className="add-collection-non-layered-container">
      <Helmet>
        <title>
          Add-Collection2-Non-Layered - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection2-Non-Layered - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name19">
        <div className="add-collection-non-layered-header-creator">
          <div className="add-collection-non-layered-container01">
            <div className="add-collection-non-layered-container02">
              <div className="add-collection-non-layered-container03">
                <h1 className="add-collection-non-layered-text">
                  Create New Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-non-layered-mask-overlay"></div>
        </div>
        <div className="add-collection-non-layered-tabs-row">
          <div className="add-collection-non-layered-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection-non-layered-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection-non-layered-container05">
              <button
                type="button"
                className="add-collection-non-layered-button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-non-layered-icon fill-color-white"
                >
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
                <span className="add-collection-non-layered-text01">
                  <span>Define Collection</span>
                  <br></br>
                </span>
              </button>
              <Link
                to="/add-collection2-layered"
                className="add-collection-non-layered-navlink1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-non-layered-icon02 fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection-non-layered-text04">
                  <span>Organise</span>
                  <br></br>
                </span>
              </Link>
              <button
                type="button"
                className="add-collection-non-layered-button1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-non-layered-icon04 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection-non-layered-text07">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button
                type="button"
                className="add-collection-non-layered-button2"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection-non-layered-icon06 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection-non-layered-text10">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection-non-layered-container-form">
          <div className="add-collection-non-layered-under-header">
            <div className="add-collection-non-layered-card">
              <form className="add-collection-non-layered-form">
                <div className="add-collection-non-layered-field-image">
                  <label className="add-collection-non-layered-text13 padding-4px-left">
                    Upload all your Ready Made images: (All must have the same
                    size)
                  </label>
                  <div className="add-collection-non-layered-container06">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="add-collection-non-layered-textinput focus-reset-forms input Content16SemiBold"
                    />
                    <button className="add-collection-non-layered-button3 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-non-layered-icon08"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="add-collection-non-layered-item-image-block">
                  <div className="add-collection-non-layered-container-image">
                    <div className="add-collection-non-layered-container-image1">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-non-layered-icon10"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-collection-non-layered-container07">
                      <label className="add-collection-non-layered-text14 padding-4px-left">
                        Image #1
                      </label>
                      <label className="add-collection-non-layered-text15 padding-4px-left">
                        2000 x 2000 px
                      </label>
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row">
                    <div className="add-collection-non-layered-attribute-value-row">
                      <div className="add-collection-non-layered-label-atribute">
                        <label className="add-collection-non-layered-text16 padding-4px-left">
                          Attribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput01 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row1">
                    <div className="add-collection-non-layered-attribute-value-row1">
                      <div className="add-collection-non-layered-label-atribute1">
                        <label className="add-collection-non-layered-text17 padding-4px-left">
                          Attribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput02 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row2">
                    <div className="add-collection-non-layered-attribute-value-row2">
                      <div className="add-collection-non-layered-label-atribute2">
                        <label className="add-collection-non-layered-text18 padding-4px-left">
                          Attribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput03 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-collection-non-layered-item-image-block1">
                  <div className="add-collection-non-layered-container-image2">
                    <div className="add-collection-non-layered-container-image3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-non-layered-icon12"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-collection-non-layered-container08">
                      <label className="add-collection-non-layered-text19 padding-4px-left">
                        Image #2
                      </label>
                      <label className="add-collection-non-layered-text20 padding-4px-left">
                        2000 x 2000 px
                      </label>
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row3">
                    <div className="add-collection-non-layered-attribute-value-row3">
                      <div className="add-collection-non-layered-label-atribute3">
                        <label className="add-collection-non-layered-text21 padding-4px-left">
                          Atribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput04 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row4">
                    <div className="add-collection-non-layered-attribute-value-row4">
                      <div className="add-collection-non-layered-label-atribute4">
                        <label className="add-collection-non-layered-text22 padding-4px-left">
                          Atribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput05 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row5">
                    <div className="add-collection-non-layered-attribute-value-row5">
                      <div className="add-collection-non-layered-label-atribute5">
                        <label className="add-collection-non-layered-text23 padding-4px-left">
                          Atribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput06 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-collection-non-layered-item-image-block2">
                  <div className="add-collection-non-layered-container-image4">
                    <div className="add-collection-non-layered-container-image5">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-non-layered-icon14"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-collection-non-layered-container09">
                      <label className="add-collection-non-layered-text24 padding-4px-left">
                        Image #3
                      </label>
                      <label className="add-collection-non-layered-text25 padding-4px-left">
                        2000 x 2000 px
                      </label>
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row6">
                    <div className="add-collection-non-layered-attribute-value-row6">
                      <div className="add-collection-non-layered-label-atribute6">
                        <label className="add-collection-non-layered-text26 padding-4px-left">
                          Atribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput07 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row7">
                    <div className="add-collection-non-layered-attribute-value-row7">
                      <div className="add-collection-non-layered-label-atribute7">
                        <label className="add-collection-non-layered-text27 padding-4px-left">
                          Atribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-collection-non-layered-attribute-row8">
                    <div className="add-collection-non-layered-attribute-value-row8">
                      <div className="add-collection-non-layered-label-atribute8">
                        <label className="add-collection-non-layered-text28 padding-4px-left">
                          Atribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-collection-non-layered-textinput09 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-collection-non-layered-bottom-buttons">
                  <button className="add-collection-non-layered-button4 button">
                    <span className="add-collection-non-layered-text29">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <Link
                    to="/add-collection2-layered"
                    className="add-collection-non-layered-navlink2 button"
                  >
                    <span className="add-collection-non-layered-text32">
                      <span>Preview Collection</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-non-layered-icon16"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </Link>
                </div>
              </form>
              <div className="add-collection-non-layered-info-box">
                <div className="add-collection-non-layered-container10">
                  <h1 className="add-collection-non-layered-text35 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-collection-non-layered-text38">
                    <span>
                      If you already have images created outside of Foton with
                      other software or service, you can import them all here at
                      once and complete the values for their Atributes defined
                      at the previous step. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>These are also called Treats for your items.</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection2NonLayered
