import React, { memo } from 'react'

import styles from './styles.module.scss'
import { IRankItem } from 'components/rankingList/types'

export const TableRow = memo(({ data }: { data: IRankItem }) => {
  return (
    <div className='table-row'>
      <div className='table-row-first-column'>
        <span className={styles.firstColumnSpan}>{data.index}</span>
        <div
          className={styles.firstColumnImage}
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        ></div>
      </div>
      <div className='table-row-second-column'>
        <div className={styles.secondColumnFirst}>
          <div>
            <span className='Content16SemiBold'>{data.name}</span>
          </div>
          <div>
            <span className='Content16SemiBold'>{data.value}</span>
          </div>
        </div>
        <div className={styles.secondColumnSecond}>
          <div>
            <span className='Content16SemiBold'>{data.changePercentage}</span>
          </div>
          <div>
            <span className='Content16SemiBold'>Floor:</span>
            <span className='Content16SemiBold'>{data.floorAmount}</span>
          </div>
          <div>
            <span className='ranking-list-text026'>{data.changeAmount}</span>
            <span className='ranking-list-change-mobile'>
              {data.changePercentage}
            </span>
          </div>
        </div>
        <div className={styles.secondColumnThird}>
          <div className={styles.owners}>
            <span className='Content16SemiBold'>{data.ownersTotal}</span>
          </div>
          <div className={styles.listed}>
            <span className='Content16SemiBold'>{data.listedPercent}%</span>
          </div>
          <div className={styles.follow}>
            <svg viewBox='0 0 1024 1024' className='ranking-list-icon02'>
              <path d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
})
