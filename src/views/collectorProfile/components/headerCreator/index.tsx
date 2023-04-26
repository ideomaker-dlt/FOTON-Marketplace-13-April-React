import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { Follow, NameAndImg } from './components'

export const HeaderCreator = memo(() => {
    return (
        <div className={styles.collectorProfileHeaderCreator}>
            <NameAndImg />
            <div className={styles.collectorProfileMaskOverlay}></div>
            <Follow />
        </div>
    )
})
