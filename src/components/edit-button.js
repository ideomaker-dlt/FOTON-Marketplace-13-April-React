import React, { useState } from 'react'

import './edit-button.css'

const EditButton = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="edit-button-container">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="edit-button-button"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="edit-button-icon fill-color-white"
        >
          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
        <span className="edit-button-text">
          <span>Edit</span>
          <br></br>
        </span>
      </button>
      {isVisible && (
        <div className="edit-button-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="edit-button-out"
          ></div>
          <div className="edit-button-container01">
            <div className="edit-button-top-tabs">
              <div
                onClick={() => setIsVisible(false)}
                className="edit-button-container02"
              >
                <span className="edit-button-text03 Content16SemiBold">
                  &lt; back
                </span>
              </div>
              <div className="edit-button-container03">
                <span className="edit-button-text04 Content16SemiBold">
                  Settings
                </span>
              </div>
              <div className="edit-button-container04">
                <span className="edit-button-text05">Uploaded</span>
              </div>
              <div className="edit-button-container05">
                <span className="edit-button-text06">Rarity</span>
              </div>
              <div className="edit-button-container06">
                <span className="edit-button-text07">Rules</span>
              </div>
            </div>
            <div className="edit-button-content-under">
              <div className="edit-button-container07">
                <div className="item-layer edit-button-trait">
                  <div className="edit-button-container-bg">
                    <div className="edit-button-image-item">
                      <input type="checkbox" className="edit-button-checkbox" />
                      <div className="edit-button-replace-image">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon02 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box">
                    <div className="edit-button-container08">
                      <div className="edit-button-name-item">
                        <span className="edit-button-text08">Shy</span>
                      </div>
                      <div className="edit-button-rarity">
                        <span className="edit-button-text09">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait1">
                  <div className="edit-button-container-bg1">
                    <div className="edit-button-image-item1">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox1"
                      />
                      <div className="edit-button-replace-image1">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon04 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box1">
                    <div className="edit-button-container09">
                      <div className="edit-button-name-item1">
                        <span className="edit-button-text10">Shy</span>
                      </div>
                      <div className="edit-button-rarity1">
                        <span className="edit-button-text11">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait2">
                  <div className="edit-button-container-bg2">
                    <div className="edit-button-image-item2">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox2"
                      />
                      <div className="edit-button-replace-image2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon06 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box2">
                    <div className="edit-button-container10">
                      <div className="edit-button-name-item2">
                        <span className="edit-button-text12">Shy</span>
                      </div>
                      <div className="edit-button-rarity2">
                        <span className="edit-button-text13">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait3">
                  <div className="edit-button-container-bg3">
                    <div className="edit-button-image-item3">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox3"
                      />
                      <div className="edit-button-replace-image3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon08 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box3">
                    <div className="edit-button-container11">
                      <div className="edit-button-name-item3">
                        <span className="edit-button-text14">Shy</span>
                      </div>
                      <div className="edit-button-rarity3">
                        <span className="edit-button-text15">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait4">
                  <div className="edit-button-container-bg4">
                    <div className="edit-button-image-item4">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox4"
                      />
                      <div className="edit-button-replace-image4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon10 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box4">
                    <div className="edit-button-container12">
                      <div className="edit-button-name-item4">
                        <span className="edit-button-text16">Shy</span>
                      </div>
                      <div className="edit-button-rarity4">
                        <span className="edit-button-text17">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait5">
                  <div className="edit-button-container-bg5">
                    <div className="edit-button-image-item5">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox5"
                      />
                      <div className="edit-button-replace-image5">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon12 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box5">
                    <div className="edit-button-container13">
                      <div className="edit-button-name-item5">
                        <span className="edit-button-text18">Shy</span>
                      </div>
                      <div className="edit-button-rarity5">
                        <span className="edit-button-text19">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait6">
                  <div className="edit-button-container-bg6">
                    <div className="edit-button-image-item6">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox6"
                      />
                      <div className="edit-button-replace-image6">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon14 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box6">
                    <div className="edit-button-container14">
                      <div className="edit-button-name-item6">
                        <span className="edit-button-text20">Shy</span>
                      </div>
                      <div className="edit-button-rarity6">
                        <span className="edit-button-text21">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait7">
                  <div className="edit-button-container-bg7">
                    <div className="edit-button-image-item7">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox7"
                      />
                      <div className="edit-button-replace-image7">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon16 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box7">
                    <div className="edit-button-container15">
                      <div className="edit-button-name-item7">
                        <span className="edit-button-text22">Shy</span>
                      </div>
                      <div className="edit-button-rarity7">
                        <span className="edit-button-text23">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-layer edit-button-trait8">
                  <div className="edit-button-container-bg8">
                    <div className="edit-button-image-item8">
                      <input
                        type="checkbox"
                        className="edit-button-checkbox8"
                      />
                      <div className="edit-button-replace-image8">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="edit-button-icon18 fill-color-white"
                        >
                          <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="edit-button-text-box8">
                    <div className="edit-button-container16">
                      <div className="edit-button-name-item8">
                        <span className="edit-button-text24">Shy</span>
                      </div>
                      <div className="edit-button-rarity8">
                        <span className="edit-button-text25">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditButton
