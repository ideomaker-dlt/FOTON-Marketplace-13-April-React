import React, { memo, useState } from 'react'

import styles from './styles.module.scss'
import { RarityRank } from './components/rarityRank'
import { Status } from './components/status'
import { Attribute } from './components/attribute'



export const Filter = memo(() => {
  const [attributes, setAttributes] = useState([
    {
      "title": "Attribute one",
      "total": 328,
      "data": [
        {
          "title": "Attribute nr 1",
          "total": 328,
        },
        {
          "title": "Attribute nr 1",
          "total": 328,
        },
        {
          "title": "Attribute nr 1",
          "total": 328,
        }
      ]
    },
    {
      "title": "Attribute two",
      "total": 328,
      "data": [
        {
          "title": "Attribute nr 2",
          "total": 328,
        },
        {
          "title": "Attribute nr 2",
          "total": 328,
        },
        {
          "title": "Attribute nr 2",
          "total": 328,
        }
      ]
    }
  ])


  return (
    <div className={styles.filtersSideMenu}>
      <RarityRank />
      <Status />
      <div className={styles.separationLine}></div>
      {
        attributes.map((attribute) => (
          <Attribute attribute={attribute} />
        ))
      }


    </div >
  )
})


