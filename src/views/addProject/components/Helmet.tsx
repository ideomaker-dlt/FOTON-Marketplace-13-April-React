import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

export const HelmetComponent = memo(() => {
    return (
        <Helmet>
            <title>
                Add-Project - FOTON Marketplace for NFTs and Digital Collectibles on
                Radix DLT
            </title>
            <meta
                name='description'
                content='Collect , Trade or Mint NFTs and find your Communities'
            />
            <meta
                property='og:title'
                content='Add-Project - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT'
            />
            <meta
                property='og:description'
                content='Collect , Trade or Mint NFTs and find your Communities'
            />
        </Helmet>
    )
})