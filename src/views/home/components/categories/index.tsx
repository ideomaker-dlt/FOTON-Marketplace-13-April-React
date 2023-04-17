import React, { memo } from 'react'

import './styles.scss'
import { CategoryItem } from '../'

export const Categories = memo(() => {
  return (
    <div className='categories'>
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
