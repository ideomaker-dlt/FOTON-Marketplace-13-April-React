import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Qr = memo(() => {
    return (
        <div className={styles.container}>
            <div
                data-thq='thq-dropdown'
                className={`list-item`}>
                <div data-thq='thq-dropdown-toggle'>
                    <div>
                        <img alt='image' src='/playground_assets/group%20489.svg' />
                        <span>
                            Connect
                        </span>
                    </div>
                </div>
                <ul data-thq='thq-dropdown-list'>
                    <li data-thq='thq-dropdown' className={`${styles.bigButtons} list-item`}>
                        <div data-thq='thq-dropdown-toggle'>
                            <div>
                                <span>
                                    Scan QR with the Radix Stream mobile app to connect
                                </span>
                            </div>
                        </div>
                    </li>
                    <li data-thq='thq-dropdown' className={`${styles.settings} list-item`}>
                        <div data-thq='thq-dropdown-toggle'> </div>
                    </li>
                    <li data-thq='thq-dropdown' className={`${styles.logOut} list-item`}>
                    </li>
                </ul>
            </div>
        </div>
    )
})