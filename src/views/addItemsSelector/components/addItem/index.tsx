import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const AddItem = memo(() => {
    return (
        <div className={styles.addItemsSelectorContainer05}>
            <Link to='/add-item'>
                <div className={styles.addItemsSelectorCollection}>
                    <div className={styles.addItemsSelectorContainer06}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={`${styles.addItemsSelectorIcon} fill-color-white`}>
                            <path d='M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z'></path>
                            <path d='M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z'></path>
                            <path d='M896 832h-768v-128l224-384 256 320h64l224-192z'></path>
                        </svg>
                    </div>
                    <div className={styles.addItemsSelectorContainer07}>
                        <h1 className={`${styles.addItemsSelectorText02} Heading3`}>
                            Add single Item
                        </h1>
                        <h1 className={`${styles.addItemsSelectorText03} Content`}>
                            <span>
                                For 1:1 collectibles that don&apos;t belong in a Uniform
                                Collection.
                            </span>
                            <br></br>
                        </h1>
                    </div>
                </div>
            </Link>
            <Link to='/add-collection2'>
                <div className={styles.addItemsSelectorCollection1}>
                    <div className={styles.addItemsSelectorContainer08}>
                        <svg
                            viewBox='0 0 1152 1024'
                            className={`${styles.addItemsSelectorIcon04} fill-color-white `}
                        >
                            <path d='M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z'></path>
                            <path d='M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z'></path>
                            <path d='M1024 896h-768v-128l224-384 256 320h64l224-192z'></path>
                        </svg>
                    </div>
                    <div className={styles.addItemsSelectorContainer09}>
                        <h1 className={`${styles.addItemsSelectorText06} Heading3`}>
                            Add Batch - More items
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </h1>
                        <h1 className={`${styles.addItemsSelectorText07} Content`}>
                            <span>
                                For collectibles that belong in a Uniform Collection created
                                previously.
                            </span>
                            <br></br>
                        </h1>
                    </div>
                </div >
            </Link >
            <Link to='/add-collection2'>
                <div className={styles.addItemsSelectorCollection2}>
                    <div className={styles.addItemsSelectorContainer10}>
                        <svg
                            viewBox='0 0 1152 1024'
                            className={`${styles.addItemsSelectorIcon08} fill-color-white`}
                        >
                            <path d='M1088 128h-64v-64c0-35.2-28.8-64-64-64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h64v64c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64zM128 192v640h-63.886c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v63.884h-768c-35.2 0-64 28.8-64 64v0zM1088 959.884c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.77c0.034-0.040 0.076-0.082 0.114-0.114h895.77c0.040 0.034 0.082 0.076 0.116 0.116v767.768z'></path>
                            <path d='M960 352c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z'></path>
                            <path d='M1024 896h-768v-128l224-384 256 320h64l224-192z'></path>
                        </svg>
                    </div>
                    <div className={styles.addItemsSelectorContainer11}>
                        <h1 className={`${styles.addItemsSelectorText10} Heading3`}>
                            Import Batch
                        </h1>
                        <h1 className={`${styles.addItemsSelectorText11} Content`}>
                            <span>
                                If you already have images for a Uniform Collection.
                            </span>
                            <br></br>
                        </h1>
                    </div >
                </div >
            </Link >
        </div >
    )
})
