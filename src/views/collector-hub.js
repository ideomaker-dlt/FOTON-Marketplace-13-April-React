import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './collector-hub.css'

const CollectorHub = (props) => {
  return (
    <div className="collector-hub-container">
      <Helmet>
        <title>
          Collector-Hub - FOTON Marketplace for NFTs and Digital Collectibles on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Collector-Hub - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name15">
        <div className="collector-hub-header-creator">
          <div className="collector-hub-container01">
            <div className="collector-hub-container02">
              <div className="collector-hub-container03">
                <div className="collector-hub-container04">
                  <img
                    src="/Icons Imported/category_300.svg"
                    className="collector-hub-image"
                  />
                </div>
                <div className="collector-hub-container05">
                  <h1 className="collector-hub-text">Collector Hub</h1>
                  <h1 className="collector-hub-text001">
                    <span>Version 0.1</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <div className="collector-hub-container06">
              <div className="collector-hub-avatar-logo">
                <img
                  src="/vlad__foton.is__radix.stream_funny_cartoon_character_in_the_sty_98d91502-c00e-4158-af06-43df0dbd30b7-200h.png"
                  className="collector-hub-image1"
                />
              </div>
              <div className="collector-hub-container07">
                <h1 className="collector-hub-text004">Danoshi Hughemoto</h1>
                <div className="collector-hub-container08">
                  <h1 className="collector-hub-text005">
                    <span>account...</span>
                    <br></br>
                  </h1>
                  <h1 className="collector-hub-text008">
                    <span>Joined 12 Aug 2023</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <div className="collector-hub-container-buttons">
              <button type="button" className="collector-hub-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collector-hub-icon fill-color-white"
                >
                  <path d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"></path>
                </svg>
                <span className="collector-hub-text011">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collector-hub-button1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collector-hub-icon02 fill-color-gray"
                >
                  <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="collector-hub-text014">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collector-hub-button2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="collector-hub-icon04 fill-color-gray"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <span className="collector-hub-text017">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collector-hub-button3">
                <span className="collector-hub-text020">
                  <span>Follow</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collector-hub-icon06 fill-color-gray"
                >
                  <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="collector-hub-mask-overlay"></div>
          <div className="collector-hub-container-buttons1">
            <button type="button" className="collector-hub-button4">
              <svg
                viewBox="0 0 1024 1024"
                className="collector-hub-icon08 fill-color-white"
              >
                <path d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"></path>
              </svg>
              <span className="collector-hub-text023">
                <span>Follow</span>
                <br></br>
              </span>
            </button>
            <button type="button" className="collector-hub-button5">
              <svg
                viewBox="0 0 1024 1024"
                className="collector-hub-icon10 fill-color-white"
              >
                <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="collector-hub-text026">
                <span>Follow</span>
                <br></br>
              </span>
            </button>
            <button type="button" className="collector-hub-button6">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="collector-hub-icon12 fill-color-white"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <span className="collector-hub-text029">
                <span>Follow</span>
                <br></br>
              </span>
            </button>
            <button type="button" className="collector-hub-button7">
              <span className="collector-hub-text032">
                <span>Follow</span>
                <br></br>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="collector-hub-icon14 fill-color-white"
              >
                <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="collector-hub-tabs-row">
          <span className="collector-hub-text035">Profile</span>
          <span className="collector-hub-text036">Collected</span>
          <span className="collector-hub-text037">Created</span>
          <Link
            to="/collector-profile-followers"
            className="collector-hub-navlink"
          >
            Followers
          </Link>
          <Link
            to="/collector-profile-followers"
            className="collector-hub-navlink1"
          >
            Following
          </Link>
        </div>
        <div className="collector-hub-container09">
          <div className="collector-hub-container10">
            <div className="collector-hub-about">
              <div className="collector-hub-container11">
                <div className="collector-hub-container12">
                  <div className="collector-hub-image-level">
                    <img
                      alt="image"
                      src="/Icons Imported/bolt.svg"
                      className="collector-hub-image2"
                    />
                  </div>
                </div>
                <div className="collector-hub-container13">
                  <span className="collector-hub-text038">
                    <span>0 </span>
                    <span className="collector-hub-text040">/60</span>
                  </span>
                  <span className="collector-hub-text041 SmallestLabels">
                    USER Level
                  </span>
                </div>
                <div className="collector-hub-container14">
                  <span className="collector-hub-text042">00000</span>
                  <span className="collector-hub-text043 SmallestLabels">
                    {' '}
                    points
                  </span>
                </div>
              </div>
            </div>
            <div className="collector-hub-levels">
              <div className="collector-hub-header-table">
                <div className="collector-hub-second-column header-second-column">
                  <div className="collector-hub-group1">
                    <div className="collector-hub-name">
                      <span className="collector-hub-text044 SmallestLabels">
                        SKILLS
                      </span>
                    </div>
                    <div className="collector-hub-volume">
                      <span className="collector-hub-text045 SmallestLabels">
                        level
                      </span>
                      <span className="collector-hub-text046 SmallestLabels">
                        POINTS
                      </span>
                    </div>
                  </div>
                  <div className="collector-hub-group2">
                    <div className="collector-hub-change">
                      <span className="collector-hub-text047 SmallestLabels">
                        points
                      </span>
                    </div>
                    <div className="collector-hub-floor">
                      <span className="collector-hub-text048 Content16SemiBold">
                        Floor:
                      </span>
                      <span className="collector-hub-text049 SmallestLabels">
                        to level up
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collector-hub-container15">
                <div className="collector-hub-row table-row">
                  <div className="collector-hub-second-column1 table-row-second-column">
                    <div className="collector-hub-group11">
                      <div className="collector-hub-skill">
                        <span className="collector-hub-text050">Engaging</span>
                      </div>
                      <div className="collector-hub-level">
                        <span className="collector-hub-text051">
                          <span>
                            0
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="collector-hub-text053">/60</span>
                        </span>
                      </div>
                    </div>
                    <div className="collector-hub-group21">
                      <div className="collector-hub-change1">
                        <span className="collector-hub-text054">Total:</span>
                        <span className="collector-hub-text055">0</span>
                      </div>
                      <div className="collector-hub-floor1">
                        <span className="collector-hub-text-mobile">
                          To Level Up:
                        </span>
                        <span className="collector-hub-text056">100</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-row1 table-row">
                  <div className="collector-hub-second-column2 table-row-second-column">
                    <div className="collector-hub-group12">
                      <div className="collector-hub-skill1">
                        <span className="collector-hub-text057">Trading</span>
                      </div>
                      <div className="collector-hub-level1">
                        <span className="collector-hub-text058">
                          <span>
                            0
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="collector-hub-text060">/60</span>
                        </span>
                      </div>
                    </div>
                    <div className="collector-hub-group22">
                      <div className="collector-hub-change2">
                        <span className="collector-hub-text061">Total:</span>
                        <span className="collector-hub-text062">0</span>
                      </div>
                      <div className="collector-hub-floor2">
                        <span className="collector-hub-text-mobile1">
                          To Level Up:
                        </span>
                        <span className="collector-hub-text063">100</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-row2 table-row">
                  <div className="collector-hub-second-column3 table-row-second-column">
                    <div className="collector-hub-group13">
                      <div className="collector-hub-skill2">
                        <span className="collector-hub-text064">Creating</span>
                      </div>
                      <div className="collector-hub-level2">
                        <span className="collector-hub-text065">
                          <span>
                            0
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="collector-hub-text067">/60</span>
                        </span>
                      </div>
                    </div>
                    <div className="collector-hub-group23">
                      <div className="collector-hub-change3">
                        <span className="collector-hub-text068">Total:</span>
                        <span className="collector-hub-text069">0</span>
                      </div>
                      <div className="collector-hub-floor3">
                        <span className="collector-hub-text-mobile2">
                          To Level Up:
                        </span>
                        <span className="collector-hub-text070">100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collector-hub-about1">
              <div className="collector-hub-container16">
                <label className="collector-hub-text071">About</label>
              </div>
              <div className="collector-hub-container17">
                <h2 className="collector-hub-text072 Content">
                  The crew of pirates gathered around a campfire on a tropical
                  island, their ship anchored offshore. They toasted their
                  recent plunder and shared stories of adventure. The sound of
                  waves and the scent of saltwater filled the air, as they
                  planned their next raid under the glow of the moon.
                </h2>
              </div>
            </div>
          </div>
          <div className="collector-hub-card">
            <div className="collector-hub-item-details">
              <div className="collector-hub-tabs-row1">
                <span className="collector-hub-text073">Tesseracts</span>
                <span className="collector-hub-text074">Artefacts</span>
              </div>
              <div className="collector-hub-container18">
                <div className="collector-hub-tesseract">
                  <div className="collector-hub-image-tesseract"></div>
                  <div className="collector-hub-container19">
                    <div className="collector-hub-container-row">
                      <p className="collector-hub-text075">
                        <span>Blue Ice</span>
                        <br></br>
                      </p>
                      <p className="collector-hub-text078">
                        <span>3</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-tesseract1">
                  <div className="collector-hub-image-tesseract1"></div>
                  <div className="collector-hub-container20">
                    <div className="collector-hub-container-row1">
                      <p className="collector-hub-text081">
                        <span>Green Leaf</span>
                        <br></br>
                      </p>
                      <p className="collector-hub-text084">
                        <span>3</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-tesseract2">
                  <div className="collector-hub-image-tesseract2"></div>
                  <div className="collector-hub-container21">
                    <div className="collector-hub-container-row2">
                      <p className="collector-hub-text087">Yellow Spark</p>
                      <p className="collector-hub-text088">
                        <span>4</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-tesseract3">
                  <div className="collector-hub-image-tesseract3"></div>
                  <div className="collector-hub-container22">
                    <div className="collector-hub-container-row3">
                      <p className="collector-hub-text091">Red Heart</p>
                      <p className="collector-hub-text092">
                        <span>7</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-tesseract4">
                  <div className="collector-hub-image-tesseract4"></div>
                  <div className="collector-hub-container23">
                    <div className="collector-hub-container-row4">
                      <p className="collector-hub-text095">Purple Blade</p>
                      <p className="collector-hub-text096">
                        <span>2</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collector-hub-tesseract5">
                  <div className="collector-hub-image-tesseract5"></div>
                  <div className="collector-hub-container24">
                    <div className="collector-hub-container-row5">
                      <p className="collector-hub-text099">White Pearl</p>
                      <p className="collector-hub-text100">
                        <span>0</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default CollectorHub
