import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Image } from './image'
import { Info } from './info'
import styles from "./styles.module.scss"

export const Detail = memo(() => {
    return (
        <div className={styles.collectionPageContainer01}>
            <Image />
            <Info />
        </div>
    )


})