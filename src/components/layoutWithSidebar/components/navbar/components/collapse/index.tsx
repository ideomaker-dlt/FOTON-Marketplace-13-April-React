import React, { memo } from 'react'
import styles from './styles.module.scss'

export const Collapse = memo(({ setSideMenuIsVisible, sideMenuIsVisible }: { setSideMenuIsVisible: any, sideMenuIsVisible: boolean }) => {
    return (
        <div
            onClick={() => setSideMenuIsVisible(!sideMenuIsVisible)}
            className={styles.sidenavButton}>
            <div></div>
        </div>

    )
}
)