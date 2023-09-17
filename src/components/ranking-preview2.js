import React from 'react'

import PropTypes from 'prop-types'

import './ranking-preview2.css'

const RankingPreview2 = (props) => {
  return (
    <div className={`ranking-preview2-ranking-preview ${props.rootClassName} `}>
      <div className="ranking-preview2-categories">
        <div className="ranking-preview2-container">
          <div className="ranking-preview2-top">
            <span className="ranking-preview2-text BigTabs">
              <span>Top</span>
              <br></br>
            </span>
          </div>
          <div className="ranking-preview2-newest">
            <span className="ranking-preview2-text03 BigTabs">
              <span>Newest</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="ranking-preview2-filter-buttons">
          <div className="ranking-preview2-timeframe">
            <button className="ranking-preview2-button">
              <span className="ranking-preview2-text06">
                <span>1h</span>
                <br></br>
              </span>
            </button>
            <button className="ranking-preview2-button1">
              <span className="ranking-preview2-text09">
                <span>6h</span>
                <br></br>
              </span>
            </button>
            <button className="ranking-preview2-button2">
              <span className="ranking-preview2-text12">
                <span>24h</span>
                <br></br>
              </span>
            </button>
            <button className="ranking-preview2-button3">
              <span className="ranking-preview2-text15">
                <span>7d</span>
                <br></br>
              </span>
            </button>
          </div>
          <div
            data-thq="thq-dropdown"
            className="ranking-preview2-category list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="ranking-preview2-dropdown-toggle"
            >
              <span className="ranking-preview2-text18">Category</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="ranking-preview2-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="ranking-preview2-icon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="ranking-preview2-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="ranking-preview2-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview2-dropdown-toggle1"
                >
                  <span className="ranking-preview2-text19">Avatars</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview2-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview2-dropdown-toggle2"
                >
                  <span className="ranking-preview2-text20">
                    {props.text58}
                  </span>
                </div>
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview2-dropdown-toggle3"
                >
                  <span className="ranking-preview2-text21">
                    {props.text59}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="ranking-preview2-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="ranking-preview2-dropdown-toggle4"
                >
                  <span className="ranking-preview2-text22">Memberships</span>
                </div>
              </li>
            </ul>
          </div>
          <span className="ranking-preview2-text23 button">View All</span>
        </div>
      </div>
      <div className="ranking-preview2-top-collections">
        <div className="ranking-preview2-header-table">
          <div className="header-first-column">
            <span className="ranking-preview2-text24 Content16SemiBold">#</span>
          </div>
          <div className="header-second-column">
            <div className="ranking-preview2-group1">
              <div className="ranking-preview2-name">
                <span className="ranking-preview2-text25 Labels13CAPS">
                  {props.text6}
                </span>
              </div>
              <div className="ranking-preview2-volume">
                <span className="ranking-preview2-text26 Labels13CAPS">
                  Volume
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group2">
              <div className="ranking-preview2-change">
                <span className="ranking-preview2-text27 Labels13CAPS">
                  {props.text8}
                </span>
              </div>
              <div className="ranking-preview2-floor">
                <span className="ranking-preview2-text28 Content16SemiBold">
                  {props.text9}
                </span>
                <span className="ranking-preview2-text29 Content16SemiBold">
                  {props.text10}
                </span>
              </div>
              <div className="ranking-preview2-change01">
                <span className="ranking-preview2-text30 Content16SemiBold">
                  {props.text11}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-3">
              <div className="ranking-preview2-owners">
                <span className="ranking-preview2-text31">{props.text12}</span>
              </div>
              <div className="ranking-preview2-listed">
                <span className="ranking-preview2-text32 Content16SemiBold">
                  Listed
                </span>
              </div>
              <div className="ranking-preview2-follow">
                <span className="ranking-preview2-text33 Content16SemiBold">
                  {props.text14}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text34">{props.text}</span>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/946112a0-4ddc-451c-9806-da7178602435/4b916302-6359-4970-a7b6-9fe20194b53e?org_if_sml=15208"
              className="ranking-preview2-image"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group11">
              <div className="ranking-preview2-name1">
                <span className="ranking-preview2-text35 Content16SemiBold">
                  Micro Astronauts
                </span>
              </div>
              <div className="ranking-preview2-volume1">
                <span className="ranking-preview2-text36 Content16SemiBold">
                  182 M XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group21">
              <div className="ranking-preview2-change02">
                <span className="ranking-preview2-text37 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview2-floor1">
                <span className="ranking-preview2-text-mobile Content16SemiBold">
                  {props.textMobile}
                </span>
                <span className="ranking-preview2-text38 Content16SemiBold">
                  12645 XRD
                </span>
              </div>
              <div className="ranking-preview2-change03">
                <span className="ranking-preview2-text39">{props.text19}</span>
                <span className="ranking-preview2-change-mobile">
                  {props.changeMobile}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-31">
              <div className="ranking-preview2-owners1">
                <span className="ranking-preview2-text40 Content16SemiBold">
                  {props.text20}
                </span>
              </div>
              <div className="ranking-preview2-listed1">
                <span className="ranking-preview2-text41 Content16SemiBold">
                  {props.text21}
                </span>
              </div>
              <div className="ranking-preview2-follow1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon02"
                >
                  <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text42">
              <span className="ranking-preview2-text43">2</span>
              <br></br>
            </span>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/946112a0-4ddc-451c-9806-da7178602435/996eaa7b-abed-4c9c-b3c8-be95c0b4881b?org_if_sml=15304"
              className="ranking-preview2-image1"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group12">
              <div className="ranking-preview2-name2">
                <span className="ranking-preview2-text45 Content16SemiBold">
                  {props.text22}
                </span>
              </div>
              <div className="ranking-preview2-volume2">
                <span className="ranking-preview2-text46 Content16SemiBold">
                  379 K XRD
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group22">
              <div className="ranking-preview2-change04">
                <span className="ranking-preview2-text47 Content16SemiBold">
                  {props.text24}
                </span>
              </div>
              <div className="ranking-preview2-floor2">
                <span className="ranking-preview2-text-mobile1 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview2-text48 Content16SemiBold">
                  {props.text25}
                </span>
              </div>
              <div className="ranking-preview2-change05">
                <span className="ranking-preview2-text49">{props.text26}</span>
                <span className="ranking-preview2-change-mobile1">
                  {props.changeMobile1}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-32">
              <div className="ranking-preview2-owners2">
                <span className="ranking-preview2-text50 Content16SemiBold">
                  {props.text27}
                </span>
              </div>
              <div className="ranking-preview2-listed2">
                <span className="ranking-preview2-text51 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview2-follow2">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon04"
                >
                  <path d="M399.445 390.741c0 0-134.827 14.933-224.768 24.917-8.107 0.981-15.275 6.4-17.963 14.635s0 16.811 5.973 22.229c66.816 60.971 167.211 152.277 167.211 152.277-0.085 0-27.563 132.821-45.824 221.44-1.536 8.021 1.365 16.512 8.363 21.589 6.955 5.077 15.915 5.163 22.955 1.195 78.677-44.715 196.523-111.957 196.523-111.957s117.888 67.243 196.437 112c7.168 3.925 16.128 3.84 23.083-1.237 6.997-5.077 9.899-13.568 8.32-21.547-18.261-88.661-45.696-221.483-45.696-221.483s100.395-91.307 167.211-152.149c5.973-5.589 8.619-14.165 5.973-22.357s-9.813-13.611-17.92-14.549c-89.941-10.069-224.811-25.003-224.811-25.003s-55.893-123.648-93.141-206.080c-3.499-7.381-10.837-12.544-19.456-12.544s-16 5.205-19.328 12.544c-37.291 82.432-93.141 206.080-93.141 206.080z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text52">{props.text1}</span>
            <img
              src="data:image/webp;base64,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"
              className="ranking-preview2-image2"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group13">
              <div className="ranking-preview2-name3">
                <span className="ranking-preview2-text53 Content16SemiBold">
                  {props.text29}
                </span>
              </div>
              <div className="ranking-preview2-volume3">
                <span className="ranking-preview2-text54 Content16SemiBold">
                  {props.text30}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group23">
              <div className="ranking-preview2-change06">
                <span className="ranking-preview2-text55 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview2-floor3">
                <span className="ranking-preview2-text-mobile2 Content16SemiBold">
                  {props.textMobile2}
                </span>
                <span className="ranking-preview2-text56 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview2-change07">
                <span className="ranking-preview2-text57">{props.text33}</span>
                <span className="ranking-preview2-change-mobile2">
                  {props.changeMobile2}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-33">
              <div className="ranking-preview2-owners3">
                <span className="ranking-preview2-text58 Content16SemiBold">
                  {props.text34}
                </span>
              </div>
              <div className="ranking-preview2-listed3">
                <span className="ranking-preview2-text59 Content16SemiBold">
                  {props.text35}
                </span>
              </div>
              <div className="ranking-preview2-follow3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon06"
                >
                  <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text60">{props.text2}</span>
            <img
              src="data:image/webp;base64,UklGRkIzAABXRUJQVlA4IDYzAADwmwCdASrIAMgAPmkmj0WlJKOitHnLqIANCWwAqh3aU79lexNCDy32X/J/wXnO50uwPL+9l/lPQN/y/VD/fvUE/tfQh/eD1B/sx+xnvEf9T92PdJ/jfUA/s/+t9cX1Pf8j/1/YH/nH/N9Z7/3+yf/gf/B+7fta///2AP/77YP8A//+rd8jsYPRD7l/f/2z/v3uSZG+zDUp+e/hP9t/iva3/Zf8bxB+bOoX+Zf0z/Wb7jcD0C/dr7P/1vQH+582/sT/0vcA/n39q9Of+f4j34b/newF/Qv8X/7v8x7LX/v/uPQl9cf/T/Y/AX/Qf8J6bP//9zP72eyZ+3///WMr1y+oPlDmw8nEqzxZqUTuO8XxCrr/KgZbvrAUaAT8s/fJUF0i2l9LfFFP9rLWmyft8Rn7gScRdJ8F9AbQHqPc/rrYLDnfYbmsUu3Z/if1nB3o7OU7IconbOZhYHvxsKLlQvXFRSm3DVZwKBhFufiiIq1S3CQQsK/mYuhemKhltmNOhL4W/Yl+zPKFt/Nd+At6Vtq3QHQ0w0yMjnQ07e7q/AeEyP3QpNWx/6pPWbBnNiMVsG2VN2eBE0Z29bJPcJRW84otChYDPY8dX/ToPZw7GkkpEqsLAg3RwQEOUUEzLka5jsTB3wg9XSeme3vnq2EVwIFaXfzU1aC6rJAqmsd4Gbh1e3cB3nnmJkPAu75KkoZUPl/ao8uEMhcwwBFQ9VAFp6LYvSls9gSIV4xZt1H5B3iWZ9Du6Ni8KBWzpoGfzApc1qoiF/CvrOZ15s0zhwO8Za+jjNDxkBzVH6r7DJASSiNvPpd11CNqBYl8nGoNpcZiBTRIxshH7BC4n55oz7QiSk+m08eIWQQwazgTraV0JPm2N9v3/Uqzh35tnv0denaJ8ALJ8aHr+M3+GAkj85P/CKYknjw6SkxbLIOautfoxIay3vBjD8r4gr3gwoN2Wp1qdOTIwtEHy01/MDT+vwYqI4DrLJbhJ9ESKxf7WwgqqR8Bqed44EwNOLM4Z8a09kbhp2QlttIzjs5n3NYSGQ6uvzVEmU0Bd+7egnAdXzNcCBohHsrqVhw8mSryy2NlCjv8chQAuug7iCkI1O0T6BDLYwZT3Of4u8fcTmpO+G0DGZ4rmCRmHZFrAhSkUqSctA1hBz2Ek6CtA7VlgPLclL28mwBXpIF/5816VuxHSSafhX4qtpaVG81F4lFq2s4+TZBsNg9fuZBmuiAM+WpBZz8MRKEvqlsdnEkqZv9v4vfzmdPQa/THSPAoCncRRhn9Sce+gY/tXYbdNaESRLaqPUllGQXurxF7v0U0QlKCp9fVTeM3W41kTDva27x+HC51h+KaD5Uys2i9dCXkmttb/yBQReJ7t+jf2NZ/ny6Z00VjvPWPqDjaLsAZj0Asib8WAtU5fE2vNtnqZEnJvjcg2AHj5FbCDKjNeUeBLi9v9xo3oyRMJzDOjNvmzuUc2q7InxDsajg32YvW0mvU3Hw1DV4UMeGrfATF16Cv+EGJwMKTGt20rzBIgV6dhUHZbSd69lTkvipEIOzGXo6xuJ11EtsZU7DInTVqEAOR/34YEPNfNmlFRxpSCfZNoSlK8ivUqLq9+8ZntvVwkAg8ACL/3gBi31GW9ytu6slmp0jo53xaNudKvcf3EE+3HINEtvo/iPe0nbK2VW+P5xz3sAD+/qtSqmtuhp+fJGCN06iFlEp5avLRE6Cgh+lng+tlz/j1/ut9497z7wgP9T+hGVVW1DSA7B4oUMloOIA8eFre/guF+UrnY6knP6DunTIPjGes/f8M/6VWezl5AtawOjP+eoxnNPjtS+XbK5D9W8xYBKx8gWMX004xcdKXZUzEsf4OHaAnteNvxWw0a8pj070h/+wGD/DfQqtyql7kX/xkUTIUrX9ql0VNbPcJ/r0h5yxQAqJSFQmoxaWsM7JU8vm4T3nHy9Fa9aNsr2qzsHkDJpI6EqtmqutTL3nZZJOBLRDHFMBC/EnQt/frmVD9kA0cUCB771fk1iGyMjMCyHwR1GUvG/8KkgFs0G49mcd9cnZ/enpHZ6/Zj2LyzR76WOUz+lYC5IJvoiir9U0jjL2/f9o4zTV8wiEXXaDVm4YVcWw75Npi2sfbY3dFJ2+9w18Igbpqe3wRJ4fzpO91sKk08+7N0TMkPbhswONKgBpUcNDl31L29srKsVDzgixfF0Yn5UFMvAJsb1/cPvpjXZ9SsQD6Oyub+sb3rNNC2Ki1X45rG8l2S2IWGYhTREojaWXRDo9Nljk5uIdNyyaL7CR/fh+ARqnyaHP7izV2tF9JpgPstJtlLy9kasrBLoJcCIMGywg7nhoXQzDrNlkFv5YQqa77/DFF2Mu1u9pXM0m+1C+xpGwVFLS/hgjkgWRK2gffzvtVzFP//KG7hEUnd7+LOISL/tH9zJCGTRdEGaAcFUSFXbotJdWJlL4wBzIImq6ncnkv6r/bTuSOF6fA87PlfaCEV6HpTmlCcwNGJHZhOvmD+qPqDJdD1fit9jmWvIJtbVy36/+XcqG49d2NegLrP3V/45xIk8CczwfJ/vMw/ikohgf4B0OHXDmu+IpiK39H10BLJt2/JrRxiQCvulkf9fUQAic+/ltXluDdX4LWBkpeXPm1MOAnaHOQliYC3tMNqHIIv3iRxUHMA9EyRa1r2/cq/A4Xz+wC5T6JvpfaF/PF7n6kPV0RrDoIUGh7JGShHLlFYZ8aaEOlPgRhqQoIH2MTlXvBwo8+evhcjBLHY0FNLAYYkJZ3a3s8LffmFvPY7mZd92YTO02RMWx7MApWHwrnGH6FM/S/imXYIHRA6hfIFhPKFgEm3ra7+pUVR/X46BlAeKr+dM9jS8CYPAV4vE/c9cYik8w5UVkBxGnmU6fZNk4qtorZmMsR7Pbh7bQOUmrn751ENnTXqWYym2Mq5rHtq7BbojTbXUxTbu9fuq9UC32AE6IkHb7umdzDb2WnWHTFBrMri69D2NDVemUdML5MZPtaK1e3A7yigjrUua/woYt0bJM4J/EE2Sr8if7VNBpXgQfTtEV0aqhS9W0SxdcvvHhscWe+R0WVJdhmsNN9KgmUsPzvYj+pjFBeNsTcY8xN39sZZS6gow2uOH0LbavWJMZleZrD2Ak6W8gloNj1SdizGJmc9M2djd5QpU1EuiiBXsNDprH86xyv+diKYXQum8RBhjjwlEKZzsHISjzGT/6s/Ja8hNK9unw3c2mbUfgPMyW/WBVeLil/nV+qLSfn/MjW96FmqmMcm7LpkjRZJVOEsNuPxR6Fy+L7Sd4+5nB6r4K42/LYtDV/eJqXM333tubjRhYq2zrCzsNcxJ2yJlTmRBeNYD8IkPC2xTicKQ351JTsrroujuY5WpDN+qf9KOwfPXx2e3asQPVvS+hn8mTJnD5h0w9fJwAn/bAQWJq/AszNd3QKqokYKKGggnPzVaXhWKqV6cbhZUMN/kWpCX4NKR3cs9aSi+u2fPOoZ4YRIwBpwTCkGwpkMcYsv+ehigUYUmz3la6DFJQrpKv4vJP4zPLPFnnEPtJGqpYZ34BW9uEAxjYWS/06Q47aoP2moNp7UWK0RX7cq7ejeF6ncUc3I0MB3+rvui71HfHfuVNBi5dhL5m/+P4aeNVLcfCixmAGa6zpz3haEKCB2UE0UdyjNqzL2I03VhK47/LtQCQL6dJL1jTXwlBPAxivbmIIKEgDbxlSaDJMP4N7N78BTBUYbKlZdKWvreCE/yp3ljHadKJyK6VxmRUgsPYx6rWBA2gCitS8WTJKGfy5efCwegrY8AVECvSYRWyZ/8OoCiT2A0TpFKJ55eVG7P3Ezssx7vVP7OaPn9O00o3sxvA/r+Kvg3vlNruZkQeS2+Xs9kz6NiG+ugFG+14gBqdjjNNlOG8r8fFuKHDyFT/8MFuNk5/dT360oeylQALG/0UAvanXWHIrmdBgzgk7uncHV2mLQKQmujqFbbkxdw47kb5dPhyouhTKdz5NWhUB8ZEWv0Oz1O5K0LvVER5c5R6SmpLU2BOUyxA9QnpkGqqllq0x5pju/RZ2F8Lj7Ip35BvFSj3Dp3dZ3IasW0ydPZ8gRFn+4GpJ6+/f55VdnkAV4NpT7C6ECoz3Sa2DrnjfmRfKoB1ZkUv2MjJGIegoEnKAovZiJIFqzKNUK5+dwZ41BgmMNfOIenFimA2iLd/KuXTayF60v1u61P9CEz3qNwYJeX2so4SRkpRxG7Q4gT+LZoG4us4aVBo3Ji41pbwEffFtb1X4YM4al/KyTxvVyHkmIvwWHwkoGyvFGNc+VATDSCi6Hu8LoJ92T02iUM43w4OXsQPClCmp9uI958PDW7UvStr9ViQtaF6pbdni6QnyFZnTVrkbqzDL4IGW9SHaUYXUh3HtfrHcLHgerhO3nEtrL5MPz9hLHgG4Z1KRfX2gry6PP9sUMlDadWMVhtLytxdD/oUZiPsKd5TbM1OUuSr0zcUK3Ga8nY+G2UXRdWs6Wc5JaWmW3qH8y6ElndjVMojtuJc8FsGlfv5gvS6cIJ3GVSLrEuCP+um6XC6rY9PZPLBZsqtWhtIDCJrvNa48ekG+ZR7MjHQzdiSKlagCPLk38pdZz1wHiodUDWjVWlzFiK3P0DWaELGRRfgz7UsNUPXtNIiokqB32VBgoe2bFkkzFD4WAe/HmJbEwlJoxK2C/ZYtvJ2VBDk514JAyzHZNwQt0PEtNSzJBAtQATYEwsaxFpEwZl1w9bhH9gXcnCxbf08JN+L2jzebs1lNm+JjCPn4VVehZG7GsRJcPDnm8OTZ679rhzVYmUUKzg5dtOHYBEU8iyFjEwPaTxvAzccHTtbPwefsspAiqcOy8dNIXGnYn8+keEFGQf+bLDvmcFsLMl0sutVVkgvUpssNW/2WptQCtlL9QcoiDAg3sY+/sJ3992fnhZZ2pg1qHuNJF45RcxMNEp6XesJUaibtNLPbfekdua8SuS82KqfawfJt8qrULzUVJcNLTMXxFZI5Pjk61SfhTyIkrleSqJlYSpRZs1fNW/L9WMHHXyttV6Dn/d/Ze4LokM8AiTiczt1+GiepHGsT17ok1NPONNkd6AXsHwMEQn2RwMRI/c6xFMfrppKRwW4rF3om9/f/bwO3eOaeFIRf9L1+NtfNd75aFoFkv03ln6DZLsFaXefjwbdr7NXxRHyyjh6tKBuhLSelK/C35LhvAmWfhamwxLFj4wfdhY4vtMmek3U3tLGoEjsZ0xuz2u8/Y1DP5GWiUOXGzdNhNo/RZ6Lhz620FiIUUdb44v48xDVDrT4hFErWplyGzKAy20MGlRAKfvl4LBf0vDCyuAld+oOs3KBRHbTeVw8EkUiyWBn1dno/sUFQQLl8F8lHJ59lE18kSKZZqryoPQpAE/MxnuGciIfoAdNpVCYHoONT0jtenqaDWWZGWYK5d+K5n0VFsfnjt8Te6baepgV+lc19QiDqCv7+sb6RM4stfx2bG9RGaSlQhD7Z+YIpldGwllUCIDrMBtH+eqZ7+dCjWiD2/His0IqJaR3EZaPbfwskhOuVU1sOJ3ylVmKLUqwR5kRtfl+Fqs2EoorgN73Yo5eR65ROOED01fI6X9nreE5fRNm8xNWl+wPWBW5x8Fcyvt9DLzYelDLmdezX6oE73pmjLOoVaKmOV7OFZBK9es4h3twnRtHeU+wmfq/aoYvGggsTrQs1Jj3M5aeJAsxi3IKPW+De6dxH+i+LUoDysmASIYqPgnA9Iap6l3H0KO7SxvbwuSODN8GoQv14pWft+Dc8wm7rqZP8oXzZ+OpJxheN8KZw592dfkFHFDpVl8qmg+1ICMLEJiZt+4VB1PMhEuOoVCRwFrLZ0onbqFxtRFZhM8FdfXkMX+UUHwefnrVkOFfvDghskhY0OIDQKZPCF+VkfA91Injuss/WCqFF/DSAKBaonktYjQn5G103hMWhTTD/xGdAr5H9HBeMzZZiECSB81bB6518wxPnkZtHbZdONQupN1DJ9aeEio+phDwy9pPKP8XQHWndBZD3WlEFasAIDZl1ERM2skQxSeHDe7YRtfoAKj+BJNjQ2cKEZnS7s6+7HHQWNQemIghRswLOkFId6Hj1jdstqZVFSKlNAP3HIfasT7SykSD84HD+7iT/JOFhTAE478dtjj+REkC2BDAGPkkNzJL6sumt3B8ZTHxI7GvHPpnc9UOMyhkj+4DwM78kthASwhbxTIv47NeyR4XyA4m1PnTgyph6TSWMe2sSroX1LKZ20ncXcbFSaOj4PijOdNa3OaNOm0RV6tg6GGu78EBvNF2dTjGB+NocL16vx5/qJjyVgy1SpmF6cK04yX7FamixatrR1crcyKtWJKDl92OGI+BHVqJKNUpo98diX9cfd2OwcjgdN+H+JLLWstQGA7QTWH3deSiQEtjEEcXhz8ofE06qPiy5bhfZNWHs9iq6H9baaTbqmkuy1+2O4Pxuj3Kna4hZL5E6bj8uuTWB0w7wMsrvQ5nsJ2M2G/i2noODSntx6nNovpFvw9qrZSmKqJzsUpL4VTSxsmYEsJWBQnitjV1MMbr2EDqYksULpZJRci3h2YX6SuxfFK6HDZ8Z1LWDWgO8B6UcWCVk5UDhEDsKflIJNOf5lt7YNBM1701YVjGbKORl3y6Er1qFhdCLEeXkNahuu/qh/w+YD57vzhHyd9vAwaWVh8w1Xi309LFvtI//j4I3Tjf3+sADA1gcncVxOWZWPiP+TWyx48++wGX5uGAe9FtPrNeI8JcEEbx6ZXX0yuDqBaYM+l1hGyuCsRVpV5j9nk138nh3ndp7KKOVdjtyTpgUEv9sUZXpR4z4c3uPcSfg8BxIVaFo1zeEPovBwYpASOeykSIwqAu9jXy9sXdYxOK5WKBIaUxo9wL34k1CuQzRud9OaYcK2qdjS0822xhjNeR0FG+CuGrcOBqFfR7HOOCZhkLCzAkQCuC9l7Ty4jkLHoQfi2htPeX+25adJMY3FQn3y5TPRgUyNQW7PA1PsBSAI1Ccqi0oVZRd9Wn5MFdml16g4xpIUbapEErdyeOuP8rDDfxnpjxGL3B9X3kSFglavmUNj0LXUEsZYHy3rammI6B5UH2DtQzhdzHFd6dLxLwVzqNkuLtZzFyvPXeLX8t2P55Cz13ErYZsAyqnaX/6ZP6FTfdoiVP22Zn4+zfGot7xdWtG1h7jJFI7betdKmgwadEDdjWr5zH7tzglkuDxNz2Y6pmYba/c430LSPWGuXVuZlI68Gmd44q6ysT647lQtjGsu+GnwSaZU4fbQGLn8A6C/WqFTCeDBLjMvyPjEo0oaKVHit6y7dWD6IlAuTeYiqpXDCw7usQHCPjEd+iA5svTf82Z5kc2JI1O/HoLUT2+0Ordz53jgxyg64lXgRfyKqHCjqz8qOleVGTracVtqR9I1O+qetBf5K5BV5dLH67WOLkphFADu/oBtzsjy83B0j+vJ5Bwj3BYvtIiocsGWUa1asivUSl4bL99FNlFpVMSTo4Pahow3c47bF/xyYWSPBYxZ0cOw1ulwoGNu22UTFUriVnvzN906K2rkeSHw+pWNxhcrI0s0BJqTL/eWPBbxXOVjgHeyHqAk2nL93mGioxAHiiI33Gx57UCezf8Zj0wxGthB5vQRheMlXp5AGUYh5lv355RY8TCS3mKhQWzwtm6yXYfKjcWoftvjMGRfQE7VNCc7Ua2TwKxIFxJa1Ut9/C4KLxp7FJ1RKQSXrDGtH45LImGRLDwXEy0zuHG7mtREwnNEw7DApVfebziTryhb3d8kvXxJsskkiyqQmzsrnC8fMrYEgG9ctMS4tEoBDGwHffR2Ies09VKg6LpDoe0PUcgbXvkvBYhZXcMxbiHM78vgCakpNiKZgCQciKRCNW2q8Ox6AK1QGUe18ldGDzLk4x1l1ONVxDzg3FriA77ktnYUeAIvmZBUntzFvTaHR0Zz4/KhGuwIo3pFYYjHi/mVRfsSi91icx4LlOFRncOF/3tucmfN0rq5WXSN5uv/MLn6f85SzvtW3ax0iKp/RKJw0qnYXtr1DDtOrEJg2cwMzpIQF0Vg3ZwlWtKQmSM8Kj8S60xXlNtDqxqnJTewk6gZnPG1GZ8+ciIazpWNFqyUoLwGK0263yQRnX62eWjhomIq2r4n22qe3UbRLcg390YIb+iUibVN0oAIBJmb58FTWpjYMzOlx4JFYOICBWmVYNrKnSm0zzh63SJD2ahCCHhvSAOfglVo+o879J05AGY1nDpM0zDloOgHSctQXToHDRDlfV10jB44FHxeIyQkrYrfz680/joZsX2nBlTFrK8eEBUUYZliovicxz+9zv22b10ybKjKm/+yUqSW2ZRbmW0f/2n0ii9ziOk6NZqpSRouJnR6PUz++ocK/uptT0m3ZRh1I9UtXtLCJKp0dPjRWi9RZ8KkcN+avVeXuEL00Bc2QExeJfY6k/qWwZFr9VRUNTKzA7ITEYM9zMb7smEFFimC2GID3QUWWrcSjm61w+OBv7fsiht3WwVdsV2eveUp7r5ibgME6bYMMt2o9X2V6+opoJUrLK5kX8lRVOOT9naizTXZKf3cGEGE9sBDKNJmiL7FeqHve1LZOqESR0J8ebm3vK7CX7FHQUgNzLFKGURLoszp2KK/ELYHSTTjRiK1x27KYDv9npHSPjKJ/vvIEtoRBJQHN/2Uj1IA5ic6LmjvxJtfRLKJn3NsC9mCQ2RQBfPPNEyELL5qlENUbbtbg7Qde2rKKn0ufBelnex57FPpf9n5sFjJztClogQifAx12cJ/T+IRooq0J8jQGgzZsGGAnZT63sgBOdgkcljwzTAGJfGMvbicYYqa/yMdEgxJYeWh8znZ3Zu2ozvsmHHbYmNieyswmEGKo0vpz75iJ0TXsaGKcGL/+fxcXoid+Doh03tBQi7hPZZXTmgQ6zbiZ2H59VdTy/5QQ1drGGfnEIyPo8UFMhREUNpTVIEnsTs1wYPPubmRRQmtAP+WC2O1igNC3KDhpCNSDWuNS+bJ3faWw6G8LoQomjR8dbl6E+sEpiviyufbVd8R8bAHlfoBIpny54SZShLDYwe+Rb2+KGp65RjyUsqp2+Y12se63y/Lz/X4LOMdP9Y69LzLliGnm7phHtVjZFCac6eXiRmKa1Slrfo/Lo3aBpMDXU+ejB95qfkpTtfw/05vMvN7wtMH7nACmtlLL4NXKSGYcJqj6QPu3c0QrgnNO4r9l32JAjcoycyrxc/Km6pffnNG62DtxlozgnVMR8psDcBP7JXEClqGmRu0lHFe3Al5iq/DhQsNJ8OtJXxJRNsMDqoGRuXsF69czXt0C1o1AFUtCDyQfNX9zsVciQbLR7CvUaDcCvRCpfgjiIU1avsamWFjex2LExDQI0vYChs7nQ0KwYYy8vqqb1DIPe7Lc8QPRYXEqksYA5yrHba6/Mk1LJ2lbU/Ua0kycRrrW4BEUc8PrAdsohYpu1mJwA4ZUY3b3EX3d+38G/GYs1GLjP6b84MjJsv69vP3bagqp6XddiEFOfT+VFhi7bfH9lQsjNkcdTg0tbWOc4Oz/dBwJOHAFXsTAPaA00EtPmZvoZH6YmSfONXN+sveX1EFCFHK5ZaVmfZFdJluY5H7q3lTrFJimC4eK5RBq7tqUBdMf3o68yGPsvb/NIKaI+IE55GCOCHjp6BxxZISElM0DNeBzHFBVcKmEmrg8dDjhfkY+XXfSTtSFSC0JuApV2bE3Mgth8wgBJeeMKftMXJdeREBQDeC4UncmZSi/raUghIMicHwL4WpElxI/aWzLbKPsJkF0bnaFgMNAPFceTaABPvVIS/TmCHVmafDOLr5ol1qdeyfhAwIZe/1QMTl3xxJLYsU5xSOEW+85qNhcik72mOfrDJqCTiTVFv3K9gSXXmUg1tJZiZ2j0Aw7Klz5g89rJv6NUhAqC+J0ED/GbuSd3ybHVu60imtSVGI4hCaVqo1xO2p2M/5ZotXNg6EIzPpt76NrsucDH0//QktlQNbaF1N5aiFxUp4Hvl2W0fcO85A/qhvZD/jPjKfkhPYa4Y3Hjzg631ZyAlQf4OE7FVjFuMfeNzXDNLZ3Zq3iCQxLB7dMRwddgJV98wSySqK/p6usNIUS1x+VKj6L2KBeX+uOZVbaZB2HBGbmoyX3muyhwwZWbkZqWrIsu6wi8g+qmWzdv70Tt2tOIK356wRJ/yOpiOqbR8m67T7/hLLVwrVLyiF8JYIVKHv8De1g9eU1cA+0vakdjFvlPD2ITkt5n2LprPpzy+/qI5oYuaPDaTo2P22U9j3dGLtGeiYuNNj0nHcWMUM+6Lzr1dSAwBVXQhpuxxiiqgbNHlc3JZgZHEmWihW5pfU6Y87+L5PD1hAWVgVafOcvFMZYYJwGJK3fn5lGa9uFP/jovt/LXWwwtxHc7UTvN9ci1ZRL0fOJ+rSfIN3mKin2A0VDCDnzEnPJSd1uIh11QmfcHFC8R0wM7cw9du2JRY9q6hB/AeUMAPzFN5jz7ONwvZXBcvmv/YFbfsR1tCa89J8FgZdJS1TbUF4s5k586mv+NL+pHRx2AimynEtdBKODKNEYtao61U6NSzou9brq73R34+DBS/Vi4/UCreuhCR1h91yKHXSD4anCszkFevaS8dKFsw+Hr71CRaLOrW8tsKIaM5PnL/MXsjvLosRGqt4ZiZ/kjd7rNAayH/mQ/Uyh6AExyhXakuWxuomz2flF89BCgOIwNGn+A+2z+U5g0cqLVhNWlzQOfKospFn6Tz+RCPZVegZGvOfyBGmAEQj0qDKNncVyfdXbkn/dfv3Os1J/XRohQWh0aISXjGLMXZwAOL9Ozv+KE7qYtqNhEEeusmBvHXbsjrju7YiCa3jYAUek8T7n8nt9EDuo0hnOMPxKTFGxzkWkNeTV75xF9wvsw87kqJxfpG8uOTT3oCDRf2ZrN9PlYQObE3ujeR+fc19gsZHh4sy463EluVaDa9NIKkS/OpD+2vinfkpRDhiYdQyMUh1eil/34mCJYCzzj4BN+6qivkvla/WfJRM+ZMAadp8piSAfvwS5eNTtR+u7Gk/g9Ti7P/5SNvv7+AhG1GPPWM7LzQrdTdwRikoE/U3CDNuQPcoBZ2W+q+AQhJfpSfURlXVoBhMBH88Yo7sjwPmBhzs5bVOE8B9nFnMKNfbuMf9EP60ewQkmQBFJFEG5AUJLJOOjAKUbjr8HfiU5sP8UfsSc0CcE2h+QBKu4JAlH8Lc7f21PCMN+on9OjtHwfJPGKO3z0OQ8zzQMuZW0vBH0wxal4gE3QTsmMwzvakqOLaGbvvO5GDeGZ6fyeY+L7EWKhCy0MwP3tnXhr91sZr0fHP2df1Xmx8I3RYzb7qHJxn/d58mPRXfhWHTGqyNc5TP4PBHfcDjS+dFiolnBC+ACJv3M74KWCaqGKrXwfq6ASRW4AGwo04m9GDwMdnJduJVmTG4Kkfn7e48cMcfd8Y2Ij6C3Wphn4c3TtSItJPt/4nydb+QNPOq9BJ9zJ+w/JSZhN9/WQtTu5NDSGbzivglYFHA/Ngnw9X2sBC2EYN/HQzLZ56Fg0ZtJeeY3quQDN2LDKAcPoxB6B4A+bPti9suK3vwE6FkSNE5MBSYovCvYfxgM7jeuiWFpsoPmdchzDlmZQmYfB4SAiWn706pTRPYW8fkxTZk8fuW6uje59w8fRSST8FfzNMJNNgH5UmtF4AmMJzFe6FXzbrBlBuiYYyOj7DQ1byBFW/1tlcWaNbfM5ZoVR8c68K29H50pGMFYjEti6MK3fV2xheLPyjAhV3/fJinpckToQUY7xw5EXV+3f3sx6PmoQSSDITfHv7vdKyv3rL7dBoVEKTerDuFIxJhnPLXPsTQ9cnXc8dJQ4rAgj+ZE8/uEjezl3PjvJRm2eDfxmIp5dKqlr4mwmtRRWCwo2BYQG1gyXVEd4OXQpOY4LwkaZhzA1UoKqPI0LIwJVon9RZCkWww8msPg+tDw/dUUKrCp0mFTc44GUm4ugcldEbE9IEUd+jcgXsrcG8MyS8rH3cGnEZsbhes0R1nREK88MKo8HkCRVxthXhc6K6ojfeEIn6QXKMjjTDCX8hg7cH43TgdUjcFEA88+M29XBwM0YRNzdExxCXVGmzUNJ68pt9uoPDqFr0sjEZjiy89YLh9g7/zD7w9gO/c688ulazK2qUs1gFi1lYNfHp71pifbNgV/MErhkD38P3JEry4o87vIYsD9XL6TEOSg3GCyY55y4HtX6rF8wEuZ9hpRwHSCCkBQIFUmAZSDjE8j2R414e3RHpMcRz02GDTU1KX9CEA9K34nAvbZBclPj3WGh82Xo1fQojBYV6f681Ib6SYkhOFA7eIQWzq9HQwCfpLpxWtILrbik8jCNbHKp3N5p8QgqEEU2iVLmCCqpu4dYRJ2W5SFPdNcEgqWLUEzRe3S9DSdD2ORrereAp+cLp1Du40U63Kv3BfBBn+KJZ0wNn+zeeWDJyXDrqT4MYdQSdU/YcmyzE87W+UTlhwA8H6Z1AQgHIobXMNiD1DCEVvBgCqcGcpJ9C4SzXMBm54CZaTdwBq/bu6YY0YJ0cA9RvNb/1+392vSEsJwBBufCrUuUyGG8zTMRXr3Y+vRcNkhQB24K0N7ICrQBtn1pkp6k9SS/tc+AnDaASvaEha7unuTyr6m3XfYmct+J3Jyv7FyWrpSc5HoTP0h1vcn9kpg01Ernnpl47oVQxerw9vSv+Xr+hPo+4WKlPw2CBmOfVuNBGHcPQVex3vCA6QIHswTgPFLao4uYGLvJhz/O7OfQA+2qWZGdEcHn2Y1602Nt5PsEbp0lwak3wJUBJdtowe57F5mlDa2AifbVZ2EACAfeAr2NeyTz6u8mCUWdku/OB+e13hGKowBpaa1FmNUk8eK3dFgA7PGWV6UjPeTBzt27AHxsS6Ep0LUnm+t6bJK3qMcWnIMe6ntXaauTPLsJYbDp0sy0n0WNBdUhZy2PuuaWS9RZ/mow+1yn8aU7XakAenordMrc3upB8AVJYSe6dFTi/sOrJdLTCSsx5KWJAIItqV1EzGJluYD3O+MNi2dNu/uY5fI6s8zGsfGJPse4XLpLvkJrcAWKi+AXDCZzaJlrQXgy92d1+Tjtjqi+tHD/lH4KqBp91GkI7AJskoG9UgGZaWtS7CLzyXxcyEzdYGsUX4rV1g4fxwDvyWhckkTssgCwho7QVxjhoLEGGUmWwoVFV/MD7AYnr1331k26ws+doiKv6hzlF6G+MrMnetje2v9ZHmHooKZRXXE9IhKTqo4gVR4FvSrx9bZco3brPuIOn/xgZH0Yc+Su59NOJxgfzdVJX03pzP5+fTiekW2Ke8Xz6vpOJTVh0ASgCwh9iSOK4QpiC77ntaWTVHiuQGGH5niY4flKXOVP3ye0KGPZKeR2iJP8QlS7nghwkgtNUq06siyceyqXPJKymXFTLPXPR4HqSv4R4Inby+GdHmpqphA+InfU3KHWwCOp7naZue9L1WqYk2E0e9AQWFYEMH2rhBs4UabXIj6ECITXx4zlr8R8Wo3gQouT0OH47JFuNIy3BMV/XzDCsOS2SjhGGzG2vfqNna3bM59FjfKFZ99znYwG0S6ZjePXqhpf9o9d7tsQFIXG7OolkDcWR3tHz1X97zilcFZLeCaO721+leHqmxhpspB2sThw+gWt/SWaaw9haOMZpUL8emPsXu1hpN8AQTQIXa8J+FexW8TqF7qLjYi4x93YLgV8vTdANbPkYkSOrulL4jfy9OALJeF6T3/Mg4kHF2eqVUi+Ul/f06V8GcSBCGny60aq1NQPXVQjSNdjjeoASYfxCdG+RYvc/n0bLacfMmUnU1awtY3unGMXg3Wh9UYR2xH2XvNm3tOYcqgBxkQ0/JrpoSZD3WjZv8Xxaftab2wnakAcC80MDRAck/dLjhOmEV6Ki4MP/ckwcCd81KGQ3A9fhdnCu2hK8rB89a9Q8MQ8xMCVvS8CiA4gohrCEcG5m/GvLWdzFU8WNIS8BELsERkjCaYeDiT82xWWTBO2aYs8K/9xuLMssLe9BUjnQrhVwGw82g8jgA/YZhhqXdDdSFkpSEZdLbAXJfH0YL0BElF7G2pL499OWzZXEKDXvrcSQumSx76kdk/HqzIOiuRSn47uGJI37VOegNB3IEDPZw1r/8HWP5uCYTwjEllsUFTeDFsa8yBCDaVqK+/0iq4z9cOfEhoJ29VE0kN278M+nZSB3ruiX4S/+TsHCXzMjao80qUwBLOs/3PIm/EENz16zsI3uFVFgwFWFLREBlU8cEym//mEk3WSjN2SrwL2z2Dia8BI1njSD0oyEi1302fqT6cGwnRF+3uE8EqUeaCCstVML8qrxDGhsxVH4t59NF9RI8rE1DVfyF0E90oNenvJuI7bWsfRddNWYLdm4p8HtB5Zx2e5jMj9UqTav/ZdpOcpf06le/5x8YhCoQv98N/x6CMGYKmxPGrJJQwnZc657OvAYY6vCAiykfTztLJqk9WoFK2120smjBV5muFG3tK7Gr+5fRJfCuuueSdNNme2dr62DH6d/382zeyaAkU/zXglsQ8FK+eqJwTQj8aF2tbbbV9u0wvyYEL+rfVk6MH1se9Luuy3ET78MAX93shtG1VDgME16d1ZO7I+BN+Qc4m++cvFaNr95Yw5LqJNBHrvO/mA9eWQ5c5iuoDuIL79+Ckv2ex9kcPX6wlRcZDKTsPUFHyu4zk5cM6CC0YyEF8Htd82NZjcstuKNe51jsAGndIq0JDs/XfV3Z9TKrtV9eCONXFlzB+5OqXPShBaQqckWZqKfLHOB4mJ98ebtdJfiDgzT6UzFisSRycAE6jRVqZmjzfe9NShXX5LnZdkMw6noosd1a0M7BvX3/nTmsUPOK1tFnAeY9Dx5C6QINDGpLuUbCBrpjn7ib4R2vM4kwYTcYbdlnH0BZohIBKJA9rGXonLTkg+4BtD6xnwoigwlThNWSYtBoUcUM6RSk1ZWkYy4WnYElHTN7hWxC995AnJ2+gh/B4kKcG5Jp+wdwYCtkqSSZTL4gcRt/oRna/vqUh7XpRGgVUFqzjQpY8N9nJG2ZNigQL4UsCvkQUcy6r3eEd9fzE5LMuUtf08/Y1wrTgYRjC3rEC4ahUYQfs9w59swO6B5eAJHMvDCiavUfCuOt2T2e144cW0TNBZ/6wGi7BI7hh3fH4NYkDVf0jGOwKnCwrzPHNu4lxNtPvHwln1JCpyXsraGu+jsGwZp0BwCf6SmPrngDI6c95lft5Xb2XcYAfbteIqo8tzD1V71fUexZlnYmA0dRfezcTpacRqielz0ZtXsa1Aw2b172UKeXDeuTNG/dYuuzPpA85qv/jeqFxHzUC+jh67ebXqAgN0QNUL9VYLUynK3sOkyjisifDwG3xgBkvYKL6/jYZob60DhFXPM6tgMOFsJQMiaz2SMmS/Ke6g4y61ZIo3zyXa11r68wJa+6ivsRPEH4TGGdZMWqvnpH9NWmxHNT1eBHVY49ZIbWkxP3QA0AqwdWkHYNnT88d1NnlCDuIQ6css23D4NO2+mVsDwxCgudJMMHeOFWepnysnHnW/0D2MNT96hV9pncl8AWBZqqc5hvsteAHoxgCrhK3NgqTD3xrbVrJe1DvWNV3izOu2doRs3PV5XXcXkgemWU6ebmDAWiLWxltwtRg9kJIlGv9lwjj7EizTIT7P0J/2i5GOmIak9q30DgGhRJAAsbajdwyiE9SmCZTIg0K9mdeGEc/Rss6/lAVw1qk6l1h5hbxOiArrkCUXOKcfGP2XK3W3mpWVHQQ7F1FF+DSNBak8wk8Uly0m08sD/WpbbyDoP6vuDmjOW5rNg29U4OG7fvoQs+1I5XtD8ySSErGeQebJRzR2kP9n8J9QSgXqBXEYGEz5nNUldc9eTZf+75cLhwanR5z4d9Vw6E5ahlhPIHwSKWS6cQ0rA5eluTx/apFKcj1tpJggVaIe5r0l9D7M6CncaccPvn3VcH0Rp/K3Auqs/n14GRB+w/K4BNClfOZYhSokwS/LHSnDp9oC2rZcUHt1kPPJMWA4b6+ZW+TaN6StU1Rgv7qMNyBdaW6pZw0zH8C2h0/GzuMuHX1hT1yms/Ym8qWLLYaPdqz7NPofDgD+Nwny9+CDuGkBJ9wPdGsrfQR4OhLequATsVw4xlxo11eHsm2GzS4ujVKzc5dMozVCMCMU2VJWd7nAnEcQAKfFSbKlYTfXJF5TV0+AGnmcYu1F/I2B9aCKZiKnfuFVL4DeU9SRYJ4MTyOzkET5N4Fo1CCDqyRMWTG4LnkOGYMfuZpPhLV2fYoe6odLW0eQd/nk67q7gtpSZSKoO5xGTKKvf/yD35YgpvMrtHUSmweWN+ExYz2z2rkUPm0D2igjdulzDKwr+LCFf/mXK57lLD+Cm4x95fkOJrvLY82XF5TsBlnLcWEN218GRXNZir0ZrqhbujVazAY2Y3kgwllb168MENhoNX9r4lYUuZKHEEiGjxVcjhqkslm6wOxdwpkYR/pIu5Zs/6NheL5OcSz4BOHUjpuXUpO8LiqEXCwerTY3wX8JtBp8kgjUsY2wBVuXGLq82c0ML5cL/JfbZlH5RTYa+1IaXoo55+SnMqRSwHOxO3XMVWIfvXhCKr3XGjbXqU2yQU8XhryDgKWhDgJ3q1KL3XGxv8Cc98v4SWE+3igD9KrM4HzLwgDs5Esmh7h08Kl/FP5BcRf79s0eGnnPxzm0z8y9i1zHGAFgEcieJfTHsv0tekZzldCAJnnDmbPmmpDnr46cVgzduUFAk2NyuT6+T7tCXV73Zh9acix2wfiO+LX9E/ACk6xIhL3rfnQHPfSprTSKpNXutfUZAKtDQiAmEFqUwSjntnuDidfCd+1C8Bje/HFfDEJF8GXLzJ1f4TyXRlUtroms3QoP6y0oOmifVtPliBBx8PxbhgdjXSjdDMSiuYNUBWBblvsytBU+MFXOLFQ8dMx3finLUvz0XYLahEPHtIbgaEG5M8yFwLqzQHYvYb2sFrHp80qjmT7jdPBkYBFpla8lbYgYB05jTsjEkcjG15PCpZ4sHZXLB131VYTGcfwVmKhjkDK0yjzQfetYRl723FUAOO2TQ4QXxj7GVXv61fjtYMkhGpSXGft30x99RMTVLyTv8D7dezcXtqTi8VD8qbF60WCMz0nr67snXHRXo4Yw0ZkJRnj12OPDxQUeI09RBzJnhNNZfsQqnkbjs17C1UYPO+pCUPYZ5LjTruwFkZWOH+Tc6p/mYbDx45QOGBZYCJRR/cNO5YAU0rJRiLIXj4rU/8IDaSzCIhLhAgLWtaaN1Nh+3bisA+JhdeiTuCSuxAxWRvFnP+ESYIbqac3z/MAyWoXBnAjf8IwQEd+hoLB0Ld+howOgOILdntEe+mzUAcYqfYLgrZNQIC94njg3W0Z18J9oldxvhKx0o7GmapZWRQGBuA0T8XdMvRBv723CC6qY8zQ4ovZtG1jTFsYn2N9GZvHyiHnFT8Tgvy2vY1lMJYtccSbknC0JOGsQAOABDuM92veUBwAA="
              className="ranking-preview2-image3"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group14">
              <div className="ranking-preview2-name4">
                <span className="ranking-preview2-text61 Content16SemiBold">
                  {props.text36}
                </span>
              </div>
              <div className="ranking-preview2-volume4">
                <span className="ranking-preview2-text62 Content16SemiBold">
                  {props.text37}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group24">
              <div className="ranking-preview2-change08">
                <span className="ranking-preview2-text63 Content16SemiBold">
                  {props.text38}
                </span>
              </div>
              <div className="ranking-preview2-floor4">
                <span className="ranking-preview2-text-mobile3 Content16SemiBold">
                  {props.textMobile3}
                </span>
                <span className="ranking-preview2-text64 Content16SemiBold">
                  1245 XRD
                </span>
              </div>
              <div className="ranking-preview2-change09">
                <span className="ranking-preview2-text65">{props.text40}</span>
                <span className="ranking-preview2-change-mobile3">
                  {props.changeMobile3}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-34">
              <div className="ranking-preview2-owners4">
                <span className="ranking-preview2-text66 Content16SemiBold">
                  {props.text41}
                </span>
              </div>
              <div className="ranking-preview2-listed4">
                <span className="ranking-preview2-text67 Content16SemiBold">
                  {props.text42}
                </span>
              </div>
              <div className="ranking-preview2-follow4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon08"
                >
                  <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text68">{props.text3}</span>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/946112a0-4ddc-451c-9806-da7178602435/6cdf461a-1d02-4592-8f98-812575c1f2b7?org_if_sml=16566"
              className="ranking-preview2-image4"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group15">
              <div className="ranking-preview2-name5">
                <span className="ranking-preview2-text69 Content16SemiBold">
                  Super Blade
                </span>
              </div>
              <div className="ranking-preview2-volume5">
                <span className="ranking-preview2-text70 Content16SemiBold">
                  {props.text44}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group25">
              <div className="ranking-preview2-change10">
                <span className="ranking-preview2-text71 Content16SemiBold">
                  +31%
                </span>
              </div>
              <div className="ranking-preview2-floor5">
                <span className="ranking-preview2-text-mobile4 Content16SemiBold">
                  {props.textMobile4}
                </span>
                <span className="ranking-preview2-text72 Content16SemiBold">
                  {props.text46}
                </span>
              </div>
              <div className="ranking-preview2-change11">
                <span className="ranking-preview2-text73">15000</span>
                <span className="ranking-preview2-change-mobile4">+31%</span>
              </div>
            </div>
            <div className="ranking-preview2-group-35">
              <div className="ranking-preview2-owners5">
                <span className="ranking-preview2-text74 Content16SemiBold">
                  {props.text48}
                </span>
              </div>
              <div className="ranking-preview2-listed5">
                <span className="ranking-preview2-text75 Content16SemiBold">
                  12%
                </span>
              </div>
              <div className="ranking-preview2-follow5">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon10"
                >
                  <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-row-first-column">
            <span className="ranking-preview2-text76">{props.text4}</span>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/946112a0-4ddc-451c-9806-da7178602435/5a5190ef-0092-4ecb-969b-ed75fe71b29a?org_if_sml=110334"
              className="ranking-preview2-image5"
            />
          </div>
          <div className="table-row-second-column">
            <div className="ranking-preview2-group16">
              <div className="ranking-preview2-name6">
                <span className="ranking-preview2-text77 Content16SemiBold">
                  {props.text50}
                </span>
              </div>
              <div className="ranking-preview2-volume6">
                <span className="ranking-preview2-text78 Content16SemiBold">
                  {props.text51}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group26">
              <div className="ranking-preview2-change12">
                <span className="ranking-preview2-text79 Content16SemiBold">
                  {props.text52}
                </span>
              </div>
              <div className="ranking-preview2-floor6">
                <span className="ranking-preview2-text-mobile5 Content16SemiBold">
                  Floor:
                </span>
                <span className="ranking-preview2-text80 Content16SemiBold">
                  {props.text53}
                </span>
              </div>
              <div className="ranking-preview2-change13">
                <span className="ranking-preview2-text81">{props.text54}</span>
                <span className="ranking-preview2-change-mobile5">
                  {props.changeMobile5}
                </span>
              </div>
            </div>
            <div className="ranking-preview2-group-36">
              <div className="ranking-preview2-owners6">
                <span className="ranking-preview2-text82 Content16SemiBold">
                  {props.text55}
                </span>
              </div>
              <div className="ranking-preview2-listed6">
                <span className="ranking-preview2-text83 Content16SemiBold">
                  {props.text56}
                </span>
              </div>
              <div className="ranking-preview2-follow6">
                <svg
                  viewBox="0 0 1024 1024"
                  className="ranking-preview2-icon12"
                >
                  <path d="M719.147 894.549c-9.557 0-18.901-2.133-27.563-6.229-1.493-0.597-2.944-1.323-4.437-2.176l-175.232-99.968-175.232 100.011c-1.493 0.853-2.987 1.579-4.523 2.261-20.821 9.728-46.293 7.424-64.896-6.101-20.011-14.507-29.909-39.808-25.003-64.384l40.832-198.059c-15.957-14.507-41.045-37.333-68.352-62.165l-80.853-73.6c-1.152-1.067-2.347-2.261-3.328-3.499-16-16.896-21.717-41.387-14.507-63.659 7.381-22.357 26.453-38.912 49.493-43.051 1.451-0.341 2.859-0.597 4.352-0.768l200.576-22.229 83.029-183.893c0.725-1.621 1.536-3.2 2.56-4.693 11.179-20.181 32.597-32.896 55.851-32.896 23.168 0 44.544 12.715 55.851 32.853 0.896 1.536 1.749 3.115 2.56 4.779l83.115 183.979 200.576 22.229c1.451 0.128 2.901 0.384 4.437 0.725 22.997 4.267 42.069 20.736 49.408 43.179 7.253 22.229 1.493 46.848-14.507 63.744-1.024 1.109-2.176 2.304-3.328 3.328l-149.248 135.851 40.832 197.632c4.821 25.045-5.035 50.261-25.173 64.811-10.752 7.765-23.723 11.989-37.291 11.989zM371.456 614.485c-1.664 7.765-19.883 95.829-36.053 174.165l155.435-88.619c13.099-7.467 29.184-7.467 42.24 0l155.435 88.533-36.224-175.104c-3.029-14.763 1.92-30.080 13.141-40.192l132.267-120.405-177.835-19.669c-14.976-1.664-27.904-11.093-34.176-24.917l-73.728-163.029-73.643 163.029c-6.229 13.739-19.2 23.168-34.176 24.917l-177.835 19.669 132.267 120.405c11.605 10.496 16.384 26.325 12.885 41.216z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

RankingPreview2.defaultProps = {
  text55: '9478',
  text50: 'Philosophical Pirates',
  text4: '6',
  text52: '+31%',
  text54: '15000',
  text56: '12%',
  text41: '9478',
  text42: '12%',
  text40: '15000',
  text22: 'Scrypto Ninja',
  changeMobile5: '+31%',
  text26: '8888',
  text24: '+31%',
  text9: 'Floor:',
  changeMobile3: '+31%',
  text34: '9478',
  text1: '3',
  text44: '43 K XRD',
  text51: '32 K XRD',
  changeMobile2: '+31%',
  text59: 'Games',
  text53: '1245 XRD',
  text27: '8637',
  text25: '4245 XRD',
  text36: 'Digi Mecha Ultimate',
  text46: '1245 XRD',
  text20: '9478',
  text3: '5',
  text35: '12%',
  text2: '4',
  text14: 'Follow',
  text33: '15000',
  text29: 'Keyboard Samurai',
  text30: '245 K XRD',
  rootClassName: '',
  text8: 'Change',
  text11: 'Sales',
  text58: 'Art',
  textMobile4: 'Floor:',
  text19: '15000',
  text37: '45 K XRD',
  text12: 'Owners',
  changeMobile1: '+31%',
  textMobile: 'Floor:',
  text21: '12%',
  textMobile2: 'Floor:',
  text38: '+31%',
  text48: '9478',
  changeMobile: '+31%',
  text6: 'Collection',
  text: '1',
  text10: 'Floor',
  textMobile3: 'Floor:',
}

RankingPreview2.propTypes = {
  text55: PropTypes.string,
  text50: PropTypes.string,
  text4: PropTypes.string,
  text52: PropTypes.string,
  text54: PropTypes.string,
  text56: PropTypes.string,
  text41: PropTypes.string,
  text42: PropTypes.string,
  text40: PropTypes.string,
  text22: PropTypes.string,
  changeMobile5: PropTypes.string,
  text26: PropTypes.string,
  text24: PropTypes.string,
  text9: PropTypes.string,
  changeMobile3: PropTypes.string,
  text34: PropTypes.string,
  text1: PropTypes.string,
  text44: PropTypes.string,
  text51: PropTypes.string,
  changeMobile2: PropTypes.string,
  text59: PropTypes.string,
  text53: PropTypes.string,
  text27: PropTypes.string,
  text25: PropTypes.string,
  text36: PropTypes.string,
  text46: PropTypes.string,
  text20: PropTypes.string,
  text3: PropTypes.string,
  text35: PropTypes.string,
  text2: PropTypes.string,
  text14: PropTypes.string,
  text33: PropTypes.string,
  text29: PropTypes.string,
  text30: PropTypes.string,
  rootClassName: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  text58: PropTypes.string,
  textMobile4: PropTypes.string,
  text19: PropTypes.string,
  text37: PropTypes.string,
  text12: PropTypes.string,
  changeMobile1: PropTypes.string,
  textMobile: PropTypes.string,
  text21: PropTypes.string,
  textMobile2: PropTypes.string,
  text38: PropTypes.string,
  text48: PropTypes.string,
  changeMobile: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text10: PropTypes.string,
  textMobile3: PropTypes.string,
}

export default RankingPreview2
