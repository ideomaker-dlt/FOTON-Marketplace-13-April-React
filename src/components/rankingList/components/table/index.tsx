import React, { memo } from 'react'

import styles from './styles.module.scss'
import { TableHeader, TableRow } from './components'
import { IRankItem } from 'components/rankingList/types'

const data: IRankItem[] = [
  {
    index: 1,
    image:
      '/playground_assets/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png',
    name: 'Micro Astronauts',
    value: '182 M XRD',
    changePercentage: '+31%',
    floorAmount: '12645 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 2,
    image:
      '/playground_assets/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png',
    name: 'Scrypto Ninja',
    value: '379 M XRD',
    changePercentage: '+31%',
    floorAmount: '4245 XRD',
    changeAmount: 8888,
    ownersTotal: 8637,
    listedPercent: 12,
  },
  {
    index: 3,
    image: '/playground_assets/grid_0%20%5B4%5D-200h.webp',
    name: 'Keyboard Samurai',
    value: '245 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 4,
    image: '/playground_assets/grid_0%20%5B7%5D-200h.webp',
    name: 'Digi Mecha Ultimate',
    value: '45 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 5,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_samurai_warrior_portret_with_sword_ef86e3e2-36ae-4453-90e2-6dda1ad3bb49-200h.png',
    name: 'Super Blade',
    value: '43 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 100,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 101,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 102,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 103,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 100,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 104,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
  {
    index: 105,
    image:
      '/playground_assets/vlad__foton.is__radix.stream_pirate_portret_in_the_style_of_old_4ebe8238-6ff2-4f0e-85e9-db256f6ed64e-200h.png',
    name: 'Philosophical Pirates',
    value: '32 K XRD',
    changePercentage: '+31%',
    floorAmount: '1245 XRD',
    changeAmount: 15000,
    ownersTotal: 9478,
    listedPercent: 12,
  },
]

export const Table = memo(() => {
  return (
    <div className={styles.container}>
      <TableHeader />
      {data.map((item) => (
        <TableRow key={item.index} data={item} />
      ))}
    </div>
  )
})
