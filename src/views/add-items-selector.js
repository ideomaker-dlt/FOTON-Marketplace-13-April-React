import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-items-selector.css'

const AddItemsSelector = (props) => {
  return (
    <div className="add-items-selector-container">
      <Helmet>
        <title>
          Add-Items-Selector - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Items-Selector - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name10">
        <div className="add-items-selector-header-creator">
          <div className="add-items-selector-container01">
            <div className="add-items-selector-container02">
              <div className="add-items-selector-container03">
                <h1 className="add-items-selector-text">Create New Item</h1>
              </div>
            </div>
          </div>
          <div className="add-items-selector-mask-overlay"></div>
        </div>
        <div className="add-items-selector-tabs-row">
          <div className="add-items-selector-container04">
            <Link
              to="/creator-studio-collection"
              className="add-items-selector-navlink"
            >
              &lt; go back
            </Link>
            <span className="add-items-selector-text01">
              Select the type of items to add
            </span>
          </div>
        </div>
        <div className="add-items-selector-container05">
          <Link to="/add-item">
            <div className="add-items-selector-collection">
              <div className="add-items-selector-container06">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-items-selector-icon fill-color-white"
                >
                  <path d="M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z"></path>
                  <path d="M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M896 832h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
              </div>
              <div className="add-items-selector-container07">
                <h1 className="add-items-selector-text02 Heading3">
                  Add Single Item
                </h1>
                <h1 className="add-items-selector-text03 Content">
                  <span>
                    For 1:1 collectibles that don&apos;t belong in a Uniform
                    Collection.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/add-collection2-layered">
            <div className="add-items-selector-collection1">
              <div className="add-items-selector-container08">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-items-selector-icon04 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
              </div>
              <div className="add-items-selector-container09">
                <h1 className="add-items-selector-text06 Heading3">
                  Add Batch - Layered
                </h1>
                <h1 className="add-items-selector-text07 Content">
                  <span>
                    You have Layers and want to generate images for more items.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/add-un-layered-batch">
            <div className="add-items-selector-collection2">
              <div className="add-items-selector-container10">
                <svg
                  viewBox="0 0 1152 1024"
                  className="add-items-selector-icon08 fill-color-white"
                >
                  <path d="M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z"></path>
                  <path d="M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z"></path>
                  <path d="M1024 896h-768v-128l224-384 256 320h64l224-192z"></path>
                </svg>
              </div>
              <div className="add-items-selector-container11">
                <h1 className="add-items-selector-text10 Heading3">
                  Add Batch - Unlayered
                </h1>
                <h1 className="add-items-selector-text11 Content">
                  <span>
                    You have Ready Made images for more items and want to fill
                    in their Attributes.
                  </span>
                  <br></br>
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddItemsSelector
