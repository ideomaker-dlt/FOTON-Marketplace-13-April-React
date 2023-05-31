import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './item-page.css'

const ItemPage = (props) => {
  return (
    <div className="item-page-container">
      <Helmet>
        <title>
          Item-Page - FOTON Marketplace for NFTs and Digital Collectibles on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Item-Page - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name14">
        <div className="item-page-wrapper-all">
          <div className="item-page-container-left">
            <div className="item-page-item-image">
              <img
                alt="image"
                src="/vlad__foton.is__radix.stream_pirate_crew_member_illustration_985a59cd-5e25-43ca-b106-15a717076d76-1500w.png"
                className="item-page-image"
              />
            </div>
            <div className="item-page-item-details">
              <div className="item-page-tabs-row">
                <span className="item-page-text">Details</span>
                <span className="item-page-text001">Description</span>
                <span className="item-page-text002">Creator</span>
              </div>
              <div className="item-page-container01">
                <h2 className="item-page-text003">
                  The crew of pirates gathered around a campfire on a tropical
                  island, their ship anchored offshore. They toasted their
                  recent plunder and shared stories of adventure. The sound of
                  waves and the scent of saltwater filled the air, as they
                  planned their next raid under the glow of the moon.
                </h2>
              </div>
            </div>
          </div>
          <div className="item-page-container-right">
            <div className="item-page-item-info-box">
              <div className="item-page-name-item">
                <div className="item-page-container02">
                  <h1 className="item-page-text004">Item name #2044</h1>
                  <div className="item-page-container03">
                    <Link to="/collection-page" className="item-page-navlink">
                      <p className="item-page-text005">
                        <span>Collection Name</span>
                        <br></br>
                      </p>
                    </Link>
                    <p className="item-page-text008">
                      <span>
                        By
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </p>
                    <p className="item-page-text011">
                      <span>Smooth Collective</span>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-page-container04">
                <div className="item-page-description-collection">
                  <div className="item-page-container05">
                    <div className="item-page-engagement-buttons">
                      <button type="button" className="item-page-button">
                        <img
                          alt="image"
                          src="/tag.svg"
                          className="item-page-image1"
                        />
                        <span className="item-page-text014">
                          <span>2536</span>
                          <br></br>
                        </span>
                      </button>
                      <button type="button" className="item-page-button1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="item-page-icon fill-color-white"
                        >
                          <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                        </svg>
                        <span className="item-page-text017">
                          <span>2536</span>
                          <br></br>
                        </span>
                      </button>
                      <button type="button" className="item-page-button2">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="item-page-icon02 fill-color-white"
                        >
                          <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                        </svg>
                        <span className="item-page-text020">
                          <span>2536</span>
                          <br></br>
                        </span>
                      </button>
                      <button type="button" className="item-page-button3">
                        <span className="item-page-text023">
                          <span>Avatars</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <h2 className="item-page-text026">
                      The crew of pirates gathered around a campfire on a
                      tropical island, their ship anchored offshore. They
                      toasted their recent plunder and shared stories of
                      adventure. The sound of waves and the scent of saltwater
                      filled the air, as they planned their next raid under the
                      glow of the moon.
                    </h2>
                    <p className="item-page-text027">
                      <span>
                        Created on 23 Apr 2023
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-page-buy-container">
                <button className="item-page-button4 button">
                  <span className="item-page-text030">
                    <span>Minting Soon</span>
                    <br></br>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="item-page-icon04">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </button>
                <button className="item-page-button5 button">
                  <span className="item-page-text033">
                    <span>
                      Make Offer
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="item-page-item-details-mobile">
                <div className="item-page-tabs-row1">
                  <span className="item-page-text036">Details</span>
                  <span className="item-page-text037">Description</span>
                  <span className="item-page-text038">Creator</span>
                </div>
                <div className="item-page-container06">
                  <h2 className="item-page-text039">
                    The crew of pirates gathered around a campfire on a tropical
                    island, their ship anchored offshore. They toasted their
                    recent plunder and shared stories of adventure. The sound of
                    waves and the scent of saltwater filled the air, as they
                    planned their next raid under the glow of the moon.
                  </h2>
                </div>
              </div>
              <div className="item-page-container07">
                <button type="button" className="item-page-button6">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="item-page-icon06 fill-color-white"
                  >
                    <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                  </svg>
                  <span className="item-page-text040">
                    <span>Add to favorites</span>
                    <br></br>
                  </span>
                </button>
                <button type="button" className="item-page-button7">
                  <span className="item-page-text043">
                    <span>Follow</span>
                    <br></br>
                  </span>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="item-page-icon08 fill-color-gray"
                  >
                    <path d="M731.429 682.857c0-67.429-54.857-122.286-121.714-122.286-32 0-61.143 12.571-82.857 33.143l-137.714-68.571c0.571-4.571 1.143-8.571 1.143-13.143s-0.571-8.571-1.143-13.143l137.714-68.571c21.714 20.571 50.857 33.143 82.857 33.143 66.857 0 121.714-54.857 121.714-122.286 0-66.857-54.857-121.714-121.714-121.714-67.429 0-122.286 54.857-122.286 121.714 0 4.571 0.571 8.571 1.143 13.143l-137.714 68.571c-21.714-20-50.857-32.571-82.857-32.571-66.857 0-121.714 54.286-121.714 121.714s54.857 121.714 121.714 121.714c32 0 61.143-12.571 82.857-32.571l137.714 68.571c-0.571 4.571-1.143 8.571-1.143 13.143 0 66.857 54.857 121.714 122.286 121.714 66.857 0 121.714-54.857 121.714-121.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </button>
              </div>
              <div className="item-page-item-details1">
                <div className="item-page-tabs-row2">
                  <span className="item-page-text046">Treats</span>
                  <span className="item-page-text047">Rarity</span>
                </div>
                <div className="item-page-container08">
                  <div className="item-page-treat">
                    <div className="item-page-container-row">
                      <p className="item-page-text048">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container09">
                        <p className="item-page-text051">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text054">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row01">
                      <p className="item-page-text057">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text060">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat1">
                    <div className="item-page-container-row02">
                      <p className="item-page-text063">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container10">
                        <p className="item-page-text066">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text069">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row03">
                      <p className="item-page-text072">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text075">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat2">
                    <div className="item-page-container-row04">
                      <p className="item-page-text078">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container11">
                        <p className="item-page-text081">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text084">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row05">
                      <p className="item-page-text087">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text090">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat3">
                    <div className="item-page-container-row06">
                      <p className="item-page-text093">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container12">
                        <p className="item-page-text096">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text099">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row07">
                      <p className="item-page-text102">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text105">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat4">
                    <div className="item-page-container-row08">
                      <p className="item-page-text108">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container13">
                        <p className="item-page-text111">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text114">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row09">
                      <p className="item-page-text117">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text120">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat5">
                    <div className="item-page-container-row10">
                      <p className="item-page-text123">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container14">
                        <p className="item-page-text126">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text129">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row11">
                      <p className="item-page-text132">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text135">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat6">
                    <div className="item-page-container-row12">
                      <p className="item-page-text138">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container15">
                        <p className="item-page-text141">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text144">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row13">
                      <p className="item-page-text147">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text150">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat7">
                    <div className="item-page-container-row14">
                      <p className="item-page-text153">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <div className="item-page-container16">
                        <p className="item-page-text156">
                          <span>243</span>
                          <br></br>
                        </p>
                        <p className="item-page-text159">
                          <span>Have it</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                    <div className="item-page-container-row15">
                      <p className="item-page-text162">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text165">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-page-item-details2">
                <div className="item-page-tabs-row3">
                  <span className="item-page-text168">Offers</span>
                  <span className="item-page-text169">Listings</span>
                  <span className="item-page-text170">Activity</span>
                </div>
                <div className="item-page-container17">
                  <div className="item-page-header-table">
                    <div className="item-page-second-column header-second-column">
                      <div className="item-page-group1">
                        <div className="item-page-name">
                          <span className="item-page-text171">
                            <span className="Content16SemiBold item-page-text172">
                              Price
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="item-page-volume">
                          <span className="item-page-text174 Content16SemiBold">
                            Floor Difference
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group2">
                        <div className="item-page-change">
                          <span className="item-page-text175 Content16SemiBold">
                            expiration
                          </span>
                        </div>
                        <div className="item-page-floor">
                          <span className="item-page-text176 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text177 Content16SemiBold">
                            quantity
                          </span>
                        </div>
                        <div className="item-page-change01">
                          <span className="item-page-text178 Content16SemiBold">
                            from
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column1 table-row-second-column">
                      <div className="item-page-group11">
                        <div className="item-page-name1">
                          <span className="item-page-text179 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume1">
                          <span className="item-page-text180 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group21">
                        <div className="item-page-change02">
                          <span className="item-page-text181">in 21 hours</span>
                        </div>
                        <div className="item-page-floor1">
                          <span className="item-page-text-mobile Content16SemiBold">
                            Expires in
                          </span>
                          <span className="item-page-text182 Content16SemiBold">
                            21
                          </span>
                        </div>
                        <div className="item-page-change03">
                          <span className="item-page-text183">rdx7..274g</span>
                          <span className="item-page-change-mobile">
                            21 days left
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column2 table-row-second-column">
                      <div className="item-page-group12">
                        <div className="item-page-name2">
                          <span className="item-page-text184 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume2">
                          <span className="item-page-text185 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group22">
                        <div className="item-page-change04">
                          <span className="item-page-text186">in 21 hours</span>
                        </div>
                        <div className="item-page-floor2">
                          <span className="item-page-text-mobile1 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text187 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change05">
                          <span className="item-page-text188">rdx7..274g</span>
                          <span className="item-page-change-mobile1">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column3 table-row-second-column">
                      <div className="item-page-group13">
                        <div className="item-page-name3">
                          <span className="item-page-text189 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume3">
                          <span className="item-page-text190 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group23">
                        <div className="item-page-change06">
                          <span className="item-page-text191">in 21 hours</span>
                        </div>
                        <div className="item-page-floor3">
                          <span className="item-page-text-mobile2 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text192 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change07">
                          <span className="item-page-text193">rdx7..274g</span>
                          <span className="item-page-change-mobile2">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column4 table-row-second-column">
                      <div className="item-page-group14">
                        <div className="item-page-name4">
                          <span className="item-page-text194 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume4">
                          <span className="item-page-text195 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group24">
                        <div className="item-page-change08">
                          <span className="item-page-text196">in 21 hours</span>
                        </div>
                        <div className="item-page-floor4">
                          <span className="item-page-text-mobile3 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text197 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change09">
                          <span className="item-page-text198">rdx7..274g</span>
                          <span className="item-page-change-mobile3">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column5 table-row-second-column">
                      <div className="item-page-group15">
                        <div className="item-page-name5">
                          <span className="item-page-text199 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume5">
                          <span className="item-page-text200 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group25">
                        <div className="item-page-change10">
                          <span className="item-page-text201">in 21 hours</span>
                        </div>
                        <div className="item-page-floor5">
                          <span className="item-page-text-mobile4 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text202 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change11">
                          <span className="item-page-text203">rdx7..274g</span>
                          <span className="item-page-change-mobile4">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column6 table-row-second-column">
                      <div className="item-page-group16">
                        <div className="item-page-name6">
                          <span className="item-page-text204 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume6">
                          <span className="item-page-text205 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group26">
                        <div className="item-page-change12">
                          <span className="item-page-text206">in 21 hours</span>
                        </div>
                        <div className="item-page-floor6">
                          <span className="item-page-text-mobile5 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text207 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change13">
                          <span className="item-page-text208">rdx7..274g</span>
                          <span className="item-page-change-mobile5">+31%</span>
                        </div>
                      </div>
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

export default ItemPage
