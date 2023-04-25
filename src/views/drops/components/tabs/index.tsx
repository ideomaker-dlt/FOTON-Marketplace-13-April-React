import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Tabs = memo(() => {
    return (
        <div className={styles.dropsTabsRow1}>
            <span className={styles.dropsText06}>Upcoming</span>
            <span className={styles.dropsText07}>Active</span>
            <span className={styles.dropsText08}>Past</span>
        </div>
    )


})