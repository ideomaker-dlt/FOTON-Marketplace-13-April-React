import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Header = memo(() => {
    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h1>Create New Item</h1>
                    </div>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </div>
    )
})
