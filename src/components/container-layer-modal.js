import React, { useState } from 'react'

import DangerousHTML from 'dangerous-html/react'

import './container-layer-modal.css'

const ContainerLayerModal = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="container-layer-modal-container-layer-modal">
      <div className="container-layer-modal-container">
        <div className="container-layer-modal-container1">
          <span className="container-layer-modal-text Content16SemiBold">
            <span>Modal</span>
            <br></br>
          </span>
          <span className="container-layer-modal-text03">
            <span>2 Files - 72% Rarity</span>
            <br></br>
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="container-layer-modal-icon fill-color-gray"
        >
          <path d="M640 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM640 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26zM384 170q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM384 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM470 768q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
        </svg>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="container-layer-modal-button-settings2 button Content16SemiBold"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="container-layer-modal-icon02 fill-color-white"
        >
          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
      </button>
      {isVisible && (
        <div className="container-layer-modal-modal-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="container-layer-modal-b-overlay-gray2"
          ></div>
          <div id="appOverlay" className="container-layer-modal-container2">
            <div className="container-layer-modal-container-bar-top">
              <label className="container-layer-modal-text06">Eyes</label>
              <div
                onClick={() => setIsVisible(false)}
                className="container-layer-modal-close-window-button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="container-layer-modal-icon04 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="container-layer-modal-message">
              <div className="container-layer-modal-field">
                <label className="container-layer-modal-text07 padding-4px-left">
                  Are you sure you want to Delete these items?
                </label>
              </div>
            </div>
            <div className="container-layer-modal-buttons">
              <div>
                <DangerousHTML
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
                ></DangerousHTML>
              </div>
              <div className="container-layer-modal-field1">
                <div className="container-layer-modal-bottom-buttons">
                  <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="container-layer-modal-button button"
                  >
                    <span className="container-layer-modal-text08">
                      <span>Cancel</span>
                      <br></br>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="container-layer-modal-button1 button"
                  >
                    <span className="container-layer-modal-text11">
                      <span>Confirm</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="container-layer-modal-icon06"
                    >
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="container-layer-modal-button2 button"
                  >
                    <span className="container-layer-modal-text14">
                      <span>Delete</span>
                      <br></br>
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="container-layer-modal-icon08 fill-color-white"
                    >
                      <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContainerLayerModal
