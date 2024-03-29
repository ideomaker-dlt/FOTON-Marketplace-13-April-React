import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-item.css'

const AddItem = (props) => {
  return (
    <div className="add-item-container">
      <Helmet>
        <title>
          Add-Item - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Add-Item - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
        />
        <meta
          property="og:description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/960fd433-f55d-424c-a4b7-18ebfa3fe35e/73f897ab-0871-4173-9275-412ff9f275f2?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name8">
        <div className="add-item-header-creator">
          <div className="add-item-container01">
            <div className="add-item-container02">
              <div className="add-item-container03">
                <h1 className="add-item-text">Create New Item</h1>
              </div>
            </div>
          </div>
          <div className="add-item-mask-overlay"></div>
        </div>
        <div className="add-item-tabs-row">
          <div className="add-item-container04">
            <Link to="/creator-studio-project" className="add-item-navlink">
              &lt; go back
            </Link>
            <span className="add-item-text01">Define your Item below</span>
          </div>
        </div>
        <div className="add-item-container-form">
          <div className="add-item-under-header">
            <div className="add-item-card">
              <form className="add-item-form">
                <div className="add-item-field">
                  <label className="add-item-text02 padding-4px-left Content">
                    Name Item:
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Hand drawn landscape..."
                    className="add-item-textinput Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="add-item-area">
                  <label className="add-item-text03 padding-4px-left">
                    Description in max 250 characters (Appears in Items
                    Metadata):
                  </label>
                  <textarea
                    placeholder="Something short about my collection..."
                    className="add-item-textarea Content16SemiBold textarea focus-reset-forms"
                  ></textarea>
                </div>
                <div className="add-item-field-image">
                  <label className="add-item-text04 padding-4px-left">
                    Image file: JPG, PNG, GIF, SVG.
                  </label>
                  <div className="add-item-container05">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-item-textinput1 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-item-button button Content16SemiBold">
                      <svg viewBox="0 0 1024 1024" className="add-item-icon">
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-item-container06">
                    <svg viewBox="0 0 1024 1024" className="add-item-icon02">
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                  <label className="add-item-text05 padding-4px-left">
                    Select the way the image is displayed within the frame:
                  </label>
                  <div className="add-item-container07">
                    <div className="add-item-container08">
                      <button
                        type="button"
                        className="add-item-button01 button Content16SemiBold"
                      >
                        <img
                          alt="image"
                          src="/contain.svg"
                          className="add-item-image"
                        />
                        <span className="add-item-text06">
                          <span>
                            Contain
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="add-item-button02 button Content16SemiBold"
                      >
                        <img
                          alt="image"
                          src="/cover.svg"
                          className="add-item-image1"
                        />
                        <span className="add-item-text09">
                          <span>Fill frame</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-item-add-individual-attributes">
                  <div className="add-item-container09">
                    <button className="add-item-button03 button Content16SemiBold">
                      <svg viewBox="0 0 1024 1024" className="add-item-icon04">
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                      <span className="add-item-text12">
                        <span>
                          Add
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="add-item-container10">
                    <div className="add-item-attribute-row">
                      <div className="add-item-container11">
                        <input
                          type="text"
                          placeholder="Name..."
                          className="add-item-textinput2 focus-reset-forms input Content16SemiBold"
                        />
                        <input
                          type="text"
                          placeholder="Value..."
                          className="add-item-textinput3 focus-reset-forms input Content16SemiBold"
                        />
                      </div>
                      <button className="add-item-button04 button Content16SemiBold">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-item-icon06"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-item-text15">
                          <span>Remove</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div className="add-item-attribute-row1">
                      <div className="add-item-container12">
                        <input
                          type="text"
                          placeholder="Name..."
                          className="add-item-textinput4 focus-reset-forms Content16SemiBold input"
                        />
                        <input
                          type="text"
                          placeholder="Value..."
                          className="add-item-textinput5 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <button className="add-item-button05 button Content16SemiBold">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-item-icon08"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="add-item-text18">
                          <span>Remove</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-item-tags">
                  <label className="add-item-text21 padding-4px-left">
                    Select one or more categories for your item:
                  </label>
                  <div className="add-item-container13">
                    <button
                      type="button"
                      className="add-item-button06 button Content16SemiBold"
                    >
                      <span className="add-item-text22">
                        <span>Avatars</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button07 button Content16SemiBold"
                    >
                      <span className="add-item-text25">
                        <span>Art</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button08 button Content16SemiBold"
                    >
                      <span className="add-item-text28">
                        <span>Gaming</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button09 button Content16SemiBold"
                    >
                      <span className="add-item-text31">
                        <span>Memberships</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button10 button Content16SemiBold"
                    >
                      <span className="add-item-text34">
                        <span>Tickets</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button11 button Content16SemiBold"
                    >
                      <span className="add-item-text37">
                        <span>Music</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button12 button Content16SemiBold"
                    >
                      <span className="add-item-text40">
                        <span>Video</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-item-button13 button Content16SemiBold"
                    >
                      <span className="add-item-text43">
                        <span>Other</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-item-bottom-buttons">
                  <button className="add-item-button14 button">
                    <span className="add-item-text46">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-item-button15 button">
                    <span className="add-item-text49">
                      <span>Preview Item</span>
                      <br></br>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="add-item-icon10">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="add-item-info-box">
                <div className="add-item-container14">
                  <h1 className="add-item-text52 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-item-text55">
                    <span>
                      Items can exist on their own within a Project or be placed
                      within a Collection. In both cases, once an Item is
                      created it can&apos;t be moved to another Collection or
                      outside of one.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Once you&apos;ve created an item, its settings can&apos;t
                      be altered anymore.
                    </span>
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

export default AddItem
