import React, { memo } from 'react'

import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
// import './style.scss'
import styles from "./style.module.scss"
import { HeaderCreator, HelmetComponent, ProfileContainer, Tabs } from './components'

export const CollectorProfile = memo(() => {
    return (
        <div className={styles.collectorProfileContainer}>
            <HelmetComponent />
            <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name15">
                <HeaderCreator />
                <Tabs />
                <ProfileContainer />
            </LayoutWithSidebar>
        </div>
    )
})
