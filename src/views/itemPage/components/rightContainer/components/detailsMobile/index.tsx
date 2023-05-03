import React, { memo } from 'react'
import styles from "./styles.module.scss"
export const DetailsMobile = memo(() => {
    return (
        <div className={styles.details}>
            <div>
                <span>Details</span>
                <span>Description</span>
                <span>Creator</span>
            </div>
            <div>
                <h2>
                    The crew of pirates gathered around a campfire on a tropical
                    island, their ship anchored offshore. They toasted their
                    recent plunder and shared stories of adventure. The sound of
                    waves and the scent of saltwater filled the air, as they
                    planned their next raid under the glow of the moon.
                </h2>
            </div>
        </div>
    )
})
