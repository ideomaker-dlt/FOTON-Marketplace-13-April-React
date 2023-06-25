import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Category = memo(() => {
    return (
        <div className={`${styles.sideMenuContainer} hide-scroll`}>
            <div className={styles.category}>
                <span className={`${styles.sideMenuText} material-symbols-outlined`}>
                    category
                </span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.hexa}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.hexa1}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.hexa2}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.sideMenuContainer02}></div>
            <div className={styles.sideMenuLineSeparator1}></div>
            <div className={styles.sideMenuContainer03}></div>
            <div className={styles.sideMenuContainer04}></div>
            <div className={styles.sideMenuContainer05}></div>
            <div className={styles.sideMenuContainer06}></div>
            <div className={styles.sideMenuContainer07}></div>
        </div>
    )
})
