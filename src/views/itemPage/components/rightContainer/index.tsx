import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { AddToFavorites, Avatars, DetailsMobile, Name, Offer, OffersAndActivity, Treats } from './components'
export const RightContainer = memo(() => {
    return (

        <div className={styles.itemPageContainerRight}>
            <div className={styles.itemPageItemInfoBox}>
                <Name />
                <Avatars />
                <Offer />
                <DetailsMobile />
                <AddToFavorites />
                <Treats />
                <OffersAndActivity />
            </div>
        </div>
    )
})
