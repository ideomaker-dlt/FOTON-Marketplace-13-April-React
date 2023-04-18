import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Item } from './components/Item'
import internal from 'stream'

export const List: React.FC<any> = memo(
  ({ items }
  ) => {
    return (
      <div className={styles.collectionItemsContainerGridItems}>
        <div className={styles.collectionItemsContainerContainer20}>

          {

            items.map((item: any, key: internal) => (
              <>
                <Item item={item} />
              </>
            ))
          }

        </div >
      </div >
    )
  }
)


List.defaultProps = {
  "items": [
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "UNLISTED",
      text4: "16700 XRD",
      text5: "no offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
    {
      text: "Item one",
      text2: "Price",
      text3: "LISTED",
      text4: "16700 XRD",
      text5: "2 offers"
    },
  ]

}
