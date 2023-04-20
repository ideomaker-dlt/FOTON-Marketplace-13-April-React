import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
export const Form = memo(() => {
    const [tags, setTags] = useState([
        "Art", "Metaverse", "Gaming", "Memberships", "Events", "E-Commerce", "Education", "Tech", "Software", "Open Source", "Writing", "Charity", "Finance", "Gated Content", "Music", "Movies", "Sports", "Entertainment", "Horeca", "Other"
    ])
    return (
        <form className={styles.addProjectForm}>
            <div className={styles.addProjectField}>
                <label className={`${styles.addProjectText02} padding-4px-left Content`}>
                    Name Project:
                </label>
                <input
                    type='text'
                    placeholder='My Brand name'
                    className={`${styles.addProjectTextinput} Content16SemiBold focus-reset-forms input`}
                />
            </div>
            <div className={styles.addProjectArea}>
                <label className={`${styles.addProjectText03} padding-4px-left`}>
                    Description in max 250 characters:
                </label>
                <textarea
                    placeholder='Something about my project...'
                    className={`${styles.addProjectTextarea} textarea Content16SemiBold focus-reset-forms`}
                ></textarea>
            </div>
            <div className={styles.addProjectArea1}>
                <label className={`${styles.addProjectText04} padding-4px-left`}>
                    Long Description in max 1500 characters:
                </label>
                <textarea
                    placeholder='Something about my project...'
                    className={`${styles.addProjectTextarea1} textarea focus-reset-forms Content16SemiBold`}
                ></textarea>
            </div>
            <div className={`${styles.addProjectField} image`}>
                <label className={`${styles.addProjectText05} padding-4px-left`}>
                    Logo/Avatar image 1:1 ratio max 500 x 500px:
                </label>
                <div className={styles.addProjectContainer05}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addProjectTextinput1} Content16SemiBold focus-reset-forms input`}
                    />
                    <button className={`${styles.addProjectButton} button Content16SemiBold `}>
                        <svg viewBox='0 0 1024 1024' className={styles.addProjectIcon}>
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addProjectContainer06}>
                    <svg viewBox='0 0 1024 1024' className={styles.addProjectIcon02}>
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
            </div>
            <div className={`${styles.addProjectField} image1`}>
                <label className={`${styles.addProjectText06} padding-4px-left`}>
                    Banner image 3:2 ratio. Ex. 3000 x 2000px:
                </label>
                <div className={styles.addProjectContainer07}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addProjectTextinput2} Content16SemiBold focus-reset-forms input`}
                    />
                    <button className={`${styles.addProjectButton01} button Content16SemiBold`}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.addProjectIcon04}
                        >
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addProjectContainer08}>
                    <svg viewBox='0 0 1024 1024' className={styles.addProjectIcon06}>
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
            </div>
            <div className={styles.addProjectTags}>
                <label className={`${styles.addProjectText07} padding-4px-left`}>
                    Select some tags close to your projects&apos; domain of
                    activity:
                </label>
                <div className={styles.addProjectContainer09}>
                    {
                        tags.map((tag) => {
                            return (
                                <button type='button'
                                    className={`${styles.addProjectButton02} button Content16SemiBold`}>
                                    <span className={styles.addProjectText08}>
                                        <span>{tag}</span>
                                        <br></br>
                                    </span>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${styles.addProjectBottomButtons} `}>
                <button className={`${styles.addProjectButton22} button`}>
                    <span className={styles.addProjectText68}>
                        <span>Save Draft</span>
                        <br></br>
                    </span>
                </button>
                <button className={`${styles.addProjectButton23} button`}>
                    <span className={styles.addProjectText71}>
                        <span>Create Project</span>
                        <br></br>
                    </span>
                    <svg viewBox='0 0 1024 1024' className={styles.addProjectIcon08}>
                        <path d='M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z'></path>
                    </svg>
                </button>
            </div>
        </form>
    )
})
