import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const GoBack = memo(() => {

    return (
        <div className={styles.creatorStudioCollectionContainer5}>
            <Link
                to='/creator-studio-project'
                className={styles.creatorStudioCollectionNavlink1}
            >
                &lt; go back 1
            </Link>
            <span className={styles.creatorStudioCollectionText13}>My Items 1</span>
        </div>
    )


})