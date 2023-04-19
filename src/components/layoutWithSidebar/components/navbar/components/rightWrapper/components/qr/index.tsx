import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Qr = memo(() => {
    return (
        <div className={styles.layoutWithSidebarConnectQr}>
            <div
                data-thq='thq-dropdown'
                className={`${styles.layoutWithSidebarCategory2} list-item`}>
                <div
                    data-thq='thq-dropdown-toggle'
                    className={styles.layoutWithSidebarDropdownToggle09}>
                    <div className={styles.layoutWithSidebarContent}>
                        <img
                            alt='image'
                            src='/playground_assets/group%20489.svg'
                            className={styles.layoutWithSidebarImage} />
                        <span className={styles.layoutWithSidebarText25}>
                            Connect
                        </span>
                    </div>
                </div>
                <ul data-thq='thq-dropdown-list'
                    className={styles.layoutWithSidebarDropdownList2}>
                    <li data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarBigButtons2} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarUserPersona2}>
                            <div className={styles.layoutWithSidebarContainer4}>
                                <span className={styles.layoutWithSidebarName2}>
                                    Scan QR with the Radix Stream mobile app to connect
                                </span>
                            </div>
                        </div>
                    </li>
                    <li data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarUserSettings2} list-item`}>
                        <div
                            data-thq='thq-dropdown-toggle'
                            className={styles.layoutWithSidebarDropdownToggle10}>
                        </div>
                    </li>
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.layoutWithSidebarLogOut2} list-item`}>
                    </li>
                </ul>
            </div>
        </div>
    )
})