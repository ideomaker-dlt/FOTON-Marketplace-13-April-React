import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Menu = memo(() => {

    return (
        <div className={styles.addCollection1TabsRow}>
            <div className={styles.addCollection1Container04}>
                <Link
                    to='/creator-studio-project'
                    className={styles.addCollection1Navlink}
                >
                    &lt; go back
                </Link>
                <div className={styles.addCollection1Container05}>
                    <button type='button' className={styles.addCollection1Button}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={`${styles.addCollection1Icon} fill-color-white`}              >
                            <path d='M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z'></path>
                        </svg>
                        <span className={styles.addCollection1Text01}>
                            <span>Define Collection</span>
                            <br></br>
                        </span>
                    </button>
                    <Link to='/add-collection2' className={styles.addCollection1Navlink1}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={`${styles.addCollection1Icon02} fill-color-white`}              >
                            <path d='M512 682q-18-14-163-127t-221-171l384-298 384 298q-76 58-220 170t-164 128zM512 792l314-246 70 54-384 298-384-298 70-54z'></path>
                        </svg>
                        <span className={styles.addCollection1Text04}>
                            <span>Organise</span>
                            <br></br>
                        </span>
                    </Link>
                    <button type='button' className={styles.addCollection1Button01}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={`${styles.addCollection1Icon04} fill-color-white`}              >
                            <path d='M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z'></path>
                        </svg>
                        <span className={styles.addCollection1Text07}>
                            <span>Preview</span>
                            <br></br>
                        </span>
                    </button>
                    <button type='button' className={styles.addCollection1Button02}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={`${styles.addCollection1Icon06} fill-color-white`}              >
                            <path d='M384 690l452-452 60 60-512 512-238-238 60-60z'></path>
                        </svg>
                        <span className={styles.addCollection1Text10}>
                            <span>Confirm</span>
                            <br></br>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )


})