import React, { memo } from 'react'

import styles from './styles.module.scss'

export const HeaderCarousel = memo(() => {
  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <h3>
          <span>Trending in Avatars</span>
          <br></br>
        </h3>
      </div>
      <span>View All</span>
    </div>
  )
})
