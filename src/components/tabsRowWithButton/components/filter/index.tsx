import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

export const Filter = memo(() => {
    const [timeframes, setTimeframes] = useState([
        "1h", "6h", "24h", "7d"
    ])
    const [sortByAry, setSortByAry] = useState([
        "Name", "Price Low to High", "Price High to Low", "Status", "Most Rare", "Newest Listed", "Oldest"
    ])
    return (
        <div className={styles.tabsRowWithButtonsFilterButtons}>
            <button type='button' className={styles.tabsRowWithButtonsButton}>
                <svg viewBox='0 0 1024 1024' className={styles.tabsRowWithButtonsIcon}>
                    <path d='M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z'></path>
                </svg>
                <span className={styles.tabsRowWithButtonsText01}>
                    <span>Filters</span>
                    <br></br>
                </span>
            </button>
            <div className={styles.tabsRowWithButtonsTimeframe}>
                {
                    timeframes.map((timeframe, index) => (
                        <button key={index} className={styles.tabsRowWithButtonsButton1}>
                            <span className={styles.tabsRowWithButtonsText04}>
                                <span>{timeframe}</span>
                                <br></br>
                            </span>
                        </button>
                    ))
                }
            </div>
            <div
                data-thq='thq-dropdown'
                className={`${styles.tabsRowWithButtonsSortBy} list-item`}>
                <div
                    data-thq='thq-dropdown-toggle'
                    className={styles.tabsRowWithButtonsDropdownToggle}>
                    <svg
                        viewBox='0 0 1024 1024'
                        className={styles.tabsRowWithButtonsIcon2}>
                        <path d='M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z'></path>
                    </svg>
                    <span className={styles.tabsRowWithButtonsText16}>
                        Sort by Status
                    </span>
                    <div
                        data-thq='thq-dropdown-arrow'
                        className={styles.tabsRowWithButtonsDropdownArrow}>
                        <svg
                            viewBox='0 0 1024 1024'
                            className={styles.tabsRowWithButtonsIcon4}>
                            <path d='M316 366l196 196 196-196 60 60-256 256-256-256z'></path>
                        </svg>
                    </div>
                </div>
                <ul
                    data-thq='thq-dropdown-list'
                    className={`${styles.tabsRowWithButtonsDropdownList}`}>
                    <li
                        data-thq='thq-dropdown'
                        className={`${styles.tabsRowWithButtonsDropdown} list-item`}>
                        {
                            sortByAry.map((sortBy, ind) => {
                                return (
                                    <div key={ind} data-thq='thq-dropdown-toggle'
                                        className={styles.tabsRowWithButtonsDropdownToggle1}>
                                        <span className={styles.tabsRowWithButtonsText17}>
                                            {sortBy}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </li>
                </ul>
            </div>
            <button type='button' className={styles.tabsRowWithButtonsButton5}>
                <svg
                    viewBox='0 0 1024 1024'
                    className={styles.tabsRowWithButtonsIcon6}>
                    <path d='M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z'></path>
                </svg>
                <span className={styles.tabsRowWithButtonsText24}>
                    <span>Select All</span>
                    <br></br>
                </span>
            </button>
        </div>
    )


})