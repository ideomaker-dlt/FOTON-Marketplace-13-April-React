import React, { memo } from 'react'

import { HeaderCarousel, WrapperCarousel } from '@components'
import './styles.scss'

export const TrendingCarousel: React.FC<any> = memo(
  (props = { rootClassName: '' }) => {
    return (
      <div
        className={`trending-carousel1-trending-carousel1 ${props.rootClassName} `}
      >
        <HeaderCarousel />
        <WrapperCarousel />
      </div>
    )
  }
)
