import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Tabs = memo(() => {
    return (
        <div className={styles.row}>
            <span className={styles.collectionDropPageText21}>Mint</span>
            <span className={styles.collectionDropPageText22}>Team</span>
            <span className={styles.collectionDropPageText23}>FAQ</span>
        </div>
    )
})