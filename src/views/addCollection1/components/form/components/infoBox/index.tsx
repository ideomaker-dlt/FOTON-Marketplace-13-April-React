import React, { memo } from 'react'
import styles from './styles.module.scss'


export const InfoBox = memo(() => {

    return (

        <div className={`${styles.addCollection1InfoBox} `}>
            <div className={styles.addCollection1Container19}>
                <h1 className={`${styles.addCollection1Text69} Content18`}>
                    <span>Info:</span>
                    <br></br>
                </h1>
                <span className={styles.addCollection1Text72}>
                    <span>
                        Collections on FOTON are similar to folders on your PC.
                        Until you add items inside them they are just an empty box
                        with a name and a size limit.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                        After you finish defining your collection you will be able
                        to fill it up with items in one go, or add them every now
                        and then as it suits you best.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                        Once you&apos;ve minted items inside the collection, its
                        settings can&apos;t be altered anymore.
                    </span>
                    <br></br>
                </span>
            </div>
        </div>

    )


})