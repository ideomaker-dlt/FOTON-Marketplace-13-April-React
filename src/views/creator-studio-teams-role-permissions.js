import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import PermissionsDrawer from '../components/permissions-drawer'
import './creator-studio-teams-role-permissions.css'

const CreatorStudioTeamsRolePermissions = (props) => {
  return (
    <div className="creator-studio-teams-role-permissions-container">
      <Helmet>
        <title>
          Creator-Studio-Teams-RolePermissions - FOTON - Web3's Digital Assets
          Hub and NFTs Marketplace on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Creator-Studio-Teams-RolePermissions - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name37">
        <div className="creator-studio-teams-role-permissions-header-creator">
          <div className="creator-studio-teams-role-permissions-gray-overlay"></div>
          <div className="creator-studio-teams-role-permissions-container01">
            <div className="creator-studio-teams-role-permissions-container02">
              <div className="creator-studio-teams-role-permissions-container03">
                <h1 className="creator-studio-teams-role-permissions-text">
                  Role: Owner
                </h1>
                <h1 className="creator-studio-teams-role-permissions-text001">
                  <span>
                    Project Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="creator-studio-teams-role-permissions-text003">
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
                  <span className="creator-studio-teams-role-permissions-text005">
                    ●
                  </span>
                  <span> 4 Badges </span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-teams-role-permissions-buttons">
              <button className="creator-studio-teams-role-permissions-button button">
                <span className="creator-studio-teams-role-permissions-text008">
                  <span>Save</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="creator-studio-teams-role-permissions-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-teams-role-permissions-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-teams-role-permissions-dropdown-toggle"
              >
                <span className="creator-studio-teams-role-permissions-text011">
                  Category
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-teams-role-permissions-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-role-permissions-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-teams-role-permissions-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-teams-role-permissions-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-permissions-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-permissions-dropdown-toggle1"
                  >
                    <span className="creator-studio-teams-role-permissions-text012">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-permissions-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-permissions-dropdown-toggle2"
                  >
                    <span className="creator-studio-teams-role-permissions-text013">
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
        <div className="creator-studio-teams-role-permissions-tabs-row">
          <div className="creator-studio-teams-role-permissions-container05">
            <Link
              to="/creator-studio-teams"
              className="creator-studio-teams-role-permissions-navlink"
            >
              &lt; go back
            </Link>
            <div className="creator-studio-teams-role-permissions-container06">
              <span className="creator-studio-teams-role-permissions-text014">
                Role:
              </span>
              <span className="creator-studio-teams-role-permissions-text015">
                Owner
              </span>
            </div>
            <Link
              to="/creator-studio-teams-role-preview"
              className="creator-studio-teams-role-permissions-navlink1"
            >
              Definition
            </Link>
            <span className="creator-studio-teams-role-permissions-text016">
              Permissions
            </span>
            <Link
              to="/creator-studio-teams-role-badges"
              className="creator-studio-teams-role-permissions-navlink2"
            >
              Badges
            </Link>
          </div>
        </div>
        <div className="creator-studio-teams-role-permissions-roles-container">
          <div className="creator-studio-teams-role-permissions-container07">
            <div className="creator-studio-teams-role-permissions-define-role">
              <label className="creator-studio-teams-role-permissions-text017">
                Preview of the Badge for this Role
              </label>
              <div className="creator-studio-teams-role-permissions-container08">
                <div className="creator-studio-teams-role-permissions-badge-preview">
                  <div className="creator-studio-teams-role-permissions-image-preview">
                    <div className="creator-studio-teams-role-permissions-gray-background">
                      <div className="creator-studio-teams-role-permissions-image-badge">
                        <div className="creator-studio-teams-role-permissions-watermark-container">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-permissions-watermark-foton-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-studio-teams-role-permissions-info-badge">
                    <h1 className="creator-studio-teams-role-permissions-text018 Heading3">
                      Owner Badge
                    </h1>
                    <span className="creator-studio-teams-role-permissions-text019">
                      This is a Role Badge created with FOTON.
                    </span>
                    <div className="creator-studio-teams-role-permissions-container09">
                      <div className="creator-studio-teams-role-permissions-container10">
                        <span className="creator-studio-teams-role-permissions-text020">
                          Role:
                        </span>
                        <span className="creator-studio-teams-role-permissions-text021">
                          Owner
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container11">
                        <span className="creator-studio-teams-role-permissions-text022">
                          At Project:
                        </span>
                        <span className="creator-studio-teams-role-permissions-text023">
                          Project Name
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container12">
                        <span className="creator-studio-teams-role-permissions-text024">
                          Supply:
                        </span>
                        <span className="creator-studio-teams-role-permissions-text025">
                          1
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container13">
                        <span className="creator-studio-teams-role-permissions-text026">
                          Tags
                        </span>
                        <span className="creator-studio-teams-role-permissions-text027">
                          Foton, Owner, Role, Badge 
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container14">
                        <span className="creator-studio-teams-role-permissions-text028">
                          Note:
                        </span>
                        <span className="creator-studio-teams-role-permissions-text029">
                          This gives you Superpowers :)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-permissions-rows-permissions">
                  <div className="creator-studio-teams-role-permissions-header-permissions">
                    <div className="creator-studio-teams-role-permissions-header-label">
                      <div className="creator-studio-teams-role-permissions-container15 padding-4px-left">
                        <label className="creator-studio-teams-role-permissions-text030 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text031">
                            1. Every Role has its own Badge type, which gives
                            access to only 1 Member per Badge.
                          </span>
                          <br></br>
                          <span>
                            2. The name and most of the details are generated
                            automatically based on the Role and Project it
                            belongs to.
                          </span>
                          <br></br>
                          <span>
                            3. FOTON will add always the watermark to Role
                            Badges, to eliminate confusion with the regular ones
                            in the Radix wallet.
                          </span>
                          <br></br>
                        </label>
                        <h3 className="creator-studio-teams-role-permissions-header-label1 Content18">
                          <span className="Content18 creator-studio-teams-role-permissions-text037">
                            Master Role:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br className="Content18"></br>
                        </h3>
                        <label className="creator-studio-teams-role-permissions-text039 padding-4px-left Content18">
                          <span className="creator-studio-teams-role-permissions-text040">
                            Owner
                          </span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-container16">
                      <Link
                        to="/creator-studio-teams-role-badges"
                        className="creator-studio-teams-role-permissions-navlink3 Heading3"
                      >
                        Permissions:
                      </Link>
                      <span className="creator-studio-teams-role-permissions-text042">
                        Projects
                      </span>
                      <Link
                        to="/creator-studio-teams-role-badges"
                        className="creator-studio-teams-role-permissions-navlink4"
                      >
                        Collections
                      </Link>
                    </div>
                  </div>
                  <div className="creator-studio-teams-role-permissions-container17">
                    <div className="creator-studio-teams-role-permissions-header-label2">
                      <div className="creator-studio-teams-role-permissions-container18 padding-4px-left">
                        <label className="creator-studio-teams-role-permissions-text043 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text044">
                            1. Every Role has its own Badge type, which gives
                            access to only 1 Member per Badge.
                          </span>
                          <br></br>
                          <span>
                            2. The name and most of the details are generated
                            automatically based on the Role and Project it
                            belongs to.
                          </span>
                          <br></br>
                          <span>
                            3. FOTON will add always the watermark to Role
                            Badges, to eliminate confusion with the regular ones
                            in the Radix wallet.
                          </span>
                          <br></br>
                        </label>
                        <h3 className="creator-studio-teams-role-permissions-header-label3 Content18">
                          <span className="creator-studio-teams-role-permissions-text050">
                            Master Permissions
                          </span>
                          <br></br>
                        </h3>
                        <label className="creator-studio-teams-role-permissions-text052 Content18 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text053">
                            Applying by default to all Projects
                          </span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item">
                      <div className="creator-studio-teams-role-permissions-container19">
                        <label className="creator-studio-teams-role-permissions-text055 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text056">
                            Can Edit
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text058 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle">
                        <div className="creator-studio-teams-role-permissions-container20">
                          <div className="creator-studio-teams-role-permissions-container21">
                            <img
                              alt="image"
                              src="/Icons Imported/lock-1.svg"
                              className="creator-studio-teams-role-permissions-image"
                            />
                          </div>
                        </div>
                        <PermissionsDrawer></PermissionsDrawer>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item1">
                      <div className="creator-studio-teams-role-permissions-container22">
                        <label className="creator-studio-teams-role-permissions-text059 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text060">
                            Can Create Collections
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text062 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle1">
                        <div className="creator-studio-teams-role-permissions-container23">
                          <div className="creator-studio-teams-role-permissions-container24">
                            <img
                              alt="image"
                              src="/Icons Imported/check.svg"
                              className="creator-studio-teams-role-permissions-image01"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button01"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image02"
                          />
                          <span className="creator-studio-teams-role-permissions-text063">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item2">
                      <div className="creator-studio-teams-role-permissions-container25">
                        <label className="creator-studio-teams-role-permissions-text066 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text067">
                            Can Mint and Publish
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text069 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle2">
                        <div className="creator-studio-teams-role-permissions-container26">
                          <div className="creator-studio-teams-role-permissions-container27">
                            <img
                              alt="image"
                              src="/Icons Imported/check.svg"
                              className="creator-studio-teams-role-permissions-image03"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button02"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image04"
                          />
                          <span className="creator-studio-teams-role-permissions-text070">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item3">
                      <div className="creator-studio-teams-role-permissions-container28">
                        <label className="creator-studio-teams-role-permissions-text073 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text074">
                            Can Withdraw Items
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text076 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle3">
                        <div className="creator-studio-teams-role-permissions-container29">
                          <div className="creator-studio-teams-role-permissions-container30">
                            <img
                              alt="image"
                              src="/Icons Imported/close1.svg"
                              className="creator-studio-teams-role-permissions-image05"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button03"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image06"
                          />
                          <span className="creator-studio-teams-role-permissions-text077">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item4">
                      <div className="creator-studio-teams-role-permissions-container31">
                        <label className="creator-studio-teams-role-permissions-text080 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text081">
                            Can Withdraw Tokens
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text083 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle4">
                        <div className="creator-studio-teams-role-permissions-container32">
                          <div className="creator-studio-teams-role-permissions-container33">
                            <img
                              alt="image"
                              src="/Icons Imported/check.svg"
                              className="creator-studio-teams-role-permissions-image07"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button04"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image08"
                          />
                          <span className="creator-studio-teams-role-permissions-text084">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item5">
                      <div className="creator-studio-teams-role-permissions-container34">
                        <label className="creator-studio-teams-role-permissions-text087 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text088">
                            Can Add Items
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text090 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle5">
                        <div className="creator-studio-teams-role-permissions-container35">
                          <div className="creator-studio-teams-role-permissions-container36">
                            <img
                              alt="image"
                              src="/Icons Imported/close1.svg"
                              className="creator-studio-teams-role-permissions-image09"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button05"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image10"
                          />
                          <span className="creator-studio-teams-role-permissions-text091">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item6">
                      <div className="creator-studio-teams-role-permissions-container37">
                        <label className="creator-studio-teams-role-permissions-text094 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text095">
                            Can Manage Roles
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text097 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle6">
                        <div className="creator-studio-teams-role-permissions-container38">
                          <div className="creator-studio-teams-role-permissions-container39">
                            <img
                              alt="image"
                              src="/Icons Imported/close1.svg"
                              className="creator-studio-teams-role-permissions-image11"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button06"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image12"
                          />
                          <span className="creator-studio-teams-role-permissions-text098">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-permission-item7">
                      <div className="creator-studio-teams-role-permissions-container40">
                        <label className="creator-studio-teams-role-permissions-text101 padding-4px-left">
                          <span className="creator-studio-teams-role-permissions-text102">
                            Can Create and Delete Roles
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-permissions-text104 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-permissions-container-toggle7">
                        <div className="creator-studio-teams-role-permissions-container41">
                          <div className="creator-studio-teams-role-permissions-container42">
                            <img
                              alt="image"
                              src="/Icons Imported/close1.svg"
                              className="creator-studio-teams-role-permissions-image13"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="creator-studio-teams-role-permissions-button07"
                        >
                          <img
                            alt="image"
                            src="/Icons Imported/conversion_path.svg"
                            className="creator-studio-teams-role-permissions-image14"
                          />
                          <span className="creator-studio-teams-role-permissions-text105">
                            <span>Applies to</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-permissions-bottom-buttons">
                      <button className="creator-studio-teams-role-permissions-button08 button">
                        <span className="creator-studio-teams-role-permissions-text108">
                          <span>Save and Update</span>
                          <br></br>
                        </span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="creator-studio-teams-role-permissions-icon04"
                        >
                          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                        </svg>
                      </button>
                      <span className="creator-studio-teams-role-permissions-text111 padding-4px-left">
                        * Every permission update involves network fees. 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-teams-role-permissions-bottom-menu">
        <div className="creator-studio-teams-role-permissions-container-left">
          <span className="creator-studio-teams-role-permissions-text112">
            Selected items:
          </span>
          <span className="creator-studio-teams-role-permissions-text113">
            3
          </span>
        </div>
        <div className="creator-studio-teams-role-permissions-container-right">
          <button
            type="button"
            className="creator-studio-teams-role-permissions-button09"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon06 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text114">
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
            className="creator-studio-teams-role-permissions-button10"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon08 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text117">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-permissions-button11"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon10 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text120">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-permissions-button12"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon12 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text123">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-permissions-button13"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon14 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text126">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-teams-role-permissions-navlink5"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-permissions-icon16 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-teams-role-permissions-text129">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button
            type="button"
            className="creator-studio-teams-role-permissions-button14"
          >
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-teams-role-permissions-image15"
            />
            <span className="creator-studio-teams-role-permissions-text132">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioTeamsRolePermissions
