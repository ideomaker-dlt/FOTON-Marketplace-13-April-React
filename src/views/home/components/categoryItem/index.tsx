import React, { memo } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export const CategoryItem = memo(
  ({ label, selected = false }: { label: string; selected: boolean }) => {
    return (
      <div className={classnames([styles.item, { active: selected }])}>
        <span className={styles.itemText}>
          <span>{label}</span>
          <br></br>
        </span>
      </div>
    )
  }
)
