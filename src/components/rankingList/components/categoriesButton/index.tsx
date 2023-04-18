import React, { memo } from 'react'

import styles from './styles.module.scss'
import { Select } from '@components'

export const CategoriesButton = memo(() => {
  return (
    <div className={styles.container}>
      <Select
        options={[
          { value: 'avatars', label: 'Avatars' },
          { value: 'art', label: 'Art' },
          { value: 'games', label: 'Games' },
          { value: 'memberships', label: 'Memberships' },
        ]}
      />
    </div>
  )
})
