import React, { memo } from 'react'
// @ts-ignore
import DangerousHTML from 'dangerous-html/react'
import styles from './styles.module.scss'

export const SearchBar = memo(() => {
    return (
        <div className={styles.searchbar}>
            <form className={styles.form}>
                <button className={`${styles.layoutWithSidebarButton} button`}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.layoutWithSidebarIcon1}
                    >
                        <path
                            d='M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z'
                        ></path>
                    </svg>
                </button>
                <input
                    type='text'
                    id='mainsearch'
                    name='search-field'
                    placeholder='Search...'
                    className={`focus-reset Content18 input`}
                />
                <div>
                    <DangerousHTML
                        html={`<style>
                          input::placeholder #searchfield { /* Chrome, Firefox, Opera, Safari 10.1+ */
                          color: red;
                          opacity: 1; /* Firefox */
                          }

                          ::-ms-input-placeholder { /* Internet Explorer 10-11 */
                          color: red;
                          }

                          ::-ms-input-placeholder { /* Microsoft Edge */
                          color: red;
                          }
                          input[type="search"]::-webkit-search-decoration,
                          input[type="search"]::-webkit-search-cancel-button,
                          input[type="search"]::-webkit-search-results-button,
                          input[type="search"]::-webkit-search-results-decoration {
                          -webkit-appearance:none;
                          }
                          </style>`}
                        className=''
                    ></DangerousHTML>
                </div>
            </form>
        </div >
    )
}
)