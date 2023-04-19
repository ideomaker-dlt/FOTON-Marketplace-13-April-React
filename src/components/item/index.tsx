import React, { memo } from 'react'

import { INFTItem } from './types'
import styles from './styles.module.scss'


export const Item: React.FC<{ data: INFTItem }> = memo(({ data }) => {
  return (
    <div className={styles.nftItem}>
      <div className={styles.nftImageHeader}></div>
      <div className={styles.item1TextBox}>
        <div className={styles.item1Container}>
          <span className={styles.item1Text}>{data.title}</span>
        </div>
        <div className={styles.item1Container1}>
          <div className={styles.item1Floor}>
            <span className={`${styles.item1Text1} SmallestLabels`}>
              {data.subtitleMain}
            </span>
            <span className={`${styles.item1Text2} Content16SemiBold`}>{data.volume}</span>
          </div>
          <div className={styles.item1Volume24}>
            <span className={`${styles.item1Text3} SmallestLabels`}>
              {data.subtitleSecondary}
            </span>
            <span className={`${styles.item1Text4} Content16SemiBold`}>{data._24h}</span>
          </div>
        </div >
      </div >
    </div >
  )
})

export * from './types'
