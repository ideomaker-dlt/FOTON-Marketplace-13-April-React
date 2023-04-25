import React, { memo } from 'react'
import styles from './styles.module.scss'

export const Tabs = memo(() => {
    return (
        <div className={styles.collectorProfileTabsRow}>
            <span className={styles.collectorProfileText32}>Profile</span>
            <span className={styles.collectorProfileText33}>Collected</span>
            <span className={styles.collectorProfileText34}>Created</span>
            <span className={styles.collectorProfileText35}>Followers</span>
        </div>
    )
})