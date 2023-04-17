import React, { memo } from 'react'

import { INFTItem } from './types'
import './styles.scss'

export const Item: React.FC<{ data: INFTItem }> = memo(({ data }) => {
  return (
    <div className='nft-item'>
      <div className='nft-image-header'></div>
      <div className='item1-text-box'>
        <div className='item1-container'>
          <span className='item1-text'>{data.title}</span>
        </div>
        <div className='item1-container1'>
          <div className='item1-floor'>
            <span className='item1-text1 SmallestLabels'>
              {data.subtitleMain}
            </span>
            <span className='item1-text2 Content16SemiBold'>{data.volume}</span>
          </div>
          <div className='item1-volume24'>
            <span className='item1-text3 SmallestLabels'>
              {data.subtitleSecondary}
            </span>
            <span className='item1-text4 Content16SemiBold'>{data._24h}</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export * from './types'
