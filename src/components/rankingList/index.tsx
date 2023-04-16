import React, { memo } from 'react'

import './styles.scss'

export const RankingList: React.FC<any> = memo(
  (props = { rootClassName: '' }) => {
    return (
      <div className={`ranking-list-ranking-list ${props.rootClassName} `}>
        <div className='ranking-list-categories'>
          <div className='ranking-list-container'>
            <div
              data-thq='thq-dropdown'
              className='ranking-list-category list-item'
            >
              <div
                data-thq='thq-dropdown-toggle'
                className='ranking-list-dropdown-toggle'
              >
                <span className='ranking-list-text'>Category</span>
                <div
                  data-thq='thq-dropdown-arrow'
                  className='ranking-list-dropdown-arrow'
                >
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon'>
                    <path
                      d='M316 366l196 196 196-196 60 60-256 256-256-256z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq='thq-dropdown-list'
                className='ranking-list-dropdown-list'
              >
                <li
                  data-thq='thq-dropdown'
                  className='ranking-list-dropdown list-item'
                >
                  <div
                    data-thq='thq-dropdown-toggle'
                    className='ranking-list-dropdown-toggle1'
                  >
                    <span className='ranking-list-text001'>Avatars</span>
                  </div>
                </li>
                <li
                  data-thq='thq-dropdown'
                  className='ranking-list-dropdown1 list-item'
                >
                  <div
                    data-thq='thq-dropdown-toggle'
                    className='ranking-list-dropdown-toggle2'
                  >
                    <span className='ranking-list-text002'>Art</span>
                  </div>
                  <div
                    data-thq='thq-dropdown-toggle'
                    className='ranking-list-dropdown-toggle3'
                  >
                    <span className='ranking-list-text003'>Games</span>
                  </div>
                </li>
                <li
                  data-thq='thq-dropdown'
                  className='ranking-list-dropdown2 list-item'
                >
                  <div
                    data-thq='thq-dropdown-toggle'
                    className='ranking-list-dropdown-toggle4'
                  >
                    <span className='ranking-list-text004'>Memberships</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='ranking-list-filter-buttons'>
            <div className='ranking-list-timeframe'>
              <button className='ranking-list-button'>
                <span className='ranking-list-text005'>1h</span>
              </button>
              <button className='ranking-list-button1'>
                <span className='ranking-list-text006'>6h</span>
              </button>
              <button className='ranking-list-button2'>
                <span className='ranking-list-text007'>24h</span>
              </button>
              <button className='ranking-list-button3'>
                <span className='ranking-list-text008'>1d</span>
              </button>
              <button className='ranking-list-button4'>
                <span className='ranking-list-text009'>7d</span>
              </button>
              <button className='ranking-list-button5'>
                <span className='ranking-list-text010'>All</span>
              </button>
            </div>
          </div>
        </div>
        <div className='ranking-list-top-collections'>
          <div className='ranking-list-header-table'>
            <div className='header-first-column'>
              <span className='ranking-list-text011 Content16SemiBold'>#</span>
            </div>
            <div className='header-second-column'>
              <div className='ranking-list-group1'>
                <div className='ranking-list-name'>
                  <span className='ranking-list-text012 Content16SemiBold'>
                    Collection
                  </span>
                </div>
                <div className='ranking-list-volume'>
                  <span className='ranking-list-text013 Content16SemiBold'>
                    Volume
                  </span>
                </div>
              </div>
              <div className='ranking-list-group2'>
                <div className='ranking-list-change'>
                  <span className='ranking-list-text014 Content16SemiBold'>
                    Change
                  </span>
                </div>
                <div className='ranking-list-floor'>
                  <span className='ranking-list-text015 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text016 Content16SemiBold'>
                    Floor
                  </span>
                </div>
                <div className='ranking-list-change01'>
                  <span className='ranking-list-text017 Content16SemiBold'>
                    Sales
                  </span>
                </div>
              </div>
              <div className='ranking-list-group-3'>
                <div className='ranking-list-owners'>
                  <span className='ranking-list-text018'>Owners</span>
                </div>
                <div className='ranking-list-listed'>
                  <span className='ranking-list-text019 Content16SemiBold'>
                    Listed
                  </span>
                </div>
                <div className='ranking-list-follow'>
                  <span className='ranking-list-text020 Content16SemiBold'>
                    Follow
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text021'>1</span>
              <div className='ranking-list-image'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group101'>
                <div className='ranking-list-name01'>
                  <span className='ranking-list-text022 Content16SemiBold'>
                    Micro Astronauts
                  </span>
                </div>
                <div className='ranking-list-volume01'>
                  <span className='ranking-list-text023 Content16SemiBold'>
                    182 M XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group201'>
                <div className='ranking-list-change02'>
                  <span className='ranking-list-text024 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor01'>
                  <span className='ranking-list-text-mobile Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text025 Content16SemiBold'>
                    12645 XRD
                  </span>
                </div>
                <div className='ranking-list-change03'>
                  <span className='ranking-list-text026'>15000</span>
                  <span className='ranking-list-change-mobile'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-301'>
                <div className='ranking-list-owners01'>
                  <span className='ranking-list-text027 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed01'>
                  <span className='ranking-list-text028 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow01'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon02'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text029'>
                <span className='ranking-list-text030'>2</span>
                <br className=''></br>
              </span>
              <div className='ranking-list-image01'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group102'>
                <div className='ranking-list-name02'>
                  <span className='ranking-list-text032 Content16SemiBold'>
                    Scrypto Ninja
                  </span>
                </div>
                <div className='ranking-list-volume02'>
                  <span className='ranking-list-text033 Content16SemiBold'>
                    379 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group202'>
                <div className='ranking-list-change04'>
                  <span className='ranking-list-text034 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor02'>
                  <span className='ranking-list-text-mobile01 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text035 Content16SemiBold'>
                    4245 XRD
                  </span>
                </div>
                <div className='ranking-list-change05'>
                  <span className='ranking-list-text036'>8888</span>
                  <span className='ranking-list-change-mobile01'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-302'>
                <div className='ranking-list-owners02'>
                  <span className='ranking-list-text037 Content16SemiBold'>
                    8637
                  </span>
                </div>
                <div className='ranking-list-listed02'>
                  <span className='ranking-list-text038 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow02'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon04'>
                    <path
                      d='M399.445 390.741c0 0-134.827 14.933-224.768 24.917-8.107 0.981-15.275 6.4-17.963 14.635s0 16.811 5.973 22.229c66.816 60.971 167.211 152.277 167.211 152.277-0.085 0-27.563 132.821-45.824 221.44-1.536 8.021 1.365 16.512 8.363 21.589 6.955 5.077 15.915 5.163 22.955 1.195 78.677-44.715 196.523-111.957 196.523-111.957s117.888 67.243 196.437 112c7.168 3.925 16.128 3.84 23.083-1.237 6.997-5.077 9.899-13.568 8.32-21.547-18.261-88.661-45.696-221.483-45.696-221.483s100.395-91.307 167.211-152.149c5.973-5.589 8.619-14.165 5.973-22.357s-9.813-13.611-17.92-14.549c-89.941-10.069-224.811-25.003-224.811-25.003s-55.893-123.648-93.141-206.080c-3.499-7.381-10.837-12.544-19.456-12.544s-16 5.205-19.328 12.544c-37.291 82.432-93.141 206.080-93.141 206.080z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text039'>3</span>
              <div className='ranking-list-image02'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group103'>
                <div className='ranking-list-name03'>
                  <span className='ranking-list-text040 Content16SemiBold'>
                    Keyboard Samurai
                  </span>
                </div>
                <div className='ranking-list-volume03'>
                  <span className='ranking-list-text041 Content16SemiBold'>
                    245 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group203'>
                <div className='ranking-list-change06'>
                  <span className='ranking-list-text042 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor03'>
                  <span className='ranking-list-text-mobile02 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text043 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change07'>
                  <span className='ranking-list-text044'>15000</span>
                  <span className='ranking-list-change-mobile02'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-303'>
                <div className='ranking-list-owners03'>
                  <span className='ranking-list-text045 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed03'>
                  <span className='ranking-list-text046 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow03'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon06'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text047'>4</span>
              <div className='ranking-list-image03'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group104'>
                <div className='ranking-list-name04'>
                  <span className='ranking-list-text048 Content16SemiBold'>
                    Digi Mecha Ultimate
                  </span>
                </div>
                <div className='ranking-list-volume04'>
                  <span className='ranking-list-text049 Content16SemiBold'>
                    45 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group204'>
                <div className='ranking-list-change08'>
                  <span className='ranking-list-text050 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor04'>
                  <span className='ranking-list-text-mobile03 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text051 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change09'>
                  <span className='ranking-list-text052'>15000</span>
                  <span className='ranking-list-change-mobile03'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-304'>
                <div className='ranking-list-owners04'>
                  <span className='ranking-list-text053 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed04'>
                  <span className='ranking-list-text054 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow04'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon08'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text055'>5</span>
              <div className='ranking-list-image04'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group105'>
                <div className='ranking-list-name05'>
                  <span className='ranking-list-text056 Content16SemiBold'>
                    Super Blade
                  </span>
                </div>
                <div className='ranking-list-volume05'>
                  <span className='ranking-list-text057 Content16SemiBold'>
                    43 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group205'>
                <div className='ranking-list-change10'>
                  <span className='ranking-list-text058 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor05'>
                  <span className='ranking-list-text-mobile04 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text059 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change11'>
                  <span className='ranking-list-text060'>15000</span>
                  <span className='ranking-list-change-mobile04'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-305'>
                <div className='ranking-list-owners05'>
                  <span className='ranking-list-text061 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed05'>
                  <span className='ranking-list-text062 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow05'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon10'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text063'>100</span>
              <div className='ranking-list-image05'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group106'>
                <div className='ranking-list-name06'>
                  <span className='ranking-list-text064 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume06'>
                  <span className='ranking-list-text065 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group206'>
                <div className='ranking-list-change12'>
                  <span className='ranking-list-text066 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor06'>
                  <span className='ranking-list-text-mobile05 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text067 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change13'>
                  <span className='ranking-list-text068'>15000</span>
                  <span className='ranking-list-change-mobile05'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-306'>
                <div className='ranking-list-owners06'>
                  <span className='ranking-list-text069 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed06'>
                  <span className='ranking-list-text070 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow06'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon12'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text071'>100</span>
              <div className='ranking-list-image06'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group107'>
                <div className='ranking-list-name07'>
                  <span className='ranking-list-text072 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume07'>
                  <span className='ranking-list-text073 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group207'>
                <div className='ranking-list-change14'>
                  <span className='ranking-list-text074 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor07'>
                  <span className='ranking-list-text-mobile06 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text075 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change15'>
                  <span className='ranking-list-text076'>15000</span>
                  <span className='ranking-list-change-mobile06'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-307'>
                <div className='ranking-list-owners07'>
                  <span className='ranking-list-text077 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed07'>
                  <span className='ranking-list-text078 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow07'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon14'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text079'>100</span>
              <div className='ranking-list-image07'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group108'>
                <div className='ranking-list-name08'>
                  <span className='ranking-list-text080 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume08'>
                  <span className='ranking-list-text081 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group208'>
                <div className='ranking-list-change16'>
                  <span className='ranking-list-text082 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor08'>
                  <span className='ranking-list-text-mobile07 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text083 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change17'>
                  <span className='ranking-list-text084'>15000</span>
                  <span className='ranking-list-change-mobile07'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-308'>
                <div className='ranking-list-owners08'>
                  <span className='ranking-list-text085 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed08'>
                  <span className='ranking-list-text086 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow08'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon16'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text087'>100</span>
              <div className='ranking-list-image08'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group109'>
                <div className='ranking-list-name09'>
                  <span className='ranking-list-text088 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume09'>
                  <span className='ranking-list-text089 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group209'>
                <div className='ranking-list-change18'>
                  <span className='ranking-list-text090 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor09'>
                  <span className='ranking-list-text-mobile08 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text091 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change19'>
                  <span className='ranking-list-text092'>15000</span>
                  <span className='ranking-list-change-mobile08'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-309'>
                <div className='ranking-list-owners09'>
                  <span className='ranking-list-text093 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed09'>
                  <span className='ranking-list-text094 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow09'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon18'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text095'>100</span>
              <div className='ranking-list-image09'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group110'>
                <div className='ranking-list-name10'>
                  <span className='ranking-list-text096 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume10'>
                  <span className='ranking-list-text097 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group210'>
                <div className='ranking-list-change20'>
                  <span className='ranking-list-text098 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor10'>
                  <span className='ranking-list-text-mobile09 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text099 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change21'>
                  <span className='ranking-list-text100'>15000</span>
                  <span className='ranking-list-change-mobile09'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-310'>
                <div className='ranking-list-owners10'>
                  <span className='ranking-list-text101 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed10'>
                  <span className='ranking-list-text102 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow10'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon20'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text103'>100</span>
              <div className='ranking-list-image10'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group111'>
                <div className='ranking-list-name11'>
                  <span className='ranking-list-text104 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume11'>
                  <span className='ranking-list-text105 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group211'>
                <div className='ranking-list-change22'>
                  <span className='ranking-list-text106 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor11'>
                  <span className='ranking-list-text-mobile10 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text107 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change23'>
                  <span className='ranking-list-text108'>15000</span>
                  <span className='ranking-list-change-mobile10'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-311'>
                <div className='ranking-list-owners11'>
                  <span className='ranking-list-text109 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed11'>
                  <span className='ranking-list-text110 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow11'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon22'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='table-row'>
            <div className='table-row-first-column'>
              <span className='ranking-list-text111'>100</span>
              <div className='ranking-list-image11'></div>
            </div>
            <div className='table-row-second-column'>
              <div className='ranking-list-group112'>
                <div className='ranking-list-name12'>
                  <span className='ranking-list-text112 Content16SemiBold'>
                    Philosophical Pirates
                  </span>
                </div>
                <div className='ranking-list-volume12'>
                  <span className='ranking-list-text113 Content16SemiBold'>
                    32 K XRD
                  </span>
                </div>
              </div>
              <div className='ranking-list-group212'>
                <div className='ranking-list-change24'>
                  <span className='ranking-list-text114 Content16SemiBold'>
                    +31%
                  </span>
                </div>
                <div className='ranking-list-floor12'>
                  <span className='ranking-list-text-mobile11 Content16SemiBold'>
                    Floor:
                  </span>
                  <span className='ranking-list-text115 Content16SemiBold'>
                    1245 XRD
                  </span>
                </div>
                <div className='ranking-list-change25'>
                  <span className='ranking-list-text116'>15000</span>
                  <span className='ranking-list-change-mobile11'>+31%</span>
                </div>
              </div>
              <div className='ranking-list-group-312'>
                <div className='ranking-list-owners12'>
                  <span className='ranking-list-text117 Content16SemiBold'>
                    9478
                  </span>
                </div>
                <div className='ranking-list-listed12'>
                  <span className='ranking-list-text118 Content16SemiBold'>
                    12%
                  </span>
                </div>
                <div className='ranking-list-follow12'>
                  <svg viewBox='0 0 1024 1024' className='ranking-list-icon24'>
                    <path
                      d='M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z'
                      className=''
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
