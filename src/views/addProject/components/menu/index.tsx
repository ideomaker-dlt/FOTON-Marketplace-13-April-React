import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

export const Menu = memo(() => {
    return (
        <div className={styles.addProjectTabsRow}>
            <div className={styles.addProjectContainer04}>
                <Link to='/creator-studio-project' className={styles.addProjectNavlink}>
                    &lt; go back
                </Link>
                <span className={styles.addProjectText01}>Define your item below</span>
            </div>
        </div>
    )
})
