import React, { memo } from 'react'

import styles from './styles.module.scss'
import { List, Filter } from './components'


export const CollectionItemsContainer: React.FC<any> = memo(
  (
  ) => {
    return (
      <div className={styles.collectionItemsContainerCollectionItemsContainer}>
        <div className={styles.collectionItemsContainerContainer}>
          <Filter />
          <List />
        </div>
      </div>
    )
  }
)
