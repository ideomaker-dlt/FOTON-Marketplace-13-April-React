import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Header = memo(() => {
    return (
      
        <div className={styles.addItemsSelectorHeaderCreator}>
            <div className={styles.addItemsSelectorContainer01}>
                <div className={styles.addItemsSelectorContainer02}>
                    <div className={styles.addItemsSelectorContainer03}>
                        <h1 className={styles.addItemsSelectorText}>Create New Item</h1>
                    </div>
                </div>
            </div>
            <div className={styles.addItemsSelectorMaskOverlay}></div>
        </div>
    )
})
