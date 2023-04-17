import React, { memo } from 'react'
import classnames from 'classnames'

import { HeaderCarousel, WrapperCarousel } from '@components'
import styles from './styles.module.scss'

export const TrendingCarousel: React.FC<any> = memo(
  (props = { rootClassName: '' }) => {
    return (
      <div
        className={classnames([
          styles.trendingCarouselContainer,
          props.rootClassName,
        ])}
      >
        <HeaderCarousel />
        <WrapperCarousel />
      </div>
    )
  }
)
