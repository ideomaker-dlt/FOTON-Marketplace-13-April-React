import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Header = memo(() => {
    return (
        <div className={styles.addProjectHeaderCreator}>
            <div className={styles.addProjectContainer01}>
                <div className={styles.addProjectContainer02}>
                    <div className={styles.addProjectContainer03}>
                        <h1 className={styles.addProjectText}>Create New Project</h1>
                    </div>
                </div>
            </div>
            <div className={styles.addProjectMaskOverlay}></div>
        </div>
    )
})
