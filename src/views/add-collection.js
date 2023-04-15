import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection.css'

const AddCollection = (props) => {
  return (
    <div className="add-collection-container">
      <Helmet>
        <title>
          Add-Collection - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name6">
        <div className="add-collection-header-creator">
          <div className="add-collection-container01">
            <div className="add-collection-container02">
              <div className="add-collection-container03">
                <h1 className="add-collection-text">Create New Collection</h1>
              </div>
            </div>
          </div>
          <div className="add-collection-mask-overlay"></div>
        </div>
        <div className="add-collection-tabs-row">
          <div className="add-collection-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection-navlink"
            >
              &lt; go back
            </Link>
            <span className="add-collection-text01">
              Define your Collection below
            </span>
          </div>
        </div>
        <div className="add-collection-container-form">
          <div className="add-collection-under-header">
            <div className="add-collection-card">
              <form className="add-collection-form">
                <div className="add-collection-field">
                  <label className="add-collection-text02 Content">
                    Name Collection:
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="The Funky Apes Crew..."
                    className="add-collection-textinput Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="add-collection-field1">
                  <label className="add-collection-text03 Content">
                    Collection Size (leave empty for Open collections):
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="15000..."
                    className="add-collection-textinput1 focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="add-collection-field2">
                  <label className="add-collection-text04 Content">
                    Name of each NFT:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <label className="add-collection-text05 Content">
                    Preview: &quot;Funky Ape #1&quot;
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Funky Ape #&#123;&#123;id&#125;&#125;"
                    className="add-collection-textinput2 focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="add-collection-area">
                  <label className="add-collection-text06">
                    Description in max 250 characters (Appears in Items
                    Metadata):
                  </label>
                  <textarea
                    placeholder="Something short about my collection..."
                    className="add-collection-textarea textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="add-collection-area1">
                  <label className="add-collection-text07">
                    Long Description in max 1500 characters:
                  </label>
                  <textarea
                    placeholder="Something about my collection..."
                    className="add-collection-textarea1 textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="add-collection-field-image">
                  <label className="add-collection-text08">
                    Logo/Avatar image 1:1 ratio max 500x500px:
                  </label>
                  <div className="add-collection-container05">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection-textinput3 focus-reset-forms Content16SemiBold input"
                    />
                    <button className="add-collection-button Content16SemiBold button">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-icon"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-container06">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-icon02"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection-field-image1">
                  <label className="add-collection-text09">
                    Banner image 3:2 ratio (for Cards and Header). Ex.
                    3000x2000px:
                  </label>
                  <div className="add-collection-container07">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection-textinput4 Content16SemiBold focus-reset-forms input"
                    />
                    <button className="add-collection-button01 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-icon04"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-container08">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-icon06"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection-field-image2">
                  <label className="add-collection-text10">
                    Slider image 3:1 ratio (for Front Page + Drop Page). Ex.
                    3000x1000px:
                  </label>
                  <div className="add-collection-container09">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection-textinput5 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="add-collection-button02 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection-icon08"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection-container10">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-icon10"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection-tags">
                  <label className="add-collection-text11">
                    Select categories for your collection:
                  </label>
                  <div className="add-collection-container11">
                    <button
                      type="button"
                      className="add-collection-button03 button Content16SemiBold"
                    >
                      <span className="add-collection-text12">
                        <span>Avatars</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button04 button Content16SemiBold"
                    >
                      <span className="add-collection-text15">
                        <span>Art</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button05 button Content16SemiBold"
                    >
                      <span className="add-collection-text18">
                        <span>Gaming</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button06 button Content16SemiBold"
                    >
                      <span className="add-collection-text21">
                        <span>Memberships</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button07 button Content16SemiBold"
                    >
                      <span className="add-collection-text24">
                        <span>Tickets</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button08 button Content16SemiBold"
                    >
                      <span className="add-collection-text27">
                        <span>Music</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button09 button Content16SemiBold"
                    >
                      <span className="add-collection-text30">
                        <span>Video</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection-button10 button Content16SemiBold"
                    >
                      <span className="add-collection-text33">
                        <span>Other</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection-bottom-buttons">
                  <button className="add-collection-button11 button">
                    <span className="add-collection-text36">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <button className="add-collection-button12 button">
                    <span className="add-collection-text39">
                      <span>Create Collection</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection-icon12"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="add-collection-info-box">
                <div className="add-collection-container12">
                  <h1 className="add-collection-text42 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-collection-text45">
                    <span>
                      Collections on FOTON are similar to folders on your PC.
                      Until you add items inside them they are just an empty box
                      with a name and a size limit. 
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      After you finish defining your collection you will be able
                      to fill it up with items in one go, or add them every now
                      and then as it suits you best.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Once you&apos;ve minted items inside the collection, its
                      settings can&apos;t be altered anymore.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default AddCollection
