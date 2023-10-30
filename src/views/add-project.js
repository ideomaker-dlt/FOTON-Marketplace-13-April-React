import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-project.css'

const AddProject = (props) => {
  return (
    <div className="add-project-container">
      <Helmet>
        <title>
          Add-Project - FOTON - Web3's Digital Assets Hub and NFTs Marketplace
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Add-Project - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name2">
        <div className="add-project-header-creator">
          <div className="add-project-container01">
            <div className="add-project-container02">
              <div className="add-project-container03">
                <h1 className="add-project-text">Create New Project</h1>
              </div>
            </div>
          </div>
          <div className="add-project-mask-overlay"></div>
        </div>
        <div className="add-project-tabs-row">
          <div className="add-project-container04">
            <Link to="/creator-studio-project" className="add-project-navlink">
              &lt; go back
            </Link>
            <span className="add-project-text01">Define your item below</span>
          </div>
        </div>
        <div className="add-project-container-form">
          <div className="add-project-under-header">
            <div className="add-project-card">
              <form className="add-project-form">
                <div className="add-project-field">
                  <label className="add-project-text02 padding-4px-left Content">
                    Name Project:
                  </label>
                  <input
                    type="text"
                    placeholder="My Brand name"
                    className="add-project-textinput Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="add-project-area">
                  <label className="add-project-text03 padding-4px-left">
                    Description in max 250 characters:
                  </label>
                  <textarea
                    placeholder="Something about my project..."
                    className="add-project-textarea textarea Content16SemiBold focus-reset-forms"
                  ></textarea>
                </div>
                <div className="add-project-area1">
                  <label className="add-project-text04 padding-4px-left">
                    Long Description in max 1500 characters:
                  </label>
                  <textarea
                    placeholder="Something about my project..."
                    className="add-project-textarea1 textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="add-project-field-image">
                  <label className="add-project-text05 padding-4px-left">
                    Logo/Avatar image 1:1 ratio max 500 x 500px:
                  </label>
                  <div className="add-project-container05">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-project-textinput1 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-project-button button Content16SemiBold">
                      <svg viewBox="0 0 1024 1024" className="add-project-icon">
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-project-container06">
                    <svg viewBox="0 0 1024 1024" className="add-project-icon02">
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-project-field-image1">
                  <label className="add-project-text06 padding-4px-left">
                    Banner image 3:2 ratio. Ex. 3000 x 2000px:
                  </label>
                  <div className="add-project-container07">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-project-textinput2 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-project-button01 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-project-icon04"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-project-container08">
                    <svg viewBox="0 0 1024 1024" className="add-project-icon06">
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-project-tags">
                  <label className="add-project-text07 padding-4px-left">
                    Select some tags close to your projects&apos; domain of
                    activity:
                  </label>
                  <div className="add-project-container09">
                    <button
                      type="button"
                      className="add-project-button02 button Content16SemiBold"
                    >
                      <span className="add-project-text08">
                        <span>Art</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button03 button Content16SemiBold"
                    >
                      <span className="add-project-text11">
                        <span>Metaverse</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button04 button Content16SemiBold"
                    >
                      <span className="add-project-text14">
                        <span>Gaming</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button05 button Content16SemiBold"
                    >
                      <span className="add-project-text17">
                        <span>Memberships</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button06 button Content16SemiBold"
                    >
                      <span className="add-project-text20">
                        <span>Events</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button07 button Content16SemiBold"
                    >
                      <span className="add-project-text23">
                        <span>E-Commerce</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button08 button Content16SemiBold"
                    >
                      <span className="add-project-text26">
                        <span>Education</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button09 button Content16SemiBold"
                    >
                      <span className="add-project-text29">
                        <span>Tech</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button10 button Content16SemiBold"
                    >
                      <span className="add-project-text32">
                        <span>Software</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button11 button Content16SemiBold"
                    >
                      <span className="add-project-text35">
                        <span>Open Source</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button12 button Content16SemiBold"
                    >
                      <span className="add-project-text38">
                        <span>Writing</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button13 button Content16SemiBold"
                    >
                      <span className="add-project-text41">
                        <span>Charity</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button14 button Content16SemiBold"
                    >
                      <span className="add-project-text44">
                        <span>Finance</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button15 button Content16SemiBold"
                    >
                      <span className="add-project-text47">
                        <span>Gated Content</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button16 button Content16SemiBold"
                    >
                      <span className="add-project-text50">
                        <span>Music</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button17 button Content16SemiBold"
                    >
                      <span className="add-project-text53">
                        <span>Movies</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button18 button Content16SemiBold"
                    >
                      <span className="add-project-text56">
                        <span>Sports</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button19 button Content16SemiBold"
                    >
                      <span className="add-project-text59">
                        <span>Entertainment</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button20 button Content16SemiBold"
                    >
                      <span className="add-project-text62">
                        <span>Horeca</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-project-button21 button Content16SemiBold"
                    >
                      <span className="add-project-text65">
                        <span>Other</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-project-bottom-buttons">
                  <button className="add-project-button22 button">
                    <span className="add-project-text68">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-project-button23 button">
                    <span className="add-project-text71">
                      <span>Create Project</span>
                      <br></br>
                    </span>
                    <svg viewBox="0 0 1024 1024" className="add-project-icon08">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="add-project-info-box">
                <div className="add-project-container10">
                  <h1 className="add-project-text74 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-project-text77">
                    <span>
                      A Project is the first type of content every user has to
                      create before adding any NFTs on the platform. Projects
                      will nest Collections and Collections will nest individual
                      NFTs.
                    </span>
                    <br className="Content"></br>
                    <br></br>
                    <span>
                      Think of a Project as a recognisable Brand, Organisation
                      or Identity for the other users to find you easier.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Later you will be able to invite team members to
                      collaborate or even trade the project or pass it over to
                      someone else, if you want to work on new things.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
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

export default AddProject
