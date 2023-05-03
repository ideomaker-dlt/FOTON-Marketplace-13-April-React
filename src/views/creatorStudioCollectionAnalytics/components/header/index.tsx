import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"


export const Header = memo(() => {
    return (
        <div className={styles.headerCreator}>
            <div className={styles.grayOverlay}></div>
            <div className={styles.creatorStudioCollectionAnalyticsContainer01}>
                <div className={styles.creatorStudioCollectionAnalyticsContainer02}>
                    <div className={styles.creatorStudioCollectionAnalyticsAvatarLogo}>
                        <img
                            src="/playground_assets/vlad__foton.is__radix.stream_pirate_crew_member_illustration_352025ba-0bac-4b8e-9a47-9d8da5bb2ceb-200h.png"
                            className={styles.creatorStudioCollectionAnalyticsImage}
                        />
                    </div>
                    <div className={styles.creatorStudioCollectionAnalyticsContainer03}>
                        <h1 className={styles.creatorStudioCollectionAnalyticsText}>
                            Collection One
                        </h1>
                        <div className={styles.creatorStudioCollectionAnalyticsContainer04}>
                            <h1 className={styles.creatorStudioCollectionAnalyticsText01}>
                                <span>1500 items</span>
                                <br></br>
                            </h1>
                            <h1 className={styles.creatorStudioCollectionAnalyticsText04}>
                                <span>Unlisted</span>
                                <br></br>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={styles.creatorStudioCollectionAnalyticsButtons}>
                    <Link
                        to="/add-items-selector"
                        className={`${styles.creatorStudioCollectionAnalyticsNavlink} button`}
                    >
                        <span className={styles.creatorStudioCollectionAnalyticsText07}>
                            <span>Export Data</span>
                            <br></br>
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    )


})