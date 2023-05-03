import React, { memo, useState } from 'react'
import styles from './styles.module.scss'


export const Item = memo(({ item }: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageHeader}>
                <input type='checkbox' />
            </div>

            <div className={styles.textBox}>
                <div className={styles.textTitle}>
                    <span>
                        {item.text}
                    </span>
                </div>
                <div className={styles.textDetails}>
                    <div className={styles.floor}>
                        <span className={`SmallestLabels`}>
                            {item.text2}
                        </span>
                        <span className={`Content16SemiBold`}>
                            {item.text4}
                        </span>
                    </div>
                    <div className={styles.volume}>
                        <span className={`SmallestLabels`}>
                            {item.text3}
                        </span>
                        <div>
                            <span>
                                {item.text5}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})


