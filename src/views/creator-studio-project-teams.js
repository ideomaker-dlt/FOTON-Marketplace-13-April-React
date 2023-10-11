import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './creator-studio-project-teams.css'

const CreatorStudioProjectTeams = (props) => {
  return (
    <div className="creator-studio-project-teams-container">
      <Helmet>
        <title>
          Creator-Studio-Project-Teams - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Project-Teams - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name34">
        <div className="creator-studio-project-teams-header-creator">
          <div className="creator-studio-project-teams-gray-overlay"></div>
          <div className="creator-studio-project-teams-container01">
            <div className="creator-studio-project-teams-container02">
              <div className="creator-studio-project-teams-avatar-logo">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-project-teams-mask"
                />
                <img
                  src="/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png"
                  className="creator-studio-project-teams-image"
                />
              </div>
              <div className="creator-studio-project-teams-container03">
                <h1 className="creator-studio-project-teams-text">
                  Project One
                </h1>
                <h1 className="creator-studio-project-teams-text01">
                  <span>4 Roles ● Badges: 1 ● Team: 1</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project-teams-buttons">
              <Link
                to="/add-items-templates"
                className="creator-studio-project-teams-navlink button"
              >
                <span className="creator-studio-project-teams-text04">
                  <span>Add Role</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="creator-studio-project-teams-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-project-teams-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-project-teams-dropdown-toggle"
              >
                <span className="creator-studio-project-teams-text07">
                  Category
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-project-teams-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-project-teams-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-project-teams-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-project-teams-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-teams-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-teams-dropdown-toggle1"
                  >
                    <span className="creator-studio-project-teams-text08">
                      Edit
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-teams-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-teams-dropdown-toggle2"
                  >
                    <span className="creator-studio-project-teams-text09">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-teams-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-teams-dropdown-toggle3"
                  >
                    <span className="creator-studio-project-teams-text10">
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
        <div className="creator-studio-project-teams-tabs-row">
          <div className="creator-studio-project-teams-container05">
            <Link
              to="/creator-studio"
              className="creator-studio-project-teams-navlink1"
            >
              &lt; go back
            </Link>
            <span className="creator-studio-project-teams-text11">Roles</span>
          </div>
        </div>
        <div className="creator-studio-project-teams-collections-container">
          <div className="creator-studio-project-teams-container06">
            <Link to="/creator-studio-collection">
              <div className="creator-studio-project-teams-collection">
                <div className="creator-studio-project-teams-container07">
                  <img
                    src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                    className="creator-studio-project-teams-image1"
                  />
                </div>
                <div className="creator-studio-project-teams-container08">
                  <div className="creator-studio-project-teams-container09">
                    <h2 className="creator-studio-project-teams-text12 Heading3">
                      Owner
                    </h2>
                  </div>
                  <div className="creator-studio-project-teams-container10">
                    <label className="creator-studio-project-teams-text13">
                      <span>23 permissions</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-project-teams-container11">
                    <label className="creator-studio-project-teams-text16">
                      <span>5 badges</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-project-teams-container12">
                    <label className="creator-studio-project-teams-text19">
                      <span>3 Team members</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-project-teams-container13">
                    <label className="creator-studio-project-teams-text22">
                      <span>Edit Role</span>
                      <br></br>
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-project-teams-bottom-menu">
        <div className="creator-studio-project-teams-container-left">
          <span className="creator-studio-project-teams-text25">
            Selected items:
          </span>
          <span className="creator-studio-project-teams-text26">3</span>
        </div>
        <div className="creator-studio-project-teams-container-right">
          <button type="button" className="creator-studio-project-teams-button">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon04 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-project-teams-text27">
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
            className="creator-studio-project-teams-button1"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon06 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-project-teams-text30">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-project-teams-button2"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon08 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-project-teams-text33">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-project-teams-button3"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon10 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-project-teams-text36">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-project-teams-button4"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon12 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-project-teams-text39">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-project-teams-navlink3"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-teams-icon14 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-project-teams-text42">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button
            type="button"
            className="creator-studio-project-teams-button5"
          >
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-project-teams-image2"
            />
            <span className="creator-studio-project-teams-text45">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioProjectTeams
