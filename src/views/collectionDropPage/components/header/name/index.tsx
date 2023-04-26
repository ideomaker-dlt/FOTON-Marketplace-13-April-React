import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import styles from "./style.module.scss"

export const Name = memo(() => {
    return (
        <div className={`${styles.collectionDropPageContainer01} article-container`}>
            <div className={`${styles.collectionDropPageContainerPop} article-img-holder`}></div>
            <div className={`${styles.collectionDropPageGrayOverlay} article-title-link`}>
                <div className={styles.collectionDropPageContainer02}>
                    <div className={styles.collectionDropPageContainer03}>
                        <div className={styles.collectionDropPageAvatarLogo}>
                            <img
                                src="/playground_assets/grid_0%20%5B7%5D-200h.webp"
                                className={styles.collectionDropPageImage}
                            />
                        </div>
                        <div className={styles.collectionDropPageContainer04}>
                            <h1 className={styles.collectionDropPageText}>
                                Collection One
                            </h1>
                            <div className={styles.collectionDropPageContainer05}>
                                <p className={styles.collectionDropPageText01}>
                                    <span>By Smooth Collective</span>
                                    <br></br>
                                </p>
                                <p className={styles.collectionDropPageText04}>
                                    <span>Verified</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectionDropPageContainer06}>
                        <div className={styles.collectionDropPageContainer07}>
                            <div className={styles.collectionDropPageContainer08}>
                                <div className={styles.collectionDropPageDot}></div>
                                <span className={styles.collectionDropPageText07}>
                                    Time to DROP
                                </span>
                            </div>
                            <div className={styles.collectionDropPageContainer09}>
                                <span className={styles.collectionDropPageText08}>
                                    coming soon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


})