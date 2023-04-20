import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'

export const CreatorStudio = memo(() => {
    return (

        <div className={styles.sideMenuContainer08}>
            <span className={`${styles.sideMenuText01} Content16SemiBold`}>
                Creator Studio
            </span>
            <div className={styles.sideMenuContainer09}>
                <Link to="/creator-studio-collection" className="side-menu-navlink">
                    <div className={styles.sideMenuContainer10}>
                        <span className={`${styles.sideMenuText02} material-symbols-outlined`}>
                            <span className=''>dashboard_customize</span>
                            <br className=''></br>
                        </span>
                        <span className={`${styles.sideMenuText05} Content`}>Dashboard</span>
                    </div>
                </Link>
                <Link
                    to="/creator-studio-collection-analytics"
                    className="side-menu-navlink1"
                >
                    <div className={styles.sideMenuContainer11}>
                        <span className={`${styles.sideMenuText06} material-symbols-outlined`}>
                            insights
                        </span>
                        <span className={`${styles.sideMenuText07} Content`}>Analytics</span>
                    </div>
                </Link>
                <div className={styles.sideMenuContainer12}>
                    <span className={`${styles.sideMenuText08} material-symbols-outlined`}>
                        settings
                    </span>
                    <span className={`${styles.sideMenuText09} Content`}>Community</span>
                </div>
                <div className={styles.sideMenuContainer13}>
                    <span className={`${styles.sideMenuText10} material-symbols-outlined`}>
                        group
                    </span>
                    <span className={`${styles.sideMenuText11} Content`}>Team</span>
                </div>
                <div className={styles.sideMenuContainer14}>
                    <span className={`${styles.sideMenuText12} material-symbols-outlined`}>
                        store
                    </span>
                    <span className={`${styles.sideMenuText13} Content`}>Store</span>
                </div>
                <div className={styles.sideMenuContainer15}>
                    <span className={`${styles.sideMenuText14} material-symbols-outlined`}>
                        settings
                    </span>
                    <span className={`${styles.sideMenuText15} Content`}>Settings</span>
                </div>
            </div>
        </div>
    )
})
