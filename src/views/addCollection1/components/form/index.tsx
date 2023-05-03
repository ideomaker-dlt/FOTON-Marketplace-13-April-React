import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Form as FormComponent, InfoBox } from './components'

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