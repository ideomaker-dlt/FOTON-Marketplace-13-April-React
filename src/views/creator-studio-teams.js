import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './creator-studio-teams.css'

const CreatorStudioTeams = (props) => {
  return (
    <div className="creator-studio-teams-container">
      <Helmet>
        <title>
          Creator-Studio-Teams - FOTON - Web3's Digital Assets Hub and NFTs
          Marketplace on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Creator-Studio-Teams - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name34">
        <div className="creator-studio-teams-header-creator">
          <div className="creator-studio-teams-gray-overlay"></div>
          <div className="creator-studio-teams-container01">
            <div className="creator-studio-teams-container02">
              <div className="creator-studio-teams-container03">
                <h1 className="creator-studio-teams-text">Team</h1>
                <h1 className="creator-studio-teams-text001">
                  <span>8 Roles </span>
                  <span className="creator-studio-teams-text003">●</span>
                  <span> 14 Members</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-teams-buttons">
              <button className="creator-studio-teams-button button">
                <span className="creator-studio-teams-text006">
                  <span>Add Role</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="creator-studio-teams-container04">
            <div
              data-thq="thq-dropdown"
              className="creator-studio-teams-category list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="creator-studio-teams-dropdown-toggle"
              >
                <span className="creator-studio-teams-text009">Category</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-teams-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-icon"
                  >
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-teams-icon02 fill-color-gray"
                >
                  <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
                </svg>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="creator-studio-teams-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle01"
                  >
                    <span className="creator-studio-teams-text010">Edit</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle02"
                  >
                    <span className="creator-studio-teams-text011">
                      Duplicate
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="creator-studio-teams-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle03"
                  >
                    <span className="creator-studio-teams-text012">
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
        <div className="creator-studio-teams-master-roles">
          <div className="creator-studio-teams-tabs-row">
            <div className="creator-studio-teams-container05">
              <span className="creator-studio-teams-text013">Master Roles</span>
              <span className="creator-studio-teams-text014">Project Name</span>
              <span className="creator-studio-teams-text015">
                Applied to all Teams by default, unless Customised
              </span>
            </div>
            <div className="creator-studio-teams-filter-buttons">
              <div className="creator-studio-teams-timeframe">
                <button className="creator-studio-teams-button01">
                  <span className="creator-studio-teams-text016">
                    <span>1h</span>
                    <br></br>
                  </span>
                </button>
                <button className="creator-studio-teams-button02">
                  <span className="creator-studio-teams-text019">
                    <span>6h</span>
                    <br></br>
                  </span>
                </button>
                <button className="creator-studio-teams-button03">
                  <span className="creator-studio-teams-text022">
                    <span>24h</span>
                    <br></br>
                  </span>
                </button>
                <button className="creator-studio-teams-button04">
                  <span className="creator-studio-teams-text025">
                    <span>7d</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div
                data-thq="thq-dropdown"
                className="creator-studio-teams-sort-by list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="creator-studio-teams-dropdown-toggle04"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-icon04"
                  >
                    <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                  </svg>
                  <span className="creator-studio-teams-text028">
                    Sort by Power
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="creator-studio-teams-dropdown-arrow1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon06"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="creator-studio-teams-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="creator-studio-teams-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-teams-dropdown-toggle05"
                    >
                      <span className="creator-studio-teams-text029">
                        Power
                      </span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-teams-dropdown-toggle06"
                    >
                      <span className="creator-studio-teams-text030">Name</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-teams-dropdown-toggle07"
                    >
                      <span className="creator-studio-teams-text031">
                        Badges
                      </span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-teams-dropdown-toggle08"
                    >
                      <span className="creator-studio-teams-text032">
                        Members
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <button type="button" className="creator-studio-teams-button05">
                <svg
                  viewBox="0 0 1024 1024"
                  className="creator-studio-teams-icon08 fill-color-white"
                >
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
                <span className="creator-studio-teams-text033">
                  <span>Add Role</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="creator-studio-teams-roles-container">
            <div className="creator-studio-teams-container06">
              <div className="creator-studio-teams-role">
                <div className="icon-row-header">
                  <img
                    src="/Icons Imported/shield_person.svg"
                    className="creator-studio-teams-image"
                  />
                </div>
                <div className="creator-studio-teams-container08">
                  <div className="creator-studio-teams-container09">
                    <h2 className="creator-studio-teams-text036">Owner</h2>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon10 fill-color-gray"
                    >
                      <path d="M644 342v-86q0-54-39-93t-93-39-93 39-39 93v86h264zM512 726q34 0 60-26t26-60-26-60-60-26-60 26-26 60 26 60 60 26zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42z"></path>
                    </svg>
                  </div>
                  <div className="creator-studio-teams-badge-info">
                    <div className="creator-studio-teams-container10">
                      <img
                        alt="image"
                        src="/Icons Imported/badge.svg"
                        className="creator-studio-teams-image01"
                      />
                      <label className="creator-studio-teams-text037">
                        <span>Badges:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text040">
                        <span>2</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-container11">
                      <img
                        alt="image"
                        src="/Icons Imported/group_green.svg"
                        className="creator-studio-teams-image02"
                      />
                      <label className="creator-studio-teams-text043">
                        <span>Members:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text046">
                        <span>2</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                  <div className="creator-studio-teams-container12">
                    <Link
                      to="/creator-studio-teams-role-preview"
                      className="creator-studio-teams-navlink"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/deployed_code_account.svg"
                        className="creator-studio-teams-image03"
                      />
                      <span className="creator-studio-teams-text049">
                        <span>Manage</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role1">
                <div className="icon-row-header">
                  <img
                    src="/Icons Imported/shield_person.svg"
                    className="creator-studio-teams-image04"
                  />
                </div>
                <div className="creator-studio-teams-container14">
                  <div className="creator-studio-teams-container15">
                    <h2 className="creator-studio-teams-text052">Admin</h2>
                  </div>
                  <div className="creator-studio-teams-badge-info1">
                    <div className="creator-studio-teams-container16">
                      <img
                        alt="image"
                        src="/Icons Imported/badge.svg"
                        className="creator-studio-teams-image05"
                      />
                      <label className="creator-studio-teams-text053">
                        <span>Badges:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text056">
                        <span>5</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-container17">
                      <img
                        alt="image"
                        src="/Icons Imported/group_green.svg"
                        className="creator-studio-teams-image06"
                      />
                      <label className="creator-studio-teams-text059">
                        <span>Members:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text062">
                        <span>2</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                  <div className="creator-studio-teams-container18">
                    <Link
                      to="/creator-studio-teams-role-preview"
                      className="creator-studio-teams-navlink01"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/deployed_code_account.svg"
                        className="creator-studio-teams-image07"
                      />
                      <span className="creator-studio-teams-text065">
                        <span>Manage</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role2">
                <div className="icon-row-header">
                  <img
                    src="/Icons Imported/shield_person.svg"
                    className="creator-studio-teams-image08"
                  />
                </div>
                <div className="creator-studio-teams-container20">
                  <div className="creator-studio-teams-container21">
                    <h2 className="creator-studio-teams-text068">Editor</h2>
                  </div>
                  <div className="creator-studio-teams-badge-info2">
                    <div className="creator-studio-teams-container22">
                      <img
                        alt="image"
                        src="/Icons Imported/badge.svg"
                        className="creator-studio-teams-image09"
                      />
                      <label className="creator-studio-teams-text069">
                        <span>Badges:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text072">
                        <span>4</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-container23">
                      <img
                        alt="image"
                        src="/Icons Imported/group_green.svg"
                        className="creator-studio-teams-image10"
                      />
                      <label className="creator-studio-teams-text075">
                        <span>Members:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text078">
                        <span>1</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                  <div className="creator-studio-teams-container24">
                    <Link
                      to="/creator-studio-teams-role-preview"
                      className="creator-studio-teams-navlink02"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/deployed_code_account.svg"
                        className="creator-studio-teams-image11"
                      />
                      <span className="creator-studio-teams-text081">
                        <span>Manage</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role3">
                <div className="icon-row-header">
                  <img
                    src="/Icons Imported/shield_person.svg"
                    className="creator-studio-teams-image12"
                  />
                </div>
                <div className="creator-studio-teams-container26">
                  <div className="creator-studio-teams-container27">
                    <h2 className="creator-studio-teams-text084">Moderator</h2>
                  </div>
                  <div className="creator-studio-teams-badge-info3">
                    <div className="creator-studio-teams-container28">
                      <img
                        alt="image"
                        src="/Icons Imported/badge.svg"
                        className="creator-studio-teams-image13"
                      />
                      <label className="creator-studio-teams-text085">
                        <span>Badges:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text088">
                        <span>12</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-container29">
                      <img
                        alt="image"
                        src="/Icons Imported/group_green.svg"
                        className="creator-studio-teams-image14"
                      />
                      <label className="creator-studio-teams-text091">
                        <span>Members:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text094">
                        <span>10</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                  <div className="creator-studio-teams-container30">
                    <Link
                      to="/creator-studio-teams-role-preview"
                      className="creator-studio-teams-navlink03"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/deployed_code_account.svg"
                        className="creator-studio-teams-image15"
                      />
                      <span className="creator-studio-teams-text097">
                        <span>Manage</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="creator-studio-teams-role4">
                <div className="icon-row-header">
                  <img
                    src="/Icons Imported/shield_person.svg"
                    className="creator-studio-teams-image16"
                  />
                </div>
                <div className="creator-studio-teams-container32">
                  <div className="creator-studio-teams-container33">
                    <h2 className="creator-studio-teams-text100">Advisor</h2>
                  </div>
                  <div className="creator-studio-teams-badge-info4">
                    <div className="creator-studio-teams-container34">
                      <img
                        alt="image"
                        src="/Icons Imported/badge.svg"
                        className="creator-studio-teams-image17"
                      />
                      <label className="creator-studio-teams-text101">
                        <span>Badges:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text104">
                        <span>2</span>
                        <br></br>
                      </label>
                    </div>
                    <div className="creator-studio-teams-container35">
                      <img
                        alt="image"
                        src="/Icons Imported/group_green.svg"
                        className="creator-studio-teams-image18"
                      />
                      <label className="creator-studio-teams-text107">
                        <span>Members:</span>
                        <br></br>
                      </label>
                      <label className="creator-studio-teams-text110">
                        <span>2</span>
                        <br></br>
                      </label>
                    </div>
                  </div>
                  <div className="creator-studio-teams-container36">
                    <Link
                      to="/creator-studio-teams-role-preview"
                      className="creator-studio-teams-navlink04"
                    >
                      <img
                        alt="image"
                        src="/Icons Imported/deployed_code_account.svg"
                        className="creator-studio-teams-image19"
                      />
                      <span className="creator-studio-teams-text113">
                        <span>Manage</span>
                        <br></br>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-studio-teams-all-teams">
          <div className="creator-studio-teams-label-teams">
            <div className="creator-studio-teams-container37">
              <span className="creator-studio-teams-text116 Heading3">
                Custom Roles
              </span>
              <span className="creator-studio-teams-text117">Project Name</span>
              <span className="creator-studio-teams-text118">
                Activate Custom Roles if you need special Permission sets per
                Project
              </span>
            </div>
          </div>
          <div className="creator-studio-teams-team">
            <div className="creator-studio-teams-tabs-row1">
              <div className="creator-studio-teams-container38">
                <img
                  alt="image"
                  src="/Icons Imported/strategy.svg"
                  className="creator-studio-teams-image20"
                />
                <span className="creator-studio-teams-text119">
                  Project Name 1
                </span>
                <span className="creator-studio-teams-text120">Roles: 3</span>
              </div>
              <div className="creator-studio-teams-custom-roles-activation">
                <span className="creator-studio-teams-text121">
                  Custom Roles
                </span>
                <div className="creator-studio-teams-container-toggle">
                  <div className="creator-studio-teams-container39">
                    <div className="creator-studio-teams-container40">
                      <img
                        alt="image"
                        src="/Icons Imported/check.svg"
                        className="creator-studio-teams-image21"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="creator-studio-teams-roles-container1">
              <div className="creator-studio-teams-tabs-row2">
                <div className="creator-studio-teams-container41">
                  <span className="creator-studio-teams-text122">
                    Project Name
                  </span>
                  <span className="creator-studio-teams-text123">
                    Name Role:
                  </span>
                </div>
                <div className="creator-studio-teams-filter-buttons1">
                  <div className="creator-studio-teams-timeframe1">
                    <button className="creator-studio-teams-button06">
                      <span className="creator-studio-teams-text124">
                        <span>1h</span>
                        <br></br>
                      </span>
                    </button>
                    <button className="creator-studio-teams-button07">
                      <span className="creator-studio-teams-text127">
                        <span>6h</span>
                        <br></br>
                      </span>
                    </button>
                    <button className="creator-studio-teams-button08">
                      <span className="creator-studio-teams-text130">
                        <span>24h</span>
                        <br></br>
                      </span>
                    </button>
                    <button className="creator-studio-teams-button09">
                      <span className="creator-studio-teams-text133">
                        <span>7d</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div
                    data-thq="thq-dropdown"
                    className="creator-studio-teams-sort-by1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="creator-studio-teams-dropdown-toggle09"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="creator-studio-teams-icon12"
                      >
                        <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                      </svg>
                      <span className="creator-studio-teams-text136">
                        Sort by Power
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="creator-studio-teams-dropdown-arrow2"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="creator-studio-teams-icon14"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="creator-studio-teams-dropdown-list2"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="creator-studio-teams-dropdown4 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="creator-studio-teams-dropdown-toggle10"
                        >
                          <span className="creator-studio-teams-text137">
                            Power
                          </span>
                        </div>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="creator-studio-teams-dropdown-toggle11"
                        >
                          <span className="creator-studio-teams-text138">
                            Name
                          </span>
                        </div>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="creator-studio-teams-dropdown-toggle12"
                        >
                          <span className="creator-studio-teams-text139">
                            Badges
                          </span>
                        </div>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="creator-studio-teams-dropdown-toggle13"
                        >
                          <span className="creator-studio-teams-text140">
                            Members
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="creator-studio-teams-button10"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon16 fill-color-white"
                    >
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                    <span className="creator-studio-teams-text141">
                      <span>Add Role</span>
                      <br></br>
                    </span>
                  </button>
                </div>
              </div>
              <div className="creator-studio-teams-container42">
                <div className="creator-studio-teams-role5">
                  <div className="icon-row-header">
                    <img
                      src="/Icons Imported/shield_person.svg"
                      className="creator-studio-teams-image22"
                    />
                  </div>
                  <div className="creator-studio-teams-container44">
                    <div className="creator-studio-teams-container45">
                      <div className="creator-studio-teams-container46">
                        <h2 className="creator-studio-teams-text144">Owner</h2>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="creator-studio-teams-icon18 fill-color-gray"
                        >
                          <path d="M644 342v-86q0-54-39-93t-93-39-93 39-39 93v86h264zM512 726q34 0 60-26t26-60-26-60-60-26-60 26-26 60 26 60 60 26zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42z"></path>
                        </svg>
                      </div>
                      <div className="creator-studio-teams-small-toggle">
                        <div className="creator-studio-teams-container47">
                          <img
                            alt="image"
                            src="/Icons Imported/check.svg"
                            className="creator-studio-teams-image23"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="creator-studio-teams-badge-info5">
                      <div className="creator-studio-teams-container48">
                        <img
                          alt="image"
                          src="/Icons Imported/badge.svg"
                          className="creator-studio-teams-image24"
                        />
                        <label className="creator-studio-teams-text145">
                          <span>Badges:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text148">
                          <span>1</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-teams-container49">
                        <img
                          alt="image"
                          src="/Icons Imported/group_green.svg"
                          className="creator-studio-teams-image25"
                        />
                        <label className="creator-studio-teams-text151">
                          <span>Members:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text154">
                          <span>1</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <div className="creator-studio-teams-container50">
                      <Link
                        to="/creator-studio-teams-role-preview"
                        className="creator-studio-teams-navlink05"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/deployed_code_account.svg"
                          className="creator-studio-teams-image26"
                        />
                        <span className="creator-studio-teams-text157">
                          <span>Manage</span>
                          <br></br>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role6">
                  <div className="icon-row-header">
                    <img
                      src="/Icons Imported/shield_person.svg"
                      className="creator-studio-teams-image27"
                    />
                  </div>
                  <div className="creator-studio-teams-container52">
                    <div className="creator-studio-teams-container53">
                      <h2 className="creator-studio-teams-text160">Admin</h2>
                      <div className="creator-studio-teams-small-toggle1">
                        <div className="creator-studio-teams-container54">
                          <img
                            alt="image"
                            src="/Icons Imported/check.svg"
                            className="creator-studio-teams-image28"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="creator-studio-teams-badge-info6">
                      <div className="creator-studio-teams-container55">
                        <img
                          alt="image"
                          src="/Icons Imported/badge.svg"
                          className="creator-studio-teams-image29"
                        />
                        <label className="creator-studio-teams-text161">
                          <span>Badges:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text164">
                          <span>2</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-teams-container56">
                        <img
                          alt="image"
                          src="/Icons Imported/group_green.svg"
                          className="creator-studio-teams-image30"
                        />
                        <label className="creator-studio-teams-text167">
                          <span>Members:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text170">
                          <span>2</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <div className="creator-studio-teams-container57">
                      <Link
                        to="/creator-studio-teams-role-preview"
                        className="creator-studio-teams-navlink06"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/deployed_code_account.svg"
                          className="creator-studio-teams-image31"
                        />
                        <span className="creator-studio-teams-text173">
                          <span>Manage</span>
                          <br></br>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="creator-studio-teams-role7">
                  <div className="icon-row-header">
                    <img
                      src="/Icons Imported/shield_person.svg"
                      className="creator-studio-teams-image32"
                    />
                  </div>
                  <div className="creator-studio-teams-container59">
                    <div className="creator-studio-teams-container60">
                      <h2 className="creator-studio-teams-text176">Editor</h2>
                      <div className="creator-studio-teams-small-toggle2">
                        <div className="creator-studio-teams-container61">
                          <img
                            alt="image"
                            src="/Icons Imported/close1.svg"
                            className="creator-studio-teams-image33"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="creator-studio-teams-badge-info7">
                      <div className="creator-studio-teams-container62">
                        <img
                          alt="image"
                          src="/Icons Imported/badge.svg"
                          className="creator-studio-teams-image34"
                        />
                        <label className="creator-studio-teams-text177">
                          <span>Badges:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text180">
                          <span>2</span>
                          <br></br>
                        </label>
                      </div>
                      <div className="creator-studio-teams-container63">
                        <img
                          alt="image"
                          src="/Icons Imported/group_green.svg"
                          className="creator-studio-teams-image35"
                        />
                        <label className="creator-studio-teams-text183">
                          <span>Members:</span>
                          <br></br>
                        </label>
                        <label className="creator-studio-teams-text186">
                          <span>2</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                    <div className="creator-studio-teams-container64">
                      <Link
                        to="/creator-studio-teams-role-preview"
                        className="creator-studio-teams-navlink07"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="creator-studio-teams-icon20 fill-color-white"
                        >
                          <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                        </svg>
                        <span className="creator-studio-teams-text189">
                          <span>Edit Role</span>
                          <br></br>
                        </span>
                      </Link>
                      <Link
                        to="/creator-studio-teams-role-preview"
                        className="creator-studio-teams-navlink08"
                      >
                        <img
                          alt="image"
                          src="/Icons Imported/deployed_code_account.svg"
                          className="creator-studio-teams-image36"
                        />
                        <span className="creator-studio-teams-text192">
                          <span>Manage</span>
                          <br></br>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="creator-studio-teams-team1">
            <div className="creator-studio-teams-tabs-row3">
              <div className="creator-studio-teams-container65">
                <img
                  alt="image"
                  src="/Icons Imported/strategy.svg"
                  className="creator-studio-teams-image37"
                />
                <span className="creator-studio-teams-text195">
                  <span className="creator-studio-teams-text196">
                    Project Name 2
                  </span>
                  <br></br>
                </span>
                <span className="creator-studio-teams-text198">Roles: 3</span>
              </div>
              <div className="creator-studio-teams-custom-roles-activation1">
                <span className="creator-studio-teams-text199">
                  Custom Roles
                </span>
                <div className="creator-studio-teams-container-toggle1">
                  <div className="creator-studio-teams-container66">
                    <div className="creator-studio-teams-container67">
                      <img
                        alt="image"
                        src="/Icons Imported/close1.svg"
                        className="creator-studio-teams-image38"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="creator-studio-teams-team2">
            <div className="creator-studio-teams-tabs-row4">
              <div className="creator-studio-teams-container68">
                <img
                  alt="image"
                  src="/Icons Imported/strategy.svg"
                  className="creator-studio-teams-image39"
                />
                <span className="creator-studio-teams-text200">
                  <span className="creator-studio-teams-text201">
                    Project Name 3
                  </span>
                  <br></br>
                </span>
                <span className="creator-studio-teams-text203">Roles: 7</span>
              </div>
              <div className="creator-studio-teams-custom-roles-activation2">
                <span className="creator-studio-teams-text204">
                  Custom Roles
                </span>
                <div className="creator-studio-teams-container-toggle2">
                  <div className="creator-studio-teams-container69">
                    <div className="creator-studio-teams-container70">
                      <img
                        alt="image"
                        src="/Icons Imported/close1.svg"
                        className="creator-studio-teams-image40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="creator-studio-teams-team3">
            <div className="creator-studio-teams-tabs-row5">
              <div className="creator-studio-teams-container71">
                <img
                  alt="image"
                  src="/Icons Imported/strategy.svg"
                  className="creator-studio-teams-image41"
                />
                <span className="creator-studio-teams-text205">
                  <span className="creator-studio-teams-text206">
                    Project Name 4
                  </span>
                  <br></br>
                </span>
                <span className="creator-studio-teams-text208">Roles: 5</span>
              </div>
              <div className="creator-studio-teams-custom-roles-activation3">
                <span className="creator-studio-teams-text209">
                  Custom Roles
                </span>
                <div className="creator-studio-teams-container-toggle3">
                  <div className="creator-studio-teams-container72">
                    <div className="creator-studio-teams-container73">
                      <img
                        alt="image"
                        src="/Icons Imported/close1.svg"
                        className="creator-studio-teams-image42"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="creator-studio-teams-team4">
            <div className="creator-studio-teams-tabs-row6">
              <div className="creator-studio-teams-container74">
                <img
                  alt="image"
                  src="/Icons Imported/strategy.svg"
                  className="creator-studio-teams-image43"
                />
                <span className="creator-studio-teams-text210">
                  <span className="creator-studio-teams-text211">
                    Project Name 5
                  </span>
                  <br></br>
                </span>
                <span className="creator-studio-teams-text213">Roles: 3</span>
              </div>
              <div className="creator-studio-teams-custom-roles-activation4">
                <span className="creator-studio-teams-text214">
                  Custom Roles
                </span>
                <div className="creator-studio-teams-container-toggle4">
                  <div className="creator-studio-teams-container75">
                    <div className="creator-studio-teams-container76">
                      <img
                        alt="image"
                        src="/Icons Imported/close1.svg"
                        className="creator-studio-teams-image44"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-teams-bottom-menu">
        <div className="creator-studio-teams-container-left">
          <span className="creator-studio-teams-text215">Selected items:</span>
          <span className="creator-studio-teams-text216">3</span>
        </div>
        <div className="creator-studio-teams-container-right">
          <button type="button" className="creator-studio-teams-button11">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon22 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-teams-text217">
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
          <button type="button" className="creator-studio-teams-button12">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon24 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-teams-text220">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button13">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon26 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-teams-text223">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button14">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon28 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-teams-text226">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button15">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon30 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-teams-text229">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-teams-navlink09"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon32 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-teams-text232">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button type="button" className="creator-studio-teams-button16">
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-teams-image45"
            />
            <span className="creator-studio-teams-text235">
              <span>Sweep Floor</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioTeams
