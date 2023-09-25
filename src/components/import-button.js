import React, { useState } from 'react'

import './import-button.css'

const ImportButton = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="import-button-container">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="import-button-import button"
      >
        <span className="import-button-text">
          <span>Import Collection</span>
          <br></br>
        </span>
        <svg viewBox="0 0 1024 1024" className="import-button-icon">
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </button>
      {!isVisible && (
        <div className="import-button-processing-window">
          <div className="import-button-container1">
            <div className="import-button-container2">
              <span className="import-button-text03">
                Your collection is being created. Please wait...
              </span>
            </div>
            <div className="import-button-container-tasks">
              <div className="import-button-row">
                <div className="import-button-event">
                  <div className="import-button-bullet-point">
                    <span className="import-button-text04">1</span>
                  </div>
                  <span className="import-button-text05">
                    Uploading Files . . .
                  </span>
                  <span className="import-button-progress">120 out of 500</span>
                </div>
                <div className="import-button-status">
                  <span className="import-button-status-label">
                    In Progress
                  </span>
                  <button
                    type="button"
                    className="import-button-button-inactive"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="import-button-icon02 fill-color-gray"
                    >
                      <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                    </svg>
                    <span className="import-button-text06">Retry</span>
                  </button>
                </div>
              </div>
              <div className="import-button-row1">
                <div className="import-button-label">
                  <div className="import-button-bullet-point1">
                    <span className="import-button-text07">2</span>
                  </div>
                  <span className="import-button-text08">
                    Storing Collection Details . . .
                  </span>
                </div>
                <div className="import-button-status1">
                  <span className="import-button-progress1">
                    120 out of 500
                  </span>
                  <span className="import-button-status-label1">Done</span>
                  <span className="import-button-status-label2">
                    Not Started
                  </span>
                  <button
                    type="button"
                    className="import-button-button-inactive1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="import-button-icon04 fill-color-gray"
                    >
                      <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                    </svg>
                    <span className="import-button-text09">Retry</span>
                  </button>
                </div>
              </div>
              <div className="import-button-row2">
                <div className="import-button-label1">
                  <div className="import-button-bullet-point2">
                    <span className="import-button-text10">3</span>
                  </div>
                  <span className="import-button-text11">
                    Storing Collection Items . . .
                  </span>
                  <span className="import-button-progress2">0 out of 500</span>
                </div>
                <div className="import-button-status2">
                  <span className="import-button-status-label3">Failed</span>
                  <span className="import-button-status-label4">
                    Not Started
                  </span>
                  <button type="button" className="import-button-button-active">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="import-button-icon06 fill-color-white"
                    >
                      <path d="M754 270l100-100v300h-300l138-138q-76-76-180-76-106 0-181 75t-75 181 75 181 181 75q74 0 145-50t97-120h88q-28 112-120 184t-210 72q-140 0-240-100t-100-242 100-242 240-100q60 0 131 29t111 71z"></path>
                    </svg>
                    <span className="import-button-text12">Retry</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="import-button-container-upload"></div>
          </div>
          <div
            onClick={() => setIsVisible(true)}
            className="import-button-cancel-everything"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="import-button-icon08 fill-color-white"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImportButton
