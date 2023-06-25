import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const GoBack = memo(() => {

    return (
        <div className={styles.container}>
            <Link
                to='/creator-studio-project'
                className={styles.navLink}
            >
                &lt; go back 1
            </Link>
            <span>My Items 1</span>
        </div>
    )


})