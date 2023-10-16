import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>
          Blog - FOTON Marketplace for NFTs and Digital Collectibles on Radix
          DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Blog - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <div className="blog-container01">
        <div className="blog-navbar">
          <div className="blog-container02">
            <Link to="/" className="blog-navlink">
              <div className="blog-logo-container"></div>
            </Link>
            <div className="blog-searchbar">
              <form className="blog-form">
                <button className="blog-button button">
                  <svg viewBox="0 0 1024 1024" className="blog-icon">
                    <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  id="mainsearch"
                  name="search-field"
                  placeholder="Search..."
                  className="blog-textinput focus-reset Content18 input"
                />
                <div>
                  <div className="blog-container04">
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
                </div>
              </form>
            </div>
            <div className="blog-wrapper-right">
              <div className="blog-container-right">
                <div className="blog-items">
                  <Link to="/blog" className="blog-navlink01 Content">
                    Blog
                  </Link>
                  <Link to="/discover" className="blog-navlink02 Content">
                    Discover
                  </Link>
                  <Link to="/" className="blog-navlink03 Content">
                    Marketplace
                  </Link>
                </div>
              </div>
              <div className="blog-mobile-search">
                <svg viewBox="0 0 1024 1024" className="blog-icon2">
                  <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </div>
              <div className="blog-mobile-menu">
                <div
                  data-thq="thq-dropdown"
                  className="blog-category list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="blog-dropdown-toggle"
                  >
                    <svg viewBox="0 0 1024 1024" className="blog-icon4">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="blog-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="blog-big-buttons list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="blog-user-persona"
                      >
                        <span className="blog-text material-symbols-outlined">
                          account_circle
                        </span>
                        <div className="blog-container05">
                          <span className="blog-name">Danoshi Hughemoto</span>
                          <span className="blog-radix-address">
                            rdxdhsj...sdg765sg
                          </span>
                        </div>
                      </div>
                      <Link to="/collector-hub">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-collector-profile"
                        >
                          <span className="blog-text001 material-symbols-outlined">
                            category
                          </span>
                          <span className="blog-text002">
                            Collector Profile
                          </span>
                        </div>
                      </Link>
                      <Link to="/creator-studio">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-creator-studio"
                        >
                          <span className="blog-text003 material-symbols-outlined">
                            deblur
                          </span>
                          <span className="blog-text004">Creator Studio</span>
                        </div>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="blog-user-settings list-item"
                    >
                      <Link to="/drops">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-dropdown-toggle1"
                        >
                          <span className="blog-text005 material-symbols-outlined">
                            water_drop
                          </span>
                          <span className="blog-text006">Drops</span>
                        </div>
                      </Link>
                      <Link to="/stats">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-dropdown-toggle2"
                        >
                          <span className="blog-text007 material-symbols-outlined">
                            insights
                          </span>
                          <span className="blog-text008">Stats</span>
                        </div>
                      </Link>
                      <Link to="/discover">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-dropdown-toggle3"
                        >
                          <span className="blog-text009 material-symbols-outlined">
                            grid_view
                          </span>
                          <span className="blog-text010">More</span>
                        </div>
                      </Link>
                      <Link to="/user-profile-settings">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="blog-dropdown-toggle4"
                        >
                          <span className="blog-text011 material-symbols-outlined">
                            manage_accounts
                          </span>
                          <span className="blog-text012">Profile Settings</span>
                        </div>
                      </Link>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="blog-log-out list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="blog-dropdown-toggle5"
                      >
                        <span className="blog-text013 material-symbols-outlined">
                          logout
                        </span>
                        <span className="blog-text014">Log Out</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-contain-all">
          <div className="blog-main-menu">
            <div className="blog-wrapper-content">
              <div className="blog-wrapper-all">
                <div className="blog-container06">
                  <div className="blog-features">
                    <div className="blog-container07">
                      <h2 className="blog-text015">Features</h2>
                      <h2 className="blog-text016">
                        <span>
                          NFTs and Digital Assets for the next gen of Web 3
                          applications
                        </span>
                        <br></br>
                      </h2>
                      <div className="blog-container08">
                        <div className="blog-info-bubble">
                          <span className="blog-text019">
                            UNLIMITED POWER &amp; SCALE
                          </span>
                        </div>
                        <div className="blog-info-bubble01">
                          <span className="blog-text020">
                            FOR MASS ADOPTION
                          </span>
                        </div>
                      </div>
                      <div className="blog-spinner">
                        <img
                          alt="image"
                          src="/tesseract-spinner%20(1).svg"
                          className="blog-image"
                        />
                        <span className="blog-text021">OPEN</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-seasons1">
                    <div className="blog-container09">
                      <h2 className="blog-heading">Seasons</h2>
                      <div className="blog-container10">
                        <div className="blog-info-bubble02">
                          <span className="blog-text022">
                            QUESTS, TESSERACTS, ETERNAL GLORY
                          </span>
                        </div>
                        <div className="blog-info-bubble03">
                          <span className="blog-text023">SEASON #2 - SOON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-start-here">
                    <div className="blog-container11">
                      <h2 className="blog-text024">
                        <span>Beginners Intro</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-tokens">
                    <div className="blog-container12">
                      <h2 className="blog-text027">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-tesseracts">
                    <div className="blog-container13">
                      <h2 className="blog-text028">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-launchpad">
                    <div className="blog-container14">
                      <h2 className="blog-text029">Launchpad</h2>
                      <div className="blog-info-bubble04">
                        <span className="blog-text030">
                          WHERE CREATORS GET BOOSTED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-pro-version">
                    <div className="blog-container15">
                      <h2 className="blog-text031">Foton PRO</h2>
                      <div className="blog-container16">
                        <div className="blog-info-bubble05">
                          <span className="blog-text032">
                            CREATE LIKE A MASTER, TRADE LIKE A PRO
                          </span>
                        </div>
                        <div className="blog-info-bubble06">
                          <span className="blog-text033">COMING THOON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-developers-sdk">
                    <div className="blog-container17">
                      <h2 className="blog-text034">Developers SDK</h2>
                      <div className="blog-info-bubble07">
                        <span className="blog-text035">POST BABYLON</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-help-center">
                    <div className="blog-container18">
                      <h2 className="blog-text036">
                        <span>Help Center</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-jobs-portal">
                    <div className="blog-container19">
                      <h2 className="blog-text039">
                        <span>Jobs Portal</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-announcements">
                    <div className="blog-container20">
                      <h2 className="blog-text042">Announcements</h2>
                      <div className="blog-info-bubble08">
                        <span className="blog-text043">
                          NEWS, UPDATES &amp; OTHER GOODIES
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-press-desk">
                    <div className="blog-container21">
                      <h2 className="blog-text044">
                        <span>Press Info Desk</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-investor-lounge">
                    <div className="blog-container22">
                      <h2 className="blog-text047">Investors Lounge</h2>
                    </div>
                  </div>
                  <div className="blog-community">
                    <div className="blog-container23">
                      <h2 className="blog-text048">Community</h2>
                      <div className="blog-container24">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link"
                        >
                          <div className="blog-info-bubble09">
                            <span className="blog-text049">Twitter</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link01"
                        >
                          <div className="blog-info-bubble10">
                            <span className="blog-text050">Telegram</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link02"
                        >
                          <div className="blog-info-bubble11">
                            <span className="blog-text051">Discord</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-ecosystem">
                    <div className="blog-container25">
                      <h2 className="blog-text052">Ecosystem Projects</h2>
                      <div className="blog-container26">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link03"
                        >
                          <div className="blog-info-bubble12">
                            <span className="blog-text053">Stream</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link04"
                        >
                          <div className="blog-info-bubble13">
                            <span className="blog-text054">RDX.DOMAINS</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link05"
                        >
                          <div className="blog-info-bubble14">
                            <span className="blog-text055">ITS</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-radix-dlt">
                    <div className="blog-container27">
                      <h2 className="blog-text056">
                        <span>Runs on RADIX</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-about">
                    <div className="blog-container28">
                      <h2 className="blog-text059">
                        <span>About</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-container29">
                  <div className="blog-features1">
                    <div className="blog-container30">
                      <h2 className="blog-text062">Features</h2>
                      <h2 className="blog-text063">
                        <span>
                          NFTs and Digital Assets for the next gen of Web 3
                          applications
                        </span>
                        <br></br>
                      </h2>
                      <div className="blog-info-bubble15">
                        <span className="blog-text066">
                          UNLIMITED POWER &amp; SCALE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-seasons11">
                    <div className="blog-container31">
                      <h2 className="blog-heading1">Seasons</h2>
                      <div className="blog-container32">
                        <div className="blog-info-bubble16">
                          <span className="blog-text067">
                            QUESTS, TESSERACTS, ETERNAL GLORY
                          </span>
                        </div>
                        <div className="blog-info-bubble17">
                          <span className="blog-text068">SEASON #2 - SOON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-pro-version1">
                    <div className="blog-container33">
                      <h2 className="blog-text069">Foton PRO</h2>
                      <div className="blog-container34">
                        <div className="blog-info-bubble18">
                          <span className="blog-text070">
                            CREATE LIKE A MASTER, TRADE LIKE A PRO
                          </span>
                        </div>
                        <div className="blog-info-bubble19">
                          <span className="blog-text071">COMING THOON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-launchpad1">
                    <div className="blog-container35">
                      <h2 className="blog-text072">Launchpad</h2>
                      <div className="blog-info-bubble20">
                        <span className="blog-text073">
                          WHERE CREATORS GET BOOSTED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-start-here1">
                    <div className="blog-container36">
                      <h2 className="blog-text074">
                        <span>Beginners Intro</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-tokens1">
                    <div className="blog-container37">
                      <h2 className="blog-text077">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-tesseracts1">
                    <div className="blog-container38">
                      <h2 className="blog-text078">Tesseract</h2>
                    </div>
                  </div>
                  <div className="blog-help-center1">
                    <div className="blog-container39">
                      <h2 className="blog-text079">
                        <span>Help Center</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-announcements1">
                    <div className="blog-container40">
                      <h2 className="blog-text082">Announcements</h2>
                      <div className="blog-info-bubble21">
                        <span className="blog-text083">
                          NEWS, UPDATES &amp; OTHER GOODIES
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-jobs-portal1">
                    <div className="blog-container41">
                      <h2 className="blog-text084">
                        <span>Jobs Portal</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-developers-sdk1">
                    <div className="blog-container42">
                      <h2 className="blog-text087">Developers SDK</h2>
                      <div className="blog-info-bubble22">
                        <span className="blog-text088">POST BABYLON</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-press-desk1">
                    <div className="blog-container43">
                      <h2 className="blog-text089">
                        <span>Press Info Desk</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-investor-lounge1">
                    <div className="blog-container44">
                      <h2 className="blog-text092">Investors Lounge</h2>
                    </div>
                  </div>
                  <div className="blog-community1">
                    <div className="blog-container45">
                      <h2 className="blog-text093">Community</h2>
                      <div className="blog-container46">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link06"
                        >
                          <div className="blog-info-bubble23">
                            <span className="blog-text094">Twitter</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link07"
                        >
                          <div className="blog-info-bubble24">
                            <span className="blog-text095">Telegram</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link08"
                        >
                          <div className="blog-info-bubble25">
                            <span className="blog-text096">Discord</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-ecosystem1">
                    <div className="blog-container47">
                      <h2 className="blog-text097">Ecosystem dApps</h2>
                      <div className="blog-container48">
                        <a
                          href="https://twitter.com/FotonSDK"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link09"
                        >
                          <div className="blog-info-bubble26">
                            <span className="blog-text098">Stream</span>
                          </div>
                        </a>
                        <a
                          href="https://t.me/FotonMarketplace"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link10"
                        >
                          <div className="blog-info-bubble27">
                            <span className="blog-text099">RDX.DOMAINS</span>
                          </div>
                        </a>
                        <a
                          href="https://discord.gg/Wbv55dEDFE"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="blog-link11"
                        >
                          <div className="blog-info-bubble28">
                            <span className="blog-text100">ITS</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-radix-dlt1">
                    <div className="blog-container49">
                      <h2 className="blog-text101">
                        <span>Runs on RADIX</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div className="blog-about1">
                    <div className="blog-container50">
                      <h2 className="blog-text104">
                        <span>About</span>
                        <br></br>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="blog-side-nav">
                  <div className="blog-side-anchor-menu">
                    <div className="blog-container51">
                      <h2 className="blog-text107">Read Article</h2>
                      <Link
                        to="/discover"
                        className="blog-navlink10 Content16SemiBold"
                      >
                        &lt; back to Discover
                      </Link>
                    </div>
                    <div className="blog-container52">
                      <span className="blog-text108">All News</span>
                      <span className="blog-text109">
                        <span className="blog-text110">Announcements</span>
                        <br></br>
                      </span>
                      <span className="blog-text112">Insights</span>
                      <span className="blog-text113">Events</span>
                      <span className="blog-text114">Seasons</span>
                      <span className="blog-text115">Foton Ecosystem</span>
                      <span className="blog-text116">E-Commerce</span>
                      <span className="blog-text117">Gaming</span>
                    </div>
                  </div>
                </div>
                <div className="blog-page-content">
                  <div className="blog-header">
                    <h1 className="blog-text118">News and Insights</h1>
                    <h2 className="blog-text119">
                      Stay up to date with the announcements from the Foton team
                      and key Insights about tokenised Digital Assets and the
                      Radix ecosystem at large
                    </h2>
                  </div>
                  <div className="blog-features-sections">
                    <div className="blog-header-tablet">
                      <div className="blog-container53">
                        <h3 className="blog-text120">
                          <span className="blog-text121">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text123">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-container54">
                        <div className="blog-container55">
                          <h3 className="blog-text124">News &amp; Insights</h3>
                          <Link to="/discover" className="blog-navlink11">
                            &lt; back to Discover
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog-section">
                      <div className="blog-container56">
                        <h3 className="blog-text125">
                          <span className="blog-text126">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text128">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-left-column">
                        <Link to="/blog-post" className="blog-navlink12">
                          <div className="blog-image-container"></div>
                        </Link>
                      </div>
                      <div className="blog-container57">
                        <div className="blog-container58">
                          <Link to="/blog-post" className="blog-navlink13">
                            <h3 className="blog-text129">
                              Foton Roadmap and Vision
                            </h3>
                          </Link>
                          <div className="blog-container59">
                            <span className="blog-text130">12 July 2023</span>
                            <span className="blog-text131">by Vlad B</span>
                          </div>
                        </div>
                        <div className="blog-container60">
                          <button type="button" className="blog-tag">
                            Announcements
                          </button>
                          <button type="button" className="blog-tag1">
                            Insights
                          </button>
                          <button type="button" className="blog-tag2">
                            E-commerce
                          </button>
                          <button type="button" className="blog-tag3">
                            Gaming
                          </button>
                          <button type="button" className="blog-tag4">
                            Seasons
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="blog-section1">
                      <div className="blog-container61">
                        <h3 className="blog-text132">
                          <span className="blog-text133">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text135">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-left-column1">
                        <div className="blog-image-container1"></div>
                      </div>
                      <div className="blog-container62">
                        <div className="blog-container63">
                          <h3 className="blog-text136">
                            The State of Digital Assets in the Radix Ecosystem
                          </h3>
                          <div className="blog-container64">
                            <span className="blog-text137">12 July 2023</span>
                            <span className="blog-text138">by Vlad B</span>
                          </div>
                        </div>
                        <div className="blog-container65">
                          <button type="button" className="blog-button01">
                            Announcements
                          </button>
                          <button type="button" className="blog-button02">
                            Insights
                          </button>
                          <button type="button" className="blog-button03">
                            E-commerce
                          </button>
                          <button type="button" className="blog-button04">
                            Gaming
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="blog-section2">
                      <div className="blog-container66">
                        <h3 className="blog-text139">
                          <span className="blog-text140">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text142">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-left-column2">
                        <div className="blog-image-container2"></div>
                      </div>
                      <div className="blog-container67">
                        <div className="blog-container68">
                          <h3 className="blog-text143">Roadmap and Vision</h3>
                          <div className="blog-container69">
                            <span className="blog-text144">12 July 2023</span>
                            <span className="blog-text145">by Vlad B</span>
                          </div>
                        </div>
                        <div className="blog-container70">
                          <button type="button" className="blog-button05">
                            Announcements
                          </button>
                          <button type="button" className="blog-button06">
                            Insights
                          </button>
                          <button type="button" className="blog-button07">
                            E-commerce
                          </button>
                          <button type="button" className="blog-button08">
                            Gaming
                          </button>
                          <button type="button" className="blog-button09">
                            Seasons
                          </button>
                          <button type="button" className="blog-button10">
                            Ecosystem
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="blog-section3">
                      <div className="blog-container71">
                        <h3 className="blog-text146">
                          <span className="blog-text147">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text149">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-left-column3">
                        <div className="blog-image-container3"></div>
                      </div>
                      <div className="blog-container72">
                        <div className="blog-container73">
                          <h3 className="blog-text150">
                            Foton Roadmap and Vision
                          </h3>
                          <div className="blog-container74">
                            <span className="blog-text151">12 July 2023</span>
                            <span className="blog-text152">by Vlad B</span>
                          </div>
                        </div>
                        <div className="blog-container75">
                          <button type="button" className="blog-button11">
                            Announcements
                          </button>
                          <button type="button" className="blog-button12">
                            Insights
                          </button>
                          <button type="button" className="blog-button13">
                            E-commerce
                          </button>
                          <button type="button" className="blog-button14">
                            Gaming
                          </button>
                          <button type="button" className="blog-button15">
                            Seasons
                          </button>
                          <button type="button" className="blog-button16">
                            Ecosystem
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="blog-section4">
                      <div className="blog-container76">
                        <h3 className="blog-text153">
                          <span className="blog-text154">Mint Easily</span>
                          <span>
                            {' '}
                            entire Collections without coding knowledge
                          </span>
                        </h3>
                        <span className="blog-text156">
                          Big collections between 500 and 10000 items with
                          unique attributes work the best. Such collections can
                          be Illustrated Avatars or Generative art.
                        </span>
                      </div>
                      <div className="blog-left-column4">
                        <div className="blog-image-container4"></div>
                      </div>
                      <div className="blog-container77">
                        <div className="blog-container78">
                          <h3 className="blog-text157">
                            Foton Roadmap and Vision
                          </h3>
                          <div className="blog-container79">
                            <span className="blog-text158">12 July 2023</span>
                            <span className="blog-text159">by Vlad B</span>
                          </div>
                        </div>
                        <div className="blog-container80">
                          <button type="button" className="blog-button17">
                            Announcements
                          </button>
                          <button type="button" className="blog-button18">
                            Insights
                          </button>
                          <button type="button" className="blog-button19">
                            E-commerce
                          </button>
                          <button type="button" className="blog-button20">
                            Gaming
                          </button>
                          <button type="button" className="blog-button21">
                            Seasons
                          </button>
                          <button type="button" className="blog-button22">
                            Ecosystem
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-pinned-news">
                  <div className="blog-slot">
                    <div className="blog-container81">
                      <h2 className="blog-heading2">Pinned by team</h2>
                      <img
                        alt="image"
                        src="/push_pin1.svg"
                        className="blog-image1"
                      />
                    </div>
                  </div>
                  <div className="blog-slot1">
                    <div className="blog-container82">
                      <h2 className="blog-heading3">
                        Foton NFT Minting starts on Radix Babylon
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h2>
                      <div className="blog-container83">
                        <div className="blog-info-bubble29">
                          <span className="blog-text160">
                            Early October 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer rootClassName="footer-root-class-name1"></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
