import React, { memo } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Form = memo(() => {

    return (
        <form className={styles.addCollection1Form}>
            <div className={styles.addCollection1Field}>
                <label className={`${styles.addCollection1Text13} padding-4px-left Content`}>
                    Name Collection:
                </label>
                <input
                    type='text'
                    placeholder='The Funky Apes Crew...'
                    className={`${styles.addCollection1Textinput} focus-reset-forms Content16SemiBold input`}
                />
            </div>
            <div className={styles.addCollection1Field1}>
                <label className={`${styles.addCollection1Text14} Content padding-4px-left`}>
                    Type of Collection:
                </label>
                <div className={styles.addCollection1Container06}>
                    <div className={styles.addCollection1CardSmall}>
                        <div className={styles.addCollection1Container07}>
                            <label className={styles.addCollection1Text15}>
                                Uniform
                            </label>
                            <svg
                                viewBox='0 0 1024 1024'
                                className={styles.addCollection1Icon08}
                            >
                                <path d='M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM512 298q88 0 151 63t63 151-63 151-151 63-151-63-63-151 63-151 151-63z'></path>
                            </svg>
                        </div>
                        <div className={styles.addCollection1Container08}>
                            <span className={styles.addCollection1Text16}>
                                <span>
                                    This type of collection has all the Attributes
                                    defined now for all the Items to be added later to
                                    it.
                                </span>
                                <br></br>
                                <br></br>
                                <span>
                                    Such collections are the Generated ones on layers,
                                    where each item needs to follow the same pattern of
                                    Attributes.
                                </span>
                                <br></br>
                                <br></br>
                                <span>
                                    An example is a collection of Avatar pictures with
                                    Attributes as Eyes, Head, Mouth, etc.
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.addCollection1CardSmall1}>
                        <div className={styles.addCollection1Container09}>
                            <label className={styles.addCollection1Text24}>Mixed</label>
                            <svg
                                viewBox='0 0 1024 1024'
                                className={styles.addCollection1Icon10}
                            >
                                <path d='M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z'></path>
                            </svg>
                        </div>
                        <div className={styles.addCollection1Container10}>
                            <span className={styles.addCollection1Text25}>
                                <span>
                                    This type of collection has no restrictions when it
                                    comes to what type of items has inside, or what
                                    Attributes they will have.
                                </span>
                                <br></br>
                                <br></br>
                                <span>
                                    As example can be collections with 1:1 rarity, like
                                    a painting. Every time you would make a painting,
                                    you&apos;ll just add it to the Collection with its
                                    own amount of Attributes.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.addCollection1Field2}>
                <label className={`${styles.addCollection1Text30} padding-4px-left Content`}>
                    Collection Size (leave empty for Open collections):
                </label>
                <input
                    type='text'
                    placeholder='15000...'
                    className={`${styles.addCollection1Textinput1} Content16SemiBold focus-reset-forms input`}
                />
            </div>
            <div className={styles.addCollection1Field3}>
                <div className={styles.addCollection1Container11}>
                    <label className={`${styles.addCollection1Text31} Content  padding-4px-left`}>
                        Name of each NFT:
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </label>
                    <label className={`${styles.addCollection1Text32} Content  padding-4px-left`}>
                        Preview: &quot;Funky Ape #1&quot;
                    </label>
                </div>
                <input
                    type='text'
                    placeholder='Funky Ape #&#123;&#123;id&#125;&#125;'
                    className={`${styles.addCollection1Textinput2} focus-reset-forms input Content16SemiBold`}
                />
            </div>
            <div className={styles.addCollection1Area}>
                <label className={`${styles.addCollection1Text33}  padding-4px-left`}>
                    Description in max 250 characters (Appears in Items
                    Metadata):
                </label>
                <textarea
                    placeholder='Something short about my collection...'
                    className={`${styles.addCollection1Textarea} textarea focus-reset-forms Content16SemiBold`}
                ></textarea>
            </div>
            <div className={styles.addCollection1Area1}>
                <label className={`${styles.addCollection1Text34} padding-4px-left`}>
                    Long Description in max 1500 characters:
                </label>
                <textarea
                    placeholder='Something about my collection...'
                    className={`${styles.addCollection1Textarea1} textarea focus-reset-forms Content16SemiBold`}
                ></textarea>
            </div>
            <div className={styles.addCollection1FieldImage}>
                <label className={`${styles.addCollection1Text35} padding-4px-left`}>
                    Logo/Avatar image 1:1 ratio max 500 x 500px:
                </label>
                <div className={styles.addCollection1Container12}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addCollection1Textinput3} focus-reset-forms input Content16SemiBold`}
                    />
                    <button className={`${styles.addCollection1Button03} button Content16SemiBold`}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.addCollection1Icon12}
                        >
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addCollection1Container13}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.addCollection1Icon14}
                    >
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
            </div>
            <div className={styles.addCollection1FieldImage1}>
                <label className={`${styles.addCollection1Text36}  padding-4px-left`}>
                    Banner image 3:2 ratio (for Cards and Header). Ex. 3000 x
                    2000px:
                </label>
                <div className={styles.addCollection1Container14}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addCollection1Textinput4} focus-reset-forms Content16SemiBold input`}
                    />
                    <button className={`${styles.addCollection1Button04} button Content16SemiBold`}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.addCollection1Icon16}
                        >
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addCollection1Container15}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.addCollection1Icon18}
                    >
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
            </div>
            <div className={styles.addCollection1FieldImage2}>
                <label className={`${styles.addCollection1Text37}  padding-4px-left`}>
                    Slider image 3:1 ratio (for Front Page + Drop Page). Ex.
                    3000 x 1000px:
                </label>
                <div className={styles.addCollection1Container16}>
                    <input
                        type='text'
                        placeholder='Upload image...'
                        className={`${styles.addCollection1Textinput5} focus-reset-forms Content16SemiBold input`}
                    />
                    <button className={`${styles.addCollection1Button05} button Content16SemiBold`}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.addCollection1Icon20}
                        >
                            <path d='M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596z'></path>
                        </svg>
                    </button>
                </div>
                <div className={styles.addCollection1Container17}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.addCollection1Icon22}
                    >
                        <path d='M214 810h512l-172-212-128 170-84-128zM682 470h128v340q0 34-25 60t-59 26h-512q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h340v128h128v128zM810 298v128h-84v-128h-128v-84h128v-128h84v128h128v84h-128z'></path>
                    </svg>
                </div>
            </div>
            <div className={styles.addCollection1Tags}>
                <label className={`${styles.addCollection1Text38} padding-4px-left`}>
                    Select categories for your collection:
                </label>
                <div className={styles.addCollection1Container18}>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button06} button Content16SemiBold`}
                    >
                        <span className={styles.addCollection1Text39}>
                            <span>Avatars</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button07} button Content16SemiBold`}
                    >
                        <span className={styles.addCollection1Text42}>
                            <span>Art</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button08} button Content16SemiBold`}>
                        <span className={styles.addCollection1Text45}>
                            <span>Gaming</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button09} Content16SemiBold button`}>
                        <span className={styles.addCollection1Text48}>
                            <span>Memberships</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button10} Content16SemiBold button`}>
                        <span className={styles.addCollection1Text51}>
                            <span>Tickets</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button11} button Content16SemiBold`}>
                        <span className={styles.addCollection1Text54}>
                            <span>Music</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button12} button Content16SemiBold`}>
                        <span className={styles.addCollection1Text57}>
                            <span>Video</span>
                            <br></br>
                        </span>
                    </button>
                    <button
                        type='button'
                        className={`${styles.addCollection1Button13} button Content16SemiBold`}>
                        <span className={styles.addCollection1Text60}>
                            <span>Other</span>
                            <br></br>
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.addCollection1BottomButtons}>
                <button className={`${styles.addCollection1Button14} button`}>
                    <span className={styles.addCollection1Text63}>
                        <span>Save Draft</span>
                        <br></br>
                    </span>
                </button>
                <Link
                    to='/add-collection2'
                    className={`${styles.addCollection1Navlink2} button`}
                >
                    <span className={styles.addCollection1Text66}>
                        <span>Create Collection</span>
                        <br></br>
                    </span>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.addCollection1Icon24}
                    >
                        <path d='M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z'></path>
                    </svg>
                </Link>
            </div>
        </form>

    )


})