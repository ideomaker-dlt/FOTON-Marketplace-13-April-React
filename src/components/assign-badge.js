import React, { useState } from 'react'

import './assign-badge.css'

const AssignBadge = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="assign-badge-container">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="assign-badge-button"
      >
        <img
          alt="image"
          src="/Icons Imported/person_add.svg"
          className="assign-badge-image"
        />
        <span className="assign-badge-text">
          <span>Assign Badge</span>
          <br></br>
        </span>
      </button>
      {isVisible && (
        <div className="assign-badge-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="assign-badge-out"
          ></div>
          <div className="assign-badge-drawer-right">
            <div className="assign-badge-header">
              <div className="assign-badge-container01">
                <span className="assign-badge-text03">Assign Badges Cart</span>
                <div className="assign-badge-container02">
                  <span className="assign-badge-text04">
                    <span>
                      Added items:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="assign-badge-text06">2</span>
                  </span>
                  <span className="assign-badge-text07">Remove all</span>
                </div>
              </div>
              <div
                onClick={() => setIsVisible(false)}
                className="assign-badge-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="assign-badge-icon fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="assign-badge-items">
              <div className="assign-badge-item-added">
                <div className="assign-badge-container03">
                  <div className="assign-badge-container04">
                    <div className="assign-badge-container05"></div>
                    <div className="assign-badge-container06">
                      <span className="assign-badge-name">Owner Badge</span>
                      <div className="assign-badge-container07">
                        <span className="assign-badge-collection-name">
                          At Project:
                        </span>
                        <span className="assign-badge-collection-name1">
                          Project Name
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="assign-badge-container08">
                    <span className="assign-badge-price">1 BADGE</span>
                    <div className="assign-badge-container09">
                      <span className="assign-badge-price-fiat">126 $</span>
                    </div>
                    <div className="assign-badge-container10">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="assign-badge-icon02 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="assign-badge-container11">
                  <div className="assign-badge-container12">
                    <div className="assign-badge-container13">
                      <span className="assign-badge-label">Send To:</span>
                      <span className="assign-badge-label1">User Name</span>
                    </div>
                    <div className="assign-badge-amount">
                      <input
                        type="text"
                        required="true"
                        placeholder="Account..."
                        className="assign-badge-textinput focus-reset-forms input"
                      />
                      <div className="assign-badge-container14">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="assign-badge-icon04 fill-color-white"
                        >
                          <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="assign-badge-item-added1">
                <div className="assign-badge-container15">
                  <div className="assign-badge-container16">
                    <div className="assign-badge-container17"></div>
                    <div className="assign-badge-container18">
                      <span className="assign-badge-name1">Owner Badge</span>
                      <div className="assign-badge-container19">
                        <span className="assign-badge-collection-name2">
                          At Project:
                        </span>
                        <span className="assign-badge-collection-name3">
                          Project Name
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="assign-badge-container20">
                    <span className="assign-badge-price1">1 BADGE</span>
                    <div className="assign-badge-container21">
                      <span className="assign-badge-price-fiat1">126 $</span>
                    </div>
                    <div className="assign-badge-container22">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="assign-badge-icon06 fill-color-white"
                      >
                        <path d="M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="assign-badge-container23">
                  <div className="assign-badge-container24">
                    <div className="assign-badge-container25">
                      <span className="assign-badge-label2">Send To:</span>
                      <span className="assign-badge-label3">User Name</span>
                    </div>
                    <div className="assign-badge-amount1">
                      <input
                        type="text"
                        required="true"
                        placeholder="Account..."
                        className="assign-badge-textinput1 focus-reset-forms input"
                      />
                      <div className="assign-badge-container26">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="assign-badge-icon08 fill-color-white"
                        >
                          <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="assign-badge-total-summary">
              <div className="assign-badge-container27">
                <div className="assign-badge-container28">
                  <span className="assign-badge-text08">
                    Total Badges to Assign:
                  </span>
                  <span className="assign-badge-text09">2</span>
                </div>
                <div className="assign-badge-container29">
                  <span className="assign-badge-text10">Network fees:</span>
                  <span className="assign-badge-text11">15 XRD</span>
                </div>
                <div className="assign-badge-container30">
                  <div className="assign-badge-container31">
                    <span className="assign-badge-text12">
                      <span>Disclaimer!</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="assign-badge-container32">
                    <span className="assign-badge-text15">
                      <span>
                        1. Once you confirm, Members can immediately use the
                        badges.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="assign-badge-container33">
                    <span className="assign-badge-text18">
                      2. Make sure you send them to members who you trust, and
                      that you set the right Permissions for the Roles. 
                    </span>
                  </div>
                  <div className="assign-badge-container34">
                    <span className="assign-badge-text19">
                      3. You and your team are entirely responsible for how
                      these badges will be used and FOTON is not to be held
                      accountable in case of any damage or loss of your
                      Projects, Collections and Items. 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="assign-badge-container35">
              <button className="assign-badge-button1 button">
                <span className="assign-badge-text20">
                  <span>Confirm Action</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="assign-badge-icon10">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AssignBadge
