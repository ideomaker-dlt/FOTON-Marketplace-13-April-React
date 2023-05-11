import React, { memo } from 'react'
import styles from './styles.module.scss'
// import '../../styles.scss'
import { Link } from 'react-router-dom'
import { Form as FormComponent, InfoBox } from './components'

export const Form = memo(() => {

    return (

        <div className={styles.addCollection1ContainerForm}>
            <div className={styles.addCollection1UnderHeader}>
                <div className={styles.addCollection1Card}>

                    <FormComponent />
                    <InfoBox />
                  
                </div>
            </div>
        </div>
    )


})