import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import AppComponent from '../components/component'
import './drops.css'

const Drops = (props) => {
  return (
    <div className="drops-container">
      <Helmet>
        <title>
          Drops - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on
          Radix DLT
        </title>
        <meta
          name="description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:title"
          content="Drops - FOTON - Web3's Digital Assets Hub and NFTs Marketplace on Radix DLT"
        />
        <meta
          property="og:description"
          content="Foton solves the pain of Creators to launch NFTs easily and offers a 1 Stop Shop for their Communities to Trade, Engage and Grow without leaving the platform."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/960fd433-f55d-424c-a4b7-18ebfa3fe35e/73f897ab-0871-4173-9275-412ff9f275f2?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name17">
        <div className="drops-tabs-row">
          <span className="drops-text">Drops</span>
          <span className="drops-text01">
            <span className="drops-text02">●</span>
            <span> New Collections to Mint</span>
          </span>
        </div>
        <div className="drops-container01"></div>
        <div className="drops-header">
          <div className="drops-container02">
            <div className="drops-container03 article-container">
              <div className="drops-container-pop article-img-holder"></div>
              <div className="drops-gray-overlay article-title-link">
                <div className="drops-container04">
                  <div className="drops-text-header">
                    <h1 className="drops-text04">Featured Drop</h1>
                    <h3 className="drops-text05">By Sharp Collective</h3>
                    <div className="drops-container05">
                      <div className="drops-container06">
                        <div className="drops-container07">
                          <div className="drops-dot"></div>
                          <span className="drops-text06">Time to DROP</span>
                        </div>
                        <div className="drops-container08">
                          <span className="drops-text07">coming soon</span>
                        </div>
                      </div>
                      <div className="drops-container09">
                        <span className="drops-text08">view drop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="drops-mask-overlay"></div>
          </div>
          <div className="drops-container10">
            <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
            <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
          </div>
        </div>
        <div className="drops-tabs-row1">
          <span className="drops-text09">Upcoming</span>
          <span className="drops-text10">Active</span>
          <span className="drops-text11">Past</span>
        </div>
        <div className="drops-drops-container">
          <div className="drops-wrapper-grid">
            <Link to="/collection-drop-page">
              <div className="drops-item1">
                <div className="drops-image-header"></div>
                <div className="drops-text-box">
                  <div className="drops-container11">
                    <div className="drops-container12">
                      <span className="drops-text12">Collection 1</span>
                    </div>
                    <div className="drops-minting-progress">
                      <div className="drops-bar-bg">
                        <div className="drops-progress">
                          <div className="drops-green-bar"></div>
                        </div>
                        <span className="drops-text13">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container13">
                    <div className="drops-floor">
                      <span className="drops-text14 SmallestLabels">price</span>
                      <span className="drops-text15 Content16SemiBold">
                        TBA
                      </span>
                    </div>
                    <div className="drops-volume24">
                      <span className="drops-text16 SmallestLabels">
                        STARTS in
                      </span>
                      <span className="drops-text17 Content16SemiBold">
                        1 day
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item101">
                <div className="drops-image-header01"></div>
                <div className="drops-text-box01">
                  <div className="drops-container14">
                    <div className="drops-container15">
                      <span className="drops-text18">Collection 2</span>
                    </div>
                    <div className="drops-minting-progress01">
                      <div className="drops-bar-bg01">
                        <div className="drops-progress01">
                          <div className="drops-green-bar01"></div>
                        </div>
                        <span className="drops-text-percentage">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container16">
                    <div className="drops-floor01">
                      <span className="drops-text19 SmallestLabels">price</span>
                      <span className="drops-text20 Content16SemiBold">
                        150 XRD
                      </span>
                    </div>
                    <div className="drops-volume2401">
                      <span className="drops-text21 SmallestLabels">
                        ends in
                      </span>
                      <span className="drops-text22 Content16SemiBold">
                        2 hrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item102">
                <div className="drops-image-header02"></div>
                <div className="drops-text-box02">
                  <div className="drops-container17">
                    <div className="drops-container18">
                      <span className="drops-text23">Collection 3</span>
                    </div>
                    <div className="drops-minting-progress02">
                      <div className="drops-bar-bg02">
                        <div className="drops-progress02">
                          <div className="drops-green-bar02"></div>
                        </div>
                        <span className="drops-text24">12%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container19">
                    <div className="drops-floor02">
                      <span className="drops-text25 SmallestLabels">price</span>
                      <span className="drops-text26 Content16SemiBold">
                        120 XRD
                      </span>
                    </div>
                    <div className="drops-volume2402">
                      <span className="drops-text27 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text28 Content16SemiBold">
                        47 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item103">
                <div className="drops-image-header03"></div>
                <div className="drops-text-box03">
                  <div className="drops-container20">
                    <div className="drops-container21">
                      <span className="drops-text29">Collection 4</span>
                    </div>
                    <div className="drops-minting-progress03">
                      <div className="drops-bar-bg03">
                        <div className="drops-progress03">
                          <div className="drops-green-bar03"></div>
                        </div>
                        <span className="drops-text30">100%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container22">
                    <div className="drops-floor03">
                      <span className="drops-text31 SmallestLabels">price</span>
                      <span className="drops-text32 Content16SemiBold">
                        130 XRD
                      </span>
                    </div>
                    <div className="drops-volume2403">
                      <span className="drops-text33 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text34 Content16SemiBold">
                        none
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item104">
                <div className="drops-image-header04"></div>
                <div className="drops-text-box04">
                  <div className="drops-container23">
                    <div className="drops-container24">
                      <span className="drops-text35">Collection 5</span>
                    </div>
                    <div className="drops-minting-progress04">
                      <div className="drops-bar-bg04">
                        <div className="drops-progress04">
                          <div className="drops-green-bar04"></div>
                        </div>
                        <span className="drops-text36">43%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container25">
                    <div className="drops-floor04">
                      <span className="drops-text37 SmallestLabels">price</span>
                      <span className="drops-text38 Content16SemiBold">
                        120XRD
                      </span>
                    </div>
                    <div className="drops-volume2404">
                      <span className="drops-text39 SmallestLabels">
                        Status
                      </span>
                      <span className="drops-text40 Content16SemiBold">
                        ENDED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item105">
                <div className="drops-image-header05"></div>
                <div className="drops-text-box05">
                  <div className="drops-container26">
                    <div className="drops-container27">
                      <span className="drops-text41">Collection 1</span>
                    </div>
                    <div className="drops-minting-progress05">
                      <div className="drops-bar-bg05">
                        <div className="drops-progress05">
                          <div className="drops-green-bar05"></div>
                        </div>
                        <span className="drops-text42">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container28">
                    <div className="drops-floor05">
                      <span className="drops-text43 SmallestLabels">price</span>
                      <span className="drops-text44 Content16SemiBold">
                        TBA
                      </span>
                    </div>
                    <div className="drops-volume2405">
                      <span className="drops-text45 SmallestLabels">
                        STARTS in
                      </span>
                      <span className="drops-text46 Content16SemiBold">
                        1 day
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item106">
                <div className="drops-image-header06"></div>
                <div className="drops-text-box06">
                  <div className="drops-container29">
                    <div className="drops-container30">
                      <span className="drops-text47">Collection 2</span>
                    </div>
                    <div className="drops-minting-progress06">
                      <div className="drops-bar-bg06">
                        <div className="drops-progress06">
                          <div className="drops-green-bar06"></div>
                        </div>
                        <span className="drops-text-percentage1">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container31">
                    <div className="drops-floor06">
                      <span className="drops-text48 SmallestLabels">price</span>
                      <span className="drops-text49 Content16SemiBold">
                        150 XRD
                      </span>
                    </div>
                    <div className="drops-volume2406">
                      <span className="drops-text50 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text51 Content16SemiBold">
                        2 hrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item107">
                <div className="drops-image-header07"></div>
                <div className="drops-text-box07">
                  <div className="drops-container32">
                    <div className="drops-container33">
                      <span className="drops-text52">Collection 3</span>
                    </div>
                    <div className="drops-minting-progress07">
                      <div className="drops-bar-bg07">
                        <div className="drops-progress07">
                          <div className="drops-green-bar07"></div>
                        </div>
                        <span className="drops-text53">12%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container34">
                    <div className="drops-floor07">
                      <span className="drops-text54 SmallestLabels">price</span>
                      <span className="drops-text55 Content16SemiBold">
                        120 XRD
                      </span>
                    </div>
                    <div className="drops-volume2407">
                      <span className="drops-text56 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text57 Content16SemiBold">
                        47 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item108">
                <div className="drops-image-header08"></div>
                <div className="drops-text-box08">
                  <div className="drops-container35">
                    <div className="drops-container36">
                      <span className="drops-text58">Collection 4</span>
                    </div>
                    <div className="drops-minting-progress08">
                      <div className="drops-bar-bg08">
                        <div className="drops-progress08">
                          <div className="drops-green-bar08"></div>
                        </div>
                        <span className="drops-text59">100%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container37">
                    <div className="drops-floor08">
                      <span className="drops-text60 SmallestLabels">price</span>
                      <span className="drops-text61 Content16SemiBold">
                        130 XRD
                      </span>
                    </div>
                    <div className="drops-volume2408">
                      <span className="drops-text62 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text63 Content16SemiBold">
                        none
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item109">
                <div className="drops-image-header09"></div>
                <div className="drops-text-box09">
                  <div className="drops-container38">
                    <div className="drops-container39">
                      <span className="drops-text64">Collection 5</span>
                    </div>
                    <div className="drops-minting-progress09">
                      <div className="drops-bar-bg09">
                        <div className="drops-progress09">
                          <div className="drops-green-bar09"></div>
                        </div>
                        <span className="drops-text65">43%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container40">
                    <div className="drops-floor09">
                      <span className="drops-text66 SmallestLabels">price</span>
                      <span className="drops-text67 Content16SemiBold">
                        120XRD
                      </span>
                    </div>
                    <div className="drops-volume2409">
                      <span className="drops-text68 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text69 Content16SemiBold">
                        none
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item110">
                <div className="drops-image-header10"></div>
                <div className="drops-text-box10">
                  <div className="drops-container41">
                    <div className="drops-container42">
                      <span className="drops-text70">Collection 1</span>
                    </div>
                    <div className="drops-minting-progress10">
                      <div className="drops-bar-bg10">
                        <div className="drops-progress10">
                          <div className="drops-green-bar10"></div>
                        </div>
                        <span className="drops-text71">0%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container43">
                    <div className="drops-floor10">
                      <span className="drops-text72 SmallestLabels">price</span>
                      <span className="drops-text73 Content16SemiBold">
                        TBA
                      </span>
                    </div>
                    <div className="drops-volume2410">
                      <span className="drops-text74 SmallestLabels">
                        STARTS in
                      </span>
                      <span className="drops-text75 Content16SemiBold">
                        1 day
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item111">
                <div className="drops-image-header11"></div>
                <div className="drops-text-box11">
                  <div className="drops-container44">
                    <div className="drops-container45">
                      <span className="drops-text76">Collection 2</span>
                    </div>
                    <div className="drops-minting-progress11">
                      <div className="drops-bar-bg11">
                        <div className="drops-progress11">
                          <div className="drops-green-bar11"></div>
                        </div>
                        <span className="drops-text-percentage2">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container46">
                    <div className="drops-floor11">
                      <span className="drops-text77 SmallestLabels">price</span>
                      <span className="drops-text78 Content16SemiBold">
                        150 XRD
                      </span>
                    </div>
                    <div className="drops-volume2411">
                      <span className="drops-text79 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text80 Content16SemiBold">
                        2 hrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item112">
                <div className="drops-image-header12"></div>
                <div className="drops-text-box12">
                  <div className="drops-container47">
                    <div className="drops-container48">
                      <span className="drops-text81">Collection 3</span>
                    </div>
                    <div className="drops-minting-progress12">
                      <div className="drops-bar-bg12">
                        <div className="drops-progress12">
                          <div className="drops-green-bar12"></div>
                        </div>
                        <span className="drops-text82">12%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container49">
                    <div className="drops-floor12">
                      <span className="drops-text83 SmallestLabels">price</span>
                      <span className="drops-text84 Content16SemiBold">
                        120 XRD
                      </span>
                    </div>
                    <div className="drops-volume2412">
                      <span className="drops-text85 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text86 Content16SemiBold">
                        47 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item113">
                <div className="drops-image-header13"></div>
                <div className="drops-text-box13">
                  <div className="drops-container50">
                    <div className="drops-container51">
                      <span className="drops-text87">Collection 4</span>
                    </div>
                    <div className="drops-minting-progress13">
                      <div className="drops-bar-bg13">
                        <div className="drops-progress13">
                          <div className="drops-green-bar13"></div>
                        </div>
                        <span className="drops-text88">100%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container52">
                    <div className="drops-floor13">
                      <span className="drops-text89 SmallestLabels">price</span>
                      <span className="drops-text90 Content16SemiBold">
                        130 XRD
                      </span>
                    </div>
                    <div className="drops-volume2413">
                      <span className="drops-text91 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text92 Content16SemiBold">
                        none
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/collection-drop-page">
              <div className="drops-item114">
                <div className="drops-image-header14"></div>
                <div className="drops-text-box14">
                  <div className="drops-container53">
                    <div className="drops-container54">
                      <span className="drops-text93">Collection 5</span>
                    </div>
                    <div className="drops-minting-progress14">
                      <div className="drops-bar-bg14">
                        <div className="drops-progress14">
                          <div className="drops-green-bar14"></div>
                        </div>
                        <span className="drops-text94">43%</span>
                      </div>
                    </div>
                  </div>
                  <div className="drops-container55">
                    <div className="drops-floor14">
                      <span className="drops-text95 SmallestLabels">price</span>
                      <span className="drops-text96 Content16SemiBold">
                        120XRD
                      </span>
                    </div>
                    <div className="drops-volume2414">
                      <span className="drops-text97 SmallestLabels">
                        TIME LEFT
                      </span>
                      <span className="drops-text98 Content16SemiBold">
                        none
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default Drops
