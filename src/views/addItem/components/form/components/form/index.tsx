import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom'


export const FormComponent = memo(() => {
    const [tags, setTags] = useState([
        "Avatars", "Art", "Gaming", "Memberships", "Tickets", "Music", "Video", "Other"
    ])
    return (
        <form className={styles.addItemForm} >
            <div className={styles.addItemField}>
                <label className={`${styles.addItemText02} padding-4px-left Content`}>
                    Name Item:
                </label>
                <input
                    type='text'
                    placeholder='Hand drawn landscape...'
                    className={`${styles.addItemTextinput} Content16SemiBold focus-reset-forms input`}
                />
            </div>
            <div className={styles.addItemArea}>
                <label className={`${styles.addItemText03} padding-4px-left`}>
                    Description in max 250 characters (Appears in Items
                    Metadata):
                </label>
                <textarea
                    placeholder='Something short about my collection...'
                    className={`${styles.addItemTextarea} Content16SemiBold textarea focus-reset-forms`}
                ></textarea>
            </div>
            <div className={`${styles.addItemFieldImage}`}>
                <label className={`${styles.addItemText04} padding-4px-left`}>
                    Image file: JPG, PNG, GIF, SVG.
                </label>
                <div className={styles.addItemContainer05}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addItemTextinput1} Content16SemiBold focus-reset-forms input`}
                    />
                    <button className={`${styles.addItemButton} button Content16SemiBold`}>
                        <svg viewBox='0 0 1024 1024' className={styles.addItemIcon}>
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addItemContainer06}>
                    <svg viewBox='0 0 1024 1024' className={styles.addItemIcon02}>
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
                <label className={`${styles.addItemText05} padding-4px-left`}>
                    Select the way the image is displayed within the frame:
                </label>
                <div className={styles.addItemContainer07}>
                    <div className={styles.addItemContainer08}>
                        <button
                            type='button'
                            className={`${styles.addItemButton01} button Content16SemiBold`}
                        >
                            <img
                                alt='image'
                                src='/playground_assets/contain.svg'
                                className={styles.addItemImage}
                            />
                            <span className={styles.addItemText06}>
                                <span>
                                    Contain
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <br></br>
                            </span>
                        </button>
                        <button
                            type='button'
                            className={`${styles.addItemButton02} button Content16SemiBold`}
                        >
                            <img
                                alt='image'
                                src='/playground_assets/cover.svg'
                                className={styles.addItemImage1}
                            />
                            <span className={styles.addItemText09}>
                                <span>Fill frame</span>
                                <br></br>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.addItemField1}>
                <div className={styles.addItemContainer09}>
                    <button className={`${styles.addItemButton03} button Content16SemiBold`}>
                        <svg viewBox='0 0 1024 1024' className={styles.addItemIcon04}>
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                        <span className={styles.addItemText12}>
                            <span>
                                Add
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <br></br>
                        </span>
                    </button>
                </div>
                <div className={styles.addItemContainer10}>
                    <div className={`${styles.addItemAttributeRow}`}>
                        <div className={styles.addItemContainer11}>
                            <input
                                type='text'
                                placeholder='Name...'
                                className={`${styles.addItemTextinput2} focus-reset-forms input Content16SemiBold`}
                            />
                            <input
                                type='text'
                                placeholder='Value...'
                                className={`${styles.addItemTextinput3} focus-reset-forms input Content16SemiBold`}
                            />
                        </div>
                        <button className={`${styles.addItemButton04} button Content16SemiBold`}>
                            <svg
                                viewBox='0 0 1024 1024'
                                className={styles.addItemIcon06}
                            >
                                <path d='M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z'></path>
                            </svg>
                            <span className={styles.addItemText15}>
                                <span>Remove</span>
                                <br></br>
                            </span>
                        </button>
                    </div>
                    <div className={`${styles.addItemAttributeRow1}`}>
                        <div className={styles.addItemContainer12}>
                            <input
                                type='text'
                                placeholder='Name...'
                                className={`${styles.addItemTextinput4} focus-reset-forms Content16SemiBold input`}
                            />
                            <input
                                type='text'
                                placeholder='Value...'
                                className={`${styles.addItemTextinput5} focus-reset-forms Content16SemiBold input`}
                            />
                        </div>
                        <button className={`${styles.addItemButton05} button Content16SemiBold`}>
                            <svg
                                viewBox='0 0 1024 1024'
                                className={styles.addItemIcon08}
                            >
                                <path d='M662 170h148v86h-596v-86h148l44-42h212zM360 506l92 92-90 90 60 60 90-90 90 90 60-60-90-90 90-92-60-60-90 92-90-92zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z'></path>
                            </svg>
                            <span className={styles.addItemText18}>
                                <span>Remove</span>
                                <br></br>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.addItemTags}>
                <label className={`${styles.addItemText21} padding-4px-left`}>
                    Select one or more categories for your item:
                </label>
                <div className={styles.addItemContainer13}>
                    {
                        tags.map((tag) => {
                            return (
                                <button
                                    type='button'
                                    className={`${styles.addItemButton06} button Content16SemiBold`}
                                >
                                    <span className={styles.addItemText22}>
                                        <span>{tag}</span>
                                        <br></br>
                                    </span>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${styles.addItemBottomButtons}`}>
                <button className={`${styles.addItemButton14} button`}>
                    <span className={styles.addItemText46}>
                        <span>Save Draft</span>
                        <br></br>
                    </span>
                </button>
                <button className={`${styles.addItemButton15} button`}>
                    <span className={styles.addItemText49}>
                        <span>Preview Item</span>
                        <br></br>
                    </span>
                    <svg viewBox='0 0 1024 1024' className={styles.addItemIcon10}>
                        <path d='M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z'></path>
                    </svg>
                </button>
            </div>
        </form>
    )
})