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
          Creator-Studio-Teams - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio-Teams - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name34">
        <div className="creator-studio-teams-header-creator">
          <div className="creator-studio-teams-gray-overlay"></div>
          <div className="creator-studio-teams-container01">
            <div className="creator-studio-teams-container02">
              <div className="creator-studio-teams-container03">
                <h1 className="creator-studio-teams-text">My Teams</h1>
                <h1 className="creator-studio-teams-text001">
                  <span>
                    2 Teams
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
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
        <div className="creator-studio-teams-tabs-row">
          <div className="creator-studio-teams-container05">
            <img
              alt="image"
              src="/Icons Imported/group1.svg"
              className="creator-studio-teams-image"
            />
            <span className="creator-studio-teams-text013">Team:</span>
            <span className="creator-studio-teams-text014">Project Name</span>
            <span className="creator-studio-teams-text015">Roles:</span>
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
                    <span className="creator-studio-teams-text029">Power</span>
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
                    <span className="creator-studio-teams-text031">Badges</span>
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
                  className="creator-studio-teams-image01"
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
                      className="creator-studio-teams-image02"
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
                      className="creator-studio-teams-image03"
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
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon12 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text049">
                      <span>Edit Role</span>
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
                    className="creator-studio-teams-navlink1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon14 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text065">
                      <span>Edit Role</span>
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
                  className="creator-studio-teams-image07"
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
                      className="creator-studio-teams-image08"
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
                      className="creator-studio-teams-image09"
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
                    className="creator-studio-teams-navlink2"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon16 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text081">
                      <span>Edit Role</span>
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
                  className="creator-studio-teams-image10"
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
                      className="creator-studio-teams-image11"
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
                      className="creator-studio-teams-image12"
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
                    className="creator-studio-teams-navlink3"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon18 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text097">
                      <span>Edit Role</span>
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
                  className="creator-studio-teams-image13"
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
                      className="creator-studio-teams-image14"
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
                      className="creator-studio-teams-image15"
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
                    className="creator-studio-teams-navlink4"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon20 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text113">
                      <span>Edit Role</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-studio-teams-tabs-row1">
          <div className="creator-studio-teams-container37">
            <img
              alt="image"
              src="/Icons Imported/group1.svg"
              className="creator-studio-teams-image16"
            />
            <span className="creator-studio-teams-text116">Team:</span>
            <span className="creator-studio-teams-text117">Project Name 2</span>
            <span className="creator-studio-teams-text118">Roles:</span>
          </div>
          <div className="creator-studio-teams-filter-buttons1">
            <div className="creator-studio-teams-timeframe1">
              <button className="creator-studio-teams-button06">
                <span className="creator-studio-teams-text119">
                  <span>1h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-teams-button07">
                <span className="creator-studio-teams-text122">
                  <span>6h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-teams-button08">
                <span className="creator-studio-teams-text125">
                  <span>24h</span>
                  <br></br>
                </span>
              </button>
              <button className="creator-studio-teams-button09">
                <span className="creator-studio-teams-text128">
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
                  className="creator-studio-teams-icon22"
                >
                  <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                </svg>
                <span className="creator-studio-teams-text131">
                  Sort by Power
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="creator-studio-teams-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-icon24"
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
                    <span className="creator-studio-teams-text132">Power</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle11"
                  >
                    <span className="creator-studio-teams-text133">Name</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle12"
                  >
                    <span className="creator-studio-teams-text134">Badges</span>
                  </div>
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="creator-studio-teams-dropdown-toggle13"
                  >
                    <span className="creator-studio-teams-text135">
                      Members
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" className="creator-studio-teams-button10">
              <svg
                viewBox="0 0 1024 1024"
                className="creator-studio-teams-icon26 fill-color-white"
              >
                <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
              </svg>
              <span className="creator-studio-teams-text136">
                <span>Add Role</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="creator-studio-teams-roles-container1">
          <div className="creator-studio-teams-container38">
            <div className="creator-studio-teams-role5">
              <div className="icon-row-header">
                <img
                  src="/Icons Imported/shield_person.svg"
                  className="creator-studio-teams-image17"
                />
              </div>
              <div className="creator-studio-teams-container40">
                <div className="creator-studio-teams-container41">
                  <h2 className="creator-studio-teams-text139">Owner</h2>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="creator-studio-teams-icon28 fill-color-gray"
                  >
                    <path d="M644 342v-86q0-54-39-93t-93-39-93 39-39 93v86h264zM512 726q34 0 60-26t26-60-26-60-60-26-60 26-26 60 26 60 60 26zM768 342q34 0 60 25t26 59v428q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59v-428q0-34 26-59t60-25h42v-86q0-88 63-151t151-63 151 63 63 151v86h42z"></path>
                  </svg>
                </div>
                <div className="creator-studio-teams-badge-info5">
                  <div className="creator-studio-teams-container42">
                    <img
                      alt="image"
                      src="/Icons Imported/badge.svg"
                      className="creator-studio-teams-image18"
                    />
                    <label className="creator-studio-teams-text140">
                      <span>Badges:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text143">
                      <span>1</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-teams-container43">
                    <img
                      alt="image"
                      src="/Icons Imported/group_green.svg"
                      className="creator-studio-teams-image19"
                    />
                    <label className="creator-studio-teams-text146">
                      <span>Members:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text149">
                      <span>1</span>
                      <br></br>
                    </label>
                  </div>
                </div>
                <div className="creator-studio-teams-container44">
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-navlink5"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon30 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text152">
                      <span>Edit Role</span>
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
                  className="creator-studio-teams-image20"
                />
              </div>
              <div className="creator-studio-teams-container46">
                <div className="creator-studio-teams-container47">
                  <h2 className="creator-studio-teams-text155">Admin</h2>
                </div>
                <div className="creator-studio-teams-badge-info6">
                  <div className="creator-studio-teams-container48">
                    <img
                      alt="image"
                      src="/Icons Imported/badge.svg"
                      className="creator-studio-teams-image21"
                    />
                    <label className="creator-studio-teams-text156">
                      <span>Badges:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text159">
                      <span>2</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-teams-container49">
                    <img
                      alt="image"
                      src="/Icons Imported/group_green.svg"
                      className="creator-studio-teams-image22"
                    />
                    <label className="creator-studio-teams-text162">
                      <span>Members:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text165">
                      <span>2</span>
                      <br></br>
                    </label>
                  </div>
                </div>
                <div className="creator-studio-teams-container50">
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-navlink6"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon32 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text168">
                      <span>Edit Role</span>
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
                  className="creator-studio-teams-image23"
                />
              </div>
              <div className="creator-studio-teams-container52">
                <div className="creator-studio-teams-container53">
                  <h2 className="creator-studio-teams-text171">Editor</h2>
                </div>
                <div className="creator-studio-teams-badge-info7">
                  <div className="creator-studio-teams-container54">
                    <img
                      alt="image"
                      src="/Icons Imported/badge.svg"
                      className="creator-studio-teams-image24"
                    />
                    <label className="creator-studio-teams-text172">
                      <span>Badges:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text175">
                      <span>2</span>
                      <br></br>
                    </label>
                  </div>
                  <div className="creator-studio-teams-container55">
                    <img
                      alt="image"
                      src="/Icons Imported/group_green.svg"
                      className="creator-studio-teams-image25"
                    />
                    <label className="creator-studio-teams-text178">
                      <span>Members:</span>
                      <br></br>
                    </label>
                    <label className="creator-studio-teams-text181">
                      <span>2</span>
                      <br></br>
                    </label>
                  </div>
                </div>
                <div className="creator-studio-teams-container56">
                  <Link
                    to="/creator-studio-teams-role-preview"
                    className="creator-studio-teams-navlink7"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="creator-studio-teams-icon34 fill-color-white"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                    <span className="creator-studio-teams-text184">
                      <span>Edit Role</span>
                      <br></br>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      <div className="creator-studio-teams-bottom-menu">
        <div className="creator-studio-teams-container-left">
          <span className="creator-studio-teams-text187">Selected items:</span>
          <span className="creator-studio-teams-text188">3</span>
        </div>
        <div className="creator-studio-teams-container-right">
          <button type="button" className="creator-studio-teams-button11">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon36 fill-color-white"
            >
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
            <span className="creator-studio-teams-text189">
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
              className="creator-studio-teams-icon38 fill-color-white"
            >
              <path d="M566 458l116 54-116 54-54 116-54-116-116-54 116-54 54-116zM726 426l-40-88-88-40 88-40 40-88 40 88 88 40-88 40zM812 426h84v384q0 34-25 60t-59 26h-598q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h384v86h-384v596h598v-384z"></path>
            </svg>
            <span className="creator-studio-teams-text192">
              <span>Mint</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button13">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon40 fill-color-white"
            >
              <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
            </svg>
            <span className="creator-studio-teams-text195">
              <span>List</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button14">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon42 fill-color-white"
            >
              <path d="M810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM398 726l-46-46 104-104-104-104 46-46 104 104 104-104 44 46-104 104 104 104-44 46-104-104z"></path>
            </svg>
            <span className="creator-studio-teams-text198">
              <span>Unlist</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="creator-studio-teams-button15">
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon44 fill-color-white"
            >
              <path d="M726 666l-154-154 154-154-60-60-154 154-154-154-60 60 154 154-154 154 60 60 154-154 154 154zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <span className="creator-studio-teams-text201">
              <span>Cancel</span>
              <br></br>
            </span>
          </button>
          <Link
            to="/add-collection2-layered"
            className="creator-studio-teams-navlink8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="creator-studio-teams-icon46 fill-color-white"
            >
              <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
            </svg>
            <span className="creator-studio-teams-text204">
              <span>Delete</span>
              <br></br>
            </span>
          </Link>
          <button type="button" className="creator-studio-teams-button16">
            <img
              alt="image"
              src="/mop.svg"
              className="creator-studio-teams-image26"
            />
            <span className="creator-studio-teams-text207">
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
