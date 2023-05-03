import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'


export const GoBack = memo(() => {
    return (
        <div className={styles.row}>
            <div>
                <Link to='/creator-studio-project' className={styles.link}>
                    &lt; go back
                </Link>
                <span>Define your Item below</span>
            </div>
        </div>
    )
})