import React, { memo, useState } from 'react'
import styles from './styles.module.scss'


export const Item = memo(({ item }: any) => {
    return (
        <div className={styles.collectionItemsContainerItem1}>
            <div className={styles.collectionItemsContainerImageHeader}>
                <input
                    type='checkbox'
                    className={styles.collectionItemsContainerCheckbox10}
                />
            </div>
            <div className={styles.collectionItemsContainerTextBox}>
                <div className={styles.collectionItemsContainerContainer21}>
                    <span className={styles.collectionItemsContainerText31}>
                        {item.text}
                    </span>
                </div>
                <div className={styles.collectionItemsContainerContainer22}>
                    <div className={styles.collectionItemsContainerFloor}>
                        <span className={`${styles.collectionItemsContainerText32} SmallestLabels`}>
                            {item.text2}
                        </span>
                        <span className={`${styles.collectionItemsContainerText33} Content16SemiBold`}>
                            {item.text4}
                        </span>
                    </div>
                    <div className={styles.collectionItemsContainerVolume24}>
                        <span className={`${styles.collectionItemsContainerText34} SmallestLabels`}>
                            {item.text3}
                        </span>
                        <div className={styles.collectionItemsContainerContainer23}>
                            <span className={styles.collectionItemsContainerText35}>
                                {item.text5}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})


