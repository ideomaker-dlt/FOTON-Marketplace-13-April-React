import React, { memo } from 'react'

import styles from './styles.module.scss'
import { Categories, Table } from './components'

export const RankingList: React.FC<any> = memo(() => {
  return (
    <div className={styles.container}>
      <Categories />
      <Table />
    </div>
  )
})

export * from './types'
