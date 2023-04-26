import React, { memo } from 'react'
import { LayoutWithSidebar, CollectionItemsContainer } from '@components'
import styles from "./styles.module.scss"
import { Detail, Filters, HelmetComponent } from './components'

export const CollectionPage = memo(() => {
    return (
        <div className={styles.collectionPageContainer}>
            <HelmetComponent />
            <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name4">
                <Detail />
                <div className={styles.collectionPageTabsRow}>
                    <span className={styles.collectionPageText36}>Items</span>
                    <span className={styles.collectionPageText37}>About</span>
                    <span className={styles.collectionPageText38}>Followers</span>
                </div>
                <Filters />
                <div className={styles.collectionPageContainer09}>
                    <CollectionItemsContainer></CollectionItemsContainer>
                </div>
            </LayoutWithSidebar>
        </div>
    )
})
