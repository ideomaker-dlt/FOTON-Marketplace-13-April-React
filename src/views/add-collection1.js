import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './add-collection1.css'

const AddCollection1 = (props) => {
  return (
    <div className="add-collection1-container">
      <Helmet>
        <title>
          Add-Collection1 - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Add-Collection1 - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name9">
        <div className="add-collection1-header-creator">
          <div className="add-collection1-container01">
            <div className="add-collection1-container02">
              <div className="add-collection1-container03">
                <h1 className="add-collection1-text">Create New Collection</h1>
              </div>
            </div>
          </div>
          <div className="add-collection1-mask-overlay"></div>
        </div>
        <div className="add-collection1-tabs-row">
          <div className="add-collection1-container04">
            <Link
              to="/creator-studio-project"
              className="add-collection1-navlink"
            >
              &lt; go back
            </Link>
            <div className="add-collection1-container05">
              <button type="button" className="add-collection1-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection1-icon fill-color-white"
                >
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
                <span className="add-collection1-text001">
                  <span>Define Collection</span>
                  <br></br>
                </span>
              </button>
              <Link
                to="/add-collection2-layered"
                className="add-collection1-navlink1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection1-icon02 fill-color-white"
                >
                  <path d="M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z"></path>
                </svg>
                <span className="add-collection1-text004">
                  <span>Organise</span>
                  <br></br>
                </span>
              </Link>
              <button type="button" className="add-collection1-button01">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection1-icon04 fill-color-white"
                >
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
                <span className="add-collection1-text007">
                  <span>Preview</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="add-collection1-button02">
                <svg
                  viewBox="0 0 1024 1024"
                  className="add-collection1-icon06 fill-color-white"
                >
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="add-collection1-text010">
                  <span>Confirm</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="add-collection1-container-form">
          <div className="add-collection1-under-header">
            <div className="add-collection1-card">
              <form className="add-collection1-form">
                <div className="add-collection1-field">
                  <label className="add-collection1-text013 padding-4px-left Content">
                    Name Collection:
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="The Funky Apes Crew..."
                    className="add-collection1-textinput focus-reset-forms Content16SemiBold input"
                  />
                </div>
                <div className="add-collection1-field1">
                  <label className="add-collection1-text014 Content padding-4px-left">
                    Type of Collection:
                  </label>
                  <div className="add-collection1-container06">
                    <div className="add-collection1-card-small">
                      <div className="add-collection1-container07">
                        <label className="add-collection1-text015">
                          Uniform
                        </label>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection1-icon08"
                        >
                          <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM512 298q88 0 151 63t63 151-63 151-151 63-151-63-63-151 63-151 151-63z"></path>
                        </svg>
                      </div>
                      <div className="add-collection1-container08">
                        <span className="add-collection1-text016">
                          <span>
                            This type of collection has all the Attributes
                            defined now for all the Items to be added later to
                            it.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Such collections are the Generated ones on layers,
                            where each item needs to follow the same pattern of
                            Attributes. 
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            An example is a collection of Avatar pictures with
                            Attributes as Eyes, Head, Mouth, etc.
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="add-collection1-card-small1">
                      <div className="add-collection1-container09">
                        <label className="add-collection1-text024">Mixed</label>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="add-collection1-icon10"
                        >
                          <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                        </svg>
                      </div>
                      <div className="add-collection1-container10">
                        <span className="add-collection1-text025">
                          <span>
                            This type of collection has no restrictions when it
                            comes to what type of items has inside, or what
                            Attributes they will have.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            As example can be collections with 1:1 rarity, like
                            a painting. Every time you would make a painting,
                            you&apos;ll just add it to the Collection with its
                            own amount of Attributes. 
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-collection1-field2">
                  <label className="add-collection1-text030 Content padding-4px-left">
                    Collection Size (Leave empty for Open collections):
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="15000..."
                    className="add-collection1-textinput1 Content16SemiBold focus-reset-forms input"
                  />
                </div>
                <div className="add-collection1-type-of-images">
                  <label className="add-collection1-text031 padding-4px-left">
                    Type of images for items in your collection:
                  </label>
                  <div className="add-collection1-container11">
                    <div className="add-collection1-container12">
                      <Link
                        to="/add-collection2-non-layered"
                        className="add-collection1-navlink2 Content16SemiBold button"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/cover.svg"
                          className="add-collection1-image"
                        />
                        <span className="add-collection1-text032">
                          <span>I have Ready Made images</span>
                          <br></br>
                        </span>
                      </Link>
                      <button
                        type="button"
                        className="add-collection1-button03 Content16SemiBold button"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/layers%20icon.svg"
                          className="add-collection1-image1"
                        />
                        <span className="add-collection1-text035">
                          <span>I have Layers to generate images</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div className="add-collection1-add-attributes">
                      <label className="add-collection1-text038 padding-4px-left">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>Add Attributes: </span>
                        <span> </span>
                        <span className="add-collection1-text042">
                          (You will add their values later for each image
                          individually. Drag to organise them higher or lower)
                        </span>
                      </label>
                      <div className="add-collection1-container13">
                        <input
                          type="text"
                          placeholder="Attribute name...Eyes, Nose, Hair..."
                          className="add-collection1-textinput2 Content16SemiBold focus-reset-forms input"
                        />
                        <button className="add-collection1-button04 Content16SemiBold button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon12"
                          >
                            <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="add-collection1-container-layer">
                        <div className="add-collection1-container14">
                          <div className="add-collection1-container15">
                            <span className="add-collection1-text043 Content16SemiBold">
                              <span>Eyes</span>
                              <br></br>
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon14 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="add-collection1-button05 button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon16"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="add-collection1-container-layer1">
                        <div className="add-collection1-container16">
                          <div className="add-collection1-container17">
                            <span className="add-collection1-text046 Content16SemiBold">
                              <span>Nose</span>
                              <br></br>
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon18 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="add-collection1-button06 button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon20"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="add-collection1-container-layer2">
                        <div className="add-collection1-container18">
                          <div className="add-collection1-container19">
                            <span className="add-collection1-text049 Content16SemiBold">
                              <span>Hair</span>
                              <br></br>
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon22 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="add-collection1-button07 button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="add-collection1-icon24"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-collection1-field3">
                  <div className="add-collection1-container20">
                    <label className="add-collection1-text052 padding-4px-left Content">
                      Name of each item (NFT):
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <label className="add-collection1-text053 Content padding-4px-left">
                      Preview: &quot;Funky Ape #1&quot;
                    </label>
                  </div>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Funky Ape #&#123;&#123;id&#125;&#125;"
                    className="add-collection1-textinput3 focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="add-collection1-area">
                  <label className="add-collection1-text054 padding-4px-left">
                    Description in max 250 characters (Appears in Items
                    Metadata):
                  </label>
                  <textarea
                    placeholder="Something short about my collection..."
                    className="add-collection1-textarea textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="add-collection1-area1">
                  <label className="add-collection1-text055 padding-4px-left">
                    Long Description in max 1500 characters:
                  </label>
                  <textarea
                    placeholder="Something about my collection..."
                    className="add-collection1-textarea1 textarea focus-reset-forms Content16SemiBold"
                  ></textarea>
                </div>
                <div className="add-collection1-field-image">
                  <label className="add-collection1-text056 padding-4px-left">
                    Logo/Avatar image 1:1 ratio max 500 x 500px:
                  </label>
                  <div className="add-collection1-container21">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection1-textinput4 focus-reset-forms input Content16SemiBold"
                    />
                    <button className="add-collection1-button08 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection1-icon26"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection1-container22">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection1-icon28"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection1-field-image1">
                  <label className="add-collection1-text057 padding-4px-left">
                    Banner image 3:2 ratio (for Cards and Header). Ex. 3000 x
                    2000px:
                  </label>
                  <div className="add-collection1-container23">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection1-textinput5 focus-reset-forms Content16SemiBold input"
                    />
                    <button className="add-collection1-button09 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection1-icon30"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection1-container24">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection1-icon32"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection1-field-image2">
                  <label className="add-collection1-text058 padding-4px-left">
                    Slider image 3:1 ratio (for Front Page + Drop Page). Ex.
                    3000 x 1000px:
                  </label>
                  <div className="add-collection1-container25">
                    <input
                      type="text"
                      placeholder="Upload image..."
                      className="add-collection1-textinput6 focus-reset-forms Content16SemiBold input"
                    />
                    <button className="add-collection1-button10 button Content16SemiBold">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="add-collection1-icon34"
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="add-collection1-container26">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection1-icon36"
                    >
                      <path d="M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="add-collection1-tags">
                  <label className="add-collection1-text059 padding-4px-left">
                    Select categories for your collection:
                  </label>
                  <div className="add-collection1-container27">
                    <button
                      type="button"
                      className="add-collection1-button11 button Content16SemiBold"
                    >
                      <span className="add-collection1-text060">
                        <span>Avatars</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button12 button Content16SemiBold"
                    >
                      <span className="add-collection1-text063">
                        <span>Art</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button13 button Content16SemiBold"
                    >
                      <span className="add-collection1-text066">
                        <span>Gaming</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button14 Content16SemiBold button"
                    >
                      <span className="add-collection1-text069">
                        <span>Memberships</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button15 Content16SemiBold button"
                    >
                      <span className="add-collection1-text072">
                        <span>Tickets</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button16 button Content16SemiBold"
                    >
                      <span className="add-collection1-text075">
                        <span>Music</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button17 button Content16SemiBold"
                    >
                      <span className="add-collection1-text078">
                        <span>Video</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="add-collection1-button18 button Content16SemiBold"
                    >
                      <span className="add-collection1-text081">
                        <span>Other</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="add-collection1-bottom-buttons">
                  <button className="add-collection1-button19 button">
                    <span className="add-collection1-text084">
                      <span>Save Draft</span>
                      <br></br>
                    </span>
                  </button>
                  <Link
                    to="/add-collection2-layered"
                    className="add-collection1-navlink3 button"
                  >
                    <span className="add-collection1-text087">
                      <span>Create Collection</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="add-collection1-icon38"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </Link>
                </div>
              </form>
              <div className="add-collection1-info-box">
                <div className="add-collection1-container28">
                  <h1 className="add-collection1-text090 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="add-collection1-text093">
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

export default AddCollection1
