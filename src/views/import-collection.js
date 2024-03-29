import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import ImportButton from '../components/import-button'
import './import-collection.css'

const ImportCollection = (props) => {
  return (
    <div className="import-collection-container">
      <Helmet>
        <title>
          Import-Collection - FOTON - Web3's Digital Assets Hub and NFTs
          Marketplace on Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Import-Collection - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
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
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name32">
        <div className="import-collection-header-creator">
          <div className="import-collection-container01">
            <div className="import-collection-container02">
              <div className="import-collection-container03">
                <h1 className="import-collection-text">
                  Import a Generated Collection
                </h1>
              </div>
            </div>
          </div>
          <div className="import-collection-mask-overlay"></div>
        </div>
        <div className="import-collection-tabs-row">
          <div className="import-collection-container04">
            <Link
              to="/add-collection-templates"
              className="import-collection-navlink"
            >
              &lt; go back
            </Link>
            <span className="import-collection-text01">Import items</span>
          </div>
        </div>
        <div className="import-collection-container-form">
          <div className="import-collection-under-header">
            <div className="import-collection-card">
              <form className="import-collection-form">
                <div className="import-collection-field">
                  <label className="import-collection-text02 Content padding-4px-left">
                    Select the 3rd party Generator the Collection was made with:
                  </label>
                  <div className="import-collection-container05">
                    <div className="import-collection-card-small">
                      <div className="import-collection-container06">
                        <label className="import-collection-text03">
                          NFT Generator by OneMint 
                        </label>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="import-collection-icon"
                        >
                          <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM512 298q88 0 151 63t63 151-63 151-151 63-151-63-63-151 63-151 151-63z"></path>
                        </svg>
                      </div>
                      <div className="import-collection-container07">
                        <span className="import-collection-text04">
                          <span>
                            Pros: More advanced, Just 1 zip file to import
                            containing both artworks and metadata.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Cons: Paid. Adds up the cost for large collections.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Website:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <a
                            href="https://onemint.io"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="import-collection-link"
                          >
                            www.onemint.io
                          </a>
                          <br></br>
                        </span>
                      </div>
                    </div>
                    <div className="import-collection-card-small1">
                      <div className="import-collection-container08">
                        <label className="import-collection-text13">
                          NFT Export Generator
                        </label>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="import-collection-icon02"
                        >
                          <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                        </svg>
                      </div>
                      <div className="import-collection-container09">
                        <span className="import-collection-text14">
                          <span>Pros: Free for now, unlimited items.</span>
                          <br></br>
                          <br></br>
                          <span>
                            Cons: More basic features, exports items in batches
                            of 100, so you&apos;ll need to un-Zip all, add to a
                            new folder and Zip it. Like this you have one single
                            Zip file for import to Foton.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Website:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <a
                            href="https://nftexport.io"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="import-collection-link1"
                          >
                            www.nftexport.io
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="import-collection-card-small2">
                      <div className="import-collection-container10">
                        <label className="import-collection-text22">
                          HashLips Art Engine App
                        </label>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="import-collection-icon04"
                        >
                          <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                        </svg>
                      </div>
                      <div className="import-collection-container11">
                        <span className="import-collection-text23">
                          <span>
                            Pros: Free, unlimited items, versions for Mac and
                            Windows
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Cons: Basic features, you have to compress the
                            exported collection as 1 Zip file.
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            Website:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <a
                            href="https://github.com/HashLips/hashlips_art_engine_app/releases/tag/v0.1.0_alpha"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="import-collection-link2"
                          >
                            www.
                          </a>
                          <a
                            href="https://github.com/HashLips/hashlips_art_engine_app/releases/tag/v0.1.0_alpha"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="import-collection-link3"
                          >
                            github
                          </a>
                          <a
                            href="https://github.com/HashLips/hashlips_art_engine_app/releases/tag/v0.1.0_alpha"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="import-collection-link4"
                          >
                            .com/hashlips
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="import-collection-field1">
                  <label className="import-collection-text31 Content padding-4px-left">
                    Collection Size (Leave empty if you don&apos;t want to
                    update existing size):
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="15000..."
                    className="import-collection-textinput focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="import-collection-zip-files">
                  <div className="import-collection-container12">
                    <div className="import-collection-add-files">
                      <label className="import-collection-text32 padding-4px-left">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>Add Zip files: </span>
                        <span> </span>
                        <br className="import-collection-text36"></br>
                        <span className="import-collection-text37">
                          (FOTON will expand the Zip files automatically and
                          attach Traits to Artworks. Ignore the zip file
                          containing the Collection description. This is applied
                          from FOTON directly.)
                        </span>
                      </label>
                      <div className="import-collection-container13">
                        <input
                          type="text"
                          placeholder="Add Zip files..."
                          className="import-collection-textinput1 focus-reset-forms input Content16SemiBold"
                        />
                        <button className="import-collection-button button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon06"
                          >
                            <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="import-collection-zipfile">
                        <div className="import-collection-container14">
                          <div className="import-collection-container15">
                            <span className="import-collection-text38 Content16SemiBold">
                              <span>1-100 items.zip</span>
                              <br></br>
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon08 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="import-collection-button1 Content16SemiBold button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon10"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="import-collection-zipfile1">
                        <div className="import-collection-container16">
                          <div className="import-collection-container17">
                            <span className="import-collection-text41">
                              100-200 items.zip
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon12 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="import-collection-button2 button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon14"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="import-collection-zipfile2">
                        <div className="import-collection-container18">
                          <div className="import-collection-container19">
                            <span className="import-collection-text42">
                              200-300 items.zip
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon16 fill-color-gray"
                          >
                            <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                          </svg>
                        </div>
                        <button className="import-collection-button3 button Content16SemiBold">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="import-collection-icon18"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="import-collection-bottom-buttons">
                  <button className="import-collection-button4 button">
                    <span className="import-collection-text43">
                      <span>Import Collection</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="import-collection-icon20"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                  <ImportButton></ImportButton>
                </div>
              </form>
              <div className="import-collection-info-box">
                <div className="import-collection-container20">
                  <h1 className="import-collection-text46 Content18">
                    <span>Info:</span>
                    <br></br>
                  </h1>
                  <span className="import-collection-text49">
                    <span>
                      This import Collection feature works only with the
                      Generators selected by FOTON. They are ideal usually for
                      layered collections with a lot of generated items. (ex:
                      avatar collections)
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      For maximum features and specific features related to the
                      Radix Network we advice to use the FOTON Generator
                      available soon post Babylon launch. 
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

export default ImportCollection
