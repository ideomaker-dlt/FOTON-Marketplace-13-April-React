import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './discover.css'

const Discover = (props) => {
  return (
    <div className="discover-container">
      <Helmet>
        <title>
          Discover - FOTON Marketplace for NFTs and Digital Collectibles on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Discover - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name25">
        <div className="discover-wrapper-all">
          <div className="discover-container01">
            <div className="discover-features">
              <Link to="/features" className="discover-navlink">
                <div className="discover-container02">
                  <h2 className="discover-text">Features &amp; Use Cases</h2>
                  <h2 className="discover-text001">
                    <span>
                      NFTs and Digital Assets for the next gen of Web 3
                      applications
                    </span>
                    <br></br>
                  </h2>
                  <div className="discover-container03">
                    <div className="discover-info-bubble">
                      <span className="discover-text004">
                        UNLIMITED POWER &amp; SCALE
                      </span>
                    </div>
                    <div className="discover-info-bubble01">
                      <span className="discover-text005">
                        FOR MASS ADOPTION
                      </span>
                    </div>
                  </div>
                  <div className="discover-dot">
                    <img
                      alt="image"
                      src="/tesseract-spinner%20(1).svg"
                      className="discover-image"
                    />
                    <span className="discover-text006">AVAILABLE SOON</span>
                    <div className="reddot"></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="discover-seasons1">
              <div className="discover-container05">
                <h2 className="discover-heading">Seasons</h2>
                <div className="discover-container06">
                  <div className="discover-info-bubble02">
                    <span className="discover-text007">
                      QUESTS, TESSERACTS, ETERNAL GLORY
                    </span>
                  </div>
                  <div className="discover-info-bubble03">
                    <span className="discover-text008">SEASON #2 - SOON</span>
                  </div>
                </div>
                <div className="discover-dot01">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image01"
                  />
                  <span className="discover-text009">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-start-here">
              <div className="discover-container08">
                <h2 className="discover-text010">
                  <span>Beginners Intro</span>
                  <br></br>
                </h2>
                <div className="discover-dot02">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image02"
                  />
                  <span className="discover-text013">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-tokens">
              <div className="discover-container10">
                <h2 className="discover-text014">Tesseract</h2>
                <div className="discover-dot03">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image03"
                  />
                  <span className="discover-text015">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-tesseracts">
              <div className="discover-container12">
                <h2 className="discover-text016">Tesseract</h2>
                <div className="discover-dot04">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image04"
                  />
                  <span className="discover-text017">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-launchpad">
              <div className="discover-container14">
                <h2 className="discover-text018">Launchpad</h2>
                <div className="discover-info-bubble04">
                  <span className="discover-text019">
                    WHERE CREATORS GET BOOSTED
                  </span>
                </div>
                <div className="discover-dot05">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image05"
                  />
                  <span className="discover-text020">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-pro-version">
              <div className="discover-container16">
                <h2 className="discover-text021">Foton PRO</h2>
                <div className="discover-container17">
                  <div className="discover-info-bubble05">
                    <span className="discover-text022">
                      CREATE LIKE A MASTER, TRADE LIKE A PRO
                    </span>
                  </div>
                  <div className="discover-info-bubble06">
                    <span className="discover-text023">POST BABYLON</span>
                  </div>
                </div>
                <div className="discover-dot06">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image06"
                  />
                  <span className="discover-text024">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-developers-sdk">
              <div className="discover-container19">
                <h2 className="discover-text025">Developers SDK</h2>
                <div className="discover-info-bubble07">
                  <span className="discover-text026">POST BABYLON</span>
                </div>
                <div className="discover-dot07">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image07"
                  />
                  <span className="discover-text027">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-help-center">
              <div className="discover-container21">
                <h2 className="discover-text028">
                  <span>Help Center</span>
                  <br></br>
                </h2>
                <div className="discover-dot08">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image08"
                  />
                  <span className="discover-text031">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-jobs-portal">
              <div className="discover-container23">
                <h2 className="discover-text032">
                  <span>Jobs Portal</span>
                  <br></br>
                </h2>
                <div className="discover-dot09">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image09"
                  />
                  <span className="discover-text035">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-announcements">
              <Link to="/blog" className="discover-navlink1">
                <div className="discover-container25">
                  <h2 className="discover-text036">Announcements &amp; Blog</h2>
                  <div className="discover-info-bubble08">
                    <span className="discover-text037">
                      NEWS, UPDATES &amp; OTHER GOODIES
                    </span>
                  </div>
                  <div className="discover-dot10">
                    <img
                      alt="image"
                      src="/tesseract-spinner%20(1).svg"
                      className="discover-image10"
                    />
                    <span className="discover-text038">AVAILABLE SOON</span>
                    <div className="reddot"></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="discover-press-desk">
              <div className="discover-container27">
                <h2 className="discover-text039">
                  <span>Press Info Desk</span>
                  <br></br>
                </h2>
                <div className="discover-dot11">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image11"
                  />
                  <span className="discover-text042">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-investor-lounge">
              <div className="discover-container29">
                <h2 className="discover-text043">Creators Lounge</h2>
                <div className="discover-dot12">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image12"
                  />
                  <span className="discover-text044">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-community">
              <div className="discover-container31">
                <h2 className="discover-text045">Social Channels</h2>
                <div className="discover-container32">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link"
                  >
                    <div className="discover-info-bubble09">
                      <span className="discover-text046">Twitter</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link01"
                  >
                    <div className="discover-info-bubble10">
                      <span className="discover-text047">Telegram</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link02"
                  >
                    <div className="discover-info-bubble11">
                      <span className="discover-text048">Discord</span>
                    </div>
                  </a>
                </div>
                <div className="discover-dot13">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image13"
                  />
                  <span className="discover-text049">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-ecosystem">
              <div className="discover-container34">
                <h2 className="discover-text050">Ecosystem Projects</h2>
                <div className="discover-container35">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link03"
                  >
                    <div className="discover-info-bubble12">
                      <span className="discover-text051">
                        Started by Foton team
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link04"
                  >
                    <div className="discover-info-bubble13">
                      <span className="discover-text052">RDX.DOMAINS</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link05"
                  >
                    <div className="discover-info-bubble14">
                      <span className="discover-text053">ITS</span>
                    </div>
                  </a>
                </div>
                <div className="discover-dot14">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image14"
                  />
                  <span className="discover-text054">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-radix-dlt">
              <div className="discover-container37">
                <h2 className="discover-text055">
                  <span>Runs on RADIX</span>
                  <br></br>
                </h2>
                <div className="discover-dot15">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image15"
                  />
                  <span className="discover-text058">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
            <div className="discover-about">
              <div className="discover-container39">
                <h2 className="discover-text059">
                  <span>About</span>
                  <br></br>
                </h2>
                <div className="discover-dot16">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="discover-image16"
                  />
                  <span className="discover-text062">AVAILABLE SOON</span>
                  <div className="reddot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-container41">
            <div className="discover-features1">
              <div className="discover-container42">
                <h2 className="discover-text063">Features</h2>
                <h2 className="discover-text064">
                  <span>
                    NFTs and Digital Assets for the next gen of Web 3
                    applications
                  </span>
                  <br></br>
                </h2>
                <div className="discover-info-bubble15">
                  <span className="discover-text067">
                    UNLIMITED POWER &amp; SCALE
                  </span>
                </div>
              </div>
            </div>
            <div className="discover-seasons11">
              <div className="discover-container43">
                <h2 className="discover-heading1">Seasons</h2>
                <div className="discover-container44">
                  <div className="discover-info-bubble16">
                    <span className="discover-text068">
                      QUESTS, TESSERACTS, ETERNAL GLORY
                    </span>
                  </div>
                  <div className="discover-info-bubble17">
                    <span className="discover-text069">SEASON #2 - SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-pro-version1">
              <div className="discover-container45">
                <h2 className="discover-text070">Foton PRO</h2>
                <div className="discover-container46">
                  <div className="discover-info-bubble18">
                    <span className="discover-text071">
                      CREATE LIKE A MASTER, TRADE LIKE A PRO
                    </span>
                  </div>
                  <div className="discover-info-bubble19">
                    <span className="discover-text072">COMING THOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-launchpad1">
              <div className="discover-container47">
                <h2 className="discover-text073">Launchpad</h2>
                <div className="discover-info-bubble20">
                  <span className="discover-text074">
                    WHERE CREATORS GET BOOSTED
                  </span>
                </div>
              </div>
            </div>
            <div className="discover-start-here1">
              <div className="discover-container48">
                <h2 className="discover-text075">
                  <span>Beginners Intro</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="discover-tokens1">
              <div className="discover-container49">
                <h2 className="discover-text078">Tesseract</h2>
              </div>
            </div>
            <div className="discover-tesseracts1">
              <div className="discover-container50">
                <h2 className="discover-text079">Tesseract</h2>
              </div>
            </div>
            <div className="discover-help-center1">
              <div className="discover-container51">
                <h2 className="discover-text080">
                  <span>Help Center</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="discover-announcements1">
              <div className="discover-container52">
                <h2 className="discover-text083">Announcements</h2>
                <div className="discover-info-bubble21">
                  <span className="discover-text084">
                    NEWS, UPDATES &amp; OTHER GOODIES
                  </span>
                </div>
              </div>
            </div>
            <div className="discover-jobs-portal1">
              <div className="discover-container53">
                <h2 className="discover-text085">
                  <span>Jobs Portal</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="discover-developers-sdk1">
              <div className="discover-container54">
                <h2 className="discover-text088">Developers SDK</h2>
                <div className="discover-info-bubble22">
                  <span className="discover-text089">POST BABYLON</span>
                </div>
              </div>
            </div>
            <div className="discover-press-desk1">
              <div className="discover-container55">
                <h2 className="discover-text090">
                  <span>Press Info Desk</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="discover-investor-lounge1">
              <div className="discover-container56">
                <h2 className="discover-text093">Investors Lounge</h2>
              </div>
            </div>
            <div className="discover-community1">
              <div className="discover-container57">
                <h2 className="discover-text094">Community</h2>
                <div className="discover-container58">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link06"
                  >
                    <div className="discover-info-bubble23">
                      <span className="discover-text095">Twitter</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link07"
                  >
                    <div className="discover-info-bubble24">
                      <span className="discover-text096">Telegram</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link08"
                  >
                    <div className="discover-info-bubble25">
                      <span className="discover-text097">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="discover-ecosystem1">
              <div className="discover-container59">
                <h2 className="discover-text098">Ecosystem dApps</h2>
                <div className="discover-container60">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link09"
                  >
                    <div className="discover-info-bubble26">
                      <span className="discover-text099">Stream</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link10"
                  >
                    <div className="discover-info-bubble27">
                      <span className="discover-text100">RDX.DOMAINS</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="discover-link11"
                  >
                    <div className="discover-info-bubble28">
                      <span className="discover-text101">ITS</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="discover-radix-dlt1">
              <div className="discover-container61">
                <h2 className="discover-text102">
                  <span>Runs on RADIX</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="discover-about1">
              <div className="discover-container62">
                <h2 className="discover-text105">
                  <span>About</span>
                  <br></br>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Discover
