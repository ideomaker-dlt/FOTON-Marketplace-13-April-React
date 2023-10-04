import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './collection-drop-page.css'

const CollectionDropPage = (props) => {
  return (
    <div className="collection-drop-page-container">
      <Helmet>
        <title>
          Collection-Drop-Page - FOTON Marketplace for NFTs and Digital
          Collectibles on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Collection-Drop-Page - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name18">
        <div className="collection-drop-page-header">
          <div className="article-container collection-drop-page-container01">
            <div className="collection-drop-page-container-pop article-img-holder"></div>
            <div className="collection-drop-page-gray-overlay article-title-link">
              <div className="collection-drop-page-container02">
                <div className="collection-drop-page-container03">
                  <div className="collection-drop-page-avatar-logo">
                    <img
                      src="/grid_0%20%5B7%5D-200h.webp"
                      className="collection-drop-page-image"
                    />
                  </div>
                  <div className="collection-drop-page-container04">
                    <h1 className="collection-drop-page-text">
                      Collection One
                    </h1>
                    <div className="collection-drop-page-container05">
                      <p className="collection-drop-page-text01">
                        <span>By Smooth Collective</span>
                        <br></br>
                      </p>
                      <p className="collection-drop-page-text04">
                        <span>Verified</span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collection-drop-page-container06">
                  <div className="collection-drop-page-container07">
                    <div className="collection-drop-page-container08">
                      <div className="collection-drop-page-dot"></div>
                      <span className="collection-drop-page-text07">
                        Time to DROP
                      </span>
                    </div>
                    <div className="collection-drop-page-container09">
                      <span className="collection-drop-page-text08">
                        21 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-drop-page-mask-overlay">
            <div className="collection-drop-page-container-buttons">
              <button type="button" className="collection-drop-page-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-drop-page-icon fill-color-white"
                >
                  <path d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"></path>
                </svg>
                <span className="collection-drop-page-text09">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-drop-page-button1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-drop-page-icon02 fill-color-white"
                >
                  <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="collection-drop-page-text12">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-drop-page-button2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="collection-drop-page-icon04 fill-color-white"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <span className="collection-drop-page-text15">
                  <span>Follow</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="collection-drop-page-button3">
                <span className="collection-drop-page-text18">
                  <span>Follow</span>
                  <br></br>
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-drop-page-icon06 fill-color-white"
                >
                  <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="collection-drop-page-tabs-row">
          <span className="collection-drop-page-text21">Mint</span>
          <Link
            to="/collection-drop-page-roadmap"
            className="collection-drop-page-navlink"
          >
            Roadmap
          </Link>
          <Link
            to="/collection-drop-page-team"
            className="collection-drop-page-navlink1"
          >
            Team
          </Link>
          <span className="collection-drop-page-text22">FAQ</span>
        </div>
        <div className="collection-drop-page-drops-container">
          <div className="collection-drop-page-wrapper-all">
            <div className="collection-drop-page-container-top">
              <div className="collection-drop-page-container-left">
                <div className="collection-drop-page-about">
                  <div className="collection-drop-page-container10">
                    <label className="collection-drop-page-text23">
                      About this Collection
                    </label>
                  </div>
                  <div className="collection-drop-page-container11"></div>
                  <p className="collection-drop-page-text24">
                    <span>
                      In the year 2050, humanity had exhausted the resources of
                      Earth and faced the grim reality of its impending demise.
                      But hope was not lost, for a team of scientists had
                      discovered a new planet, similar to Mars, that could
                      sustain human life. A mission was launched to establish a
                      colony on this distant world, and after years of travel,
                      the first settlers arrived.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The new planet, named Nova, was a harsh and unforgiving
                      environment. The colonists had to contend with intense
                      radiation, extreme temperatures, and unpredictable weather
                      patterns. But with their advanced technology and
                      unyielding determination, they managed to establish a
                      self-sustaining colony and began the process of
                      terraforming the planet.
                    </span>
                    <br className="Content"></br>
                    <span>
                      As the years passed, the colonists adapted to their new
                      home and formed a thriving society. They built towering
                      cities, cultivated vast fields of crops, and explored the
                      uncharted regions of the planet. But they soon discovered
                      that they were not alone on Nova.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The planet was home to a diverse array of alien life
                      forms, some of which were hostile to human presence. The
                      colonists found themselves in a constant struggle for
                      survival, battling against vicious predators and cunning
                      adversaries. And as they delved deeper into the mysteries
                      of Nova, they began to uncover dark secrets about its true
                      nature and the forces that brought them there.
                    </span>
                    <br className="Content"></br>
                    <span>
                      This is the story of the Nova colony and its struggle for
                      survival in an alien world. It is a tale of courage,
                      determination, and the indomitable spirit of humanity in
                      the face of adversity. But it is also a cautionary tale
                      about the dangers of playing god and the consequences of
                      our actions on the universe around us.
                    </span>
                  </p>
                </div>
                <div className="collection-drop-page-items-example">
                  <div className="collection-drop-page-selected-image">
                    <img
                      alt="image"
                      src="/vlad__foton.is__radix.stream_destiny_2_futuristic_weapon_weapon_ca187c73-4361-4257-92dd-492fd841d827-1500w.png"
                      className="collection-drop-page-image1"
                    />
                  </div>
                  <div className="collection-drop-page-four-examples">
                    <div className="collection-drop-page-selected-image1"></div>
                    <div className="collection-drop-page-selected-image2"></div>
                    <div className="collection-drop-page-selected-image3"></div>
                    <div className="collection-drop-page-selected-image4"></div>
                  </div>
                </div>
                <div className="collection-drop-page-about1">
                  <div className="collection-drop-page-container12">
                    <label className="collection-drop-page-text34">
                      About this Collection
                    </label>
                  </div>
                  <div className="collection-drop-page-container13"></div>
                  <p className="collection-drop-page-text35">
                    <span>
                      In the year 2050, humanity had exhausted the resources of
                      Earth and faced the grim reality of its impending demise.
                      But hope was not lost, for a team of scientists had
                      discovered a new planet, similar to Mars, that could
                      sustain human life. A mission was launched to establish a
                      colony on this distant world, and after years of travel,
                      the first settlers arrived.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The new planet, named Nova, was a harsh and unforgiving
                      environment. The colonists had to contend with intense
                      radiation, extreme temperatures, and unpredictable weather
                      patterns. But with their advanced technology and
                      unyielding determination, they managed to establish a
                      self-sustaining colony and began the process of
                      terraforming the planet.
                    </span>
                    <br className="Content"></br>
                    <span>
                      As the years passed, the colonists adapted to their new
                      home and formed a thriving society. They built towering
                      cities, cultivated vast fields of crops, and explored the
                      uncharted regions of the planet. But they soon discovered
                      that they were not alone on Nova.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The planet was home to a diverse array of alien life
                      forms, some of which were hostile to human presence. The
                      colonists found themselves in a constant struggle for
                      survival, battling against vicious predators and cunning
                      adversaries. And as they delved deeper into the mysteries
                      of Nova, they began to uncover dark secrets about its true
                      nature and the forces that brought them there.
                    </span>
                    <br className="Content"></br>
                    <span>
                      This is the story of the Nova colony and its struggle for
                      survival in an alien world. It is a tale of courage,
                      determination, and the indomitable spirit of humanity in
                      the face of adversity. But it is also a cautionary tale
                      about the dangers of playing god and the consequences of
                      our actions on the universe around us.
                    </span>
                  </p>
                </div>
              </div>
              <div className="collection-drop-page-container-right">
                <div className="collection-drop-page-mint-panel">
                  <div className="collection-drop-page-container14">
                    <label className="collection-drop-page-text45">
                      Collection Name
                    </label>
                    <div className="collection-drop-page-container15">
                      <p className="collection-drop-page-text46">
                        <span>Price per item minted:</span>
                        <br></br>
                      </p>
                      <p className="collection-drop-page-text49">
                        <span>Starts in:</span>
                        <br></br>
                      </p>
                    </div>
                    <div className="collection-drop-page-container16">
                      <label className="collection-drop-page-text52">
                        150 XRD
                      </label>
                      <label className="collection-drop-page-text53">
                        21 Days
                      </label>
                    </div>
                  </div>
                  <div className="collection-drop-page-container17">
                    <div className="collection-drop-page-buy-container">
                      <div className="collection-drop-page-item-counter">
                        <button className="collection-drop-page-button4 button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="collection-drop-page-icon08 fill-color-white"
                          >
                            <path d="M810 554h-596v-84h596v84z"></path>
                          </svg>
                        </button>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="1"
                          className="collection-drop-page-textinput"
                        />
                        <button className="collection-drop-page-button5 button">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="collection-drop-page-icon10 fill-color-white"
                          >
                            <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                          </svg>
                        </button>
                      </div>
                      <button className="collection-drop-page-button6 button">
                        <span className="collection-drop-page-text54">
                          <span>Mint</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                    <div className="collection-drop-page-container18">
                      <p className="collection-drop-page-text57">
                        <span>Limit 20 per user. </span>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collection-drop-page-progress-panel">
                  <div className="collection-drop-page-container19">
                    <label className="collection-drop-page-text60">
                      Progress and Stats
                    </label>
                    <div className="collection-drop-page-container20">
                      <div className="collection-drop-page-row-chart">
                        <div className="collection-drop-page-labels">
                          <span className="collection-drop-page-text-percentage">
                            75% minted
                          </span>
                          <span className="collection-drop-page-text-percentage1">
                            2457 / 10000
                          </span>
                        </div>
                        <div className="collection-drop-page-minting-progress">
                          <div className="collection-drop-page-bar-bg">
                            <div className="collection-drop-page-progress">
                              <div className="collection-drop-page-green-bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collection-drop-page-container21">
                      <label className="collection-drop-page-text61 Content">
                        Items reserved pre-minting:
                      </label>
                      <label className="collection-drop-page-text62 Content">
                        2458
                      </label>
                    </div>
                    <div className="collection-drop-page-container22">
                      <label className="collection-drop-page-text63 Content">
                        Total owners:
                      </label>
                      <label className="collection-drop-page-text64 Content">
                        1259
                      </label>
                    </div>
                    <div className="collection-drop-page-container23">
                      <label className="collection-drop-page-text65 Content">
                        Total raised:
                      </label>
                      <label className="collection-drop-page-text66 Content">
                        257500 XRD
                      </label>
                    </div>
                    <div className="collection-drop-page-container24">
                      <label className="collection-drop-page-text67">
                        Starting time:
                      </label>
                      <label className="collection-drop-page-text68 Content">
                        21 Sept 2023 - 10:30 pm CEST
                      </label>
                    </div>
                    <div className="collection-drop-page-container25">
                      <label className="collection-drop-page-text69 Content">
                        Ending time:
                      </label>
                      <label className="collection-drop-page-text70">
                        29 Sept 2023 - 09:30 pm CEST
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-drop-page-container-bottom">
              <div className="collection-drop-page-container-left1">
                <div className="collection-drop-page-about2">
                  <div className="collection-drop-page-container26">
                    <label className="collection-drop-page-text71">
                      About this Collection
                    </label>
                  </div>
                  <div className="collection-drop-page-container27"></div>
                  <p className="collection-drop-page-text72">
                    <span>
                      In the year 2050, humanity had exhausted the resources of
                      Earth and faced the grim reality of its impending demise.
                      But hope was not lost, for a team of scientists had
                      discovered a new planet, similar to Mars, that could
                      sustain human life. A mission was launched to establish a
                      colony on this distant world, and after years of travel,
                      the first settlers arrived.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The new planet, named Nova, was a harsh and unforgiving
                      environment. The colonists had to contend with intense
                      radiation, extreme temperatures, and unpredictable weather
                      patterns. But with their advanced technology and
                      unyielding determination, they managed to establish a
                      self-sustaining colony and began the process of
                      terraforming the planet.
                    </span>
                    <br className="Content"></br>
                    <span>
                      As the years passed, the colonists adapted to their new
                      home and formed a thriving society. They built towering
                      cities, cultivated vast fields of crops, and explored the
                      uncharted regions of the planet. But they soon discovered
                      that they were not alone on Nova.
                    </span>
                    <br className="Content"></br>
                    <span>
                      The planet was home to a diverse array of alien life
                      forms, some of which were hostile to human presence. The
                      colonists found themselves in a constant struggle for
                      survival, battling against vicious predators and cunning
                      adversaries. And as they delved deeper into the mysteries
                      of Nova, they began to uncover dark secrets about its true
                      nature and the forces that brought them there.
                    </span>
                    <br className="Content"></br>
                    <span>
                      This is the story of the Nova colony and its struggle for
                      survival in an alien world. It is a tale of courage,
                      determination, and the indomitable spirit of humanity in
                      the face of adversity. But it is also a cautionary tale
                      about the dangers of playing god and the consequences of
                      our actions on the universe around us.
                    </span>
                  </p>
                </div>
              </div>
              <div className="collection-drop-page-container-right1">
                <div className="collection-drop-page-item-info-box">
                  <div className="collection-drop-page-item-image">
                    <img
                      alt="image"
                      src="/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_deso_556dbc6d-d05c-43d6-b5a3-019912494a61-1500w.png"
                      className="collection-drop-page-image2"
                    />
                  </div>
                  <div className="collection-drop-page-item-image1">
                    <img
                      alt="image"
                      src="/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_inne_f7e1f32e-2759-4d97-ade9-00fbbe77368d-1500w.png"
                      className="collection-drop-page-image3"
                    />
                  </div>
                  <div className="collection-drop-page-item-image2">
                    <img
                      alt="image"
                      src="/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_inne_f7e1f32e-2759-4d97-ade9-00fbbe77368d-1500w.png"
                      className="collection-drop-page-image4"
                    />
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

export default CollectionDropPage
