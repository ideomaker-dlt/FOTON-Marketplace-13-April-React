import React, { memo } from 'react'
import { default as ReactSelect, type Options } from 'react-select'

import styles from './styles.module.scss'

export const Select = memo(
  ({
    options,
  }: {
    options: Options<{
      value: string
      label: string
    }>
  }) => {
    return (
      <ReactSelect
        options={options}
        className={styles.select}
        classNames={{
          container: (state) => styles.selectContainer,
          control: (state) => styles.control,
          placeholder: (state) => styles.placeholder,
          menu: (state) => styles.menu,
          indicatorSeparator: (state) => styles.indicatorSeparator,
          singleValue: (state) => styles.placeholder,
        }}
        isSearchable={false}
        isClearable={true}
        placeholder='Category'
      />
    )
  }
)
