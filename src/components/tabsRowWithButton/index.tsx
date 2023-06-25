import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { Filter, GoBack } from './components'

export const TabsRowWithButtons: React.FC<any> = memo(
  (
    props = {
      rootClassName: '',
    }
  ) => {
    return (
      <div className={`${styles.row} ${props.rootClassName} `}>
        <GoBack />
        <Filter />
      </div>
    )
  }
)
