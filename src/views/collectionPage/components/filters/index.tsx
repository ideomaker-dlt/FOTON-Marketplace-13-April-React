import React, { memo, useState } from 'react'
import styles from "./styles.module.scss"
// @ts-ignore
import DangerousHTML from 'dangerous-html/react'

export const Filters = memo(() => {
    const [timeframes, setTimeframes] = useState([
        "1h", "6h", "24h", "7d"
    ])
    const [sortByAry, setSortByAry] = useState([
        "Name", "Price Low to High", "Price High to Low", "Status", "Most Rare", "Newest Listed", "Oldest"
    ])
    return (
        <div className={styles.collectionPageTabsRowFilters}>
            <div className={styles.collectionPageFilterButtons}>
                <div className={styles.collectionPageTimeframe}>
                    {
                        timeframes.map((timeframe, index) => (
                            <button key={index} className={styles.collectionPageButton05}>
                                <span className={styles.collectionPageText39}>
                                    <span>{timeframe}</span>
                                    <br></br>
                                </span>
                            </button>
                        ))
                    }
                </div>

                <div className={styles.collectionPageSearchbar}>
                    <form className={styles.collectionPageForm}>
                        <button className={`${styles.collectionPageButton09} button`}>
                            <svg
                                viewBox="0 0 1024 1024"
                                className={styles.collectionPageIcon10}>
                                <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="mainsearch"
                            name="search-field"
                            placeholder="Search by name..."
                            className={`${styles.collectionPageTextinput} Content18 focus-reset input`}
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
                            ></DangerousHTML>
                        </div>
                    </form>
                </div>
                <button type="button" className={styles.collectionPageButton10}>
                    <svg viewBox="0 0 1024 1024" className={styles.collectionPageIcon12}>
                        <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
                    </svg>
                    <span className={styles.collectionPageText51}>
                        <span>Filters</span>
                        <br></br>
                    </span>
                </button>
            </div>
            <div className={styles.collectionPageFilterButtons1}>
                <div className={styles.collectionPageTimeframe1}>
                    {
                        timeframes.map((timeframe, index) => (
                            <button key={index} className={styles.collectionPageButton11}>
                                <span className={styles.collectionPageText54}>
                                    <span>{timeframe}</span>
                                    <br></br>
                                </span>
                            </button>
                        ))
                    }
                </div>
                <div
                    data-thq="thq-dropdown"
                    className={`${styles.collectionPageSortBy} list-item`}>
                    <div
                        data-thq="thq-dropdown-toggle"
                        className={styles.collectionPageDropdownToggle}>
                        <svg viewBox="0 0 1024 1024" className={`${styles.collectionPageIcon14}`}>
                            <path d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"></path>
                        </svg>
                        <span className={styles.collectionPageText66}>Sort by Status</span>
                        <div
                            data-thq="thq-dropdown-arrow"
                            className={styles.collectionPageDropdownArrow}>
                            <svg
                                viewBox="0 0 1024 1024"
                                className={styles.collectionPageIcon16}>
                                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                            </svg>
                        </div>
                    </div>
                    <ul
                        data-thq="thq-dropdown-list"
                        className={styles.collectionPageDropdownList}>
                        <li
                            data-thq="thq-dropdown"
                            className={`${styles.collectionPageDropdown} list-item`}>
                            {
                                sortByAry.map((sortBy, ind) => (
                                    <div key={ind} data-thq="thq-dropdown-toggle" className={styles.collectionPageDropdownToggle1}>
                                        <span className={styles.collectionPageText67}>
                                            {sortBy}
                                        </span>
                                    </div>
                                ))
                            }
                        </li>
                    </ul>
                </div>
                <button type="button" className={styles.collectionPageButton15}>
                    <svg viewBox="0 0 1024 1024" className={styles.collectionPageIcon18}>
                        <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
                    </svg>
                    <span className={styles.collectionPageText74}>
                        <span>Select All</span>
                        <br></br>
                    </span>
                </button>
            </div>
        </div>
    )


})