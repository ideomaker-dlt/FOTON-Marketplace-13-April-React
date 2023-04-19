import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Profile = memo(() => {
    return (
        <div className={styles.layoutWithSidebarUser1}>
            <div
                data-thq='thq-dropdown'
                className={`${styles.layoutWithSidebarCategory1} list-item`}>
                <div
                    data-thq='thq-dropdown-toggle'
                    className={styles.layoutWithSidebarDropdownToggle06}>
                    <div className={styles.layoutWithSidebarAvatar1}></div>
                </div>
                <ul
                    data-thq='thq-dropdown-list'
                    className={styles.layoutWithSidebarDropdownList1}>
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarBigButtons1} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarUserPersona1}>
                            <span className={`${styles.layoutWithSidebarText16} material-symbols-outlined`}>
                                account_circle
                            </span>
                            <div className={styles.layoutWithSidebarContainer3}>
                                <span className={styles.layoutWithSidebarName1}>
                                    Danoshi Hughemoto
                                </span>
                                <span className={styles.layoutWithSidebarRadixAddress1}>
                                    rdxdhsj...sdg765sg
                                </span>
                            </div>
                        </div>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarCollectorProfile1}>
                            <span className={`${styles.layoutWithSidebarText17} material-symbols-outlined`}>
                                category
                            </span>
                            <span className={styles.layoutWithSidebarText18}>
                                Collector Profile
                            </span>
                        </div>
                        <Link to='/creator-studio'>
                            <div
                                data-thq='thq-dropdown-toggle'
                                className={styles.layoutWithSidebarCreatorStudio1}>
                                <span className={`${styles.layoutWithSidebarText19} material-symbols-outlined`}>
                                    deblur
                                </span>
                                <span className={styles.layoutWithSidebarText20}>
                                    Creator Studio
                                </span>
                            </div>
                        </Link >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarUserSettings1} list-item`}>
                        <div data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle07} >
                            <span className={`${styles.layoutWithSidebarText21}  material-symbols-outlined`}>
                                manage_accounts
                            </span >
                            <span className={styles.layoutWithSidebarText22}>
                                Profile Settings
                            </span>
                        </div >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarLogOut1} list-item`}>
                        <div data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle08} >
                            <span className={`${styles.layoutWithSidebarText23}  material-symbols-outlined`}>
                                logout
                            </span >
                            <span className={styles.layoutWithSidebarText24}>
                                Log Out
                            </span>
                        </div >
                    </li >
                </ul >
            </div >
        </div >
    )
})