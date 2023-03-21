import React from 'react'

import { Helmet } from 'react-helmet'

import Qr1 from './qr1'
import Qr2 from './qr2'
import './dairy.css'
import milk from "../images/milk (1).png"
import paneer from "../images/paneer (1).png"
const DAIRY = (props) => {
  return (
    <div className="dairy-container">
      <Helmet>
        <title>DAIRY - Travel Agency</title>
        <meta property="og:title" content="DAIRY - Travel Agency" />
      </Helmet>
      <h1 className="dairy-text">
        <span>DAIRY</span>
        <br></br>
        <br></br>
      </h1>
      <div className="dairy-container1">
        <Qr1
          city="MILK"
          image={milk}
          rootClassName="qr1-root-class-name12"
        ></Qr1>
        <Qr2
          city="PANEER"
          image={paneer}
          rootClassName="qr2-root-class-name10"
        ></Qr2>
      </div>
    </div>
  )
}

export default DAIRY
