import React, { memo } from 'react'
import styles from './styles.module.scss'

export const RightContainer = memo(() => {
    return (
        <div className={styles.collectorProfileCard}>
            <div className={styles.collectorProfileItemDetails}>
                <div className={styles.collectorProfileTabsRow1}>
                    <span className={styles.collectorProfileText60}>Tesseracts</span>
                    <span className={styles.collectorProfileText61}>Artefacts</span>
                </div>
                <div className={styles.collectorProfileContainer12}>
                    <div className={styles.collectorProfileTesseract}>
                        <div className={styles.collectorProfileImageTesseract}></div>
                        <div className={styles.collectorProfileContainer13}>
                            <div className={styles.collectorProfileContainerRow}>
                                <p className={styles.collectorProfileText62}>
                                    <span>Blue Ice</span>
                                    <br></br>
                                </p>
                                <p className={styles.collectorProfileText65}>
                                    <span>3</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectorProfileTesseract1}>
                        <div className={styles.collectorProfileImageTesseract1}></div>
                        <div className={styles.collectorProfileContainer14}>
                            <div className={styles.collectorProfileContainerRow1}>
                                <p className={styles.collectorProfileText68}>
                                    <span>Green Leaf</span>
                                    <br></br>
                                </p>
                                <p className={styles.collectorProfileText71}>
                                    <span>3</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectorProfileTesseract2}>
                        <div className={styles.collectorProfileImageTesseract2}></div>
                        <div className={styles.collectorProfileContainer15}>
                            <div className={styles.collectorProfileContainerRow2}>
                                <p className={styles.collectorProfileText74}>Yellow Spark</p>
                                <p className={styles.collectorProfileText75}>
                                    <span>4</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectorProfileTesseract3}>
                        <div className={styles.collectorProfileImageTesseract3}></div>
                        <div className={styles.collectorProfileContainer16}>
                            <div className={styles.collectorProfileContainerRow3}>
                                <p className={styles.collectorProfileText78}>Red Heart</p>
                                <p className={styles.collectorProfileText79}>
                                    <span>7</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectorProfileTesseract4}>
                        <div className={styles.collectorProfileImageTesseract4}></div>
                        <div className={styles.collectorProfileContainer17}>
                            <div className={styles.collectorProfileContainerRow4}>
                                <p className={styles.collectorProfileText82}>Purple Blade</p>
                                <p className={styles.collectorProfileText83}>
                                    <span>2</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collectorProfileTesseract5}>
                        <div className={styles.collectorProfileImageTesseract5}></div>
                        <div className={styles.collectorProfileContainer18}>
                            <div className={styles.collectorProfileContainerRow5}>
                                <p className={styles.collectorProfileText86}>White Pearl</p>
                                <p className={styles.collectorProfileText87}>
                                    <span>0</span>
                                    <br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})