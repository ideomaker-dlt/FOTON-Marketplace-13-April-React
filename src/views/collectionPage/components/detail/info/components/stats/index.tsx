import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Stats = memo(() => {
    return (
        <div className={styles.collectionPageSmallStats}>
            <div className={styles.collectionPageSmallCard}>
                <span className={styles.collectionPageText13}>10000</span>
                <span className={styles.collectionPageText14}>Items</span>
            </div>
            <div className={styles.collectionPageSmallCard1}>
                <span className={styles.collectionPageText15}>573</span>
                <span className={styles.collectionPageText16}>Followers</span>
            </div>
            <div className={styles.collectionPageSmallCard2}>
                <span className={styles.collectionPageText17}>28k</span>
                <span className={styles.collectionPageText18}>Views</span>
            </div>
            <div className={styles.collectionPageSmallCard3}>
                <span className={styles.collectionPageText19}>62</span>
                <span className={styles.collectionPageText20}>Days to Drop</span>
            </div>
        </div>
    )


})