import React, { memo } from 'react'

import { Item } from '@components'
import styles from './styles.module.scss'

export const WrapperCarousel: React.FC<any> = memo(() => {
  return (
    <div className={styles.wrapperCarousel}>
      {[
        {
          title: 'Collection 1',
          subtitleMain: 'Floor',
          subtitleSecondary: '24H Volume',
          volume: '16700 XRD',
          _24h: '325 K XRD',
        },
        {
          title: 'Collection 2',
          subtitleMain: 'Floor',
          subtitleSecondary: '24H Volume',
          volume: '16700 XRD',
          _24h: '325 K XRD',
        },
        {
          title: 'Collection 3',
          subtitleMain: 'Floor',
          subtitleSecondary: '24H Volume',
          volume: '16700 XRD',
          _24h: '325 K XRD',
        },
        {
          title: 'Collection 4',
          subtitleMain: 'Floor',
          subtitleSecondary: '24H Volume',
          volume: '16700 XRD',
          _24h: '325 K XRD',
        },
        {
          title: 'Collection 5',
          subtitleMain: 'Floor',
          subtitleSecondary: '24H Volume',
          volume: '16700 XRD',
          _24h: '325 K XRD',
        },
      ].map((item) => (
        <Item key={item.title} data={item} />
      ))}
    </div>
  )
})
