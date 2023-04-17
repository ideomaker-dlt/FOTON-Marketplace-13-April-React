import React, { memo } from 'react'
import classnames from 'classnames'

import './styles.scss'

export const CategoryItem = memo(
  ({ label, selected = false }: { label: string; selected: boolean }) => {
    return (
      <div className={classnames(['item', { active: selected }])}>
        <span className='item-text'>
          <span>{label}</span>
          <br></br>
        </span>
      </div>
    )
  }
)
