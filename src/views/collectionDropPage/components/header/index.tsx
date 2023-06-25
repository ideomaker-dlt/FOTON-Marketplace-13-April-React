import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Name } from './name'
import { Follow } from './follow'
import styles from './styles.module.scss'


export const Header = memo(() => {
    return (
        <div className={styles.collectionDropPageHeader}>
            <Name />
            <Follow />
        </div>
    )


})