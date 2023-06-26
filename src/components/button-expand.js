import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './button-expand.css'

const ButtonExpand = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="button-expand-container">
      <button
        type="button"
        onClick={() => setIsVisible(true)}
        className="button-expand-button-expand"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="button-expand-icon fill-color-white"
        >
          <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
        </svg>
        <span className="button-expand-text Content16SemiBold">
          Item Details
        </span>
      </button>
      {isVisible && (
        <div className="button-expand-modal-wrapper">
          <div
            onClick={() => setIsVisible(false)}
            className="button-expand-b-overlay-gray2"
          ></div>
          <div id="appOverlay" className="button-expand-container01">
            <div className="button-expand-container-bar-top">
              <label className="button-expand-text001">Item details</label>
              <div
                onClick={() => setIsVisible(false)}
                className="button-expand-close-window-button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="button-expand-icon2 fill-color-white"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="button-expand-navigation-buttons">
                <div className="button-expand-previous-button">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="button-expand-icon4 fill-color-white"
                  >
                    <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                  </svg>
                </div>
                <div className="button-expand-next-button">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="button-expand-icon6 fill-color-white"
                  >
                    <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="button-expand-wrapper-all">
              <div className="button-expand-container-left">
                <div className="button-expand-item-image">
                  <img
                    alt="image"
                    src="/group%20315-200h.png"
                    className="button-expand-image"
                  />
                </div>
              </div>
              <div className="button-expand-container-right">
                <div className="button-expand-item-info-box">
                  <div className="button-expand-name-item">
                    <div className="button-expand-container02">
                      <h1 className="button-expand-text002">Item name #2044</h1>
                      <div className="button-expand-container03">
                        <Link
                          to="/collection-page"
                          className="button-expand-navlink"
                        >
                          <p className="button-expand-text003">
                            <span>Collection Name</span>
                            <br></br>
                          </p>
                        </Link>
                        <p className="button-expand-text006">
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
                        <p className="button-expand-text009">
                          <span>Smooth Collective</span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="button-expand-container04">
                    <div className="button-expand-description-collection">
                      <div className="button-expand-container05">
                        <div className="button-expand-engagement-buttons">
                          <button
                            type="button"
                            className="button-expand-button"
                          >
                            <img
                              alt="image"
                              src="/tag.svg"
                              className="button-expand-image1"
                            />
                            <span className="button-expand-text012">
                              <span>2536</span>
                              <br></br>
                            </span>
                          </button>
                          <button
                            type="button"
                            className="button-expand-button1"
                          >
                            <span className="button-expand-text015">
                              <span>Avatars</span>
                              <br></br>
                            </span>
                          </button>
                        </div>
                        <h2 className="button-expand-text018">
                          The crew of pirates gathered around a campfire on a
                          tropical island, their ship anchored offshore. They
                          toasted their recent plunder and shared stories of
                          adventure. The sound of waves and the scent of
                          saltwater filled the air, as they planned their next
                          raid under the glow of the moon.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="button-expand-item-details">
                    <div className="button-expand-tabs-row">
                      <span className="button-expand-text019">Treats</span>
                      <span className="button-expand-text020">Rarity</span>
                    </div>
                    <div className="button-expand-container06">
                      <div className="button-expand-treat">
                        <div className="button-expand-container-row">
                          <p className="button-expand-text021">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container07">
                            <p className="button-expand-text024">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text027">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row01">
                          <p className="button-expand-text030">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text033">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat01">
                        <div className="button-expand-container-row02">
                          <p className="button-expand-text036">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container08">
                            <p className="button-expand-text039">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text042">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row03">
                          <p className="button-expand-text045">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text048">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat02">
                        <div className="button-expand-container-row04">
                          <p className="button-expand-text051">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container09">
                            <p className="button-expand-text054">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text057">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row05">
                          <p className="button-expand-text060">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text063">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat03">
                        <div className="button-expand-container-row06">
                          <p className="button-expand-text066">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container10">
                            <p className="button-expand-text069">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text072">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row07">
                          <p className="button-expand-text075">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text078">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat04">
                        <div className="button-expand-container-row08">
                          <p className="button-expand-text081">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container11">
                            <p className="button-expand-text084">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text087">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row09">
                          <p className="button-expand-text090">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text093">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat05">
                        <div className="button-expand-container-row10">
                          <p className="button-expand-text096">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container12">
                            <p className="button-expand-text099">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text102">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row11">
                          <p className="button-expand-text105">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text108">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat06">
                        <div className="button-expand-container-row12">
                          <p className="button-expand-text111">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container13">
                            <p className="button-expand-text114">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text117">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row13">
                          <p className="button-expand-text120">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text123">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat07">
                        <div className="button-expand-container-row14">
                          <p className="button-expand-text126">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container14">
                            <p className="button-expand-text129">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text132">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row15">
                          <p className="button-expand-text135">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text138">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat08">
                        <div className="button-expand-container-row16">
                          <p className="button-expand-text141">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container15">
                            <p className="button-expand-text144">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text147">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row17">
                          <p className="button-expand-text150">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text153">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat09">
                        <div className="button-expand-container-row18">
                          <p className="button-expand-text156">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container16">
                            <p className="button-expand-text159">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text162">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row19">
                          <p className="button-expand-text165">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text168">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat10">
                        <div className="button-expand-container-row20">
                          <p className="button-expand-text171">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container17">
                            <p className="button-expand-text174">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text177">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row21">
                          <p className="button-expand-text180">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text183">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat11">
                        <div className="button-expand-container-row22">
                          <p className="button-expand-text186">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container18">
                            <p className="button-expand-text189">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text192">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row23">
                          <p className="button-expand-text195">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text198">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat12">
                        <div className="button-expand-container-row24">
                          <p className="button-expand-text201">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container19">
                            <p className="button-expand-text204">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text207">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row25">
                          <p className="button-expand-text210">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text213">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat13">
                        <div className="button-expand-container-row26">
                          <p className="button-expand-text216">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container20">
                            <p className="button-expand-text219">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text222">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row27">
                          <p className="button-expand-text225">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text228">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat14">
                        <div className="button-expand-container-row28">
                          <p className="button-expand-text231">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container21">
                            <p className="button-expand-text234">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text237">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row29">
                          <p className="button-expand-text240">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text243">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat15">
                        <div className="button-expand-container-row30">
                          <p className="button-expand-text246">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container22">
                            <p className="button-expand-text249">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text252">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row31">
                          <p className="button-expand-text255">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text258">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat16">
                        <div className="button-expand-container-row32">
                          <p className="button-expand-text261">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container23">
                            <p className="button-expand-text264">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text267">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row33">
                          <p className="button-expand-text270">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text273">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat17">
                        <div className="button-expand-container-row34">
                          <p className="button-expand-text276">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container24">
                            <p className="button-expand-text279">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text282">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row35">
                          <p className="button-expand-text285">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text288">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat18">
                        <div className="button-expand-container-row36">
                          <p className="button-expand-text291">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container25">
                            <p className="button-expand-text294">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text297">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row37">
                          <p className="button-expand-text300">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text303">
                            <span>14%</span>
                            <br></br>
                          </p>
                        </div>
                      </div>
                      <div className="button-expand-treat19">
                        <div className="button-expand-container-row38">
                          <p className="button-expand-text306">
                            <span>Eyes</span>
                            <br></br>
                          </p>
                          <div className="button-expand-container26">
                            <p className="button-expand-text309">
                              <span>243</span>
                              <br></br>
                            </p>
                            <p className="button-expand-text312">
                              <span>Have it</span>
                              <br></br>
                            </p>
                          </div>
                        </div>
                        <div className="button-expand-container-row39">
                          <p className="button-expand-text315">
                            <span>Purple</span>
                            <br></br>
                          </p>
                          <p className="button-expand-text318">
                            <span>14%</span>
                            <br></br>
                          </p>
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

export default ButtonExpand
