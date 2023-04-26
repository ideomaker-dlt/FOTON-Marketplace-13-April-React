import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"


export const DropList = memo(() => {
    const [drops, setDrops] = useState([
        {
            "img": "playground_assets/vlad__foton.is__radix.stream_landscape_from_a_star_wars_city_on_f4c0cd19-f3b4-41bd-bbf9-b240bdd757c1-1500w.png",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        }, {
            "img": "",
            "name": "Collection 1",
            "price": "TBA",
            "minting": "SOON",
        },

    ])
    return (
        <div className={styles.dropsDropsContainer}>
            <div className={styles.dropsWrapperGrid}>
                {drops.map((drop, index) => (
                    <Link to="/collection-drop-page">
                        <div className={styles.dropsItem1}>
                            <div className={styles.dropsImageHeader}></div>
                            <div className={styles.dropsTextBox}>
                                <div className={styles.dropsContainer09}>
                                    <span className={styles.dropsText09}>{drop.name}</span>
                                </div>
                                <div className={styles.dropsContainer10}>
                                    <div className={styles.dropsFloor}>
                                        <span className={`${styles.dropsText10} SmallestLabels`}>price</span>
                                        <span className={`${styles.dropsText11} Content16SemiBold`}>
                                            {drop.price}
                                        </span>
                                    </div>
                                    <div className={styles.dropsVolume24}>
                                        <span className={`${styles.dropsText12} SmallestLabels`}>
                                            Minting
                                        </span>
                                        <span className={`${styles.dropsText13} Content16SemiBold`}>
                                            {drop.minting}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }

            </div>
        </div>
    )


})