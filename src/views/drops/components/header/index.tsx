import React, { memo } from 'react'
import styles from "./styles.module.scss"


export const Header = memo(() => {
    return (
        <div className={styles.dropsHeader}>
            <div className={`${styles.container} article-container`}>
                <div className={`${styles.dropsContainerPop} article-img-holder`}></div>
                <div className={`${styles.dropsGrayOverlay} article-title-link`}>
                    <div className={styles.dropsContainer03}>
                        <div className={styles.dropsTextHeader}>
                            <h1 className={`Heading1`}>Featured Drop</h1>
                            <h3>By Sharp Collective</h3>
                            <div>
                                <div className={styles.dropsContainer05}>
                                    <div className={styles.dropsContainer06}>
                                        <div className={styles.dropsDot}></div>
                                        <span className={styles.dropsText03}>Time to DROP</span>
                                    </div>
                                    <div className={styles.dropsContainer07}>
                                        <span className={styles.dropsText04}>coming soon</span>
                                    </div>
                                </div>
                                <div className={styles.dropsContainer08}>
                                    <span className={styles.dropsText05}>view drop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dropsMaskOverlay}></div>
        </div>
    )


})