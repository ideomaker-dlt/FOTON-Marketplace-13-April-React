import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { LayoutWithSidebar } from '@components'
import styles from "./styles.module.scss"
import { HelmetComponent, LeftContainer, RightContainer } from './components'

export const ItemPage = memo(() => {
    return (
        <div className={styles.itemPageContainer}>
            <HelmetComponent />
            <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name14">
                <div className={styles.itemPageWrapperAll}>
                    <LeftContainer />
                    <RightContainer />
                </div>
            </LayoutWithSidebar>
        </div>
    )
})
