import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import SettingsTrait from './settings-trait'
import './container-layer.css'

const ContainerLayer = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="container-layer-container-layer">
      <div className="container-layer-container">
        <div className="container-layer-container01">
          <span className="container-layer-text Content16SemiBold">
            <span>Eyes</span>
            <br></br>
          </span>
          <span className="container-layer-text03">
            <span>2 Files - 72% Rarity</span>
            <br></br>
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="container-layer-icon fill-color-gray"
        >
          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
        </svg>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="container-layer-button-settings button Content16SemiBold"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="container-layer-icon02 fill-color-white"
        >
          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
      </button>
      {isVisible && (
        <div className="container-layer-overlay-rarity">
          <div className="container-layer-b-overlay-gray">
            <div id="appOverlay" className="container-layer-container02">
              <div className="container-layer-container-bar-top">
                <label className="container-layer-text06">Eyes</label>
                <div
                  onClick={() => setIsVisible(false)}
                  className="container-layer-close-window-button"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="container-layer-icon04 fill-color-white"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="container-layer-container03">
                <div>
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
  background: #2F2F2F; 
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
                <div className="container-layer-field">
                  <label className="container-layer-text07 padding-4px-left">
                    Layer Name:
                  </label>
                  <input
                    type="text"
                    enctype="The Funky Apes Crew..."
                    placeholder="Eyes..."
                    className="container-layer-textinput focus-reset-forms input Content16SemiBold"
                  />
                </div>
                <div className="container-layer-field1">
                  <label className="container-layer-text08">
                    Layer Rarity within collection:
                  </label>
                  <div className="container-layer-container04">
                    <input
                      type="text"
                      enctype="The Funky Apes Crew..."
                      placeholder="78%"
                      className="container-layer-textinput01 focus-reset-forms Content16SemiBold input"
                    />
                    <div className="container-layer-slider">
                      <div>
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
                      <span className="container-layer-percentage-value-start">
                        {props.RarityPercentage}
                      </span>
                      <input
                        type="range"
                        id="range"
                        placeholder={props.textinput_placeholder}
                        className="container-layer-textinput02 range range2"
                      />
                      <span className="container-layer-percentage-value-end">
                        {props.RarityPercentage2}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="container-layer-layer-items-treats">
                  <div className="container-layer-tabs-row">
                    <div className="container-layer-container05">
                      <span className="container-layer-text09">
                        &lt; go back
                      </span>
                      <span className="container-layer-text10">
                        Layer Assets 
                      </span>
                      <span className="container-layer-text11">Rules</span>
                    </div>
                    <div className="container-layer-filter-buttons">
                      <div className="container-layer-timeframe">
                        <button className="container-layer-button">
                          <span className="container-layer-text12">
                            <span>1h</span>
                            <br></br>
                          </span>
                        </button>
                        <button className="container-layer-button01">
                          <span className="container-layer-text15">
                            <span>6h</span>
                            <br></br>
                          </span>
                        </button>
                        <button className="container-layer-button02">
                          <span className="container-layer-text18">
                            <span>24h</span>
                            <br></br>
                          </span>
                        </button>
                        <button className="container-layer-button03">
                          <span className="container-layer-text21">
                            <span>7d</span>
                            <br></br>
                          </span>
                        </button>
                      </div>
                      <div
                        data-thq="thq-dropdown"
                        className="container-layer-sort-by list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="container-layer-dropdown-toggle"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon06"
                          >
                            <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                          </svg>
                          <span className="container-layer-text24">
                            Sort by Name
                          </span>
                          <div
                            data-thq="thq-dropdown-arrow"
                            className="container-layer-dropdown-arrow"
                          >
                            <svg
                              viewBox="0 0 1024 1024"
                              className="container-layer-icon08"
                            >
                              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                          </div>
                        </div>
                        <ul
                          data-thq="thq-dropdown-list"
                          className="container-layer-dropdown-list"
                        >
                          <li
                            data-thq="thq-dropdown"
                            className="container-layer-dropdown list-item"
                          >
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="container-layer-dropdown-toggle1"
                            >
                              <span className="container-layer-text25">
                                Name
                              </span>
                            </div>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="container-layer-dropdown-toggle2"
                            >
                              <span className="container-layer-text26">
                                Most Rare
                              </span>
                            </div>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="container-layer-dropdown-toggle3"
                            >
                              <span className="container-layer-text27">
                                Newest Added
                              </span>
                            </div>
                            <div
                              data-thq="thq-dropdown-toggle"
                              className="container-layer-dropdown-toggle4"
                            >
                              <span className="container-layer-text28">
                                Oldest
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="container-layer-button04"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="container-layer-icon10"
                        >
                          <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                        </svg>
                        <span className="container-layer-text29">
                          <span>Select All</span>
                          <br></br>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="container-layer-button05"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="container-layer-icon12 fill-color-white"
                        >
                          <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                        </svg>
                        <span className="container-layer-text32">
                          <span>Delete</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="container-layer-tabs-row1">
                    <div className="container-layer-container06">
                      <div className="container-layer-container07">
                        <span className="container-layer-text35 Labels13CAPS">
                          Open
                        </span>
                      </div>
                      <div className="container-layer-container08">
                        <span className="container-layer-text36 Labels13CAPS">
                          name
                        </span>
                      </div>
                    </div>
                    <div className="container-layer-container09">
                      <span className="container-layer-text37 Labels13CAPS">
                        Rarity
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <div className="container-layer-randomize">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="container-layer-icon14 fill-color-white"
                        >
                          <path d="M554 174q126 16 213 112t87 226-87 226-213 112v-86q92-16 153-87t61-165-61-165-153-87v166l-194-190 194-194v132zM302 782l62-62q46 34 106 44v86q-96-12-168-68zM260 554q10 58 42 106l-60 60q-56-74-68-166h86zM304 364q-36 52-44 106h-86q12-90 70-166z"></path>
                        </svg>
                        <span className="container-layer-text38">
                          {props.text}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="container-layer-container10">
                    <div className="container-layer-row-image">
                      <div className="container-layer-container11">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput03 focus-reset-forms input Content16SemiBold"
                        />
                      </div>
                      <div className="container-layer-container12">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput04 focus-reset-forms Content16SemiBold input"
                        />
                        <button
                          type="button"
                          className="container-layer-button06"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon16 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text39">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider1">
                          <span className="container-layer-percentage-value-start1">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput05 range range2"
                          />
                          <span className="container-layer-percentage-value-end1">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image1">
                      <div className="container-layer-container13">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox1"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput06 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container14">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput07 focus-reset-forms input Content16SemiBold"
                        />
                        <button
                          type="button"
                          className="container-layer-button07"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon18 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text42">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider2">
                          <span className="container-layer-percentage-value-start2">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput08 range range2"
                          />
                          <span className="container-layer-percentage-value-end2">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image2">
                      <div className="container-layer-container15">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox2"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput09 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container16">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput10 focus-reset-forms input Content16SemiBold"
                        />
                        <button
                          type="button"
                          className="container-layer-button08"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon20 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text45">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider3">
                          <span className="container-layer-percentage-value-start3">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput11 range range2"
                          />
                          <span className="container-layer-percentage-value-end3">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image3">
                      <div className="container-layer-container17">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox3"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput12 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container18">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput13 Content16SemiBold focus-reset-forms input"
                        />
                        <button
                          type="button"
                          className="container-layer-button09"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon22 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text48">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider4">
                          <span className="container-layer-percentage-value-start4">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput14 range range2"
                          />
                          <span className="container-layer-percentage-value-end4">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image4">
                      <div className="container-layer-container19">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox4"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput15 focus-reset-forms input Content16SemiBold"
                        />
                      </div>
                      <div className="container-layer-container20">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput16 focus-reset-forms input Content16SemiBold"
                        />
                        <button
                          type="button"
                          className="container-layer-button10"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon24 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text51">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider5">
                          <span className="container-layer-percentage-value-start5">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput17 range range2"
                          />
                          <span className="container-layer-percentage-value-end5">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image5">
                      <div className="container-layer-container21">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox5"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput18 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container22">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput19 focus-reset-forms Content16SemiBold input"
                        />
                        <button
                          type="button"
                          className="container-layer-button11"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon26 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text54">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider6">
                          <span className="container-layer-percentage-value-start6">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput20 range range2"
                          />
                          <span className="container-layer-percentage-value-end6">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image6">
                      <div className="container-layer-container23">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox6"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput21 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container24">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput22 Content16SemiBold focus-reset-forms input"
                        />
                        <button
                          type="button"
                          className="container-layer-button12"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon28 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text57">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider7">
                          <span className="container-layer-percentage-value-start7">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput23 range range2"
                          />
                          <span className="container-layer-percentage-value-end7">
                            100%
                          </span>
                          <div>
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
                    <div className="container-layer-row-image7">
                      <div className="container-layer-container25">
                        <input
                          type="checkbox"
                          className="container-layer-checkbox7"
                        />
                        <SettingsTrait></SettingsTrait>
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="Blue..."
                          className="container-layer-textinput24 focus-reset-forms Content16SemiBold input"
                        />
                      </div>
                      <div className="container-layer-container26">
                        <input
                          type="text"
                          enctype="The Funky Apes Crew..."
                          placeholder="47%..."
                          className="container-layer-textinput25 focus-reset-forms Content16SemiBold input"
                        />
                        <button
                          type="button"
                          className="container-layer-button13"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="container-layer-icon30 fill-color-white"
                          >
                            <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                          </svg>
                          <span className="container-layer-text60">
                            <span>Delete</span>
                            <br></br>
                          </span>
                        </button>
                        <div className="container-layer-slider8">
                          <span className="container-layer-percentage-value-start8">
                            0%
                          </span>
                          <input
                            type="range"
                            id="range"
                            placeholder="placeholder"
                            className="container-layer-textinput26 range range2"
                          />
                          <span className="container-layer-percentage-value-end8">
                            100%
                          </span>
                          <div>
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
        </div>
      )}
    </div>
  )
}

ContainerLayer.defaultProps = {
  text: 'Randomize',
  textinput_placeholder: 'placeholder',
  RarityPercentage2: '100%',
  RarityPercentage: '0%',
}

ContainerLayer.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  RarityPercentage2: PropTypes.string,
  RarityPercentage: PropTypes.string,
}

export default ContainerLayer
