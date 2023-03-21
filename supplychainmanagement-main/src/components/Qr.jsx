import React from 'react'

import PropTypes from 'prop-types'

import styles from './qr.module.css'

const Qr = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt}
          src={props.image}
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.city}</span>
        </div>
      </div>
    </div>
  )
}

Qr.defaultProps = {
  rootClassName: '',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  city: 'City Name',
}

Qr.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
}

export default Qr