import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Links = memo(() => {
    return (
        <div className={styles.layoutWithSidebarContainerRight}>
            <div className={styles.layoutWithSidebarItems}>
                <Link
                    to="/drops"
                    className={styles.layoutWithSidebarNavlink01}>
                    Drops
                </Link>
                <Link
                    to='/stats'
                    className={`${styles.layoutWithSidebarNavlink02} Content`}>
                    Stats
                </Link>
                <Link
                    to='/creator-studio'
                    className={`${styles.layoutWithSidebarNavlink03} Content`}>
                    Create
                </Link>
                <button className={`${styles.layoutWithSidebarButton1} Content`}>
                    More
                </button>
            </div>
        </div>
    )
}
)