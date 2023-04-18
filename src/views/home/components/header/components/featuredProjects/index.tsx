import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, FreeMode } from 'swiper'

import styles from './styles.module.scss'

export const FeaturedProjects = memo(() => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      containerModifierClass={styles.featuredProjectsContainer}
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
          slidesPerView: 3,
        },
        '@1.00': {
          slidesPerView: 4,
        },
        '@1.50': {
          slidesPerView: 5,
        },
      }}
    >
      {[
        '/playground_assets/vlad__foton.is__radix.stream_henri_rousseau_lake_forest_plants__87e8e70c-2d60-4e19-880e-7066b889259a-200h.png',
        '/playground_assets/vlad__foton.is__radix.stream_profile_picture_of_a_funny_ape_wit_24344936-61da-4486-8cea-734b46ac241a-200h.png',
        '/playground_assets/grid_0%20%5B4%5D-1500w.webp',
        '/playground_assets/photo_2023-03-29%2014.08.30-200h.jpeg',
        '/playground_assets/photo_2023-04-08%2023.42.33-200h.jpeg',
      ].map((image) => (
        <SwiperSlide key={image}>
          <div
            className={styles.featuredProject}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
})
// <Carousel
//   cols={1}
//   rows={1}
//   gap={10}
//   loop
//   containerClassName={styles.featuredProjectsContainer}
// >
//   {[
//     '/playground_assets/vlad__foton.is__radix.stream_henri_rousseau_lake_forest_plants__87e8e70c-2d60-4e19-880e-7066b889259a-200h.png',
//     '/playground_assets/vlad__foton.is__radix.stream_profile_picture_of_a_funny_ape_wit_24344936-61da-4486-8cea-734b46ac241a-200h.png',
//     '/playground_assets/grid_0%20%5B4%5D-1500w.webp',
//     '/playground_assets/photo_2023-03-29%2014.08.30-200h.jpeg',
//     '/playground_assets/photo_2023-04-08%2023.42.33-200h.jpeg',
//   ].map((image) => (
//     <Carousel.Item
//       key={image}
//       className={styles.featuredProject}
//       style={{
//         backgroundImage: `url(${image})`,
//       }}
//     >
//       <></>
//       {/* <div
//         className={}

//       /> */}
//     </Carousel.Item>
//   ))}
// </Carousel>
