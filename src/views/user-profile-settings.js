import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './user-profile-settings.css'

const UserProfileSettings = (props) => {
  return (
    <div className="user-profile-settings-container">
      <Helmet>
        <title>
          User-Profile-Settings - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="User-Profile-Settings - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name16">
        <div className="user-profile-settings-header-creator">
          <div className="user-profile-settings-container01">
            <div className="user-profile-settings-container02">
              <div className="user-profile-settings-container03">
                <h1 className="user-profile-settings-text">
                  My Profile Settings
                </h1>
              </div>
            </div>
          </div>
          <div className="user-profile-settings-mask-overlay"></div>
        </div>
        <div className="user-profile-settings-tabs-row">
          <div className="user-profile-settings-container04">
            <Link
              to="/creator-studio-project"
              className="user-profile-settings-navlink"
            >
              &lt; go back
            </Link>
            <span className="user-profile-settings-text01">
              Define your Persona on Foton
            </span>
          </div>
        </div>
        <div className="user-profile-settings-container-form">
          <div className="user-profile-settings-under-header">
            <div className="user-profile-settings-card">
              <form className="user-profile-settings-form">
                <div className="user-profile-settings-field">
                  <label className="user-profile-settings-text02 padding-4px-left Content">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Danoshi Hughemoto..."
                    className="user-profile-settings-textinput Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="user-profile-settings-field1">
                  <label className="user-profile-settings-text03 padding-4px-left Content">
                    Foton Username:
                  </label>
                  <input
                    type="text"
                    placeholder="danoshi......"
                    className="user-profile-settings-textinput1 Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="user-profile-settings-biography">
                  <label className="user-profile-settings-text04 padding-4px-left">
                    Biography:
                  </label>
                  <textarea
                    placeholder="Something about myself..."
                    className="user-profile-settings-textarea textarea Content16SemiBold focus-reset-forms"
                  ></textarea>
                </div>
                <div className="user-profile-settings-profile-picture">
                  <label className="user-profile-settings-text05 padding-4px-left">
                    Profile picture/Avatar, image 1:1 ratio max 500 x 500px:
                  </label>
                  <div className="user-profile-settings-container05">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="user-profile-settings-textinput2 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="user-profile-settings-button button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="user-profile-settings-icon"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="user-profile-settings-container06">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="user-profile-settings-icon02"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="user-profile-settings-header-banner-image">
                  <label className="user-profile-settings-text06 padding-4px-left">
                    Header Banner image 4:1 ratio. Ex. 2000 x 500px:
                  </label>
                  <div className="user-profile-settings-container07">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="user-profile-settings-textinput3 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="user-profile-settings-button1 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="user-profile-settings-icon04"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="user-profile-settings-container08">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="user-profile-settings-icon06"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="user-profile-settings-webpage">
                  <label className="user-profile-settings-text07 padding-4px-left Content">
                    My Webpage:
                  </label>
                  <input
                    type="text"
                    placeholder="Danoshi..."
                    className="user-profile-settings-textinput4 Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="user-profile-settings-twitter">
                  <label className="user-profile-settings-text08 padding-4px-left Content">
                    My Twitter:
                  </label>
                  <input
                    type="text"
                    placeholder="Danoshi..."
                    className="user-profile-settings-textinput5 Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="user-profile-settings-telegram">
                  <label className="user-profile-settings-text09 padding-4px-left Content">
                    My Telegram:
                  </label>
                  <input
                    type="text"
                    placeholder="Danoshi..."
                    className="user-profile-settings-textinput6 Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="user-profile-settings-bottom-buttons">
                  <button className="user-profile-settings-button2 button">
                    <span className="user-profile-settings-text10">
                      <span>Save</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="user-profile-settings-icon08"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="user-profile-settings-info-box">
                <div className="user-profile-settings-container09">
                  <h1 className="user-profile-settings-text13 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="user-profile-settings-text16">
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

export default UserProfileSettings
