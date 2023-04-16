import React, { memo } from 'react'

import './styles.scss'

export const Item: React.FC<any> = memo(
  (
    props = {
      text3: '24H Volume',
      text4: '325 K XRD',
      text: 'Collection 1',
      text2: '16700 XRD',
      text1: 'floor',
    }
  ) => {
    return (
      <div className='item1-item1'>
        <div className='item1-image-header'></div>
        <div className='item1-text-box'>
          <div className='item1-container'>
            <span className='item1-text'>{props.text}</span>
          </div>
          <div className='item1-container1'>
            <div className='item1-floor'>
              <span className='item1-text1 SmallestLabels'>{props.text1}</span>
              <span className='item1-text2 Content16SemiBold'>
                {props.text2}
              </span>
            </div>
            <div className='item1-volume24'>
              <span className='item1-text3 SmallestLabels'>{props.text3}</span>
              <span className='item1-text4 Content16SemiBold'>
                {props.text4}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
