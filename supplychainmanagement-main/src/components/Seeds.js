import React from 'react'

import { Helmet } from 'react-helmet'

import Qr1 from './qr1'
import Qr2 from './qr2'
import './seeds.css'
import mustard from "../images/mustard.png"
import fenu from "../images/fenu.png"
const Seeds = (props) => {
  return (
    <div className="seeds-container">
      <Helmet>
        <title>Seeds - Travel Agency</title>
        <meta property="og:title" content="Seeds - Travel Agency" />
      </Helmet>
      <h1 className="seeds-text">SEEDS</h1>
      <div className="seeds-container1">
        <Qr1
          city="mustard"
          image={mustard}
          rootClassName="qr1-root-class-name13"
        ></Qr1>
        <Qr2
          city="fenugreek"
          image={fenu}
          rootClassName="qr2-root-class-name11"
        ></Qr2>
      </div>
    </div>
  )
}

export default Seeds
