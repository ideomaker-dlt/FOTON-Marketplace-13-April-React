import React, { memo } from 'react'

import styles from './styles.module.scss'
import { CategoriesButton, Timeframes } from '../'

export const Categories = memo(() => {
  return (
    <div className={styles.container}>
      <CategoriesButton />
      <Timeframes />
    </div>
  )
})
