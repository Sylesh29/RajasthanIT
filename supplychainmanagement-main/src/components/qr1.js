import React from 'react'

import PropTypes from 'prop-types'

import './qr1.css'

const Qr1 = (props) => {
  return (
    <div className={`qr1-container ${props.rootClassName} `}>
      <div className="qr1-container1">
        <img alt={props.image_alt} src={props.image} className="qr1-image" />
        <div className="qr1-container2">
          <span className="qr1-text">{props.city}</span>
        </div>
      </div>
    </div>
  )
}

Qr1.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  rootClassName: '',
  city: 'City Name',
}

Qr1.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  city: PropTypes.string,
}

export default Qr1
