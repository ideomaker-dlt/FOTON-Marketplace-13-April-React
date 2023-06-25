import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const GoBack = memo(() => {

    return (
        <div className={styles.container}>
            <Link to='/creator-studio' className={styles.navlink}>
                &lt; go back
            </Link>
            <span>My Items</span>
        </div>
    )


})