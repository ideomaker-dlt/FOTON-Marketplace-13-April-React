import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-items-templates.css'

const AddItemsTemplates = (props) => {
  return (
    <div className="add-items-templates-container">
      <Helmet>
        <title>
          Add-Items-Templates - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Items-Templates - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name10">
        <div className="add-items-templates-header-creator">
          <div className="add-items-templates-container01">
            <div className="add-items-templates-container02">
              <div className="add-items-templates-container03">
                <h1 className="add-items-templates-text">Create New Items</h1>
              </div>
            </div>
          </div>
          <div className="add-items-templates-mask-overlay"></div>
        </div>
        <div className="add-items-templates-tabs-row">
          <div className="add-items-templates-container04">
            <Link
              to="/creator-studio-collection"
              className="add-items-templates-navlink"
            >
              &lt; go back
            </Link>
            <span className="add-items-templates-text01">
              Select the type of items to add
            </span>
          </div>
        </div>
        <div className="add-items-templates-container05">
          <Link to="/add-item">
            <div className="add-items-templates-collection">
              <div className="add-items-templates-container06">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-items-templates-icon fill-color-white"
                >
                  <path d="M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z"></path>
                  <path d="M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M896 832h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/additem-200h.png"
                  className="add-items-templates-image"
                />
              </div>
              <div className="add-items-templates-container07">
                <h1 className="add-items-templates-text02 Heading3">
                  Add Single Item
                </h1>
                <h1 className="add-items-templates-text03 Content">
                  <span>
                    For 1:1 collectibles that don&apos;t belong in a Uniform
                    Collection.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/add-un-layered-batch">
            <div className="add-items-templates-collection1">
              <div className="add-items-templates-container08">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-items-templates-icon04 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/addbatch-200w.png"
                  className="add-items-templates-image1"
                />
              </div>
              <div className="add-items-templates-container09">
                <h1 className="add-items-templates-text06 Heading3">
                  Add Items - Batch
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <h1 className="add-items-templates-text07 Content">
                  <span>
                    You have Artwork for items and want to fill in their
                    Attributes individually.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/add-items-sets">
            <div className="add-items-templates-collection2">
              <div className="add-items-templates-container10">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-items-templates-icon08 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/addlayeredbatch-200h.png"
                  className="add-items-templates-image2"
                />
              </div>
              <div className="add-items-templates-container11">
                <h1 className="add-items-templates-text10 Heading3">
                  Add Items - Layered Batch
                </h1>
                <h1 className="add-items-templates-text11 Content">
                  <span>
                    You have Layers and want to generate items for an entire
                    Collection.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/import-collection">
            <div className="add-items-templates-collection3">
              <div className="add-items-templates-container12">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-items-templates-icon12 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
                <img
                  alt="image"
                  src="/tesseract-spinner%20(1).svg"
                  className="add-items-templates-image3"
                />
              </div>
              <div className="add-items-templates-container13">
                <h1 className="add-items-templates-text14 Heading3">
                  Import a Generated Collection
                </h1>
                <h1 className="add-items-templates-text15 Content">
                  <span>
                    You have Artworks + JSON metadata created with 3rd party
                    generators
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="add-items-templates-tabs-row2">
          <div className="add-items-templates-container14">
            <span className="add-items-templates-text18">Resources</span>
          </div>
        </div>
        <div className="add-items-templates-resources">
          <div className="add-items-templates-container15">
            <div className="add-items-templates-item">
              <div className="add-items-templates-container16">
                <div className="add-items-templates-container17">
                  <h1 className="add-items-templates-text19 Smallest">
                    <span>By FOTON</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="add-items-templates-text22 Heading3">
                  What is an Item?
                </h1>
                <h1 className="add-items-templates-text23 Content">
                  <span>Short intro</span>
                  <br className="Content"></br>
                </h1>
              </div>
            </div>
            <div className="add-items-templates-item1">
              <div className="add-items-templates-container18">
                <div className="add-items-templates-container19">
                  <h1 className="add-items-templates-text26 Smallest">
                    <span>By FOTON</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="add-items-templates-text29 Heading3">
                  What is a Batch?
                </h1>
                <h1 className="add-items-templates-text30 Content">
                  <span>Short intro</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="add-items-templates-item2">
              <div className="add-items-templates-container20">
                <div className="add-items-templates-container21">
                  <h1 className="add-items-templates-text33 Smallest">
                    <span>By FOTON</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="add-items-templates-text36 Heading3">
                  Comparison table
                </h1>
                <h1 className="add-items-templates-text37 Content">
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

export default AddItemsTemplates
