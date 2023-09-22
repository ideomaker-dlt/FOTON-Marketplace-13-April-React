import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection-templates.css'

const AddCollectionTemplates = (props) => {
  return (
    <div className="add-collection-templates-container">
      <Helmet>
        <title>
          Add-Collection-Templates - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection-Templates - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name33">
        <div className="add-collection-templates-header-creator">
          <div className="add-collection-templates-container01">
            <div className="add-collection-templates-container02">
              <div className="add-collection-templates-container03">
                <h1 className="add-collection-templates-text">
                  Add Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="add-collection-templates-mask-overlay"></div>
        </div>
        <div className="add-collection-templates-tabs-row">
          <div className="add-collection-templates-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection-templates-navlink"
            >
              &lt; go back
            </Link>
            <span className="add-collection-templates-text01">
              Import or Create a brand new Collection
            </span>
          </div>
        </div>
        <div className="add-collection-templates-container05">
          <Link to="/add-collection1">
            <div className="add-collection-templates-collection">
              <div className="add-collection-templates-container06">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-collection-templates-icon fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/tesseract-spinner%20(1).svg"
                  className="add-collection-templates-image"
                />
              </div>
              <div className="add-collection-templates-container07">
                <h1 className="add-collection-templates-text02 Heading3">
                  New Collection
                </h1>
                <h1 className="add-collection-templates-text03 Content">
                  <span>
                    Create from scratch. Give names, add Files and define Traits
                    and Rarity.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/import-collection">
            <div className="add-collection-templates-collection1">
              <div className="add-collection-templates-container08">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-collection-templates-icon4 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/tesseract-spinner%20(1).svg"
                  className="add-collection-templates-image1"
                />
              </div>
              <div className="add-collection-templates-container09">
                <h1 className="add-collection-templates-text06 Heading3">
                  Import Collection
                </h1>
                <h1 className="add-collection-templates-text07 Content">
                  <span>
                    You have Artwork + JSON metadata created with 3rd party
                    generators
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="add-collection-templates-tabs-row2">
          <div className="add-collection-templates-container10">
            <span className="add-collection-templates-text10">Resources</span>
          </div>
        </div>
        <div className="add-collection-templates-resources">
          <div className="add-collection-templates-container11">
            <div className="add-collection-templates-item">
              <div className="add-collection-templates-container12">
                <div className="add-collection-templates-container13">
                  <h1 className="add-collection-templates-text11 Smallest">
                    <span>By FOTON</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="add-collection-templates-text14 Heading3">
                  What is a Collection?
                </h1>
                <h1 className="add-collection-templates-text15 Content">
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

export default AddCollectionTemplates
