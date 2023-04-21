import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'


export const GoBack = memo(() => {
    return (
        <div className={styles.addItemTabsRow}>
            <div className={styles.addItemContainer04}>
                <Link to='/creator-studio-project' className={styles.addItemNavlink}>
                    &lt; go back
                </Link>
                <span className={styles.addItemText01}>Define your Item below</span>
            </div>
        </div>
    )
})