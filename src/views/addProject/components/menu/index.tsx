import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

export const Menu = memo(() => {
    return (
        <div className={styles.row}>
            <div>
                <Link to='/creator-studio-project' className={styles.navlink}>
                    &lt; go back
                </Link>
                <span className={styles.addProjectText01}>Define your item below</span>
            </div>
        </div>
    )
})
