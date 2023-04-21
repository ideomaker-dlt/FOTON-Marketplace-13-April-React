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
                src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_985a59cd-5e25-43ca-b106-15a717076d76-1500w.png"
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
                    <p className="item-page-text005">
                      <span>Collection Name</span>
                      <br></br>
                    </p>
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
                        <svg
                          viewBox="0 0 1024 1024"
                          className="item-page-icon fill-color-white"
                        >
                          <path d="M516 792q96-86 142-130t100-104 75-106 21-90q0-64-43-106t-107-42q-50 0-93 28t-59 72h-80q-16-44-59-72t-93-28q-64 0-107 42t-43 106q0 44 21 90t75 106 100 104 142 130l4 4zM704 128q100 0 167 68t67 166q0 58-22 113t-81 123-107 114-154 142l-62 56-62-54q-138-124-199-186t-113-146-52-162q0-98 67-166t167-68q116 0 192 90 76-90 192-90z"></path>
                        </svg>
                        <span className="item-page-text014">
                          <span>2536</span>
                          <br></br>
                        </span>
                      </button>
                      <button type="button" className="item-page-button1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="item-page-icon02 fill-color-white"
                        >
                          <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                        </svg>
                        <span className="item-page-text017">
                          <span>16536</span>
                          <br></br>
                        </span>
                      </button>
                      <button type="button" className="item-page-button2">
                        <span className="item-page-text020">
                          <span>Avatars</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <h2 className="item-page-text023">
                      The crew of pirates gathered around a campfire on a
                      tropical island, their ship anchored offshore. They
                      toasted their recent plunder and shared stories of
                      adventure. The sound of waves and the scent of saltwater
                      filled the air, as they planned their next raid under the
                      glow of the moon.
                    </h2>
                    <p className="item-page-text024">
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
                <Link
                  to="/add-collection2"
                  className="item-page-navlink button"
                >
                  <span className="item-page-text027">
                    <span>Minting Soon</span>
                    <br></br>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="item-page-icon04">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </Link>
                <button className="item-page-button3 button">
                  <span className="item-page-text030">
                    <span>Make Offer Soon</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="item-page-item-details-mobile">
                <div className="item-page-tabs-row1">
                  <span className="item-page-text033">Details</span>
                  <span className="item-page-text034">Description</span>
                  <span className="item-page-text035">Creator</span>
                </div>
                <div className="item-page-container06">
                  <h2 className="item-page-text036">
                    The crew of pirates gathered around a campfire on a tropical
                    island, their ship anchored offshore. They toasted their
                    recent plunder and shared stories of adventure. The sound of
                    waves and the scent of saltwater filled the air, as they
                    planned their next raid under the glow of the moon.
                  </h2>
                </div>
              </div>
              <div className="item-page-container07">
                <button type="button" className="item-page-button4">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="item-page-icon06 fill-color-white"
                  >
                    <path d="M516 792q96-86 142-130t100-104 75-106 21-90q0-64-43-106t-107-42q-50 0-93 28t-59 72h-80q-16-44-59-72t-93-28q-64 0-107 42t-43 106q0 44 21 90t75 106 100 104 142 130l4 4zM704 128q100 0 167 68t67 166q0 58-22 113t-81 123-107 114-154 142l-62 56-62-54q-138-124-199-186t-113-146-52-162q0-98 67-166t167-68q116 0 192 90 76-90 192-90z"></path>
                  </svg>
                  <span className="item-page-text037">
                    <span>Add to favorites</span>
                    <br></br>
                  </span>
                </button>
                <button type="button" className="item-page-button5">
                  <span className="item-page-text040">
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
                  <span className="item-page-text043">Treats</span>
                  <span className="item-page-text044">Rarity</span>
                </div>
                <div className="item-page-container08">
                  <div className="item-page-treat">
                    <div className="item-page-container-row">
                      <p className="item-page-text045">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text048">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row01">
                      <p className="item-page-text051">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text054">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat1">
                    <div className="item-page-container-row02">
                      <p className="item-page-text057">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text060">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row03">
                      <p className="item-page-text063">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text066">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat2">
                    <div className="item-page-container-row04">
                      <p className="item-page-text069">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text072">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row05">
                      <p className="item-page-text075">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text078">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat3">
                    <div className="item-page-container-row06">
                      <p className="item-page-text081">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text084">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row07">
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
                  <div className="item-page-treat4">
                    <div className="item-page-container-row08">
                      <p className="item-page-text093">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text096">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row09">
                      <p className="item-page-text099">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text102">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat5">
                    <div className="item-page-container-row10">
                      <p className="item-page-text105">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text108">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row11">
                      <p className="item-page-text111">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text114">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat6">
                    <div className="item-page-container-row12">
                      <p className="item-page-text117">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text120">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row13">
                      <p className="item-page-text123">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text126">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="item-page-treat7">
                    <div className="item-page-container-row14">
                      <p className="item-page-text129">
                        <span>Eyes</span>
                        <br></br>
                      </p>
                      <p className="item-page-text132">
                        <span>243</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="item-page-container-row15">
                      <p className="item-page-text135">
                        <span>Purple</span>
                        <br></br>
                      </p>
                      <p className="item-page-text138">
                        <span>14%</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-page-item-details2">
                <div className="item-page-tabs-row3">
                  <span className="item-page-text141">Offers</span>
                  <span className="item-page-text142">Listings</span>
                  <span className="item-page-text143">Activity</span>
                </div>
                <div className="item-page-container09">
                  <div className="item-page-header-table">
                    <div className="item-page-second-column header-second-column">
                      <div className="item-page-group1">
                        <div className="item-page-name">
                          <span className="item-page-text144">
                            <span className="Content16SemiBold item-page-text145">
                              Price
                            </span>
                            <br></br>
                          </span>
                        </div>
                        <div className="item-page-volume">
                          <span className="item-page-text147 Content16SemiBold">
                            Floor Difference
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group2">
                        <div className="item-page-change">
                          <span className="item-page-text148 Content16SemiBold">
                            expiration
                          </span>
                        </div>
                        <div className="item-page-floor">
                          <span className="item-page-text149 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text150 Content16SemiBold">
                            quantity
                          </span>
                        </div>
                        <div className="item-page-change01">
                          <span className="item-page-text151 Content16SemiBold">
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
                          <span className="item-page-text152 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume1">
                          <span className="item-page-text153 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group21">
                        <div className="item-page-change02">
                          <span className="item-page-text154">in 21 hours</span>
                        </div>
                        <div className="item-page-floor1">
                          <span className="item-page-text-mobile Content16SemiBold">
                            Expires in
                          </span>
                          <span className="item-page-text155 Content16SemiBold">
                            21
                          </span>
                        </div>
                        <div className="item-page-change03">
                          <span className="item-page-text156">rdx7..274g</span>
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
                          <span className="item-page-text157 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume2">
                          <span className="item-page-text158 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group22">
                        <div className="item-page-change04">
                          <span className="item-page-text159">in 21 hours</span>
                        </div>
                        <div className="item-page-floor2">
                          <span className="item-page-text-mobile1 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text160 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change05">
                          <span className="item-page-text161">rdx7..274g</span>
                          <span className="item-page-change-mobile1">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column3 table-row-second-column">
                      <div className="item-page-group13">
                        <div className="item-page-name3">
                          <span className="item-page-text162 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume3">
                          <span className="item-page-text163 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group23">
                        <div className="item-page-change06">
                          <span className="item-page-text164">in 21 hours</span>
                        </div>
                        <div className="item-page-floor3">
                          <span className="item-page-text-mobile2 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text165 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change07">
                          <span className="item-page-text166">rdx7..274g</span>
                          <span className="item-page-change-mobile2">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column4 table-row-second-column">
                      <div className="item-page-group14">
                        <div className="item-page-name4">
                          <span className="item-page-text167 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume4">
                          <span className="item-page-text168 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group24">
                        <div className="item-page-change08">
                          <span className="item-page-text169">in 21 hours</span>
                        </div>
                        <div className="item-page-floor4">
                          <span className="item-page-text-mobile3 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text170 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change09">
                          <span className="item-page-text171">rdx7..274g</span>
                          <span className="item-page-change-mobile3">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column5 table-row-second-column">
                      <div className="item-page-group15">
                        <div className="item-page-name5">
                          <span className="item-page-text172 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume5">
                          <span className="item-page-text173 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group25">
                        <div className="item-page-change10">
                          <span className="item-page-text174">in 21 hours</span>
                        </div>
                        <div className="item-page-floor5">
                          <span className="item-page-text-mobile4 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text175 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change11">
                          <span className="item-page-text176">rdx7..274g</span>
                          <span className="item-page-change-mobile4">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="item-page-second-column6 table-row-second-column">
                      <div className="item-page-group16">
                        <div className="item-page-name6">
                          <span className="item-page-text177 Content16SemiBold">
                            357 XRD
                          </span>
                        </div>
                        <div className="item-page-volume6">
                          <span className="item-page-text178 Content16SemiBold">
                            59% below
                          </span>
                        </div>
                      </div>
                      <div className="item-page-group26">
                        <div className="item-page-change12">
                          <span className="item-page-text179">in 21 hours</span>
                        </div>
                        <div className="item-page-floor6">
                          <span className="item-page-text-mobile5 Content16SemiBold">
                            Floor:
                          </span>
                          <span className="item-page-text180 Content16SemiBold">
                            1
                          </span>
                        </div>
                        <div className="item-page-change13">
                          <span className="item-page-text181">rdx7..274g</span>
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
