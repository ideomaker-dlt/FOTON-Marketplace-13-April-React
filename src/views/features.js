import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './features.css'

const Features = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>
          Features - FOTON Marketplace for NFTs and Digital Collectibles on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Features - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name26">
        <div className="features-wrapper-all">
          <div className="features-container01">
            <div className="features-features">
              <div className="features-container02">
                <h2 className="features-text">Features</h2>
                <h2 className="features-text001">
                  <span>
                    NFTs and Digital Assets for the next gen of Web 3
                    applications
                  </span>
                  <br></br>
                </h2>
                <div className="features-container03">
                  <div className="features-info-bubble">
                    <span className="features-text004">
                      UNLIMITED POWER &amp; SCALE
                    </span>
                  </div>
                  <div className="features-info-bubble01">
                    <span className="features-text005">FOR MASS ADOPTION</span>
                  </div>
                </div>
                <div className="features-spinner">
                  <img
                    alt="image"
                    src="/tesseract-spinner%20(1).svg"
                    className="features-image"
                  />
                  <span className="features-text006">OPEN</span>
                </div>
              </div>
            </div>
            <div className="features-seasons1">
              <div className="features-container04">
                <h2 className="features-heading">Seasons</h2>
                <div className="features-container05">
                  <div className="features-info-bubble02">
                    <span className="features-text007">
                      QUESTS, TESSERACTS, ETERNAL GLORY
                    </span>
                  </div>
                  <div className="features-info-bubble03">
                    <span className="features-text008">SEASON #2 - SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-start-here">
              <div className="features-container06">
                <h2 className="features-text009">
                  <span>Beginners Intro</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-tokens">
              <div className="features-container07">
                <h2 className="features-text012">Tesseract</h2>
              </div>
            </div>
            <div className="features-tesseracts">
              <div className="features-container08">
                <h2 className="features-text013">Tesseract</h2>
              </div>
            </div>
            <div className="features-launchpad">
              <div className="features-container09">
                <h2 className="features-text014">Launchpad</h2>
                <div className="features-info-bubble04">
                  <span className="features-text015">
                    WHERE CREATORS GET BOOSTED
                  </span>
                </div>
              </div>
            </div>
            <div className="features-pro-version">
              <div className="features-container10">
                <h2 className="features-text016">Foton PRO</h2>
                <div className="features-container11">
                  <div className="features-info-bubble05">
                    <span className="features-text017">
                      CREATE LIKE A MASTER, TRADE LIKE A PRO
                    </span>
                  </div>
                  <div className="features-info-bubble06">
                    <span className="features-text018">COMING THOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-developers-sdk">
              <div className="features-container12">
                <h2 className="features-text019">Developers SDK</h2>
                <div className="features-info-bubble07">
                  <span className="features-text020">POST BABYLON</span>
                </div>
              </div>
            </div>
            <div className="features-help-center">
              <div className="features-container13">
                <h2 className="features-text021">
                  <span>Help Center</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-jobs-portal">
              <div className="features-container14">
                <h2 className="features-text024">
                  <span>Jobs Portal</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-announcements">
              <div className="features-container15">
                <h2 className="features-text027">Announcements</h2>
                <div className="features-info-bubble08">
                  <span className="features-text028">
                    NEWS, UPDATES &amp; OTHER GOODIES
                  </span>
                </div>
              </div>
            </div>
            <div className="features-press-desk">
              <div className="features-container16">
                <h2 className="features-text029">
                  <span>Press Info Desk</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-investor-lounge">
              <div className="features-container17">
                <h2 className="features-text032">Investors Lounge</h2>
              </div>
            </div>
            <div className="features-community">
              <div className="features-container18">
                <h2 className="features-text033">Community</h2>
                <div className="features-container19">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link"
                  >
                    <div className="features-info-bubble09">
                      <span className="features-text034">Twitter</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link01"
                  >
                    <div className="features-info-bubble10">
                      <span className="features-text035">Telegram</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link02"
                  >
                    <div className="features-info-bubble11">
                      <span className="features-text036">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="features-ecosystem">
              <div className="features-container20">
                <h2 className="features-text037">Ecosystem Projects</h2>
                <div className="features-container21">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link03"
                  >
                    <div className="features-info-bubble12">
                      <span className="features-text038">Stream</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link04"
                  >
                    <div className="features-info-bubble13">
                      <span className="features-text039">RDX.DOMAINS</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link05"
                  >
                    <div className="features-info-bubble14">
                      <span className="features-text040">ITS</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="features-radix-dlt">
              <div className="features-container22">
                <h2 className="features-text041">
                  <span>Runs on RADIX</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-about">
              <div className="features-container23">
                <h2 className="features-text044">
                  <span>About</span>
                  <br></br>
                </h2>
              </div>
            </div>
          </div>
          <div className="features-container24">
            <div className="features-features1">
              <div className="features-container25">
                <h2 className="features-text047">Features</h2>
                <h2 className="features-text048">
                  <span>
                    NFTs and Digital Assets for the next gen of Web 3
                    applications
                  </span>
                  <br></br>
                </h2>
                <div className="features-info-bubble15">
                  <span className="features-text051">
                    UNLIMITED POWER &amp; SCALE
                  </span>
                </div>
              </div>
            </div>
            <div className="features-seasons11">
              <div className="features-container26">
                <h2 className="features-heading1">Seasons</h2>
                <div className="features-container27">
                  <div className="features-info-bubble16">
                    <span className="features-text052">
                      QUESTS, TESSERACTS, ETERNAL GLORY
                    </span>
                  </div>
                  <div className="features-info-bubble17">
                    <span className="features-text053">SEASON #2 - SOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-pro-version1">
              <div className="features-container28">
                <h2 className="features-text054">Foton PRO</h2>
                <div className="features-container29">
                  <div className="features-info-bubble18">
                    <span className="features-text055">
                      CREATE LIKE A MASTER, TRADE LIKE A PRO
                    </span>
                  </div>
                  <div className="features-info-bubble19">
                    <span className="features-text056">COMING THOON</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-launchpad1">
              <div className="features-container30">
                <h2 className="features-text057">Launchpad</h2>
                <div className="features-info-bubble20">
                  <span className="features-text058">
                    WHERE CREATORS GET BOOSTED
                  </span>
                </div>
              </div>
            </div>
            <div className="features-start-here1">
              <div className="features-container31">
                <h2 className="features-text059">
                  <span>Beginners Intro</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-tokens1">
              <div className="features-container32">
                <h2 className="features-text062">Tesseract</h2>
              </div>
            </div>
            <div className="features-tesseracts1">
              <div className="features-container33">
                <h2 className="features-text063">Tesseract</h2>
              </div>
            </div>
            <div className="features-help-center1">
              <div className="features-container34">
                <h2 className="features-text064">
                  <span>Help Center</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-announcements1">
              <div className="features-container35">
                <h2 className="features-text067">Announcements</h2>
                <div className="features-info-bubble21">
                  <span className="features-text068">
                    NEWS, UPDATES &amp; OTHER GOODIES
                  </span>
                </div>
              </div>
            </div>
            <div className="features-jobs-portal1">
              <div className="features-container36">
                <h2 className="features-text069">
                  <span>Jobs Portal</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-developers-sdk1">
              <div className="features-container37">
                <h2 className="features-text072">Developers SDK</h2>
                <div className="features-info-bubble22">
                  <span className="features-text073">POST BABYLON</span>
                </div>
              </div>
            </div>
            <div className="features-press-desk1">
              <div className="features-container38">
                <h2 className="features-text074">
                  <span>Press Info Desk</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-investor-lounge1">
              <div className="features-container39">
                <h2 className="features-text077">Investors Lounge</h2>
              </div>
            </div>
            <div className="features-community1">
              <div className="features-container40">
                <h2 className="features-text078">Community</h2>
                <div className="features-container41">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link06"
                  >
                    <div className="features-info-bubble23">
                      <span className="features-text079">Twitter</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link07"
                  >
                    <div className="features-info-bubble24">
                      <span className="features-text080">Telegram</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link08"
                  >
                    <div className="features-info-bubble25">
                      <span className="features-text081">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="features-ecosystem1">
              <div className="features-container42">
                <h2 className="features-text082">Ecosystem dApps</h2>
                <div className="features-container43">
                  <a
                    href="https://twitter.com/FotonSDK"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link09"
                  >
                    <div className="features-info-bubble26">
                      <span className="features-text083">Stream</span>
                    </div>
                  </a>
                  <a
                    href="https://t.me/FotonMarketplace"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link10"
                  >
                    <div className="features-info-bubble27">
                      <span className="features-text084">RDX.DOMAINS</span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/Wbv55dEDFE"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="features-link11"
                  >
                    <div className="features-info-bubble28">
                      <span className="features-text085">ITS</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="features-radix-dlt1">
              <div className="features-container44">
                <h2 className="features-text086">
                  <span>Runs on RADIX</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <div className="features-about1">
              <div className="features-container45">
                <h2 className="features-text089">
                  <span>About</span>
                  <br></br>
                </h2>
              </div>
            </div>
          </div>
          <div className="features-container46">
            <div className="features-side-anchor-menu">
              <div className="features-container47">
                <span className="features-text092">Mint NFTs Easily</span>
                <span className="features-text093">Defined Use Cases</span>
                <span className="features-text094">Highly Scalable</span>
                <span className="features-text095">Build a Community</span>
                <span className="features-text096">Gaming Optimised</span>
                <span className="features-text097">Gated Content</span>
              </div>
              <div className="features-header-menu">
                <h2 className="features-text098">Read Article</h2>
                <Link
                  to="/discover"
                  className="features-navlink Content16SemiBold"
                >
                  &lt; back to Discover
                </Link>
              </div>
            </div>
            <div className="features-side-anchor-menu1">
              <div className="features-container48">
                <span className="features-text099">Mint NFTs Easily</span>
                <span className="features-text100">Defined Use Cases</span>
                <span className="features-text101">Highly Scalable</span>
                <span className="features-text102">Build a Community</span>
                <span className="features-text103">Gaming Optimised</span>
                <span className="features-text104">Gated Content</span>
              </div>
            </div>
          </div>
          <div className="features-page-content">
            <div className="features-header">
              <h1 className="features-text105">
                Tokenised Creativity starts Here
              </h1>
              <h2 className="features-text106">
                <span>
                  Create collectible Digital Assets (NFTs) with Advanced
                  Behaviour and Clear Use Cases. 
                </span>
                <br></br>
                <span>It&apos;s up to you how deep the Rabbit Hole goes!</span>
              </h2>
              <div className="features-container49">
                <button type="button" className="features-button">
                  Create Now
                </button>
              </div>
            </div>
            <div className="features-features-sections">
              <div className="features-section">
                <div className="features-container50">
                  <h3 className="features-text110">
                    <span className="features-text111">Mint Easily</span>
                    <span> entire Collections without coding knowledge</span>
                  </h3>
                  <span className="features-text113">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container51">
                  <div className="features-container52"></div>
                </div>
              </div>
              <div className="features-section1">
                <div className="features-container53">
                  <h3 className="features-text114">
                    <span className="features-text115">
                      Pre-Defined NFT
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features-text116">Templates</span>
                    <span className="features-text117">
                      {' '}
                      for Clear Use Cases
                    </span>
                    <span className="features-text118"> and Applications</span>
                  </h3>
                  <span className="features-text119">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container54">
                  <div className="features-container55"></div>
                </div>
              </div>
              <div className="features-section2">
                <div className="features-container56">
                  <h3 className="features-text120">
                    <span>
                      Reach fast Huge Audiences, with very
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features-text122">
                      Low Costs and No Bottlenecks
                    </span>
                  </h3>
                  <span className="features-text123">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container57">
                  <div className="features-container58"></div>
                </div>
              </div>
              <div className="features-section3">
                <div className="features-container59">
                  <h3 className="features-text124">
                    <span>
                      Reach fast Huge Audiences, with very
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features-text126">
                      Low Costs and Without Bottlenecks
                    </span>
                  </h3>
                  <span className="features-text127">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container60">
                  <div className="features-container61"></div>
                </div>
              </div>
              <div className="features-section4">
                <div className="features-container62">
                  <h3 className="features-text128">
                    <span>
                      Reach fast Huge Audiences, with very
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features-text130">
                      Low Costs and Without Bottlenecks
                    </span>
                  </h3>
                  <span className="features-text131">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container63">
                  <div className="features-container64"></div>
                </div>
              </div>
              <div className="features-section5">
                <div className="features-container65">
                  <h3 className="features-text132">
                    <span>
                      Reach fast Huge Audiences, with very
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="features-text134">
                      Low Costs and Without Bottlenecks
                    </span>
                  </h3>
                  <span className="features-text135">
                    Big collections between 500 and 10000 items with unique
                    attributes work the best. Such collections can be
                    Illustrated Avatars or Generative art.
                  </span>
                </div>
                <div className="features-container66">
                  <div className="features-container67"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Features
