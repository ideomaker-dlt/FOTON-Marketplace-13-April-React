import React, { memo } from 'react'

import styles from './styles.module.scss'

export const Timeframes = memo(() => {
  return (
    <div className={styles.container}>
      <div className='ranking-list-timeframe'>
        <button>
          <span>1h</span>
        </button>
        <button>
          <span>6h</span>
        </button>
        <button>
          <span>24h</span>
        </button>
        <button>
          <span>1d</span>
        </button>
        <button>
          <span>7d</span>
        </button>
        <button>
          <span>All</span>
        </button>
      </div>
    </div>
  )
})
