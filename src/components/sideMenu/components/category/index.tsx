import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const Category = memo(() => {
    return (
        <div className={`${styles.sideMenuContainer} hide-scroll`}>
            <div className={styles.sideMenuContainer01}>
                <span className={`${styles.sideMenuText} material-symbols-outlined`}>
                    category
                </span>
            </div>
            <div className={styles.sideMenuLineSeparator}></div>
            <div className={styles.sideMenuContainerHexa}>
                <div className={styles.sideMenuContainerOver}></div>
                <div className={styles.sideMenuContainerBase}></div>
            </div>
            <div className={styles.sideMenuContainerHexa1}>
                <div className={styles.sideMenuContainerOver1}></div>
                <div className={styles.sideMenuContainerBase1}></div>
            </div>
            <div className={styles.sideMenuContainerHexa2}>
                <div className={styles.sideMenuContainerOver2}></div>
                <div className={styles.sideMenuContainerBase2}></div>
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
