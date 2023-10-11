import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import TabsRowWithButtons from '../components/tabs-row-with-buttons'
import CollectionItemsContainer from '../components/collection-items-container'
import './creator-studio-project.css'

const CreatorStudioProject = (props) => {
  return (
    <div className="creator-studio-project-container">
      <Helmet>
        <title>
          Creator-Studio-Project - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Project - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name3">
        <div className="creator-studio-project-header-creator">
          <div className="creator-studio-project-gray-overlay"></div>
          <div className="creator-studio-project-container01">
            <div className="creator-studio-project-container02">
              <div className="creator-studio-project-avatar-logo">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-project-mask"
                />
                <img
                  src="/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png"
                  className="creator-studio-project-image"
                />
              </div>
              <div className="creator-studio-project-container03">
                <h1 className="creator-studio-project-text">Project One</h1>
                <h1 className="creator-studio-project-text01">
                  <span>4 Collections, 6000 Items ● Badges: 1 ● Team: 1</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project-buttons">
              <Link
                to="/add-collection-templates"
                className="creator-studio-project-navlink button"
              >
                <span className="creator-studio-project-text04">
                  <span>Add Collection</span>
                  <br></br>
                </span>
              </Link>
              <Link
                to="/add-items-templates"
                className="creator-studio-project-navlink1 button"
              >
                <span className="creator-studio-project-text07">
                  <span>Add Items</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="creator-studio-project-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-project-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-project-dropdown-toggle"
              >
                <span className="creator-studio-project-text10">Category</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-project-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-project-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-project-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-project-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-dropdown-toggle1"
                  >
                    <span className="creator-studio-project-text11">Edit</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-dropdown-toggle2"
                  >
                    <span className="creator-studio-project-text12">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-project-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-project-dropdown-toggle3"
                  >
                    <span className="creator-studio-project-text13">
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
        <div className="creator-studio-project-tabs-row">
          <div className="creator-studio-project-container05">
            <Link
              to="/creator-studio"
              className="creator-studio-project-navlink2"
            >
              &lt; go back
            </Link>
            <span className="creator-studio-project-text14">
              My Collections
            </span>
          </div>
        </div>
        <div className="creator-studio-project-collections-container">
          <div className="creator-studio-project-container06">
            <Link to="/creator-studio-collection">
              <div className="creator-studio-project-collection">
                <div className="creator-studio-project-container07">
                  <img
                    src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                    className="creator-studio-project-image1"
                  />
                </div>
                <div className="creator-studio-project-container08">
                  <div className="creator-studio-project-container09">
                    <div className="creator-studio-project-container10">
                      <div className="creator-studio-project-container11">
                        <label className="creator-studio-project-text15 Smallest">
                          <span className="Smallest">Role:</span>
                          <br className="Smallest"></br>
                        </label>
                        <label className="creator-studio-project-value">
                          <span>Admin</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-project-container12">
                        <label className="creator-studio-project-text20 Smallest">
                          <span>Badges:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-project-value1">
                          <span>0</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-project-container13">
                        <label className="creator-studio-project-text25 Smallest">
                          <span>Team:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-project-value2">
                          <span>0</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <img
                      alt="image"
                      src="/radixlogo.svg"
                      className="creator-studio-project-image2"
                    />
                  </div>
                  <h1 className="creator-studio-project-text30 Heading3">
                    Collection One
                  </h1>
                  <h1 className="creator-studio-project-text31 Content">
                    <span>1500 Items</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <div className="creator-studio-project-collection1">
              <div className="creator-studio-project-container14">
                <img
                  src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="creator-studio-project-image3"
                />
              </div>
              <div className="creator-studio-project-container15">
                <div className="creator-studio-project-container16">
                  <h1 className="creator-studio-project-text34 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-project-text37 Heading3">
                  Collection Two
                </h1>
                <h1 className="creator-studio-project-text38 Content">
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project-collection2">
              <div className="creator-studio-project-container17">
                <img
                  src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="creator-studio-project-image4"
                />
              </div>
              <div className="creator-studio-project-container18">
                <div className="creator-studio-project-container19">
                  <h1 className="creator-studio-project-text41 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-project-text44 Heading3">
                  Collection Three
                </h1>
                <h1 className="creator-studio-project-text45 Content">
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project-collection3">
              <div className="creator-studio-project-container20">
                <img
                  src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                  className="creator-studio-project-image5"
                />
              </div>
              <div className="creator-studio-project-container21">
                <div className="creator-studio-project-container22">
                  <h1 className="creator-studio-project-text48 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-project-text51 Heading3">
                  Collection Four
                </h1>
                <h1 className="creator-studio-project-text52 Content">
                  <span>1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <TabsRowWithButtons></TabsRowWithButtons>
        <CollectionItemsContainer></CollectionItemsContainer>
      </LayoutWithSidebar>
      <div className="creator-studio-project-bottom-menu">
        <div className="creator-studio-project-container-left">
          <span className="creator-studio-project-text55">Selected items:</span>
          <span className="creator-studio-project-text56">3</span>
        </div>
        <div className="creator-studio-project-container-right">
          <button type="button" className="creator-studio-project-button">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon04 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-project-text57">
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
          <button type="button" className="creator-studio-project-button1">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon06 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-project-text60">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-project-button2">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon08 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-project-text63">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-project-button3">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon10 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-project-text66">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-project-button4">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon12 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-project-text69">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-project-navlink4"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-project-icon14 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-project-text72">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button type="button" className="creator-studio-project-button5">
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-project-image6"
            />
            <span className="creator-studio-project-text75">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioProject
