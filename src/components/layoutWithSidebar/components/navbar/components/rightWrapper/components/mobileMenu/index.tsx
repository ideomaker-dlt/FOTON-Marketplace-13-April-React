import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const MobileMenu = memo(() => {
    return (
        <div className={styles.layoutWithSidebarMobileMenu}>
            <div
                data-thq='thq-dropdown'
                className={`${styles.layoutWithSidebarCategory} list-item`}>
                <div
                    data-thq='thq-dropdown-toggle'
                    className={styles.layoutWithSidebarDropdownToggle}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.layoutWithSidebarIcon7}>
                        <path
                            d='M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
                            className=''></path>
                    </svg>
                </div>
                <ul
                    data-thq='thq-dropdown-list'
                    className={styles.layoutWithSidebarDropdownList}>
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarBigButtons} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarUserPersona}>
                            <span className={`${styles.layoutWithSidebarText01} material-symbols-outlined`}>
                                account_circle
                            </span>
                            <div className={styles.layoutWithSidebarContainer2}>
                                <span className={styles.layoutWithSidebarName}>
                                    Danoshi Hughemoto
                                </span>
                                <span className={styles.layoutWithSidebarRadixAddress}>
                                    rdxdhsj...sdg765sg
                                </span>
                            </div>
                        </div>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarCollectorProfile}>
                            <span className={`${styles.layoutWithSidebarText02} material-symbols-outlined`}>
                                category
                            </span>
                            <span className={styles.layoutWithSidebarText03}>
                                Collector Profile
                            </span>
                        </div>
                        <Link to='/creator-studio' className='' >
                            <div data-thq='thq-dropdown-toggle'
                                className={styles.layoutWithSidebarCreatorStudio}>
                                <span className={`${styles.layoutWithSidebarText04} material-symbols-outlined`}>
                                    deblur
                                </span>
                                <span className={styles.layoutWithSidebarText05}>
                                    Creator Studio
                                </span>
                            </div>
                        </Link >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarUserSettings} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle01}>
                            <span className={`${styles.layoutWithSidebarText06} material-symbols-outlined`}>
                                water_drop
                            </span>
                            <span className={styles.layoutWithSidebarText07}>
                                Drops
                            </span>
                        </div>
                        <Link to='/stats' className=''>
                            <div data-thq='thq-dropdown-toggle'
                                className={styles.layoutWithSidebarDropdownToggle02} >
                                <span className={`${styles.layoutWithSidebarText08} material-symbols-outlined`}>
                                    insights
                                </span >
                                <span className={styles.layoutWithSidebarText09}>
                                    Stats
                                </span>
                            </div >
                        </Link >
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle03}>
                            <span className={`${styles.layoutWithSidebarText10} material-symbols-outlined`}>
                                grid_view
                            </span>
                            <span className={styles.layoutWithSidebarText11}>More</span>
                        </div >
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle04}>
                            <span className={`${styles.layoutWithSidebarText12} material-symbols-outlined`}>
                                manage_accounts
                            </span>
                            <span className={styles.layoutWithSidebarText13}>
                                Profile Settings
                            </span>
                        </div >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarLogOut} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={`${styles.layoutWithSidebarDropdownToggle05}`}>
                            <span className={`${styles.layoutWithSidebarText14} material-symbols-outlined`}>
                                logout
                            </span>
                            <span className={styles.layoutWithSidebarText15}>
                                Log Out
                            </span>
                        </div >
                    </li >
                </ul >
            </div >
        </div >
    )
})
