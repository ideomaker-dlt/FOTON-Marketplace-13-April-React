import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Logo = memo(() => {
    return (
        <Link to='/' className={styles.navlink}>
            <div></div>
        </Link>
    )
}
)