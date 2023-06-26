import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './publish-collection.css'

const PublishCollection = (props) => {
  return (
    <div className="publish-collection-container">
      <Helmet>
        <title>
          Publish-Collection - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Publish-Collection - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name20">
        <div className="publish-collection-header-creator">
          <div className="publish-collection-container01">
            <div className="publish-collection-container02">
              <div className="publish-collection-container03">
                <h1 className="publish-collection-text">
                  Publish or Mint Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="publish-collection-mask-overlay"></div>
        </div>
        <div className="publish-collection-tabs-row">
          <div className="publish-collection-container04">
            <Link
              to="/creator-studio-collection"
              className="publish-collection-navlink"
            >
              &lt; go back
            </Link>
            <span className="publish-collection-text01">
              Define your listing details
            </span>
          </div>
        </div>
        <div className="publish-collection-container-form">
          <div className="publish-collection-under-header">
            <div className="publish-collection-card">
              <form className="publish-collection-form">
                <div className="publish-collection-field">
                  <label className="publish-collection-text02 padding-4px-left">
                    * Collection Name, Creator and Long Description are taken
                    automatically
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Hand drawn landscape..."
                    className="publish-collection-textinput focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="publish-collection-field1">
                  <label className="publish-collection-text03 padding-4px-left">
                    Minting Price per item in Radix XRD:
                  </label>
                  <input
                    type="text"
                    enctype="150..."
                    placeholder="150..."
                    className="publish-collection-textinput01 focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="publish-collection-field2">
                  <label className="publish-collection-text04 padding-4px-left">
                    Allowed items to mint per Account (Leave empty if none):
                  </label>
                  <input
                    type="text"
                    placeholder="2..."
                    className="publish-collection-textinput02 focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="publish-collection-area">
                  <label className="publish-collection-text05 padding-4px-left">
                    Roadmap text and/or Risks (max 1500 words):
                  </label>
                  <textarea
                    placeholder="Something about my team or myself..."
                    className="publish-collection-textarea textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="publish-collection-area1">
                  <label className="publish-collection-text06 padding-4px-left">
                    Team Description (max 1500 words):
                  </label>
                  <textarea
                    placeholder="Something about my team or myself..."
                    className="publish-collection-textarea1 textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="publish-collection-field-image">
                  <label className="publish-collection-text07 padding-4px-left">
                    4 Example images of your items: JPG, PNG, GIF, SVG.
                  </label>
                  <div className="publish-collection-container05">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="publish-collection-textinput03 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="publish-collection-button button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="publish-collection-container06">
                    <div className="publish-collection-container07">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon02"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="publish-collection-container08">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon04"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="publish-collection-container09">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon06"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="publish-collection-container10">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon08"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="publish-collection-field-image1">
                  <label className="publish-collection-text08 padding-4px-left">
                    1 placeholder image for all items not minted yet (hides the
                    real artwork):
                  </label>
                  <div className="publish-collection-container11">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="publish-collection-textinput04 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="publish-collection-button1 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon10"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="publish-collection-container12">
                    <div className="publish-collection-container13">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon12"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="publish-collection-field-image2">
                  <label className="publish-collection-text09 padding-4px-left">
                    Up to 3 side info images (details, atmospheric, sketches,
                    etc.): JPG, PNG, GIF, SVG.
                  </label>
                  <div className="publish-collection-container14">
                    <input
                      type="text"
                      placeholder="Upload images..."
                      className="publish-collection-textinput05 focus-reset-forms Content16SemiBold input"
                    />
                    <button className="publish-collection-button2 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon14"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="publish-collection-container15">
                    <div className="publish-collection-container16">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon16"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="publish-collection-container17">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon18"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                    <div className="publish-collection-container18">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon20"
                      >
                        <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="publish-collection-start-date">
                  <label className="publish-collection-text10 padding-4px-left">
                    Mint Starting Date and Time (To Allow Minting Immediately,
                    leave empty):
                  </label>
                  <div className="publish-collection-date1">
                    <input
                      type="text"
                      placeholder="15 August 2023..."
                      className="publish-collection-textinput06 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="publish-collection-button3 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon22 fill-color-gray"
                      >
                        <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="publish-collection-time1">
                    <input
                      type="text"
                      placeholder="14:00 UCT"
                      className="publish-collection-textinput07 focus-reset-forms Content16SemiBold input"
                    />
                    <button className="publish-collection-button4 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon24 fill-color-gray"
                      >
                        <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="publish-collection-end-date">
                  <label className="publish-collection-text11 padding-4px-left">
                    Mint Ending Date and Time (Leave empty if none):
                  </label>
                  <div className="publish-collection-date2">
                    <input
                      type="text"
                      placeholder="27 August 2023..."
                      className="publish-collection-textinput08 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="publish-collection-button5 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon26 fill-color-gray"
                      >
                        <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="publish-collection-time2">
                    <input
                      type="text"
                      placeholder="14:00 UCT"
                      className="publish-collection-textinput09 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="publish-collection-button6 Content16SemiBold button">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="publish-collection-icon28 fill-color-gray"
                      >
                        <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="publish-collection-bottom-buttons">
                  <Link
                    to="/creator-studio-collection"
                    className="publish-collection-navlink1 button"
                  >
                    <span className="publish-collection-text12">
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
                  <button className="publish-collection-button7 button">
                    <span className="publish-collection-text15">
                      <span>Publish to Drops</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="publish-collection-icon30"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
                <div className="publish-collection-field3">
                  <label className="publish-collection-text18 padding-4px-left">
                    <span className="publish-collection-text19">OR...</span>
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
                    className="publish-collection-textinput10 focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="publish-collection-bottom-buttons1">
                  <button className="publish-collection-button8 button">
                    <span className="publish-collection-text26">
                      <span>Mint Now</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="publish-collection-icon32"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="publish-collection-info-box">
                <div className="publish-collection-container19">
                  <h1 className="publish-collection-text29 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="publish-collection-text32">
                    <span>
                      Collections can be Listed based on Timeframe and Who Mints
                      the items in the collection. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you want to Publish the collection in the Drops page,
                      you can do that with a preselected timeframe, where
                      collectors have to wait for Minting to start, or just list
                      it immediately in the Active Drops and collectors can do
                      it right away. In this case the collectors are also the
                      ones paying a very small network fee for minting their
                      items. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you want to Mint the entire collection yourself, and
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

export default PublishCollection
