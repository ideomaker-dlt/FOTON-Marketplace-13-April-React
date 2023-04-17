import React, { memo } from 'react'

import styles from './styles.module.scss'

export const FeaturedProjects = memo(() => {
  return (
    <div className={styles.featuredProjectsContainer}>
      {[
        '/playground_assets/vlad__foton.is__radix.stream_henri_rousseau_lake_forest_plants__87e8e70c-2d60-4e19-880e-7066b889259a-200h.png',
        '/playground_assets/vlad__foton.is__radix.stream_profile_picture_of_a_funny_ape_wit_24344936-61da-4486-8cea-734b46ac241a-200h.png',
        '/playground_assets/grid_0%20%5B4%5D-1500w.webp',
        '/playground_assets/photo_2023-03-29%2014.08.30-200h.jpeg',
        '/playground_assets/photo_2023-04-08%2023.42.33-200h.jpeg',
      ].map((image) => (
        <div
          key={image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  )
})
