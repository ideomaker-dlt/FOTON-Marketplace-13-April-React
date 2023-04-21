import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { FormComponent, InfoBox } from './components'

export const Form = memo(() => {
    return (
        <div className={styles.addItemContainerForm}>
            <div className={styles.addItemUnderHeader}>
                <div className={styles.addItemCard}>
                    <FormComponent />
                    <InfoBox />
                </div>
            </div>
        </div>
    )
})