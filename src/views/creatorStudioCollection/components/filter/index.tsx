import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { FilterAndSortBy, GoBack } from './components'


export const Filter = memo(() => {

    return (
        <div className={styles.creatorStudioCollectionTabsRow}>
            <GoBack />
            <FilterAndSortBy />
        </div>
    )


})