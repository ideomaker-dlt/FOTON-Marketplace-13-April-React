import React, { memo } from 'react'

import styles from './styles.module.scss'

export const HeaderCarousel = memo(() => {
  return (
    <div className={styles.headerCarouselHeaderCarousel}>
      <div className={styles.headerCarouselTitle}>
        <h3 className={styles.headerCarouselText}>
          <span>Trending in Avatars</span>
          <br></br>
        </h3>
      </div>
      <span className={`${styles.headerCarouselText3}`}>View All</span>
    </div>
  )
})
