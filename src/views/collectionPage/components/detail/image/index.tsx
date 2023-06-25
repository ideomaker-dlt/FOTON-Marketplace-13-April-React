import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import styles from "./styles.module.scss"


export const Image = memo(() => {
    return (
        <div className={styles.header}>
            <img
                alt="image"
                src="/playground_assets/vlad__foton.is__radix.stream_pirates_tropical_island_illustrati_766cf345-d799-426c-ac63-a659abb90994-1500w.png"
                className={styles.collectionPageImage}
            />
        </div>
    )


})