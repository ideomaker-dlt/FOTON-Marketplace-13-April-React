import React, { memo } from 'react'
import styles from './styles.module.scss'

export const Header = memo(() => {

    return (
        <div className={styles.addCollection1HeaderCreator}>
            <div className={styles.addCollection1Container01}>
                <div className={styles.addCollection1Container02}>
                    <div className={styles.addCollection1Container03}>
                        <h1 className={styles.addCollection1Text}>Create New Collection</h1>
                    </div>
                </div>
            </div>
            <div className={styles.addCollection1MaskOverlay}></div>
        </div>
    )


})