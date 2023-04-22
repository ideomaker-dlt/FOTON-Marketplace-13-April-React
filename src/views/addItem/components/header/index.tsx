import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Header = memo(() => {
    return (
        <div className={styles.addItemHeaderCreator}>
            <div className={styles.addItemContainer01}>
                <div className={styles.addItemContainer02}>
                    <div className={styles.addItemContainer03}>
                        <h1 className={styles.addItemText}>Create New Item</h1>
                    </div>
                </div>
            </div>
            <div className={styles.addItemMaskOverlay}></div>
        </div>
    )
})