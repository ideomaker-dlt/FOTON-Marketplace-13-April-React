import React, { useState } from 'react'

import Script from 'dangerous-html/react'

import './edit-button.css'

const EditButton = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleTab3, setVisibleTab3] = useState(false)
  const [visibleTab, setVisibleTab] = useState(false)
  const [visibleTab2, setVisibleTab2] = useState(false)
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
          <div id="appOverlay" className="edit-button-container-drawer">
            <div className="edit-button-top-tabs">
              <div className="edit-button-container001">
                <div className="edit-button-container002">
                  <span
                    onClick={() => setIsVisible(false)}
                    className="edit-button-text003"
                  >
                    &lt; go back
                  </span>
                  <span className="edit-button-text004">Head</span>
                </div>
                <div className="edit-button-container003">
                  <button type="button" className="edit-button-button1">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="edit-button-icon002 fill-color-white"
                    >
                      <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                    </svg>
                  </button>
                  <button type="button" className="edit-button-button2">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="edit-button-icon004 fill-color-white"
                    >
                      <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="edit-button-container004">
                <div
                  onClick={() => {
                    setVisibleTab(true)
                    setVisibleTab3(false)
                    setVisibleTab2(false)
                  }}
                  className="edit-button-tab-button-rarity"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="edit-button-icon006 fill-color-white"
                  >
                    <path d="M810 426h86v172h-86v-172zM640 768v-512h86v512h-86zM128 598v-172h86v172h-86zM470 938v-852h84v852h-84zM298 768v-512h86v512h-86z"></path>
                  </svg>
                  <span className="edit-button-text005 Content16SemiBold">
                    Rarity
                  </span>
                </div>
                <div
                  onClick={() => {
                    setVisibleTab3(false)
                    setVisibleTab(false)
                    setVisibleTab2(true)
                  }}
                  className="edit-button-tab-button-rules"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="edit-button-icon008 fill-color-white"
                  >
                    <path d="M426 170l-98 98 226 226v360h-84v-324l-202-202-98 98v-256h256zM598 170h256v256l-98-98-124 124-60-60 124-124z"></path>
                  </svg>
                  <span className="edit-button-text006 Content16SemiBold">
                    Rules
                  </span>
                </div>
                <div
                  onClick={() => {
                    setVisibleTab3(true)
                    setVisibleTab(false)
                    setVisibleTab2(false)
                  }}
                  className="edit-button-tab-button-settings"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="edit-button-icon010 fill-color-white"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM877.714 449.714v126.857c0 8.571-6.857 18.857-16 20.571l-105.714 16c-6.286 18.286-13.143 35.429-22.286 52 19.429 28 40 53.143 61.143 78.857 3.429 4 5.714 9.143 5.714 14.286s-1.714 9.143-5.143 13.143c-13.714 18.286-90.857 102.286-110.286 102.286-5.143 0-10.286-2.286-14.857-5.143l-78.857-61.714c-16.571 8.571-34.286 16-52 21.714-4 34.857-7.429 72-16.571 106.286-2.286 9.143-10.286 16-20.571 16h-126.857c-10.286 0-19.429-7.429-20.571-17.143l-16-105.143c-17.714-5.714-34.857-12.571-51.429-21.143l-80.571 61.143c-4 3.429-9.143 5.143-14.286 5.143s-10.286-2.286-14.286-6.286c-30.286-27.429-70.286-62.857-94.286-96-2.857-4-4-8.571-4-13.143 0-5.143 1.714-9.143 4.571-13.143 19.429-26.286 40.571-51.429 60-78.286-9.714-18.286-17.714-37.143-23.429-56.571l-104.571-15.429c-9.714-1.714-16.571-10.857-16.571-20.571v-126.857c0-8.571 6.857-18.857 15.429-20.571l106.286-16c5.714-18.286 13.143-35.429 22.286-52.571-19.429-27.429-40-53.143-61.143-78.857-3.429-4-5.714-8.571-5.714-13.714s2.286-9.143 5.143-13.143c13.714-18.857 90.857-102.286 110.286-102.286 5.143 0 10.286 2.286 14.857 5.714l78.857 61.143c16.571-8.571 34.286-16 52-21.714 4-34.857 7.429-72 16.571-106.286 2.286-9.143 10.286-16 20.571-16h126.857c10.286 0 19.429 7.429 20.571 17.143l16 105.143c17.714 5.714 34.857 12.571 51.429 21.143l81.143-61.143c3.429-3.429 8.571-5.143 13.714-5.143s10.286 2.286 14.286 5.714c30.286 28 70.286 63.429 94.286 97.143 2.857 3.429 4 8 4 12.571 0 5.143-1.714 9.143-4.571 13.143-19.429 26.286-40.571 51.429-60 78.286 9.714 18.286 17.714 37.143 23.429 56l104.571 16c9.714 1.714 16.571 10.857 16.571 20.571z"></path>
                  </svg>
                  <span className="edit-button-text007 Content16SemiBold">
                    Settings
                  </span>
                </div>
              </div>
            </div>
            {visibleTab && (
              <div className="edit-button-content-rarity">
                <div className="edit-button-info-box">
                  <div className="edit-button-container005">
                    <span className="edit-button-text008">
                      Adjust rarity by supply or percentage.
                    </span>
                    <svg
                      id="tooltip2"
                      viewBox="0 0 1024 1024"
                      className="edit-button-icon012 tooltipclass"
                    >
                      <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                    </svg>
                  </div>
                  <div className="edit-button-container006">
                    <button type="button" className="edit-button-button3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon014 fill-color-white"
                      >
                        <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                      </svg>
                      <span className="edit-button-text009">
                        <span>Randomise</span>
                        <br></br>
                      </span>
                    </button>
                    <button type="button" className="edit-button-button4">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon016 fill-color-white"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                      <span className="edit-button-text012">
                        <span>Reset All</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="edit-button-container007">
                  <div className="item-layer edit-button-trait">
                    <div className="edit-button-container-bg">
                      <div className="edit-button-image-item">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox"
                        />
                        <div className="edit-button-replace-image">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon018 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box">
                      <div className="edit-button-name">
                        <div className="edit-button-name-item">
                          <span className="edit-button-text015">Shy</span>
                        </div>
                        <div className="edit-button-rarity">
                          <span className="edit-button-text016">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container008">
                        <div className="edit-button-container009">
                          <div className="edit-button-inputs">
                            <div className="edit-button-amount">
                              <span className="edit-button-text017">349</span>
                            </div>
                            <div className="edit-button-amount01">
                              <span className="edit-button-text018">48</span>
                              <span className="edit-button-text019">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply">
                            <div className="edit-button-label">
                              <span className="edit-button-text020">
                                Items have it
                              </span>
                              <span className="edit-button-text021">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput range range2"
                            />
                            <div className="edit-button-arrows">
                              <span className="edit-button-text022">-</span>
                              <span className="edit-button-text023">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container011">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait01">
                    <div className="edit-button-container-bg01">
                      <div className="edit-button-image-item01">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox01"
                        />
                        <div className="edit-button-replace-image01">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon020 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box01">
                      <div className="edit-button-name01">
                        <div className="edit-button-name-item01">
                          <span className="edit-button-text024">Shy</span>
                        </div>
                        <div className="edit-button-rarity01">
                          <span className="edit-button-text025">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container012">
                        <div className="edit-button-container013">
                          <div className="edit-button-inputs01">
                            <div className="edit-button-amount02">
                              <span className="edit-button-text026">349</span>
                            </div>
                            <div className="edit-button-amount03">
                              <span className="edit-button-text027">48</span>
                              <span className="edit-button-text028">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply01">
                            <div className="edit-button-label01">
                              <span className="edit-button-text029">
                                Items have it
                              </span>
                              <span className="edit-button-text030">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider01">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput01 range range2"
                            />
                            <div className="edit-button-arrows01">
                              <span className="edit-button-text031">-</span>
                              <span className="edit-button-text032">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container015">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait02">
                    <div className="edit-button-container-bg02">
                      <div className="edit-button-image-item02">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox02"
                        />
                        <div className="edit-button-replace-image02">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon022 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box02">
                      <div className="edit-button-name02">
                        <div className="edit-button-name-item02">
                          <span className="edit-button-text033">Shy</span>
                        </div>
                        <div className="edit-button-rarity02">
                          <span className="edit-button-text034">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container016">
                        <div className="edit-button-container017">
                          <div className="edit-button-inputs02">
                            <div className="edit-button-amount04">
                              <span className="edit-button-text035">349</span>
                            </div>
                            <div className="edit-button-amount05">
                              <span className="edit-button-text036">48</span>
                              <span className="edit-button-text037">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply02">
                            <div className="edit-button-label02">
                              <span className="edit-button-text038">
                                Items have it
                              </span>
                              <span className="edit-button-text039">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider02">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput02 range range2"
                            />
                            <div className="edit-button-arrows02">
                              <span className="edit-button-text040">-</span>
                              <span className="edit-button-text041">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container019">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait03">
                    <div className="edit-button-container-bg03">
                      <div className="edit-button-image-item03">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox03"
                        />
                        <div className="edit-button-replace-image03">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon024 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box03">
                      <div className="edit-button-name03">
                        <div className="edit-button-name-item03">
                          <span className="edit-button-text042">Shy</span>
                        </div>
                        <div className="edit-button-rarity03">
                          <span className="edit-button-text043">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container020">
                        <div className="edit-button-container021">
                          <div className="edit-button-inputs03">
                            <div className="edit-button-amount06">
                              <span className="edit-button-text044">349</span>
                            </div>
                            <div className="edit-button-amount07">
                              <span className="edit-button-text045">48</span>
                              <span className="edit-button-text046">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply03">
                            <div className="edit-button-label03">
                              <span className="edit-button-text047">
                                Items have it
                              </span>
                              <span className="edit-button-text048">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider03">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput03 range range2"
                            />
                            <div className="edit-button-arrows03">
                              <span className="edit-button-text049">-</span>
                              <span className="edit-button-text050">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container023">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait04">
                    <div className="edit-button-container-bg04">
                      <div className="edit-button-image-item04">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox04"
                        />
                        <div className="edit-button-replace-image04">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon026 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box04">
                      <div className="edit-button-name04">
                        <div className="edit-button-name-item04">
                          <span className="edit-button-text051">Shy</span>
                        </div>
                        <div className="edit-button-rarity04">
                          <span className="edit-button-text052">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container024">
                        <div className="edit-button-container025">
                          <div className="edit-button-inputs04">
                            <div className="edit-button-amount08">
                              <span className="edit-button-text053">349</span>
                            </div>
                            <div className="edit-button-amount09">
                              <span className="edit-button-text054">48</span>
                              <span className="edit-button-text055">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply04">
                            <div className="edit-button-label04">
                              <span className="edit-button-text056">
                                Items have it
                              </span>
                              <span className="edit-button-text057">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider04">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput04 range range2"
                            />
                            <div className="edit-button-arrows04">
                              <span className="edit-button-text058">-</span>
                              <span className="edit-button-text059">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container027">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait05">
                    <div className="edit-button-container-bg05">
                      <div className="edit-button-image-item05">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox05"
                        />
                        <div className="edit-button-replace-image05">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon028 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box05">
                      <div className="edit-button-name05">
                        <div className="edit-button-name-item05">
                          <span className="edit-button-text060">Shy</span>
                        </div>
                        <div className="edit-button-rarity05">
                          <span className="edit-button-text061">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container028">
                        <div className="edit-button-container029">
                          <div className="edit-button-inputs05">
                            <div className="edit-button-amount10">
                              <span className="edit-button-text062">349</span>
                            </div>
                            <div className="edit-button-amount11">
                              <span className="edit-button-text063">48</span>
                              <span className="edit-button-text064">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply05">
                            <div className="edit-button-label05">
                              <span className="edit-button-text065">
                                Items have it
                              </span>
                              <span className="edit-button-text066">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider05">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput05 range range2"
                            />
                            <div className="edit-button-arrows05">
                              <span className="edit-button-text067">-</span>
                              <span className="edit-button-text068">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container031">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait06">
                    <div className="edit-button-container-bg06">
                      <div className="edit-button-image-item06">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox06"
                        />
                        <div className="edit-button-replace-image06">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon030 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box06">
                      <div className="edit-button-name06">
                        <div className="edit-button-name-item06">
                          <span className="edit-button-text069">Shy</span>
                        </div>
                        <div className="edit-button-rarity06">
                          <span className="edit-button-text070">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container032">
                        <div className="edit-button-container033">
                          <div className="edit-button-inputs06">
                            <div className="edit-button-amount12">
                              <span className="edit-button-text071">349</span>
                            </div>
                            <div className="edit-button-amount13">
                              <span className="edit-button-text072">48</span>
                              <span className="edit-button-text073">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply06">
                            <div className="edit-button-label06">
                              <span className="edit-button-text074">
                                Items have it
                              </span>
                              <span className="edit-button-text075">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider06">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput06 range range2"
                            />
                            <div className="edit-button-arrows06">
                              <span className="edit-button-text076">-</span>
                              <span className="edit-button-text077">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container035">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait07">
                    <div className="edit-button-container-bg07">
                      <div className="edit-button-image-item07">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox07"
                        />
                        <div className="edit-button-replace-image07">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon032 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box07">
                      <div className="edit-button-name07">
                        <div className="edit-button-name-item07">
                          <span className="edit-button-text078">Shy</span>
                        </div>
                        <div className="edit-button-rarity07">
                          <span className="edit-button-text079">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container036">
                        <div className="edit-button-container037">
                          <div className="edit-button-inputs07">
                            <div className="edit-button-amount14">
                              <span className="edit-button-text080">349</span>
                            </div>
                            <div className="edit-button-amount15">
                              <span className="edit-button-text081">48</span>
                              <span className="edit-button-text082">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply07">
                            <div className="edit-button-label07">
                              <span className="edit-button-text083">
                                Items have it
                              </span>
                              <span className="edit-button-text084">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider07">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput07 range range2"
                            />
                            <div className="edit-button-arrows07">
                              <span className="edit-button-text085">-</span>
                              <span className="edit-button-text086">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container039">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait08">
                    <div className="edit-button-container-bg08">
                      <div className="edit-button-image-item08">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox08"
                        />
                        <div className="edit-button-replace-image08">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon034 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box08">
                      <div className="edit-button-name08">
                        <div className="edit-button-name-item08">
                          <span className="edit-button-text087">Shy</span>
                        </div>
                        <div className="edit-button-rarity08">
                          <span className="edit-button-text088">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container040">
                        <div className="edit-button-container041">
                          <div className="edit-button-inputs08">
                            <div className="edit-button-amount16">
                              <span className="edit-button-text089">349</span>
                            </div>
                            <div className="edit-button-amount17">
                              <span className="edit-button-text090">48</span>
                              <span className="edit-button-text091">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply08">
                            <div className="edit-button-label08">
                              <span className="edit-button-text092">
                                Items have it
                              </span>
                              <span className="edit-button-text093">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider08">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput08 range range2"
                            />
                            <div className="edit-button-arrows08">
                              <span className="edit-button-text094">-</span>
                              <span className="edit-button-text095">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container043">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait09">
                    <div className="edit-button-container-bg09">
                      <div className="edit-button-image-item09">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox09"
                        />
                        <div className="edit-button-replace-image09">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon036 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box09">
                      <div className="edit-button-name09">
                        <div className="edit-button-name-item09">
                          <span className="edit-button-text096">Shy</span>
                        </div>
                        <div className="edit-button-rarity09">
                          <span className="edit-button-text097">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container044">
                        <div className="edit-button-container045">
                          <div className="edit-button-inputs09">
                            <div className="edit-button-amount18">
                              <span className="edit-button-text098">349</span>
                            </div>
                            <div className="edit-button-amount19">
                              <span className="edit-button-text099">48</span>
                              <span className="edit-button-text100">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply09">
                            <div className="edit-button-label09">
                              <span className="edit-button-text101">
                                Items have it
                              </span>
                              <span className="edit-button-text102">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider09">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput09 range range2"
                            />
                            <div className="edit-button-arrows09">
                              <span className="edit-button-text103">-</span>
                              <span className="edit-button-text104">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container047">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait10">
                    <div className="edit-button-container-bg10">
                      <div className="edit-button-image-item10">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox10"
                        />
                        <div className="edit-button-replace-image10">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon038 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box10">
                      <div className="edit-button-name10">
                        <div className="edit-button-name-item10">
                          <span className="edit-button-text105">Shy</span>
                        </div>
                        <div className="edit-button-rarity10">
                          <span className="edit-button-text106">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container048">
                        <div className="edit-button-container049">
                          <div className="edit-button-inputs10">
                            <div className="edit-button-amount20">
                              <span className="edit-button-text107">349</span>
                            </div>
                            <div className="edit-button-amount21">
                              <span className="edit-button-text108">48</span>
                              <span className="edit-button-text109">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply10">
                            <div className="edit-button-label10">
                              <span className="edit-button-text110">
                                Items have it
                              </span>
                              <span className="edit-button-text111">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider10">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput10 range range2"
                            />
                            <div className="edit-button-arrows10">
                              <span className="edit-button-text112">-</span>
                              <span className="edit-button-text113">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container051">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait11">
                    <div className="edit-button-container-bg11">
                      <div className="edit-button-image-item11">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox11"
                        />
                        <div className="edit-button-replace-image11">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon040 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box11">
                      <div className="edit-button-name11">
                        <div className="edit-button-name-item11">
                          <span className="edit-button-text114">Shy</span>
                        </div>
                        <div className="edit-button-rarity11">
                          <span className="edit-button-text115">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container052">
                        <div className="edit-button-container053">
                          <div className="edit-button-inputs11">
                            <div className="edit-button-amount22">
                              <span className="edit-button-text116">349</span>
                            </div>
                            <div className="edit-button-amount23">
                              <span className="edit-button-text117">48</span>
                              <span className="edit-button-text118">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply11">
                            <div className="edit-button-label11">
                              <span className="edit-button-text119">
                                Items have it
                              </span>
                              <span className="edit-button-text120">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider11">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput11 range range2"
                            />
                            <div className="edit-button-arrows11">
                              <span className="edit-button-text121">-</span>
                              <span className="edit-button-text122">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container055">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait12">
                    <div className="edit-button-container-bg12">
                      <div className="edit-button-image-item12">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox12"
                        />
                        <div className="edit-button-replace-image12">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon042 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box12">
                      <div className="edit-button-name12">
                        <div className="edit-button-name-item12">
                          <span className="edit-button-text123">Shy</span>
                        </div>
                        <div className="edit-button-rarity12">
                          <span className="edit-button-text124">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container056">
                        <div className="edit-button-container057">
                          <div className="edit-button-inputs12">
                            <div className="edit-button-amount24">
                              <span className="edit-button-text125">349</span>
                            </div>
                            <div className="edit-button-amount25">
                              <span className="edit-button-text126">48</span>
                              <span className="edit-button-text127">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply12">
                            <div className="edit-button-label12">
                              <span className="edit-button-text128">
                                Items have it
                              </span>
                              <span className="edit-button-text129">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider12">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput12 range range2"
                            />
                            <div className="edit-button-arrows12">
                              <span className="edit-button-text130">-</span>
                              <span className="edit-button-text131">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container059">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visibleTab2 && (
              <div className="edit-button-content-rules">
                <div className="edit-button-info-box1">
                  <div className="edit-button-container060">
                    <span className="edit-button-text132">
                      Add rules and select how Traits interact.
                    </span>
                    <svg
                      id="tooltip2"
                      viewBox="0 0 1024 1024"
                      className="edit-button-icon044 tooltipclass"
                    >
                      <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                    </svg>
                  </div>
                  <div className="edit-button-container061">
                    <button type="button" className="edit-button-button5">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon046 fill-color-white"
                      >
                        <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                      </svg>
                      <span className="edit-button-text133">
                        <span>Randomise</span>
                        <br></br>
                      </span>
                    </button>
                    <button type="button" className="edit-button-button6">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon048 fill-color-white"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                      <span className="edit-button-text136">
                        <span>Reset All</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="edit-button-container062">
                  <div className="item-layer edit-button-trait13">
                    <div className="edit-button-container-bg13">
                      <div className="edit-button-image-item13">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox13"
                        />
                        <div className="edit-button-replace-image13">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon050 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box13">
                      <div className="edit-button-name13">
                        <div className="edit-button-name-item13">
                          <span className="edit-button-text139">Shy</span>
                        </div>
                        <div className="edit-button-rarity13">
                          <span className="edit-button-text140">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container063">
                        <div className="edit-button-container064">
                          <div className="edit-button-inputs13">
                            <div className="edit-button-amount26">
                              <span className="edit-button-text141">349</span>
                            </div>
                            <div className="edit-button-amount27">
                              <span className="edit-button-text142">48</span>
                              <span className="edit-button-text143">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply13">
                            <div className="edit-button-label13">
                              <span className="edit-button-text144">
                                Items have it
                              </span>
                              <span className="edit-button-text145">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider13">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput13 range range2"
                            />
                            <div className="edit-button-arrows13">
                              <span className="edit-button-text146">-</span>
                              <span className="edit-button-text147">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container066">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait14">
                    <div className="edit-button-container-bg14">
                      <div className="edit-button-image-item14">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox14"
                        />
                        <div className="edit-button-replace-image14">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon052 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box14">
                      <div className="edit-button-name14">
                        <div className="edit-button-name-item14">
                          <span className="edit-button-text148">Shy</span>
                        </div>
                        <div className="edit-button-rarity14">
                          <span className="edit-button-text149">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container067">
                        <div className="edit-button-container068">
                          <div className="edit-button-inputs14">
                            <div className="edit-button-amount28">
                              <span className="edit-button-text150">349</span>
                            </div>
                            <div className="edit-button-amount29">
                              <span className="edit-button-text151">48</span>
                              <span className="edit-button-text152">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply14">
                            <div className="edit-button-label14">
                              <span className="edit-button-text153">
                                Items have it
                              </span>
                              <span className="edit-button-text154">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider14">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput14 range range2"
                            />
                            <div className="edit-button-arrows14">
                              <span className="edit-button-text155">-</span>
                              <span className="edit-button-text156">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container070">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait15">
                    <div className="edit-button-container-bg15">
                      <div className="edit-button-image-item15">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox15"
                        />
                        <div className="edit-button-replace-image15">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon054 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box15">
                      <div className="edit-button-name15">
                        <div className="edit-button-name-item15">
                          <span className="edit-button-text157">Shy</span>
                        </div>
                        <div className="edit-button-rarity15">
                          <span className="edit-button-text158">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container071">
                        <div className="edit-button-container072">
                          <div className="edit-button-inputs15">
                            <div className="edit-button-amount30">
                              <span className="edit-button-text159">349</span>
                            </div>
                            <div className="edit-button-amount31">
                              <span className="edit-button-text160">48</span>
                              <span className="edit-button-text161">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply15">
                            <div className="edit-button-label15">
                              <span className="edit-button-text162">
                                Items have it
                              </span>
                              <span className="edit-button-text163">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider15">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput15 range range2"
                            />
                            <div className="edit-button-arrows15">
                              <span className="edit-button-text164">-</span>
                              <span className="edit-button-text165">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container074">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait16">
                    <div className="edit-button-container-bg16">
                      <div className="edit-button-image-item16">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox16"
                        />
                        <div className="edit-button-replace-image16">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon056 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box16">
                      <div className="edit-button-name16">
                        <div className="edit-button-name-item16">
                          <span className="edit-button-text166">Shy</span>
                        </div>
                        <div className="edit-button-rarity16">
                          <span className="edit-button-text167">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container075">
                        <div className="edit-button-container076">
                          <div className="edit-button-inputs16">
                            <div className="edit-button-amount32">
                              <span className="edit-button-text168">349</span>
                            </div>
                            <div className="edit-button-amount33">
                              <span className="edit-button-text169">48</span>
                              <span className="edit-button-text170">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply16">
                            <div className="edit-button-label16">
                              <span className="edit-button-text171">
                                Items have it
                              </span>
                              <span className="edit-button-text172">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider16">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput16 range range2"
                            />
                            <div className="edit-button-arrows16">
                              <span className="edit-button-text173">-</span>
                              <span className="edit-button-text174">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container078">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait17">
                    <div className="edit-button-container-bg17">
                      <div className="edit-button-image-item17">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox17"
                        />
                        <div className="edit-button-replace-image17">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon058 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box17">
                      <div className="edit-button-name17">
                        <div className="edit-button-name-item17">
                          <span className="edit-button-text175">Shy</span>
                        </div>
                        <div className="edit-button-rarity17">
                          <span className="edit-button-text176">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container079">
                        <div className="edit-button-container080">
                          <div className="edit-button-inputs17">
                            <div className="edit-button-amount34">
                              <span className="edit-button-text177">349</span>
                            </div>
                            <div className="edit-button-amount35">
                              <span className="edit-button-text178">48</span>
                              <span className="edit-button-text179">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply17">
                            <div className="edit-button-label17">
                              <span className="edit-button-text180">
                                Items have it
                              </span>
                              <span className="edit-button-text181">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider17">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput17 range range2"
                            />
                            <div className="edit-button-arrows17">
                              <span className="edit-button-text182">-</span>
                              <span className="edit-button-text183">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container082">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait18">
                    <div className="edit-button-container-bg18">
                      <div className="edit-button-image-item18">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox18"
                        />
                        <div className="edit-button-replace-image18">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon060 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box18">
                      <div className="edit-button-name18">
                        <div className="edit-button-name-item18">
                          <span className="edit-button-text184">Shy</span>
                        </div>
                        <div className="edit-button-rarity18">
                          <span className="edit-button-text185">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container083">
                        <div className="edit-button-container084">
                          <div className="edit-button-inputs18">
                            <div className="edit-button-amount36">
                              <span className="edit-button-text186">349</span>
                            </div>
                            <div className="edit-button-amount37">
                              <span className="edit-button-text187">48</span>
                              <span className="edit-button-text188">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply18">
                            <div className="edit-button-label18">
                              <span className="edit-button-text189">
                                Items have it
                              </span>
                              <span className="edit-button-text190">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider18">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput18 range range2"
                            />
                            <div className="edit-button-arrows18">
                              <span className="edit-button-text191">-</span>
                              <span className="edit-button-text192">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container086">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait19">
                    <div className="edit-button-container-bg19">
                      <div className="edit-button-image-item19">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox19"
                        />
                        <div className="edit-button-replace-image19">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon062 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box19">
                      <div className="edit-button-name19">
                        <div className="edit-button-name-item19">
                          <span className="edit-button-text193">Shy</span>
                        </div>
                        <div className="edit-button-rarity19">
                          <span className="edit-button-text194">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container087">
                        <div className="edit-button-container088">
                          <div className="edit-button-inputs19">
                            <div className="edit-button-amount38">
                              <span className="edit-button-text195">349</span>
                            </div>
                            <div className="edit-button-amount39">
                              <span className="edit-button-text196">48</span>
                              <span className="edit-button-text197">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply19">
                            <div className="edit-button-label19">
                              <span className="edit-button-text198">
                                Items have it
                              </span>
                              <span className="edit-button-text199">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider19">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput19 range range2"
                            />
                            <div className="edit-button-arrows19">
                              <span className="edit-button-text200">-</span>
                              <span className="edit-button-text201">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container090">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait20">
                    <div className="edit-button-container-bg20">
                      <div className="edit-button-image-item20">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox20"
                        />
                        <div className="edit-button-replace-image20">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon064 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box20">
                      <div className="edit-button-name20">
                        <div className="edit-button-name-item20">
                          <span className="edit-button-text202">Shy</span>
                        </div>
                        <div className="edit-button-rarity20">
                          <span className="edit-button-text203">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container091">
                        <div className="edit-button-container092">
                          <div className="edit-button-inputs20">
                            <div className="edit-button-amount40">
                              <span className="edit-button-text204">349</span>
                            </div>
                            <div className="edit-button-amount41">
                              <span className="edit-button-text205">48</span>
                              <span className="edit-button-text206">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply20">
                            <div className="edit-button-label20">
                              <span className="edit-button-text207">
                                Items have it
                              </span>
                              <span className="edit-button-text208">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider20">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput20 range range2"
                            />
                            <div className="edit-button-arrows20">
                              <span className="edit-button-text209">-</span>
                              <span className="edit-button-text210">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container094">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait21">
                    <div className="edit-button-container-bg21">
                      <div className="edit-button-image-item21">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox21"
                        />
                        <div className="edit-button-replace-image21">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon066 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box21">
                      <div className="edit-button-name21">
                        <div className="edit-button-name-item21">
                          <span className="edit-button-text211">Shy</span>
                        </div>
                        <div className="edit-button-rarity21">
                          <span className="edit-button-text212">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container095">
                        <div className="edit-button-container096">
                          <div className="edit-button-inputs21">
                            <div className="edit-button-amount42">
                              <span className="edit-button-text213">349</span>
                            </div>
                            <div className="edit-button-amount43">
                              <span className="edit-button-text214">48</span>
                              <span className="edit-button-text215">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply21">
                            <div className="edit-button-label21">
                              <span className="edit-button-text216">
                                Items have it
                              </span>
                              <span className="edit-button-text217">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider21">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput21 range range2"
                            />
                            <div className="edit-button-arrows21">
                              <span className="edit-button-text218">-</span>
                              <span className="edit-button-text219">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container098">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait22">
                    <div className="edit-button-container-bg22">
                      <div className="edit-button-image-item22">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox22"
                        />
                        <div className="edit-button-replace-image22">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon068 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box22">
                      <div className="edit-button-name22">
                        <div className="edit-button-name-item22">
                          <span className="edit-button-text220">Shy</span>
                        </div>
                        <div className="edit-button-rarity22">
                          <span className="edit-button-text221">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container099">
                        <div className="edit-button-container100">
                          <div className="edit-button-inputs22">
                            <div className="edit-button-amount44">
                              <span className="edit-button-text222">349</span>
                            </div>
                            <div className="edit-button-amount45">
                              <span className="edit-button-text223">48</span>
                              <span className="edit-button-text224">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply22">
                            <div className="edit-button-label22">
                              <span className="edit-button-text225">
                                Items have it
                              </span>
                              <span className="edit-button-text226">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider22">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput22 range range2"
                            />
                            <div className="edit-button-arrows22">
                              <span className="edit-button-text227">-</span>
                              <span className="edit-button-text228">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container102">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait23">
                    <div className="edit-button-container-bg23">
                      <div className="edit-button-image-item23">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox23"
                        />
                        <div className="edit-button-replace-image23">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon070 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box23">
                      <div className="edit-button-name23">
                        <div className="edit-button-name-item23">
                          <span className="edit-button-text229">Shy</span>
                        </div>
                        <div className="edit-button-rarity23">
                          <span className="edit-button-text230">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container103">
                        <div className="edit-button-container104">
                          <div className="edit-button-inputs23">
                            <div className="edit-button-amount46">
                              <span className="edit-button-text231">349</span>
                            </div>
                            <div className="edit-button-amount47">
                              <span className="edit-button-text232">48</span>
                              <span className="edit-button-text233">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply23">
                            <div className="edit-button-label23">
                              <span className="edit-button-text234">
                                Items have it
                              </span>
                              <span className="edit-button-text235">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider23">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput23 range range2"
                            />
                            <div className="edit-button-arrows23">
                              <span className="edit-button-text236">-</span>
                              <span className="edit-button-text237">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container106">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait24">
                    <div className="edit-button-container-bg24">
                      <div className="edit-button-image-item24">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox24"
                        />
                        <div className="edit-button-replace-image24">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon072 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box24">
                      <div className="edit-button-name24">
                        <div className="edit-button-name-item24">
                          <span className="edit-button-text238">Shy</span>
                        </div>
                        <div className="edit-button-rarity24">
                          <span className="edit-button-text239">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container107">
                        <div className="edit-button-container108">
                          <div className="edit-button-inputs24">
                            <div className="edit-button-amount48">
                              <span className="edit-button-text240">349</span>
                            </div>
                            <div className="edit-button-amount49">
                              <span className="edit-button-text241">48</span>
                              <span className="edit-button-text242">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply24">
                            <div className="edit-button-label24">
                              <span className="edit-button-text243">
                                Items have it
                              </span>
                              <span className="edit-button-text244">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider24">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput24 range range2"
                            />
                            <div className="edit-button-arrows24">
                              <span className="edit-button-text245">-</span>
                              <span className="edit-button-text246">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container110">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait25">
                    <div className="edit-button-container-bg25">
                      <div className="edit-button-image-item25">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox25"
                        />
                        <div className="edit-button-replace-image25">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon074 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box25">
                      <div className="edit-button-name25">
                        <div className="edit-button-name-item25">
                          <span className="edit-button-text247">Shy</span>
                        </div>
                        <div className="edit-button-rarity25">
                          <span className="edit-button-text248">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container111">
                        <div className="edit-button-container112">
                          <div className="edit-button-inputs25">
                            <div className="edit-button-amount50">
                              <span className="edit-button-text249">349</span>
                            </div>
                            <div className="edit-button-amount51">
                              <span className="edit-button-text250">48</span>
                              <span className="edit-button-text251">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply25">
                            <div className="edit-button-label25">
                              <span className="edit-button-text252">
                                Items have it
                              </span>
                              <span className="edit-button-text253">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider25">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput25 range range2"
                            />
                            <div className="edit-button-arrows25">
                              <span className="edit-button-text254">-</span>
                              <span className="edit-button-text255">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container114">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visibleTab3 && (
              <div className="edit-button-content-settings">
                <div className="edit-button-info-box2">
                  <div className="edit-button-container115">
                    <span className="edit-button-text256">Layer Settings.</span>
                    <svg
                      id="tooltip2"
                      viewBox="0 0 1024 1024"
                      className="edit-button-icon076 tooltipclass"
                    >
                      <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                    </svg>
                  </div>
                  <div className="edit-button-container116">
                    <button type="button" className="edit-button-button7">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon078 fill-color-white"
                      >
                        <path d="M256 512h128l-170 170-172-170h128q0-140 101-241t241-101q100 0 182 54l-62 62q-54-30-120-30-106 0-181 75t-75 181zM810 342l172 170h-128q0 140-101 241t-241 101q-100 0-182-54l62-62q56 30 120 30 106 0 181-75t75-181h-128z"></path>
                      </svg>
                      <span className="edit-button-text257">
                        <span>Randomise</span>
                        <br></br>
                      </span>
                    </button>
                    <button type="button" className="edit-button-button8">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="edit-button-icon080 fill-color-white"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                      <span className="edit-button-text260">
                        <span>Reset All</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="edit-button-container117">
                  <div className="item-layer edit-button-trait26">
                    <div className="edit-button-container-bg26">
                      <div className="edit-button-image-item26">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox26"
                        />
                        <div className="edit-button-replace-image26">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon082 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box26">
                      <div className="edit-button-name26">
                        <div className="edit-button-name-item26">
                          <span className="edit-button-text263">Shy</span>
                        </div>
                        <div className="edit-button-rarity26">
                          <span className="edit-button-text264">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container118">
                        <div className="edit-button-container119">
                          <div className="edit-button-inputs26">
                            <div className="edit-button-amount52">
                              <span className="edit-button-text265">349</span>
                            </div>
                            <div className="edit-button-amount53">
                              <span className="edit-button-text266">48</span>
                              <span className="edit-button-text267">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply26">
                            <div className="edit-button-label26">
                              <span className="edit-button-text268">
                                Items have it
                              </span>
                              <span className="edit-button-text269">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider26">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput26 range range2"
                            />
                            <div className="edit-button-arrows26">
                              <span className="edit-button-text270">-</span>
                              <span className="edit-button-text271">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container121">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait27">
                    <div className="edit-button-container-bg27">
                      <div className="edit-button-image-item27">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox27"
                        />
                        <div className="edit-button-replace-image27">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon084 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box27">
                      <div className="edit-button-name27">
                        <div className="edit-button-name-item27">
                          <span className="edit-button-text272">Shy</span>
                        </div>
                        <div className="edit-button-rarity27">
                          <span className="edit-button-text273">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container122">
                        <div className="edit-button-container123">
                          <div className="edit-button-inputs27">
                            <div className="edit-button-amount54">
                              <span className="edit-button-text274">349</span>
                            </div>
                            <div className="edit-button-amount55">
                              <span className="edit-button-text275">48</span>
                              <span className="edit-button-text276">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply27">
                            <div className="edit-button-label27">
                              <span className="edit-button-text277">
                                Items have it
                              </span>
                              <span className="edit-button-text278">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider27">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput27 range range2"
                            />
                            <div className="edit-button-arrows27">
                              <span className="edit-button-text279">-</span>
                              <span className="edit-button-text280">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container125">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait28">
                    <div className="edit-button-container-bg28">
                      <div className="edit-button-image-item28">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox28"
                        />
                        <div className="edit-button-replace-image28">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon086 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box28">
                      <div className="edit-button-name28">
                        <div className="edit-button-name-item28">
                          <span className="edit-button-text281">Shy</span>
                        </div>
                        <div className="edit-button-rarity28">
                          <span className="edit-button-text282">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container126">
                        <div className="edit-button-container127">
                          <div className="edit-button-inputs28">
                            <div className="edit-button-amount56">
                              <span className="edit-button-text283">349</span>
                            </div>
                            <div className="edit-button-amount57">
                              <span className="edit-button-text284">48</span>
                              <span className="edit-button-text285">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply28">
                            <div className="edit-button-label28">
                              <span className="edit-button-text286">
                                Items have it
                              </span>
                              <span className="edit-button-text287">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider28">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput28 range range2"
                            />
                            <div className="edit-button-arrows28">
                              <span className="edit-button-text288">-</span>
                              <span className="edit-button-text289">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container129">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait29">
                    <div className="edit-button-container-bg29">
                      <div className="edit-button-image-item29">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox29"
                        />
                        <div className="edit-button-replace-image29">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon088 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box29">
                      <div className="edit-button-name29">
                        <div className="edit-button-name-item29">
                          <span className="edit-button-text290">Shy</span>
                        </div>
                        <div className="edit-button-rarity29">
                          <span className="edit-button-text291">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container130">
                        <div className="edit-button-container131">
                          <div className="edit-button-inputs29">
                            <div className="edit-button-amount58">
                              <span className="edit-button-text292">349</span>
                            </div>
                            <div className="edit-button-amount59">
                              <span className="edit-button-text293">48</span>
                              <span className="edit-button-text294">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply29">
                            <div className="edit-button-label29">
                              <span className="edit-button-text295">
                                Items have it
                              </span>
                              <span className="edit-button-text296">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider29">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput29 range range2"
                            />
                            <div className="edit-button-arrows29">
                              <span className="edit-button-text297">-</span>
                              <span className="edit-button-text298">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container133">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait30">
                    <div className="edit-button-container-bg30">
                      <div className="edit-button-image-item30">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox30"
                        />
                        <div className="edit-button-replace-image30">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon090 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box30">
                      <div className="edit-button-name30">
                        <div className="edit-button-name-item30">
                          <span className="edit-button-text299">Shy</span>
                        </div>
                        <div className="edit-button-rarity30">
                          <span className="edit-button-text300">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container134">
                        <div className="edit-button-container135">
                          <div className="edit-button-inputs30">
                            <div className="edit-button-amount60">
                              <span className="edit-button-text301">349</span>
                            </div>
                            <div className="edit-button-amount61">
                              <span className="edit-button-text302">48</span>
                              <span className="edit-button-text303">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply30">
                            <div className="edit-button-label30">
                              <span className="edit-button-text304">
                                Items have it
                              </span>
                              <span className="edit-button-text305">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider30">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput30 range range2"
                            />
                            <div className="edit-button-arrows30">
                              <span className="edit-button-text306">-</span>
                              <span className="edit-button-text307">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container137">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait31">
                    <div className="edit-button-container-bg31">
                      <div className="edit-button-image-item31">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox31"
                        />
                        <div className="edit-button-replace-image31">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon092 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box31">
                      <div className="edit-button-name31">
                        <div className="edit-button-name-item31">
                          <span className="edit-button-text308">Shy</span>
                        </div>
                        <div className="edit-button-rarity31">
                          <span className="edit-button-text309">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container138">
                        <div className="edit-button-container139">
                          <div className="edit-button-inputs31">
                            <div className="edit-button-amount62">
                              <span className="edit-button-text310">349</span>
                            </div>
                            <div className="edit-button-amount63">
                              <span className="edit-button-text311">48</span>
                              <span className="edit-button-text312">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply31">
                            <div className="edit-button-label31">
                              <span className="edit-button-text313">
                                Items have it
                              </span>
                              <span className="edit-button-text314">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider31">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput31 range range2"
                            />
                            <div className="edit-button-arrows31">
                              <span className="edit-button-text315">-</span>
                              <span className="edit-button-text316">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container141">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait32">
                    <div className="edit-button-container-bg32">
                      <div className="edit-button-image-item32">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox32"
                        />
                        <div className="edit-button-replace-image32">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon094 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box32">
                      <div className="edit-button-name32">
                        <div className="edit-button-name-item32">
                          <span className="edit-button-text317">Shy</span>
                        </div>
                        <div className="edit-button-rarity32">
                          <span className="edit-button-text318">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container142">
                        <div className="edit-button-container143">
                          <div className="edit-button-inputs32">
                            <div className="edit-button-amount64">
                              <span className="edit-button-text319">349</span>
                            </div>
                            <div className="edit-button-amount65">
                              <span className="edit-button-text320">48</span>
                              <span className="edit-button-text321">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply32">
                            <div className="edit-button-label32">
                              <span className="edit-button-text322">
                                Items have it
                              </span>
                              <span className="edit-button-text323">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider32">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput32 range range2"
                            />
                            <div className="edit-button-arrows32">
                              <span className="edit-button-text324">-</span>
                              <span className="edit-button-text325">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container145">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait33">
                    <div className="edit-button-container-bg33">
                      <div className="edit-button-image-item33">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox33"
                        />
                        <div className="edit-button-replace-image33">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon096 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box33">
                      <div className="edit-button-name33">
                        <div className="edit-button-name-item33">
                          <span className="edit-button-text326">Shy</span>
                        </div>
                        <div className="edit-button-rarity33">
                          <span className="edit-button-text327">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container146">
                        <div className="edit-button-container147">
                          <div className="edit-button-inputs33">
                            <div className="edit-button-amount66">
                              <span className="edit-button-text328">349</span>
                            </div>
                            <div className="edit-button-amount67">
                              <span className="edit-button-text329">48</span>
                              <span className="edit-button-text330">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply33">
                            <div className="edit-button-label33">
                              <span className="edit-button-text331">
                                Items have it
                              </span>
                              <span className="edit-button-text332">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider33">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput33 range range2"
                            />
                            <div className="edit-button-arrows33">
                              <span className="edit-button-text333">-</span>
                              <span className="edit-button-text334">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container149">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait34">
                    <div className="edit-button-container-bg34">
                      <div className="edit-button-image-item34">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox34"
                        />
                        <div className="edit-button-replace-image34">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon098 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box34">
                      <div className="edit-button-name34">
                        <div className="edit-button-name-item34">
                          <span className="edit-button-text335">Shy</span>
                        </div>
                        <div className="edit-button-rarity34">
                          <span className="edit-button-text336">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container150">
                        <div className="edit-button-container151">
                          <div className="edit-button-inputs34">
                            <div className="edit-button-amount68">
                              <span className="edit-button-text337">349</span>
                            </div>
                            <div className="edit-button-amount69">
                              <span className="edit-button-text338">48</span>
                              <span className="edit-button-text339">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply34">
                            <div className="edit-button-label34">
                              <span className="edit-button-text340">
                                Items have it
                              </span>
                              <span className="edit-button-text341">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider34">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput34 range range2"
                            />
                            <div className="edit-button-arrows34">
                              <span className="edit-button-text342">-</span>
                              <span className="edit-button-text343">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container153">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait35">
                    <div className="edit-button-container-bg35">
                      <div className="edit-button-image-item35">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox35"
                        />
                        <div className="edit-button-replace-image35">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon100 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box35">
                      <div className="edit-button-name35">
                        <div className="edit-button-name-item35">
                          <span className="edit-button-text344">Shy</span>
                        </div>
                        <div className="edit-button-rarity35">
                          <span className="edit-button-text345">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container154">
                        <div className="edit-button-container155">
                          <div className="edit-button-inputs35">
                            <div className="edit-button-amount70">
                              <span className="edit-button-text346">349</span>
                            </div>
                            <div className="edit-button-amount71">
                              <span className="edit-button-text347">48</span>
                              <span className="edit-button-text348">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply35">
                            <div className="edit-button-label35">
                              <span className="edit-button-text349">
                                Items have it
                              </span>
                              <span className="edit-button-text350">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider35">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput35 range range2"
                            />
                            <div className="edit-button-arrows35">
                              <span className="edit-button-text351">-</span>
                              <span className="edit-button-text352">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container157">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait36">
                    <div className="edit-button-container-bg36">
                      <div className="edit-button-image-item36">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox36"
                        />
                        <div className="edit-button-replace-image36">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon102 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box36">
                      <div className="edit-button-name36">
                        <div className="edit-button-name-item36">
                          <span className="edit-button-text353">Shy</span>
                        </div>
                        <div className="edit-button-rarity36">
                          <span className="edit-button-text354">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container158">
                        <div className="edit-button-container159">
                          <div className="edit-button-inputs36">
                            <div className="edit-button-amount72">
                              <span className="edit-button-text355">349</span>
                            </div>
                            <div className="edit-button-amount73">
                              <span className="edit-button-text356">48</span>
                              <span className="edit-button-text357">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply36">
                            <div className="edit-button-label36">
                              <span className="edit-button-text358">
                                Items have it
                              </span>
                              <span className="edit-button-text359">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider36">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput36 range range2"
                            />
                            <div className="edit-button-arrows36">
                              <span className="edit-button-text360">-</span>
                              <span className="edit-button-text361">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container161">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait37">
                    <div className="edit-button-container-bg37">
                      <div className="edit-button-image-item37">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox37"
                        />
                        <div className="edit-button-replace-image37">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon104 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box37">
                      <div className="edit-button-name37">
                        <div className="edit-button-name-item37">
                          <span className="edit-button-text362">Shy</span>
                        </div>
                        <div className="edit-button-rarity37">
                          <span className="edit-button-text363">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container162">
                        <div className="edit-button-container163">
                          <div className="edit-button-inputs37">
                            <div className="edit-button-amount74">
                              <span className="edit-button-text364">349</span>
                            </div>
                            <div className="edit-button-amount75">
                              <span className="edit-button-text365">48</span>
                              <span className="edit-button-text366">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply37">
                            <div className="edit-button-label37">
                              <span className="edit-button-text367">
                                Items have it
                              </span>
                              <span className="edit-button-text368">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider37">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput37 range range2"
                            />
                            <div className="edit-button-arrows37">
                              <span className="edit-button-text369">-</span>
                              <span className="edit-button-text370">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container165">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-layer edit-button-trait38">
                    <div className="edit-button-container-bg38">
                      <div className="edit-button-image-item38">
                        <input
                          type="checkbox"
                          className="edit-button-checkbox38"
                        />
                        <div className="edit-button-replace-image38">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="edit-button-icon106 fill-color-white"
                          >
                            <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="edit-button-text-box38">
                      <div className="edit-button-name38">
                        <div className="edit-button-name-item38">
                          <span className="edit-button-text371">Shy</span>
                        </div>
                        <div className="edit-button-rarity38">
                          <span className="edit-button-text372">29%</span>
                        </div>
                      </div>
                      <div className="edit-button-container166">
                        <div className="edit-button-container167">
                          <div className="edit-button-inputs38">
                            <div className="edit-button-amount76">
                              <span className="edit-button-text373">349</span>
                            </div>
                            <div className="edit-button-amount77">
                              <span className="edit-button-text374">48</span>
                              <span className="edit-button-text375">%</span>
                            </div>
                          </div>
                          <div className="edit-button-supply38">
                            <div className="edit-button-label38">
                              <span className="edit-button-text376">
                                Items have it
                              </span>
                              <span className="edit-button-text377">
                                Rarity
                              </span>
                            </div>
                          </div>
                          <div className="edit-button-slider38">
                            <input
                              type="range"
                              id="range"
                              placeholder="placeholder"
                              className="edit-button-textinput38 range range2"
                            />
                            <div className="edit-button-arrows38">
                              <span className="edit-button-text378">-</span>
                              <span className="edit-button-text379">+</span>
                            </div>
                            <div>
                              <div className="edit-button-container169">
                                <Script
                                  html={`
<style>
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/
  
  /* New additions */
  height: 6px;
  background: #1B372B;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #00E39F;
  border-radius: 50%;
  border: none;
  
  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(0,227,159, .2)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(0,227,159, .3)   
}

/*=============
Aesthetics 
=========================*/

body {
  font-family: system-ui;
}

h1 {
  color: #4b4949; 
  text-align: center;
}

.wrapper {
  color: #4b4949; 
  background: #f50;
  max-width: 400px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.range {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 4rem;
  width: 80%;
  background: #1B372B;
  padding: 0px 10px;
}





</style>

<script>
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
})


// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = \`linear-gradient(to right, #f50 \${sliderValue}%, #ccc \${sliderValue}%)\`;
// }

// progressScript()
</script>`}
                                ></Script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <div className="edit-button-container171">
                <Script
                  html={`<style>
  
/* width */
#appOverlay::-webkit-scrollbar {
  width: 16px;
  height: calc(100% - 60px);
}

/* Track */
#appOverlay::-webkit-scrollbar-track {
  background: #1D1D1D;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 14px;
  
}
 
/* Handle */
#appOverlay::-webkit-scrollbar-thumb {
  background: #424242; 
  border-radius: 12px;
  border: 3px solid #1D1D1D
}

/* Handle on hover */
#appOverlay::-webkit-scrollbar-thumb:hover {
  background: #838383; 
}

@media only screen and (max-width: 767px) {
#appOverlay::-webkit-scrollbar {
  width: 10px;
  height: 100%;
}
#appOverlay::-webkit-scrollbar-thumb {
  background: #424242; 
  border-radius: 10px;
  border: 2px solid #1D1D1D;
}

}


</style>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditButton
