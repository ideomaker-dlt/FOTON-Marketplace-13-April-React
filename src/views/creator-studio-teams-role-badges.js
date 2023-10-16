import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import AssignBadge from '../components/assign-badge'
import './creator-studio-teams-role-badges.css'

const CreatorStudioTeamsRoleBadges = (props) => {
  return (
    <div className="creator-studio-teams-role-badges-container">
      <Helmet>
        <title>
          Creator-Studio-Teams-RoleBadges - FOTON Marketplace for NFTs and
          Digital Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Teams-RoleBadges - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name36">
        <div className="creator-studio-teams-role-badges-header-creator">
          <div className="creator-studio-teams-role-badges-gray-overlay"></div>
          <div className="creator-studio-teams-role-badges-container01">
            <div className="creator-studio-teams-role-badges-container02">
              <div className="creator-studio-teams-role-badges-container03">
                <h1 className="creator-studio-teams-role-badges-text">
                  Role: Owner
                </h1>
                <h1 className="creator-studio-teams-role-badges-text001">
                  <span>
                    Project Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="creator-studio-teams-role-badges-text003">
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
                  <span className="creator-studio-teams-role-badges-text005">
                    ●
                  </span>
                  <span> 4 Badges </span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-buttons">
              <button className="creator-studio-teams-role-badges-button button">
                <span className="creator-studio-teams-role-badges-text008">
                  <span>Save</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="creator-studio-teams-role-badges-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-teams-role-badges-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-teams-role-badges-dropdown-toggle"
              >
                <span className="creator-studio-teams-role-badges-text011">
                  Category
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-teams-role-badges-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-role-badges-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-teams-role-badges-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-teams-role-badges-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-badges-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-badges-dropdown-toggle1"
                  >
                    <span className="creator-studio-teams-role-badges-text012">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-role-badges-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-role-badges-dropdown-toggle2"
                  >
                    <span className="creator-studio-teams-role-badges-text013">
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
        <div className="creator-studio-teams-role-badges-tabs-row">
          <div className="creator-studio-teams-role-badges-container05">
            <Link
              to="/creator-studio-teams"
              className="creator-studio-teams-role-badges-navlink"
            >
              &lt; go back
            </Link>
            <div className="creator-studio-teams-role-badges-container06">
              <span className="creator-studio-teams-role-badges-text014">
                Role:
              </span>
              <span className="creator-studio-teams-role-badges-text015">
                Owner
              </span>
            </div>
            <Link
              to="/creator-studio-teams-role-preview"
              className="creator-studio-teams-role-badges-navlink1"
            >
              Preview
            </Link>
            <Link
              to="/creator-studio-teams-role-permissions"
              className="creator-studio-teams-role-badges-navlink2"
            >
              Permissions
            </Link>
            <span className="creator-studio-teams-role-badges-text016">
              Badges
            </span>
          </div>
        </div>
        <div className="creator-studio-teams-role-badges-roles-container">
          <div className="creator-studio-teams-role-badges-container07">
            <div className="creator-studio-teams-role-badges-define-role">
              <label className="creator-studio-teams-role-badges-text017">
                Preview of the Badge for this Role
              </label>
              <div className="creator-studio-teams-role-badges-container08">
                <div className="creator-studio-teams-role-badges-badge-preview">
                  <div className="creator-studio-teams-role-badges-image-preview">
                    <div className="creator-studio-teams-role-badges-gray-background">
                      <div className="creator-studio-teams-role-badges-image-badge">
                        <div className="creator-studio-teams-role-badges-watermark-container">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-badges-watermark-foton-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-studio-teams-role-badges-info-badge">
                    <h1 className="creator-studio-teams-role-badges-text018 Heading3">
                      Owner Badge
                    </h1>
                    <span className="creator-studio-teams-role-badges-text019">
                      This is a Role Badge created with FOTON.
                    </span>
                    <div className="creator-studio-teams-role-badges-container09">
                      <div className="creator-studio-teams-role-badges-container10">
                        <span className="creator-studio-teams-role-badges-text020">
                          Role:
                        </span>
                        <span className="creator-studio-teams-role-badges-text021">
                          Owner
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-badges-container11">
                        <span className="creator-studio-teams-role-badges-text022">
                          At Project:
                        </span>
                        <span className="creator-studio-teams-role-badges-text023">
                          Project Name
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-badges-container12">
                        <span className="creator-studio-teams-role-badges-text024">
                          Supply:
                        </span>
                        <span className="creator-studio-teams-role-badges-text025">
                          1
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-badges-container13">
                        <span className="creator-studio-teams-role-badges-text026">
                          Tags
                        </span>
                        <span className="creator-studio-teams-role-badges-text027">
                          Foton, Owner, Role, Badge 
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-badges-container14">
                        <span className="creator-studio-teams-role-badges-text028">
                          Note:
                        </span>
                        <span className="creator-studio-teams-role-badges-text029">
                          This gives you Superpowers :)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container15">
                  <div className="creator-studio-teams-role-badges-fields">
                    <h3 className="creator-studio-teams-role-badges-header-label padding-4px-left Content18">
                      Create and Manage Role Badges
                    </h3>
                    <div className="creator-studio-teams-role-badges-field">
                      <div className="creator-studio-teams-role-badges-container16">
                        <label className="creator-studio-teams-role-badges-text030 padding-4px-left">
                          <span className="creator-studio-teams-role-badges-text031">
                            Amount:
                          </span>
                          <br></br>
                        </label>
                        <span className="creator-studio-teams-role-badges-text033 padding-4px-left">
                          The name and details are generated automatically based
                          on the Role.
                        </span>
                      </div>
                      <div className="creator-studio-teams-role-badges-container17">
                        <div className="creator-studio-teams-role-badges-item-counter">
                          <button className="creator-studio-teams-role-badges-button01 button">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="creator-studio-teams-role-badges-icon04 fill-color-white"
                            >
                              <path d="M810 554h-596v-84h596v84z"></path>
                            </svg>
                          </button>
                          <input
                            type="text"
                            enctype="The Funky Apes Crew..."
                            placeholder="1"
                            className="creator-studio-teams-role-badges-textinput"
                          />
                          <button className="creator-studio-teams-role-badges-button02 button">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="creator-studio-teams-role-badges-icon06 fill-color-white"
                            >
                              <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="creator-studio-teams-role-badges-button03 button">
                          <span className="creator-studio-teams-role-badges-text034">
                            <span>
                              Create
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                          </span>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="creator-studio-teams-role-badges-icon08"
                          >
                            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="creator-studio-teams-role-badges-bottom-buttons">
                      <span className="creator-studio-teams-role-badges-text037 padding-4px-left">
                        * Creating or Deleting badges involves network fees. 
                      </span>
                      <div className="creator-studio-teams-role-badges-info-text">
                        <span className="creator-studio-teams-role-badges-text038 padding-4px-left">
                          <span>
                            Why do you need Badges and how do they work?
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text041 padding-4px-left">
                          <span>
                            1. On Radix and therefore FOTON, badges are NFTs
                            that give their holders access to stuff.
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text044 padding-4px-left">
                          <span>
                            2. In this case, Role Badges, give access to your
                            Projects and Collections. Who has them can
                            contribute and edit.
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text047 padding-4px-left">
                          <span>
                            3. After you create a Badge you have to Assign it to
                            someone you trust and you&apos;d like to collaborate
                            with.
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text050 padding-4px-left">
                          <span>
                            4. If you change your mind and want to revoke this
                            Role for a member of your Team, you&apos;ll have to
                            Recall the Badge. 
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text053 padding-4px-left">
                          <span>
                            5. Badges can be reused and deleted.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                        </span>
                        <span className="creator-studio-teams-role-badges-text056 padding-4px-left">
                          <span>
                            6. The Owner Badges are the most powerful and give
                            full access and ownership over Projects. Use with
                            care!
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
        </div>
        <div className="creator-studio-teams-role-badges-tabs-row1">
          <div className="creator-studio-teams-role-badges-container18">
            <div className="creator-studio-teams-role-badges-container19">
              <span className="creator-studio-teams-role-badges-text059">
                {' '}
                Manage Role Badges
              </span>
            </div>
            <div className="creator-studio-teams-role-badges-container20">
              <span className="creator-studio-teams-role-badges-text060">
                {' '}
                Current Supply:
              </span>
              <span className="creator-studio-teams-role-badges-text061">
                4
              </span>
            </div>
          </div>
        </div>
        <div className="creator-studio-teams-role-badges-roles-container1">
          <div className="creator-studio-teams-role-badges-container21">
            <div className="creator-studio-teams-role-badges-role">
              <div className="creator-studio-teams-role-badges-container22 icon-row-header">
                <div className="creator-studio-teams-role-badges-image-preview1">
                  <div className="creator-studio-teams-role-badges-gray-background1">
                    <div className="creator-studio-teams-role-badges-image-badge1">
                      <div className="creator-studio-teams-role-badges-watermark-container1">
                        <img
                          alt="image"
                          src="/Foton Images/foton_badge_watermark5.svg"
                          className="creator-studio-teams-role-badges-watermark-foton-image1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role-badges-container23">
                <div className="creator-studio-teams-role-badges-container24">
                  <div className="creator-studio-teams-role-badges-container25">
                    <h2 className="creator-studio-teams-role-badges-text062">
                      Owner Badge
                    </h2>
                  </div>
                  <div className="creator-studio-teams-role-badges-badge-info">
                    <div className="creator-studio-teams-role-badges-container26">
                      <img
                        alt="image"
                        src="/Icons Imported/check_circle.svg"
                        className="creator-studio-teams-role-badges-image"
                      />
                      <label className="creator-studio-teams-role-badges-text063">
                        <span>Assigned</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-role-badges-container27">
                      <img
                        alt="image"
                        src="/Icons Imported/account_circle_green.svg"
                        className="creator-studio-teams-role-badges-image01"
                      />
                      <label className="creator-studio-teams-role-badges-text066">
                        <span>Member Name</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container28">
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button04"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/undo_purple.svg"
                      className="creator-studio-teams-role-badges-image02"
                    />
                    <span className="creator-studio-teams-role-badges-text069">
                      <span>Recall Badge</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-role1">
              <div className="creator-studio-teams-role-badges-container29 icon-row-header">
                <div className="creator-studio-teams-role-badges-container30 icon-row-header">
                  <div className="creator-studio-teams-role-badges-image-preview2">
                    <div className="creator-studio-teams-role-badges-gray-background2">
                      <div className="creator-studio-teams-role-badges-image-badge2">
                        <div className="creator-studio-teams-role-badges-watermark-container2">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-badges-watermark-foton-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role-badges-container31">
                <div className="creator-studio-teams-role-badges-container32">
                  <div className="creator-studio-teams-role-badges-container33">
                    <h2 className="creator-studio-teams-role-badges-text072">
                      Owner Badge
                    </h2>
                  </div>
                  <div className="creator-studio-teams-role-badges-badge-info1">
                    <div className="creator-studio-teams-role-badges-container34">
                      <img
                        alt="image"
                        src="/Icons Imported/brightness_1.svg"
                        className="creator-studio-teams-role-badges-image03"
                      />
                      <label className="creator-studio-teams-role-badges-text073">
                        <span>Not Assigned</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-role-badges-container35">
                      <img
                        alt="image"
                        src="/Icons Imported/account_circle_green.svg"
                        className="creator-studio-teams-role-badges-image04"
                      />
                      <label className="creator-studio-teams-role-badges-text076">
                        <span>None</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container36">
                  <AssignBadge></AssignBadge>
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button05"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/delete_forever.svg"
                      className="creator-studio-teams-role-badges-image05"
                    />
                    <span className="creator-studio-teams-role-badges-text079">
                      <span>Delete</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-role2">
              <div className="creator-studio-teams-role-badges-container37 icon-row-header">
                <div className="creator-studio-teams-role-badges-container38 icon-row-header">
                  <div className="creator-studio-teams-role-badges-image-preview3">
                    <div className="creator-studio-teams-role-badges-gray-background3">
                      <div className="creator-studio-teams-role-badges-image-badge3">
                        <div className="creator-studio-teams-role-badges-watermark-container3">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-badges-watermark-foton-image3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role-badges-container39">
                <div className="creator-studio-teams-role-badges-container40">
                  <div className="creator-studio-teams-role-badges-container41">
                    <h2 className="creator-studio-teams-role-badges-text082">
                      Owner Badge
                    </h2>
                  </div>
                  <div className="creator-studio-teams-role-badges-badge-info2">
                    <div className="creator-studio-teams-role-badges-container42">
                      <img
                        alt="image"
                        src="/Icons Imported/brightness_1.svg"
                        className="creator-studio-teams-role-badges-image06"
                      />
                      <label className="creator-studio-teams-role-badges-text083">
                        <span>Not Assigned</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-role-badges-container43">
                      <img
                        alt="image"
                        src="/Icons Imported/account_circle_green.svg"
                        className="creator-studio-teams-role-badges-image07"
                      />
                      <label className="creator-studio-teams-role-badges-text086">
                        <span>None</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container44">
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button06"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/person_add.svg"
                      className="creator-studio-teams-role-badges-image08"
                    />
                    <span className="creator-studio-teams-role-badges-text089">
                      <span>Assign Badge</span>
                      <br></br>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button07"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/delete_forever.svg"
                      className="creator-studio-teams-role-badges-image09"
                    />
                    <span className="creator-studio-teams-role-badges-text092">
                      <span>Delete</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-role3">
              <div className="creator-studio-teams-role-badges-container45 icon-row-header">
                <div className="creator-studio-teams-role-badges-container46 icon-row-header">
                  <div className="creator-studio-teams-role-badges-image-preview4">
                    <div className="creator-studio-teams-role-badges-gray-background4">
                      <div className="creator-studio-teams-role-badges-image-badge4">
                        <div className="creator-studio-teams-role-badges-watermark-container4">
                          <img
                            alt="image"
                            src="/Foton Images/foton_badge_watermark5.svg"
                            className="creator-studio-teams-role-badges-watermark-foton-image4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role-badges-container47">
                <div className="creator-studio-teams-role-badges-container48">
                  <div className="creator-studio-teams-role-badges-container49">
                    <h2 className="creator-studio-teams-role-badges-text095">
                      Owner Badge
                    </h2>
                  </div>
                  <div className="creator-studio-teams-role-badges-badge-info3">
                    <div className="creator-studio-teams-role-badges-container50">
                      <img
                        alt="image"
                        src="/Icons Imported/brightness_1.svg"
                        className="creator-studio-teams-role-badges-image10"
                      />
                      <label className="creator-studio-teams-role-badges-text096">
                        <span>Not Assigned</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-role-badges-container51">
                      <img
                        alt="image"
                        src="/Icons Imported/account_circle_green.svg"
                        className="creator-studio-teams-role-badges-image11"
                      />
                      <label className="creator-studio-teams-role-badges-text099">
                        <span>None</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container52">
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button08"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/person_add.svg"
                      className="creator-studio-teams-role-badges-image12"
                    />
                    <span className="creator-studio-teams-role-badges-text102">
                      <span>Assign Badge</span>
                      <br></br>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="creator-studio-teams-role-badges-button09"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/delete_forever.svg"
                      className="creator-studio-teams-role-badges-image13"
                    />
                    <span className="creator-studio-teams-role-badges-text105">
                      <span>Delete</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-role4">
              <div className="icon-row-header">
                <img
                  src="/Icons Imported/badge.svg"
                  className="creator-studio-teams-role-badges-image14"
                />
              </div>
              <div className="creator-studio-teams-role-badges-container54">
                <div className="creator-studio-teams-role-badges-container55">
                  <div className="creator-studio-teams-role-badges-container56">
                    <h2 className="creator-studio-teams-role-badges-text108">
                      Owner Badge
                    </h2>
                  </div>
                  <div className="creator-studio-teams-role-badges-badge-info4">
                    <div className="creator-studio-teams-role-badges-container57">
                      <img
                        alt="image"
                        src="/Icons Imported/brightness_1.svg"
                        className="creator-studio-teams-role-badges-image15"
                      />
                      <label className="creator-studio-teams-role-badges-text109">
                        <span>Not Assigned</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-role-badges-container58">
                      <img
                        alt="image"
                        src="/Icons Imported/account_circle_green.svg"
                        className="creator-studio-teams-role-badges-image16"
                      />
                      <label className="creator-studio-teams-role-badges-text112">
                        <span>None</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container59">
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-role-badges-navlink3"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/person_add.svg"
                      className="creator-studio-teams-role-badges-image17"
                    />
                    <span className="creator-studio-teams-role-badges-text115">
                      <span>Assign Badge</span>
                      <br></br>
                    </span>
                  </Link>
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-role-badges-navlink4"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/delete_forever.svg"
                      className="creator-studio-teams-role-badges-image18"
                    />
                    <span className="creator-studio-teams-role-badges-text118">
                      <span>Delete</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-role-badges-role5">
              <div className="icon-row-header">
                <img
                  src="/Icons Imported/badge.svg"
                  className="creator-studio-teams-role-badges-image19"
                />
              </div>
              <div className="creator-studio-teams-role-badges-container61">
                <div className="creator-studio-teams-role-badges-container62">
                  <h2 className="creator-studio-teams-role-badges-text121">
                    Owner @ Project Name
                  </h2>
                </div>
                <div className="creator-studio-teams-role-badges-badge-info5">
                  <div className="creator-studio-teams-role-badges-container63">
                    <img
                      alt="image"
                      src="/Icons Imported/brightness_1.svg"
                      className="creator-studio-teams-role-badges-image20"
                    />
                    <label className="creator-studio-teams-role-badges-text122">
                      <span>Not Assigned</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-teams-role-badges-container64">
                    <img
                      alt="image"
                      src="/Icons Imported/account_circle_green.svg"
                      className="creator-studio-teams-role-badges-image21"
                    />
                    <label className="creator-studio-teams-role-badges-text125">
                      <span>None</span>
                      <br></br>
                    </label>
                  </div>
                </div>
                <div className="creator-studio-teams-role-badges-container65">
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-role-badges-navlink5"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/person_add.svg"
                      className="creator-studio-teams-role-badges-image22"
                    />
                    <span className="creator-studio-teams-role-badges-text128">
                      <span>Assign Badge</span>
                      <br></br>
                    </span>
                  </Link>
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-role-badges-navlink6"
                  >
                    <img
                      alt="image"
                      src="/Icons Imported/delete_forever.svg"
                      className="creator-studio-teams-role-badges-image23"
                    />
                    <span className="creator-studio-teams-role-badges-text131">
                      <span>Delete</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-teams-role-badges-bottom-menu">
        <div className="creator-studio-teams-role-badges-container-left">
          <span className="creator-studio-teams-role-badges-text134">
            Selected items:
          </span>
          <span className="creator-studio-teams-role-badges-text135">3</span>
        </div>
        <div className="creator-studio-teams-role-badges-container-right">
          <button
            type="button"
            className="creator-studio-teams-role-badges-button10"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon10 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text136">
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
            className="creator-studio-teams-role-badges-button11"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon12 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text139">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-badges-button12"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon14 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text142">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-badges-button13"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon16 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text145">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button
            type="button"
            className="creator-studio-teams-role-badges-button14"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon18 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text148">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-teams-role-badges-navlink7"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-role-badges-icon20 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-teams-role-badges-text151">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button
            type="button"
            className="creator-studio-teams-role-badges-button15"
          >
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-teams-role-badges-image24"
            />
            <span className="creator-studio-teams-role-badges-text154">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioTeamsRoleBadges
