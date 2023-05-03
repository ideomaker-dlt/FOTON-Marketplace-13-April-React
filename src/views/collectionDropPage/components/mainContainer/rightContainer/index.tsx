import React, { memo } from 'react'
import styles from "./styles.module.scss"

export const RightContainer = memo(() => {
    return (
        <div className={styles.container}>
            <div >
                <div className={styles.collectionDropPageItemImage}>
                    <img
                        alt="image"
                        src="/playground_assets/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_deso_556dbc6d-d05c-43d6-b5a3-019912494a61-1500w.png"
                        className={styles.collectionDropPageImage1}
                    />
                </div>
                <div className={styles.collectionDropPageItemImage1}>
                    <img
                        alt="image"
                        src="/playground_assets/vlad__foton.is__radix.stream_scenery_on_a_new_alien_planet_inne_f7e1f32e-2759-4d97-ade9-00fbbe77368d-1500w.png"
                        className={styles.collectionDropPageImage2}
                    />
                </div>
                <div className={styles.collectionDropPageItemImage2}>
                    <img
                        alt="image"
                        src="/playground_assets/vlad__foton.is__radix.stream_character_mood_board_from_3_angles_e1a1e6fb-e0fe-497f-9fce-c022e03dd47a-1500w.png"
                        className={styles.collectionDropPageImage3}
                    />
                </div>
            </div>
        </div>
    )


})