import React from 'react'

import PropTypes from 'prop-types'

import HeaderCarousel from './header-carousel'
import WrapperCarousel from './wrapper-carousel'
import './trending-carousel1.css'

const TrendingCarousel1 = (props) => {
  return (
    <div
      className={`trending-carousel1-trending-carousel1 ${props.rootClassName} `}
    >
      <HeaderCarousel className=""></HeaderCarousel>
      <WrapperCarousel className=""></WrapperCarousel>
    </div>
  )
}

TrendingCarousel1.defaultProps = {
  rootClassName: '',
}

TrendingCarousel1.propTypes = {
  rootClassName: PropTypes.string,
}

export default TrendingCarousel1
