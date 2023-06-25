import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Profile = memo(() => {
    return (
        <div className={styles.container}>
            <div
                data-thq='thq-dropdown'
                className={`list-item`}>
                <div
                    data-thq='thq-dropdown-toggle'>
                    <div className={styles.avatar}></div>
                </div>
                <ul
                    data-thq='thq-dropdown-list'>
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.bigButton} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.userPersona}>
                            <span className={`material-symbols-outlined`}>
                                account_circle
                            </span>
                            <div>
                                <span>
                                    Danoshi Hughemoto
                                </span>
                                <span>
                                    rdxdhsj...sdg765sg
                                </span>
                            </div>
                        </div>
                        <Link to="/collector-profile" className="">
                            <div
                                data-thq='thq-dropdown-toggle'
                                className={styles.profile}>
                                <span className={`material-symbols-outlined`}>
                                    category
                                </span>
                                <span>
                                    Collector Profile
                                </span>
                            </div>
                        </Link>
                        <Link to='/creator-studio'>
                            <div
                                data-thq='thq-dropdown-toggle'
                                className={styles.creatorStudio}>
                                <span className={`material-symbols-outlined`}>
                                    deblur
                                </span>
                                <span>
                                    Creator Studio
                                </span>
                            </div>
                        </Link >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.settings} list-item`}>
                        <div data-thq='thq-dropdown-toggle'>
                            <span className={`material-symbols-outlined`}>
                                manage_accounts
                            </span >
                            <span>
                                Profile Settings
                            </span>
                        </div >
                    </li >
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.logOut} list-item`}>
                        <div data-thq='thq-dropdown-toggle' >
                            <span className={`material-symbols-outlined`}>
                                logout
                            </span >
                            <span>
                                Log Out
                            </span>
                        </div >
                    </li >
                </ul>
            </div >
        </div >
    )
})