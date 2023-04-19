import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Links = memo(() => {
    return (
        <div className={styles.layoutWithSidebarContainerRight}>
            <div className={styles.layoutWithSidebarItems}>
                <button className={styles.layoutWithSidebarButton1}>Drops</button>
                <Link
                    to='/stats'
                    className={`${styles.layoutWithSidebarNavlink1} Content`}>
                    Stats
                </Link>
                <Link
                    to='/creator-studio'
                    className={`${styles.layoutWithSidebarNavlink2} Content`}>
                    Create
                </Link>
                <button className={`${styles.layoutWithSidebarButton2} Content`}>
                    More
                </button>
            </div>
        </div>
    )
}
)