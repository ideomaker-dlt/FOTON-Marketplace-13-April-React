import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './blog-post.css'

const BlogPost = (props) => {
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>
          Blog-Post - FOTON Marketplace for NFTs and Digital Collectibles on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Blog-Post - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <div className="blog-post-container01">
        <div className="blog-post-navbar">
          <div className="blog-post-container02">
            <Link to="/" className="blog-post-navlink">
              <div className="blog-post-logo-container"></div>
            </Link>
            <div className="blog-post-searchbar">
              <form className="blog-post-form">
                <button className="blog-post-button button">
                  <svg viewBox="0 0 1024 1024" className="blog-post-icon">
                    <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  id="mainsearch"
                  name="search-field"
                  placeholder="Search..."
                  className="blog-post-textinput focus-reset input Content18"
                />
                <div className="blog-post-div">
                  <Script
                    html={`<style>
input::placeholder #searchfield { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: red;
opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Internet Explorer 10-11 */
color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
color: red;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
-webkit-appearance:none;
}
</style>`}
                  ></Script>
                </div>
              </form>
            </div>
            <div className="blog-post-wrapper-right">
              <div className="blog-post-container-right">
                <div className="blog-post-items">
                  <Link to="/blog" className="blog-post-navlink01 Content">
                    Blog
                  </Link>
                  <Link to="/discover" className="blog-post-navlink02 Content">
                    Discover
                  </Link>
                  <Link to="/" className="blog-post-navlink03 Content">
                    Marketplace
                  </Link>
                </div>
              </div>
              <div className="blog-post-mobile-search">
                <svg viewBox="0 0 1024 1024" className="blog-post-icon2">
                  <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </div>
              <div className="blog-post-mobile-menu">
                <div
                  data-thq="thq-dropdown"
                  className="blog-post-category list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="blog-post-dropdown-toggle"
                  >
                    <svg viewBox="0 0 1024 1024" className="blog-post-icon4">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="blog-post-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="blog-post-big-buttons list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="blog-post-user-persona"
                      >
                        <span className="blog-post-text material-symbols-outlined">
                          account_circle
                        </span>
                        <div className="blog-post-container03">
                          <span className="blog-post-name">
                            Danoshi Hughemoto
                          </span>
                          <span className="blog-post-radix-address">
                            rdxdhsj...sdg765sg
                          </span>
                        </div>
                      </div>
                      <Link to="/collector-profile">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-collector-profile"
                        >
                          <span className="blog-post-text001 material-symbols-outlined">
                            category
                          </span>
                          <span className="blog-post-text002">
                            Collector Profile
                          </span>
                        </div>
                      </Link>
                      <Link to="/creator-studio">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-creator-studio"
                        >
                          <span className="blog-post-text003 material-symbols-outlined">
                            deblur
                          </span>
                          <span className="blog-post-text004">
                            Creator Studio
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="blog-post-user-settings list-item"
                    >
                      <Link to="/drops">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-dropdown-toggle1"
                        >
                          <span className="blog-post-text005 material-symbols-outlined">
                            water_drop
                          </span>
                          <span className="blog-post-text006">Drops</span>
                        </div>
                      </Link>
                      <Link to="/stats">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-dropdown-toggle2"
                        >
                          <span className="blog-post-text007 material-symbols-outlined">
                            insights
                          </span>
                          <span className="blog-post-text008">Stats</span>
                        </div>
                      </Link>
                      <Link to="/discover">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-dropdown-toggle3"
                        >
                          <span className="blog-post-text009 material-symbols-outlined">
                            grid_view
                          </span>
                          <span className="blog-post-text010">More</span>
                        </div>
                      </Link>
                      <Link to="/user-profile-settings">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-post-dropdown-toggle4"
                        >
                          <span className="blog-post-text011 material-symbols-outlined">
                            manage_accounts
                          </span>
                          <span className="blog-post-text012">
                            Profile Settings
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="blog-post-log-out list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="blog-post-dropdown-toggle5"
                      >
                        <span className="blog-post-text013 material-symbols-outlined">
                          logout
                        </span>
                        <span className="blog-post-text014">Log Out</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-contain-all">
          <div className="blog-post-main-menu">
            <div className="blog-post-wrapper-content">
              <div className="blog-post-wrapper-all">
                <div className="blog-post-container04">
                  <div className="blog-post-features">
                    <div className="blog-post-container05">
                      <h2 className="blog-post-text015">Features</h2>
                      <h2 className="blog-post-text016">
                        <span>
                          NFTs and Digital Assets for the next gen of Web 3
                          applications
                        </span>
                        <br></br>
                      </h2>
                      <div className="blog-post-container06">
                        <div className="blog-post-info-bubble">
                          <span className="blog-post-text019">
                            UNLIMITED POWER &amp; SCALE
                          </span>
                        </div>
                        <div className="blog-post-info-bubble01">
                          <span className="blog-post-text020">
                            FOR MASS ADOPTION
                          </span>
                        </div>
                      </div>
                      <div className="blog-post-spinner">
                        <img
                          alt="image"
                          src="/tesseract-spinner%20(1).svg"
                          className="blog-post-image"
                        />
                        <span className="blog-post-text021">OPEN</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-seasons1">
                    <div className="blog-post-container07">
                      <h2 className="blog-post-heading">Seasons</h2>
                      <div className="blog-post-container08">
                        <div className="blog-post-info-bubble02">
                          <span className="blog-post-text022">
                            QUESTS, TESSERACTS, ETERNAL GLORY
                          </span>
                        </div>
                        <div className="blog-post-info-bubble03">
                          <span className="blog-post-text023">
                            SEASON #2 - SOON
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-start-here">
                    <div className="blog-post-container09">
                      <h2 className="blog-post-text024">
                        <span>Beginners Intro</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-tokens">
                    <div className="blog-post-container10">
                      <h2 className="blog-post-text027">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-post-tesseracts">
                    <div className="blog-post-container11">
                      <h2 className="blog-post-text028">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-post-launchpad">
                    <div className="blog-post-container12">
                      <h2 className="blog-post-text029">Launchpad</h2>
                      <div className="blog-post-info-bubble04">
                        <span className="blog-post-text030">
                          WHERE CREATORS GET BOOSTED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-pro-version">
                    <div className="blog-post-container13">
                      <h2 className="blog-post-text031">Foton PRO</h2>
                      <div className="blog-post-container14">
                        <div className="blog-post-info-bubble05">
                          <span className="blog-post-text032">
                            CREATE LIKE A MASTER, TRADE LIKE A PRO
                          </span>
                        </div>
                        <div className="blog-post-info-bubble06">
                          <span className="blog-post-text033">
                            COMING THOON
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-developers-sdk">
                    <div className="blog-post-container15">
                      <h2 className="blog-post-text034">Developers SDK</h2>
                      <div className="blog-post-info-bubble07">
                        <span className="blog-post-text035">POST BABYLON</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-help-center">
                    <div className="blog-post-container16">
                      <h2 className="blog-post-text036">
                        <span>Help Center</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-jobs-portal">
                    <div className="blog-post-container17">
                      <h2 className="blog-post-text039">
                        <span>Jobs Portal</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-announcements">
                    <div className="blog-post-container18">
                      <h2 className="blog-post-text042">Announcements</h2>
                      <div className="blog-post-info-bubble08">
                        <span className="blog-post-text043">
                          NEWS, UPDATES &amp; OTHER GOODIES
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-press-desk">
                    <div className="blog-post-container19">
                      <h2 className="blog-post-text044">
                        <span>Press Info Desk</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-investor-lounge">
                    <div className="blog-post-container20">
                      <h2 className="blog-post-text047">Investors Lounge</h2>
                    </div>
                  </div>
                  <div className="blog-post-community">
                    <div className="blog-post-container21">
                      <h2 className="blog-post-text048">Community</h2>
                      <div className="blog-post-container22">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link"
                        >
                          <div className="blog-post-info-bubble09">
                            <span className="blog-post-text049">Twitter</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link01"
                        >
                          <div className="blog-post-info-bubble10">
                            <span className="blog-post-text050">Telegram</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link02"
                        >
                          <div className="blog-post-info-bubble11">
                            <span className="blog-post-text051">Discord</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-ecosystem">
                    <div className="blog-post-container23">
                      <h2 className="blog-post-text052">Ecosystem Projects</h2>
                      <div className="blog-post-container24">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link03"
                        >
                          <div className="blog-post-info-bubble12">
                            <span className="blog-post-text053">Stream</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link04"
                        >
                          <div className="blog-post-info-bubble13">
                            <span className="blog-post-text054">
                              RDX.DOMAINS
                            </span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link05"
                        >
                          <div className="blog-post-info-bubble14">
                            <span className="blog-post-text055">ITS</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-radix-dlt">
                    <div className="blog-post-container25">
                      <h2 className="blog-post-text056">
                        <span>Runs on RADIX</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-about">
                    <div className="blog-post-container26">
                      <h2 className="blog-post-text059">
                        <span>About</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-post-container27">
                  <div className="blog-post-features1">
                    <div className="blog-post-container28">
                      <h2 className="blog-post-text062">Features</h2>
                      <h2 className="blog-post-text063">
                        <span>
                          NFTs and Digital Assets for the next gen of Web 3
                          applications
                        </span>
                        <br></br>
                      </h2>
                      <div className="blog-post-info-bubble15">
                        <span className="blog-post-text066">
                          UNLIMITED POWER &amp; SCALE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-seasons11">
                    <div className="blog-post-container29">
                      <h2 className="blog-post-heading1">Seasons</h2>
                      <div className="blog-post-container30">
                        <div className="blog-post-info-bubble16">
                          <span className="blog-post-text067">
                            QUESTS, TESSERACTS, ETERNAL GLORY
                          </span>
                        </div>
                        <div className="blog-post-info-bubble17">
                          <span className="blog-post-text068">
                            SEASON #2 - SOON
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-pro-version1">
                    <div className="blog-post-container31">
                      <h2 className="blog-post-text069">Foton PRO</h2>
                      <div className="blog-post-container32">
                        <div className="blog-post-info-bubble18">
                          <span className="blog-post-text070">
                            CREATE LIKE A MASTER, TRADE LIKE A PRO
                          </span>
                        </div>
                        <div className="blog-post-info-bubble19">
                          <span className="blog-post-text071">
                            COMING THOON
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-launchpad1">
                    <div className="blog-post-container33">
                      <h2 className="blog-post-text072">Launchpad</h2>
                      <div className="blog-post-info-bubble20">
                        <span className="blog-post-text073">
                          WHERE CREATORS GET BOOSTED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-start-here1">
                    <div className="blog-post-container34">
                      <h2 className="blog-post-text074">
                        <span>Beginners Intro</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-tokens1">
                    <div className="blog-post-container35">
                      <h2 className="blog-post-text077">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-post-tesseracts1">
                    <div className="blog-post-container36">
                      <h2 className="blog-post-text078">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-post-help-center1">
                    <div className="blog-post-container37">
                      <h2 className="blog-post-text079">
                        <span>Help Center</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-announcements1">
                    <div className="blog-post-container38">
                      <h2 className="blog-post-text082">Announcements</h2>
                      <div className="blog-post-info-bubble21">
                        <span className="blog-post-text083">
                          NEWS, UPDATES &amp; OTHER GOODIES
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-jobs-portal1">
                    <div className="blog-post-container39">
                      <h2 className="blog-post-text084">
                        <span>Jobs Portal</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-developers-sdk1">
                    <div className="blog-post-container40">
                      <h2 className="blog-post-text087">Developers SDK</h2>
                      <div className="blog-post-info-bubble22">
                        <span className="blog-post-text088">POST BABYLON</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-press-desk1">
                    <div className="blog-post-container41">
                      <h2 className="blog-post-text089">
                        <span>Press Info Desk</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-investor-lounge1">
                    <div className="blog-post-container42">
                      <h2 className="blog-post-text092">Investors Lounge</h2>
                    </div>
                  </div>
                  <div className="blog-post-community1">
                    <div className="blog-post-container43">
                      <h2 className="blog-post-text093">Community</h2>
                      <div className="blog-post-container44">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link06"
                        >
                          <div className="blog-post-info-bubble23">
                            <span className="blog-post-text094">Twitter</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link07"
                        >
                          <div className="blog-post-info-bubble24">
                            <span className="blog-post-text095">Telegram</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link08"
                        >
                          <div className="blog-post-info-bubble25">
                            <span className="blog-post-text096">Discord</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-ecosystem1">
                    <div className="blog-post-container45">
                      <h2 className="blog-post-text097">Ecosystem dApps</h2>
                      <div className="blog-post-container46">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link09"
                        >
                          <div className="blog-post-info-bubble26">
                            <span className="blog-post-text098">Stream</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link10"
                        >
                          <div className="blog-post-info-bubble27">
                            <span className="blog-post-text099">
                              RDX.DOMAINS
                            </span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-post-link11"
                        >
                          <div className="blog-post-info-bubble28">
                            <span className="blog-post-text100">ITS</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post-radix-dlt1">
                    <div className="blog-post-container47">
                      <h2 className="blog-post-text101">
                        <span>Runs on RADIX</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-post-about1">
                    <div className="blog-post-container48">
                      <h2 className="blog-post-text104">
                        <span>About</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-post-side-nav">
                  <div className="blog-post-side-anchor-menu">
                    <div className="blog-post-container-img">
                      <div className="blog-post-container49">
                        <h2 className="blog-post-text107">Read Article</h2>
                        <Link
                          to="/blog"
                          className="blog-post-navlink10 Content16SemiBold"
                        >
                          &lt; back to Blog
                        </Link>
                      </div>
                    </div>
                    <div className="blog-post-container50">
                      <span className="blog-post-text108">Announcements</span>
                      <span className="blog-post-text109">NFT News</span>
                      <span className="blog-post-text110">Insights</span>
                      <span className="blog-post-text111">Seasons</span>
                      <span className="blog-post-text112">Foton Ecosystem</span>
                      <span className="blog-post-text113">E-Commerce</span>
                      <span className="blog-post-text114">Gaming</span>
                    </div>
                  </div>
                </div>
                <div className="blog-post-page-content">
                  <div className="blog-post-header">
                    <h1 className="blog-post-text115">News and Insights</h1>
                    <h2 className="blog-post-text116">
                      Stay up to date with the announcements from the Foton team
                      and key Insights about tokenised Digital Assets and the
                      Radix ecosystem at large
                    </h2>
                  </div>
                  <div className="blog-post-features-sections">
                    <div className="blog-post-header-tablet">
                      <div className="blog-post-container51">
                        <h3 className="blog-post-text117">
                          <span className="blog-post-text118">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-post-text120">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-post-container52">
                        <div className="blog-post-container53">
                          <h3 className="blog-post-text121">
                            Announcements &amp; Blog
                          </h3>
                          <Link to="/blog" className="blog-post-navlink11">
                            &lt; back to Blog
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog-post-blog-post">
                      <div className="blog-post-header-blog-post">
                        <div className="blog-post-container54">
                          <h3 className="blog-post-text122">
                            <span className="blog-post-text123">
                              Mint Easily
                            </span>
                            <span>
                              {' '}
                              entire Collections without coding knowledge
                            </span>
                          </h3>
                          <span className="blog-post-text125">
                            Big collections between 500 and 10000 items with
                            unique attributes work the best. Such collections
                            can be Illustrated Avatars or Generative art.
                          </span>
                        </div>
                        <div className="blog-post-header-image">
                          <div className="blog-post-image-container"></div>
                        </div>
                        <div className="blog-post-container-title">
                          <div className="blog-post-container55">
                            <h3 className="blog-post-text126">
                              Foton Roadmap and Vision
                            </h3>
                            <div className="blog-post-container56">
                              <span className="blog-post-text127">
                                12 July 2023
                              </span>
                              <span className="blog-post-text128">
                                by Vlad B
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blog-post-blog-post-text">
                        <div className="blog-post-tags">
                          <button type="button" className="blog-post-tag">
                            Announcements
                          </button>
                          <button type="button" className="blog-post-tag1">
                            Insights
                          </button>
                          <button type="button" className="blog-post-tag2">
                            E-commerce
                          </button>
                          <button type="button" className="blog-post-tag3">
                            Gaming
                          </button>
                          <button type="button" className="blog-post-tag4">
                            Seasons
                          </button>
                        </div>
                        <span className="blog-post-text129">
                          <span>
                            The way developers specify authentication for their
                            components has changed quite a lot for the better.
                            To understand why this is important, let’s look at
                            common developer needs for privileged access, which
                            break down into 3 categories:
                          </span>
                          <br className="Content"></br>
                          <br className="Content"></br>
                          <span>
                            Components which have no need for any privileged
                            access; all methods are public.
                          </span>
                          <br className="Content"></br>
                          <span>
                            Components which need a concept of an administrator,
                            but don’t need fine-grained control with lots of
                            different actors.
                          </span>
                          <br className="Content"></br>
                          <br className="Content"></br>
                          <span>
                            Components which have multiple categories of actors,
                            and need to manage their access levels carefully.
                          </span>
                          <br className="Content"></br>
                          <br className="Content"></br>
                          <span>
                            Previously, Scrypto was set up quite well to handle
                            the first category, but it was pretty easy to make a
                            configuration mistake if your application fell into
                            the latter two categories. Furthermore, people who
                            wanted the common “single admin actor” pattern wound
                            up having to learn more (and code more) than they
                            really needed to in order to set that up. It worked,
                            but it needed to be better to deliver the Scrypto
                            standard of intuitiveness.
                          </span>
                          <br className="Content"></br>
                          <br className="Content"></br>
                          <span>
                            The new model for configuring authentication is
                            based around assigning roles to specific
                            permissions. This lets each of the component
                            categories above use the simplest possible
                            implementation, providing sensible defaults to
                            handle the 90% case. It also changes the syntax to
                            prevent developers from accidentally failing to
                            fully specify the permission set, removing a common
                            cause of errors.
                          </span>
                        </span>
                        <Link to="/blog" className="blog-post-navlink12">
                          &lt; back to Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post-pinned-news">
                  <div className="blog-post-slot">
                    <div className="blog-post-container57">
                      <h2 className="blog-post-heading2">Pinned by team</h2>
                      <img
                        alt="image"
                        src="/push_pin1.svg"
                        className="blog-post-image1"
                      />
                    </div>
                  </div>
                  <div className="blog-post-slot1">
                    <div className="blog-post-container58">
                      <h2 className="blog-post-heading3">
                        Foton NFT Minting starts on Radix Babylon
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h2>
                      <div className="blog-post-container59">
                        <div className="blog-post-info-bubble29">
                          <span className="blog-post-text145">
                            End Of September
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                        <div className="blog-post-info-bubble30">
                          <span className="blog-post-text146">
                            To October 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer rootClassName="footer-root-class-name2"></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
