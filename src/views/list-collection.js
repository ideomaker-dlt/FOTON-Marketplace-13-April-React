import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './list-collection.css'

const ListCollection = (props) => {
  return (
    <div className="list-collection-container">
      <Helmet>
        <title>
          List-Collection - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="List-Collection - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name20">
        <div className="list-collection-header-creator">
          <div className="list-collection-container01">
            <div className="list-collection-container02">
              <div className="list-collection-container03">
                <h1 className="list-collection-text">
                  List or Mint Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="list-collection-mask-overlay"></div>
        </div>
        <div className="list-collection-tabs-row">
          <div className="list-collection-container04">
            <Link
              to="/creator-studio-collection"
              className="list-collection-navlink"
            >
              &lt; go back
            </Link>
            <span className="list-collection-text01">
              Define your listing details
            </span>
          </div>
        </div>
        <div className="list-collection-container-form">
          <div className="list-collection-under-header">
            <div className="list-collection-card">
              <form className="list-collection-form">
                <div className="list-collection-field">
                  <label className="list-collection-text02 padding-4px-left">
                    * Collection Name, Creator and Long Description are taken
                    automatically
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Hand drawn landscape..."
                    className="list-collection-textinput focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="list-collection-field1">
                  <label className="list-collection-text03 padding-4px-left">
                    Minting Price per item in Radix XRD:
                  </label>
                  <input
                    type="text"
                    enctype="150..."
                    placeholder="150..."
                    className="list-collection-textinput01 focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="list-collection-field2">
                  <label className="list-collection-text04 padding-4px-left">
                    Allowed items to mint per Account (Leave empty if none):
                  </label>
                  <input
                    type="text"
                    placeholder="2..."
                    className="list-collection-textinput02 focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="list-collection-area">
                  <label className="list-collection-text05 padding-4px-left">
                    Roadmap text and/or Risks (max 1500 words):
                  </label>
                  <textarea
                    placeholder="Something about my team or myself..."
                    className="list-collection-textarea textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="list-collection-area1">
                  <label className="list-collection-text06 padding-4px-left">
                    Team Description (max 1500 words):
                  </label>
                  <textarea
                    placeholder="Something about my team or myself..."
                    className="list-collection-textarea1 textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="list-collection-field-image">
                  <label className="list-collection-text07 padding-4px-left">
                    4 Example images of your items: JPG, PNG, GIF, SVG.
                  </label>
                  <div className="list-collection-container05">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="list-collection-textinput03 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="list-collection-container06">
                    <div className="list-collection-container07">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon02"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="list-collection-container08">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon04"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="list-collection-container09">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon06"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="list-collection-container10">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon08"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="list-collection-field-image1">
                  <label className="list-collection-text08 padding-4px-left">
                    Up to 3 side info images (details, atmospheric, sketches,
                    etc.): JPG, PNG, GIF, SVG.
                  </label>
                  <div className="list-collection-container11">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="list-collection-textinput04 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button1 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon10"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="list-collection-container12">
                    <div className="list-collection-container13">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon12"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="list-collection-container14">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon14"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="list-collection-container15">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon16"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="list-collection-start-date">
                  <label className="list-collection-text09 padding-4px-left">
                    Mint Starting Date and Time (To Allow Minting Immediately,
                    leave empty):
                  </label>
                  <div className="list-collection-date1">
                    <input
                      type="text"
                      placeholder="15 August 2023..."
                      className="list-collection-textinput05 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button2 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon18 fill-color-gray"
                      >
                        <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="list-collection-time1">
                    <input
                      type="text"
                      placeholder="14:00 UCT"
                      className="list-collection-textinput06 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button3 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon20 fill-color-gray"
                      >
                        <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="list-collection-end-date">
                  <label className="list-collection-text10 padding-4px-left">
                    Mint Ending Date and Time (Leave empty if none):
                  </label>
                  <div className="list-collection-date2">
                    <input
                      type="text"
                      placeholder="27 August 2023..."
                      className="list-collection-textinput07 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button4 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon22 fill-color-gray"
                      >
                        <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="list-collection-time2">
                    <input
                      type="text"
                      placeholder="14:00 UCT"
                      className="list-collection-textinput08 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="list-collection-button5 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="list-collection-icon24 fill-color-gray"
                      >
                        <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="list-collection-bottom-buttons">
                  <Link
                    to="/creator-studio-collection"
                    className="list-collection-navlink1 button"
                  >
                    <span className="list-collection-text11">
                      <span>
                        Save
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Link>
                  <button className="list-collection-button6 button">
                    <span className="list-collection-text14">
                      <span>List to Drops</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="list-collection-icon26"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
                <div className="list-collection-field3">
                  <label className="list-collection-text17 padding-4px-left">
                    <span className="list-collection-text18">OR...</span>
                    <br></br>
                    <br></br>
                    <span>
                      By Default, if you Mint Now, all items will be sent to the
                      Account that you connected with.
                    </span>
                    <br></br>
                    <span>
                      If you want to send the items to a different Radix
                      Account, write the address below:
                    </span>
                    <br></br>
                  </label>
                  <input
                    type="text"
                    enctype="150..."
                    placeholder="rdxhkasfj..."
                    className="list-collection-textinput09 focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="list-collection-bottom-buttons1">
                  <button className="list-collection-button7 button">
                    <span className="list-collection-text25">
                      <span>Mint Now</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="list-collection-icon28"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="list-collection-info-box">
                <div className="list-collection-container16">
                  <h1 className="list-collection-text28 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="list-collection-text31">
                    <span>
                      Collections can be Listed based on Timeframe and Who Mints
                      the items in the collection. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you want to List the collection in the Drops page, you
                      can do that with a preselected timeframe, where collectors
                      have to wait for Minting to start, or just list it
                      immediately in the Active Drops and collectors can do it
                      right away. In this case the collectors are also the ones
                      paying a very small network fee for minting their items. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you want to mint the entire collection yourself, and
                      have all the items in your personal Account, you can do
                      so, but all network fees will be covered entirely by
                      yourself. 
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

export default ListCollection
