import React, { memo } from 'react'

import { CategoryItem } from '../'
import styles from './styles.module.scss'

export const Categories = memo(() => {
  return (
    <div className={styles.categories}>
      {['all', 'avatars', 'art', 'games', 'memberships'].map((categoryItem) => (
        <CategoryItem
          key={categoryItem}
          label={categoryItem}
          selected={categoryItem === 'all'}
        />
      ))}
    </div>
  )
})
