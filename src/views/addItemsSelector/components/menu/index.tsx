import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Menu = memo(() => {
    return (
        <div className={styles.row}>
            <div className={styles.addItemsSelectorContainer04}>
                <Link
                    to='/creator-studio-collection'
                    className={styles.link}
                >
                    &lt; go back
                </Link>
                <span className={styles.addItemsSelectorText01}>
                    Define your Item below
                </span>
            </div>
        </div>
    )
})
