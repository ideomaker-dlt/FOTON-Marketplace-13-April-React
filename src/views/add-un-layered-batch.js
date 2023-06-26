import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-un-layered-batch.css'

const AddUnLayeredBatch = (props) => {
  return (
    <div className="add-un-layered-batch-container">
      <Helmet>
        <title>
          Add-Un-Layered-Batch - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Un-Layered-Batch - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name19">
        <div className="add-un-layered-batch-header-creator">
          <div className="add-un-layered-batch-container01">
            <div className="add-un-layered-batch-container02">
              <div className="add-un-layered-batch-container03">
                <h1 className="add-un-layered-batch-text">
                  <span className="add-un-layered-batch-text01">Add Batch</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
          <div className="add-un-layered-batch-mask-overlay"></div>
        </div>
        <div className="add-un-layered-batch-tabs-row">
          <div className="add-un-layered-batch-container04">
            <Link
              to="/creator-studio-project"
              className="add-un-layered-batch-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-un-layered-batch-container05">
              <Link
                to="/add-collection2-layered"
                className="add-un-layered-batch-navlink1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-un-layered-batch-icon fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-un-layered-batch-text03">
                  <span>Organise</span>
                  <br></br>
                </span>
              </Link>
              <button type="button" className="add-un-layered-batch-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-un-layered-batch-icon02 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-un-layered-batch-text06">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-un-layered-batch-button1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-un-layered-batch-icon04 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-un-layered-batch-text09">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-un-layered-batch-container-form">
          <div className="add-un-layered-batch-under-header">
            <div className="add-un-layered-batch-card">
              <form className="add-un-layered-batch-form">
                <div className="add-un-layered-batch-field-image">
                  <label className="add-un-layered-batch-text12 padding-4px-left">
                    Upload all your Ready Made images: (All must have the same
                    size)
                  </label>
                  <div className="add-un-layered-batch-container06">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="add-un-layered-batch-textinput focus-reset-forms input Content16SemiBold"
                    />
                    <button className="add-un-layered-batch-button2 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-un-layered-batch-icon06"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="add-un-layered-batch-item-image-block">
                  <div className="add-un-layered-batch-container-image">
                    <div className="add-un-layered-batch-container-image1">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-un-layered-batch-icon08"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-un-layered-batch-container07">
                      <label className="add-un-layered-batch-text13 padding-4px-left">
                        Image #1
                      </label>
                      <label className="add-un-layered-batch-text14 padding-4px-left">
                        2000 x 2000 px
                      </label>
                      <button className="add-un-layered-batch-button3 button Content16SemiBold">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-un-layered-batch-icon10"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row">
                    <div className="add-un-layered-batch-attribute-value-row">
                      <div className="add-un-layered-batch-label-atribute">
                        <label className="add-un-layered-batch-text15 padding-4px-left">
                          Attribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput01 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row1">
                    <div className="add-un-layered-batch-attribute-value-row1">
                      <div className="add-un-layered-batch-label-atribute1">
                        <label className="add-un-layered-batch-text16 padding-4px-left">
                          Attribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput02 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row2">
                    <div className="add-un-layered-batch-attribute-value-row2">
                      <div className="add-un-layered-batch-label-atribute2">
                        <label className="add-un-layered-batch-text17 padding-4px-left">
                          Attribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput03 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-un-layered-batch-item-image-block1">
                  <div className="add-un-layered-batch-container-image2">
                    <div className="add-un-layered-batch-container-image3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-un-layered-batch-icon12"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-un-layered-batch-container08">
                      <label className="add-un-layered-batch-text18 padding-4px-left">
                        Image #2
                      </label>
                      <label className="add-un-layered-batch-text19 padding-4px-left">
                        2000 x 2000 px
                      </label>
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row3">
                    <div className="add-un-layered-batch-attribute-value-row3">
                      <div className="add-un-layered-batch-label-atribute3">
                        <label className="add-un-layered-batch-text20 padding-4px-left">
                          Atribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput04 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row4">
                    <div className="add-un-layered-batch-attribute-value-row4">
                      <div className="add-un-layered-batch-label-atribute4">
                        <label className="add-un-layered-batch-text21 padding-4px-left">
                          Atribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput05 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row5">
                    <div className="add-un-layered-batch-attribute-value-row5">
                      <div className="add-un-layered-batch-label-atribute5">
                        <label className="add-un-layered-batch-text22 padding-4px-left">
                          Atribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput06 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-un-layered-batch-item-image-block2">
                  <div className="add-un-layered-batch-container-image4">
                    <div className="add-un-layered-batch-container-image5">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-un-layered-batch-icon14"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="add-un-layered-batch-container09">
                      <label className="add-un-layered-batch-text23 padding-4px-left">
                        Image #3
                      </label>
                      <label className="add-un-layered-batch-text24 padding-4px-left">
                        2000 x 2000 px
                      </label>
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row6">
                    <div className="add-un-layered-batch-attribute-value-row6">
                      <div className="add-un-layered-batch-label-atribute6">
                        <label className="add-un-layered-batch-text25 padding-4px-left">
                          Atribute 1:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput07 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row7">
                    <div className="add-un-layered-batch-attribute-value-row7">
                      <div className="add-un-layered-batch-label-atribute7">
                        <label className="add-un-layered-batch-text26 padding-4px-left">
                          Atribute 2:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput08 focus-reset-forms input Content16SemiBold"
                      />
                    </div>
                  </div>
                  <div className="add-un-layered-batch-attribute-row8">
                    <div className="add-un-layered-batch-attribute-value-row8">
                      <div className="add-un-layered-batch-label-atribute8">
                        <label className="add-un-layered-batch-text27 padding-4px-left">
                          Atribute 3:
                        </label>
                      </div>
                      <input
                        type="text"
                        placeholder="Value..."
                        className="add-un-layered-batch-textinput09 focus-reset-forms Content16SemiBold input"
                      />
                    </div>
                  </div>
                </div>
                <div className="add-un-layered-batch-bottom-buttons">
                  <button className="add-un-layered-batch-button4 button">
                    <span className="add-un-layered-batch-text28">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <Link
                    to="/add-collection2-layered"
                    className="add-un-layered-batch-navlink2 button"
                  >
                    <span className="add-un-layered-batch-text31">
                      <span>Create Batch</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-un-layered-batch-icon16"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </Link>
                </div>
              </form>
              <div className="add-un-layered-batch-info-box">
                <div className="add-un-layered-batch-container10">
                  <h1 className="add-un-layered-batch-text34 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-un-layered-batch-text37">
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

export default AddUnLayeredBatch
