import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"


export const GoBack = memo(() => {
    const [timeframes, setTimeframes] = useState([
        "1d", "7d", "30d", "6m", "All"
    ])
    return (
        <div className={styles.creatorStudioCollectionAnalyticsTabsRow}>
            <div className={styles.creatorStudioCollectionAnalyticsContainer05}>
                <Link
                    to="/creator-studio-project"
                    className={styles.creatorStudioCollectionAnalyticsNavlink1}
                >
                    &lt; go back
                </Link>
                <span className={styles.creatorStudioCollectionAnalyticsText10}>
                    Analytics
                </span>
            </div>
            <div className={styles.creatorStudioCollectionAnalyticsFilterButtons}>
                <div className={styles.creatorStudioCollectionAnalyticsTimeframe}>

                    {
                        timeframes.map((timeframe, index) => {
                            return (
                                <button key={index} className={styles.creatorStudioCollectionAnalyticsButton}>
                                    <span className={styles.creatorStudioCollectionAnalyticsText11}>
                                        {timeframe}
                                    </span>
                                </button>
                            )
                        })
                    }

                    {/* <button className={styles.creatorStudioCollectionAnalyticsButton}>
                        <span className={styles.creatorStudioCollectionAnalyticsText11}>
                            1d
                        </span>
                    </button>
                    <button className={styles.creatorStudioCollectionAnalyticsButton1}>
                        <span className={styles.creatorStudioCollectionAnalyticsText12}>
                            7d
                        </span>
                    </button>
                    <button className={styles.creatorStudioCollectionAnalyticsButton2}>
                        <span className={styles.creatorStudioCollectionAnalyticsText13}>
                            30d
                        </span>
                    </button>
                    <button className={styles.creatorStudioCollectionAnalyticsButton3}>
                        <span className={styles.creatorStudioCollectionAnalyticsText14}>
                            6m
                        </span>
                    </button>
                    <button className={styles.creatorStudioCollectionAnalyticsButton4}>
                        <span className={styles.creatorStudioCollectionAnalyticsText15}>
                            All
                        </span>
                    </button> */}
                </div>
            </div>
        </div>
    )


})