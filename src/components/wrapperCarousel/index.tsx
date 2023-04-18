import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, FreeMode } from 'swiper'

import { Item } from '@components'
import styles from './styles.module.scss'

export const WrapperCarousel: React.FC<any> = memo(() => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={3}
      containerModifierClass={styles.wrapperCarousel}
      autoHeight={true}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter: true,
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      grabCursor={true}
      modules={[Autoplay, FreeMode]}
      style={{ width: '100%', borderRadius: 12 }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
        },
        '@0.75': {
          slidesPerView: 4,
        },
        '@1.00': {
          slidesPerView: 5,
        },
      }}
    >
      {/* <div className={styles.wrapperCarousel}> */}
      {new Array(9).fill(null).map((_, index) => (
        <SwiperSlide key={index}>
          <Item
            data={{
              title: 'Collection ' + (index + 1),
              subtitleMain: 'Floor',
              subtitleSecondary: '24H Volume',
              volume: '16700 XRD',
              _24h: '325 K XRD',
            }}
          />
        </SwiperSlide>
      ))}
      {/* </div> */}
    </Swiper>
  )
})
