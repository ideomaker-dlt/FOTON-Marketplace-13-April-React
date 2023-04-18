import React, { memo } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'
import {
  SecondColumnChange,
  SecondColumnHeader,
  SecondColumnOwners,
  TableRow,
} from '../'

export const TableHeader = memo(() => {
  return (
    <>
      <div className={styles.tableHeader}>
        <div className='header-first-column'>
          <span className={classnames([styles.index, 'Content16SemiBold'])}>
            #
          </span>
        </div>
        <div className='header-second-column'>
          <SecondColumnHeader />
          <SecondColumnChange />
          <SecondColumnOwners />
        </div>
      </div>
    </>
  )
})
