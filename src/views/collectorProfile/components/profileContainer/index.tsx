import React, { memo } from 'react'
import styles from './styles.module.scss'
import { LeftContainer } from './leftContainer'
import { RightContainer } from './rightContainer'

export const ProfileContainer = memo(() => {
    return (
        <div className={styles.collectorProfileContainer07}>
            <LeftContainer />
            <RightContainer />
        </div>
    )
})