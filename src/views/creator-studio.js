import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './creator-studio.css'

const CreatorStudio = (props) => {
  return (
    <div className="creator-studio-container">
      <Helmet>
        <title>
          Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name">
        <div className="creator-studio-header-creator">
          <div className="creator-studio-container01">
            <div className="creator-studio-container02">
              <div className="creator-studio-container03">
                <img
                  src="/creatorstudiologo.svg"
                  className="creator-studio-image"
                />
              </div>
              <div className="creator-studio-container04">
                <h1 className="creator-studio-text">Creator Studio</h1>
                <h1 className="creator-studio-text01">
                  <span>Version 0.1 - Alpha Stage 1</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-buttons">
              <Link to="/add-project" className="creator-studio-navlink button">
                <span className="creator-studio-text04">
                  <span>New Project</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="creator-studio-gray-overlay"></div>
        </div>
        <div className="creator-studio-tabs-row">
          <div className="creator-studio-container05">
            <span className="creator-studio-text07">My Projects</span>
          </div>
        </div>
        <div className="creator-studio-projects-container">
          <div className="creator-studio-container06">
            <Link to="/creator-studio-project">
              <div className="creator-studio-project">
                <div className="creator-studio-container07">
                  <img
                    src="/hexagonmaskbordergray.svg"
                    className="creator-studio-mask"
                  />
                  <img
                    src="/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png"
                    className="creator-studio-image1"
                  />
                </div>
                <div className="creator-studio-container08">
                  <div className="creator-studio-container09">
                    <div className="creator-studio-container10">
                      <div className="creator-studio-container11">
                        <label className="creator-studio-text08 Smallest">
                          <span className="Smallest">Role:</span>
                          <br className="Smallest"></br>
                        </label>
                        <label className="creator-studio-value">
                          <span>Admin</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-container12">
                        <label className="creator-studio-text13 Smallest">
                          <span>Badges:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-value1">
                          <span>1</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-container13">
                        <label className="creator-studio-text18 Smallest">
                          <span>Team:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-value2">
                          <span>1</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <img
                      alt="image"
                      src="/radixlogo.svg"
                      className="creator-studio-image2"
                    />
                    <button
                      type="button"
                      className="creator-studio-button button"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="creator-studio-icon"
                      >
                        <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                      <span className="creator-studio-text23">HAS BADGE</span>
                    </button>
                  </div>
                  <h1 className="creator-studio-text24 Heading3">
                    Project One
                  </h1>
                  <h1 className="creator-studio-text25 Content">
                    <span>2 Collections, 1500 Items</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <div className="creator-studio-project1">
              <div className="creator-studio-container14">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask1"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image3"
                />
              </div>
              <div className="creator-studio-container15">
                <div className="creator-studio-container16">
                  <h1 className="creator-studio-text28 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text31 Heading3">Project One</h1>
                <h1 className="creator-studio-text32 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project2">
              <div className="creator-studio-container17">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask2"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image4"
                />
              </div>
              <div className="creator-studio-container18">
                <div className="creator-studio-container19">
                  <h1 className="creator-studio-text35 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text38 Heading3">Project One</h1>
                <h1 className="creator-studio-text39 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project3">
              <div className="creator-studio-container20">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask3"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image5"
                />
              </div>
              <div className="creator-studio-container21">
                <div className="creator-studio-container22">
                  <h1 className="creator-studio-text42 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text45 Heading3">Project One</h1>
                <h1 className="creator-studio-text46 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project4">
              <div className="creator-studio-container23">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask4"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image6"
                />
              </div>
              <div className="creator-studio-container24">
                <div className="creator-studio-container25">
                  <h1 className="creator-studio-text49 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text52 Heading3">Project One</h1>
                <h1 className="creator-studio-text53 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-studio-tabs-row1">
          <div className="creator-studio-container26">
            <span className="creator-studio-text56">Resources</span>
          </div>
        </div>
        <div className="creator-studio-resources">
          <div className="creator-studio-container27">
            <Link to="/creator-studio-project">
              <div className="creator-studio-item">
                <div className="creator-studio-container28">
                  <div className="creator-studio-container29">
                    <h1 className="creator-studio-text57 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text60 Heading3">
                    Introduction Video
                  </h1>
                  <h1 className="creator-studio-text61 Content">
                    <span>Watch how the platform works</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/creator-studio-project">
              <div className="creator-studio-item1">
                <div className="creator-studio-container30">
                  <div className="creator-studio-container31">
                    <h1 className="creator-studio-text64 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text67 Heading3">
                    What are NFTs?
                  </h1>
                  <h1 className="creator-studio-text68 Content">
                    <span>Short intro</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/creator-studio-project">
              <div className="creator-studio-item2">
                <div className="creator-studio-container32">
                  <div className="creator-studio-container33">
                    <h1 className="creator-studio-text71 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text74 Heading3">Guide Book</h1>
                  <h1 className="creator-studio-text75 Content">
                    <span>FAQ and more</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default CreatorStudio
