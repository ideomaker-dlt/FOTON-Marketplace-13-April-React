import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import './styles.scss'
import { GoBack, Header, HelmetComponent, List } from './components'

export const CreatorStudioCollectionAnalytics = (props: any) => {
    return (
        <div className="creator-studio-collection-analytics-container">
            <HelmetComponent />
            <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name12">
                <Header />
                <GoBack />
                <List />
                {/* <div className="creator-studio-collection-analytics-tabs-row">
                    <div className="creator-studio-collection-analytics-container05">
                        <Link
                            to="/creator-studio-project"
                            className="creator-studio-collection-analytics-navlink1"
                        >
                            &lt; go back
                        </Link>
                        <span className="creator-studio-collection-analytics-text10">
                            Analytics
                        </span>
                    </div>
                    <div className="creator-studio-collection-analytics-filter-buttons">
                        <div className="creator-studio-collection-analytics-timeframe">
                            <button className="creator-studio-collection-analytics-button">
                                <span className="creator-studio-collection-analytics-text11">
                                    1d
                                </span>
                            </button>
                            <button className="creator-studio-collection-analytics-button1">
                                <span className="creator-studio-collection-analytics-text12">
                                    7d
                                </span>
                            </button>
                            <button className="creator-studio-collection-analytics-button2">
                                <span className="creator-studio-collection-analytics-text13">
                                    30d
                                </span>
                            </button>
                            <button className="creator-studio-collection-analytics-button3">
                                <span className="creator-studio-collection-analytics-text14">
                                    6m
                                </span>
                            </button>
                            <button className="creator-studio-collection-analytics-button4">
                                <span className="creator-studio-collection-analytics-text15">
                                    All
                                </span>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* <div className="creator-studio-collection-analytics-resources">
                    <div className="creator-studio-collection-analytics-container06">
                        <div className="creator-studio-collection-analytics-item-data">
                            <div className="creator-studio-collection-analytics-container07">
                                <div className="creator-studio-collection-analytics-label-row">
                                    <h1 className="creator-studio-collection-analytics-text16">
                                        Items in Collection
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text17">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value">
                                    <p className="creator-studio-collection-analytics-text18">
                                        15000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data01">
                            <div className="creator-studio-collection-analytics-container08">
                                <div className="creator-studio-collection-analytics-label-row01">
                                    <h1 className="creator-studio-collection-analytics-text19">
                                        Followers
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text20">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value01">
                                    <p className="creator-studio-collection-analytics-text21">
                                        3782
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data02">
                            <div className="creator-studio-collection-analytics-container09">
                                <div className="creator-studio-collection-analytics-label-row02">
                                    <h1 className="creator-studio-collection-analytics-text22">
                                        Views
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text23">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value02">
                                    <p className="creator-studio-collection-analytics-text24">
                                        351,368
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data03">
                            <div className="creator-studio-collection-analytics-container10">
                                <div className="creator-studio-collection-analytics-label-row03">
                                    <h1 className="creator-studio-collection-analytics-text25">
                                        Market Cap
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text26">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value03">
                                    <p className="creator-studio-collection-analytics-text27">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text29">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data04">
                            <div className="creator-studio-collection-analytics-container11">
                                <div className="creator-studio-collection-analytics-label-row04">
                                    <h1 className="creator-studio-collection-analytics-text30">
                                        Volume
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text31">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value04">
                                    <p className="creator-studio-collection-analytics-text32">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text34">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data05">
                            <div className="creator-studio-collection-analytics-container12">
                                <div className="creator-studio-collection-analytics-label-row05">
                                    <h1 className="creator-studio-collection-analytics-text35">
                                        Total Revenue
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text36">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value05">
                                    <p className="creator-studio-collection-analytics-text37">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text39">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data06">
                            <div className="creator-studio-collection-analytics-container13">
                                <div className="creator-studio-collection-analytics-label-row06">
                                    <h1 className="creator-studio-collection-analytics-text40">
                                        Revenue Initial Sales
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text41">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value06">
                                    <p className="creator-studio-collection-analytics-text42">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text44">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data07">
                            <div className="creator-studio-collection-analytics-container14">
                                <div className="creator-studio-collection-analytics-label-row07">
                                    <h1 className="creator-studio-collection-analytics-text45">
                                        Revenue Royalties
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text46">
                                        -14%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value07">
                                    <p className="creator-studio-collection-analytics-text47">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text49">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data08">
                            <div className="creator-studio-collection-analytics-container15">
                                <div className="creator-studio-collection-analytics-label-row08">
                                    <h1 className="creator-studio-collection-analytics-text50">
                                        Items Sold
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text51">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value08">
                                    <p className="creator-studio-collection-analytics-text52">
                                        <span>
                                            203,365
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span className="creator-studio-collection-analytics-text54">
                                            XRD
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data09">
                            <div className="creator-studio-collection-analytics-container16">
                                <div className="creator-studio-collection-analytics-label-row09">
                                    <h1 className="creator-studio-collection-analytics-text55">
                                        Items Resold
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text56">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value09">
                                    <p className="creator-studio-collection-analytics-text57">
                                        642
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data10">
                            <div className="creator-studio-collection-analytics-container17">
                                <div className="creator-studio-collection-analytics-label-row10">
                                    <h1 className="creator-studio-collection-analytics-text58">
                                        Unique Owners
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text59">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value10">
                                    <p className="creator-studio-collection-analytics-text60">
                                        842
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="creator-studio-collection-analytics-item-data11">
                            <div className="creator-studio-collection-analytics-container18">
                                <div className="creator-studio-collection-analytics-label-row11">
                                    <h1 className="creator-studio-collection-analytics-text61">
                                        # Rank on FOTON
                                    </h1>
                                    <h1 className="creator-studio-collection-analytics-text62">
                                        +31%
                                    </h1>
                                </div>
                                <div className="creator-studio-collection-analytics-value11">
                                    <p className="creator-studio-collection-analytics-text63">
                                        231
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </LayoutWithSidebar>
        </div>
    )
}

