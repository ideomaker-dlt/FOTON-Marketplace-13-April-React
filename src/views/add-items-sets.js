import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-items-sets.css'

const AddItemsSets = (props) => {
  return (
    <div className="add-items-sets-container">
      <Helmet>
        <title>
          Add-Items-Sets - FOTON - Web3's Digital Assets Hub and NFTs
          Marketplace on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Add-Items-Sets - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name31">
        <div className="add-items-sets-header-creator">
          <div className="add-items-sets-container01">
            <div className="add-items-sets-container02">
              <div className="add-items-sets-container03">
                <h1 className="add-items-sets-text">
                  Create New Items with Sets
                </h1>
              </div>
            </div>
            <div className="add-items-sets-buttons">
              <Link
                to="/add-items-templates"
                className="add-items-sets-navlink button"
              >
                <span className="add-items-sets-text01">
                  <span>Add Set</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="add-items-sets-mask-overlay"></div>
        </div>
        <div className="add-items-sets-tabs-row">
          <div className="add-items-sets-container04">
            <Link
              to="/creator-studio-collection"
              className="add-items-sets-navlink1"
            >
              &lt; go back
            </Link>
            <span className="add-items-sets-text04">
              Sets in this Uniform Collection
            </span>
          </div>
        </div>
        <div className="add-items-sets-container05">
          <Link to="/add-collection2-layered-organise">
            <div className="add-items-sets-collection">
              <div className="add-items-sets-container06">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-items-sets-icon fill-color-white"
                >
                  <path d="M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z"></path>
                  <path d="M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M896 832h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/tesseract-spinner%20(1).svg"
                  className="add-items-sets-image"
                />
              </div>
              <div className="add-items-sets-container07">
                <h1 className="add-items-sets-text05 Heading3">Humans</h1>
                <h1 className="add-items-sets-text06 Content">
                  <span>Items generated: 800</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <div className="add-items-sets-collection1">
            <div className="add-items-sets-container08">
              <svg
                viewBox="0 0 1152 1024"
                className="add-items-sets-icon04 fill-color-white"
              >
                <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
              </svg>
              <img
                alt="image"
                src="/tesseract-spinner%20(1).svg"
                className="add-items-sets-image1"
              />
            </div>
            <div className="add-items-sets-container09">
              <h1 className="add-items-sets-text09 Heading3">Aliens</h1>
              <h1 className="add-items-sets-text10 Content">
                <span>Items generated: 500</span>
                <br className="Content"></br>
              </h1>
            </div>
          </div>
          <div className="add-items-sets-collection2">
            <div className="add-items-sets-container10">
              <svg
                viewBox="0 0 1152 1024"
                className="add-items-sets-icon08 fill-color-white"
              >
                <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
              </svg>
              <img
                alt="image"
                src="/tesseract-spinner%20(1).svg"
                className="add-items-sets-image2"
              />
            </div>
            <div className="add-items-sets-container11">
              <h1 className="add-items-sets-text13 Heading3">Robots</h1>
              <h1 className="add-items-sets-text14 Content">
                <span>Items generated: 800</span>
                <br className="Content"></br>
              </h1>
            </div>
          </div>
        </div>
        <div className="add-items-sets-tabs-row2">
          <div className="add-items-sets-container12">
            <span className="add-items-sets-text17">Resources</span>
          </div>
        </div>
        <div className="add-items-sets-resources">
          <div className="add-items-sets-container13">
            <div className="add-items-sets-item">
              <div className="add-items-sets-container14">
                <div className="add-items-sets-container15">
                  <h1 className="add-items-sets-text18 Smallest">
                    <span>By FOTON</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="add-items-sets-text21 Heading3">
                  What is a Set?
                </h1>
                <h1 className="add-items-sets-text22 Content">
                  <span>Short intro</span>
                  <br className="Content"></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddItemsSets
