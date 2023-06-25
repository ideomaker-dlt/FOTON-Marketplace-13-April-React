import React, { memo } from 'react'
import styles from "./styles.module.scss"
import { FormComponent, InfoBox } from './components'

export const Form = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <FormComponent />
                    <InfoBox />
                </div>
            </div>
        </div>
    )
})