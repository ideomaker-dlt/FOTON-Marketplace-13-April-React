import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './creator-studio-teams-role-preview.css'

const CreatorStudioTeamsRolePreview = (props) => {
  return (
    <div className="creator-studio-teams-role-preview-container">
      <Helmet>
        <title>
          Creator-Studio-Teams-RolePreview - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Teams-RolePreview - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name35">
        <div className="creator-studio-teams-role-preview-header-creator">
          <div className="creator-studio-teams-role-preview-gray-overlay"></div>
          <div className="creator-studio-teams-role-preview-container01">
            <div className="creator-studio-teams-role-preview-container02">
              <div className="creator-studio-teams-role-preview-container03">
                <h1 className="creator-studio-teams-role-preview-text">
                  Role: Owner
                </h1>
                <h1 className="creator-studio-teams-role-preview-text01">
                  <span>
                    Project Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="creator-studio-teams-role-preview-text03">
                    ●
                  </span>
                  <span>
                    {' '}
                    3 Members
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="creator-studio-teams-role-preview-text05">
                    ●
                  </span>
                  <span> 4 Badges </span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-teams-role-preview-buttons">
              <button className="creator-studio-teams-role-preview-button button">
                <span className="creator-studio-teams-role-preview-text08">
                  <span>Save</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="creator-studio-teams-role-preview-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-teams-role-preview-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-teams-role-preview-dropdown-toggle"
              >
                <span className="creator-studio-teams-role-preview-text11">
                  Category
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-teams-role-preview-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-role-preview-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-teams-role-preview-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-teams-role-preview-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-preview-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-preview-dropdown-toggle1"
                  >
                    <span className="creator-studio-teams-role-preview-text12">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-preview-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-preview-dropdown-toggle2"
                  >
                    <span className="creator-studio-teams-role-preview-text13">
                      Delete
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="creator-studio-teams-role-preview-tabs-row">
          <div className="creator-studio-teams-role-preview-container05">
            <Link
              to="/creator-studio-teams"
              className="creator-studio-teams-role-preview-navlink"
            >
              &lt; go back
            </Link>
            <div className="creator-studio-teams-role-preview-container06">
              <span className="creator-studio-teams-role-preview-text14">
                Role:
              </span>
              <span className="creator-studio-teams-role-preview-text15">
                Owner
              </span>
            </div>
            <span className="creator-studio-teams-role-preview-text16">
              Preview
            </span>
            <Link
              to="/creator-studio-teams-role-permissions"
              className="creator-studio-teams-role-preview-navlink1"
            >
              Permissions
            </Link>
            <Link
              to="/creator-studio-teams-role-badges"
              className="creator-studio-teams-role-preview-navlink2"
            >
              Badges
            </Link>
          </div>
        </div>
        <div className="creator-studio-teams-role-preview-roles-container">
          <div className="creator-studio-teams-role-preview-container07">
            <div className="creator-studio-teams-role-preview-define-role">
              <label className="creator-studio-teams-role-preview-text17">
                Preview of the Badge for this Role
              </label>
              <div className="creator-studio-teams-role-preview-container08">
                <div className="creator-studio-teams-role-preview-badge-preview">
                  <div className="creator-studio-teams-role-preview-image-preview">
                    <div className="creator-studio-teams-role-preview-gray-background">
                      <div className="creator-studio-teams-role-preview-image-badge">
                        <div className="creator-studio-teams-role-preview-watermark-container">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-preview-watermark-foton-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-studio-teams-role-preview-info-badge">
                    <h1 className="creator-studio-teams-role-preview-text18">
                      Owner Badge
                    </h1>
                    <span className="creator-studio-teams-role-preview-text19">
                      This is a Role Badge created with FOTON.
                    </span>
                    <div className="creator-studio-teams-role-preview-container09">
                      <div className="creator-studio-teams-role-preview-container10">
                        <span className="creator-studio-teams-role-preview-text20">
                          Role:
                        </span>
                        <span className="creator-studio-teams-role-preview-text21">
                          Owner
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-preview-container11">
                        <span className="creator-studio-teams-role-preview-text22">
                          At Project:
                        </span>
                        <span className="creator-studio-teams-role-preview-text23">
                          Project Name
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-preview-container12">
                        <span className="creator-studio-teams-role-preview-text24">
                          Supply:
                        </span>
                        <span className="creator-studio-teams-role-preview-text25">
                          1
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-preview-container13">
                        <span className="creator-studio-teams-role-preview-text26">
                          Tags
                        </span>
                        <span className="creator-studio-teams-role-preview-text27">
                          Foton, Owner, Role, Badge 
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-preview-container14">
                        <span className="creator-studio-teams-role-preview-text28">
                          Note:
                        </span>
                        <span className="creator-studio-teams-role-preview-text29">
                          This gives you Superpowers :)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-preview-fields">
                  <h3 className="creator-studio-teams-role-preview-header-label padding-4px-left Content18">
                    Preview and Customise
                  </h3>
                  <div className="creator-studio-teams-role-preview-upload-image-field">
                    <div className="creator-studio-teams-role-preview-container15">
                      <label className="creator-studio-teams-role-preview-text30 padding-4px-left">
                        <span className="creator-studio-teams-role-preview-text31">
                          Custom image:
                        </span>
                        <br></br>
                      </label>
                      <span className="creator-studio-teams-role-preview-text33 padding-4px-left">
                        Replace the default FOTON image of the badge.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="creator-studio-teams-role-preview-container16">
                      <input
                        type="text"
                        placeholder="Upload image..."
                        className="creator-studio-teams-role-preview-textinput Content16SemiBold focus-reset-forms input"
                      />
                      <button className="creator-studio-teams-role-preview-button1 button Content16SemiBold">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="creator-studio-teams-role-preview-icon04"
                        >
                          <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="creator-studio-teams-role-preview-field">
                    <div className="creator-studio-teams-role-preview-container17">
                      <label className="creator-studio-teams-role-preview-text34 padding-4px-left">
                        <span className="creator-studio-teams-role-preview-text35">
                          Add an optional short Note: 
                        </span>
                        <br></br>
                      </label>
                      <span className="creator-studio-teams-role-preview-text37 padding-4px-left">
                        The name and details are generated automatically based
                        on the Role.
                      </span>
                    </div>
                    <input
                      type="text"
                      enctype
                      placeholder="This gives you superpowers..."
                      className="creator-studio-teams-role-preview-textinput1 focus-reset-forms Content16SemiBold input"
                    />
                  </div>
                  <div className="creator-studio-teams-role-preview-bottom-buttons">
                    <button className="creator-studio-teams-role-preview-button2 button">
                      <span className="creator-studio-teams-role-preview-text38">
                        <span>Save and Update</span>
                        <br></br>
                      </span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="creator-studio-teams-role-preview-icon06"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                    <span className="creator-studio-teams-role-preview-text41 padding-4px-left">
                      * Every update to badges involves network fees. 
                    </span>
                    <div className="creator-studio-teams-role-preview-info-text">
                      <span className="creator-studio-teams-role-preview-text42 padding-4px-left">
                        <span>Info:</span>
                        <br></br>
                      </span>
                      <span className="creator-studio-teams-role-preview-text45 padding-4px-left">
                        <span>
                          1. Every Role has its own Badge type, which gives
                          access to only 1 Member per Badge.
                        </span>
                        <br></br>
                      </span>
                      <span className="creator-studio-teams-role-preview-text48 padding-4px-left">
                        <span>
                          2. The name and most of the details are generated
                          automatically based on the Role and Project it belongs
                          to.
                        </span>
                        <br></br>
                      </span>
                      <span className="creator-studio-teams-role-preview-text51 padding-4px-left">
                        <span>
                          3. FOTON will add always the watermark to Role Badges,
                          to eliminate confusion with the regular ones in the
                          Radix wallet.
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-teams-role-preview-bottom-menu">
        <div className="creator-studio-teams-role-preview-container-left">
          <span className="creator-studio-teams-role-preview-text54">
            Selected items:
          </span>
          <span className="creator-studio-teams-role-preview-text55">3</span>
        </div>
        <div className="creator-studio-teams-role-preview-container-right">
          <button
            type="button"
            className="creator-studio-teams-role-preview-button3"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon08 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text56">
              <span>
                Edit
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
            className="creator-studio-teams-role-preview-button4"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon10 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text59">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-preview-button5"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon12 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text62">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-preview-button6"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon14 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text65">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-preview-button7"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon16 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text68">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-teams-role-preview-navlink3"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-preview-icon18 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-teams-role-preview-text71">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button
            type="button"
            className="creator-studio-teams-role-preview-button8"
          >
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-teams-role-preview-image"
            />
            <span className="creator-studio-teams-role-preview-text74">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioTeamsRolePreview
