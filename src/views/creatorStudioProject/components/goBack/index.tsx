import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const GoBack = memo(() => {

    return (
        <div className={styles.creatorStudioProjectTabsRow}>
            <div className={styles.creatorStudioProjectContainer04}>
                <Link
                    to='/creator-studio'
                    className={styles.creatorStudioProjectNavlink2}
                >
                    &lt; go back
                </Link>
                <span className={styles.creatorStudioProjectText10}>
                    My Collections
                </span>
            </div>
        </div>
    )


})