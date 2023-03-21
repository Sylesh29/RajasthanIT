import React from 'react'

import { Helmet } from 'react-helmet'

import Qr1 from './qr1'
import Qr2 from './qr2'
import './fertilisers.css'
import frame1 from "../images/frame (1).png"
import frame2 from "../images/frame (2).png"
import frame3 from "../images/frame (3).png"
import frame4 from "../images/frame (4).png"
const Fertilisers = (props) => {
  return (
    <div className="fertilisers-container">
      <Helmet>
        <title>fertilisers - Travel Agency</title>
        <meta property="og:title" content="fertilisers - Travel Agency" />
      </Helmet>
      <h1 className="fertilisers-text">FERTILIZERS</h1>
      <div className="fertilisers-container1">
        <Qr1
          city="Urea Fertilizers"
          image={frame4}
          rootClassName="qr1-root-class-name2"
        ></Qr1>
        <Qr2
          city="calcium fertilizer"
          image={frame3}
          rootClassName="qr2-root-class-name1"
        ></Qr2>
      </div>
      <div className="fertilisers-container2">
        <Qr1
          city="Phosphorous Fertilizers"
          image={frame2}
          rootClassName="qr1-root-class-name9"
        ></Qr1>
        <Qr2
          city="nitrogen fertilizer"
          image={frame1}
          rootClassName="qr2-root-class-name2"
        ></Qr2>
      </div>
    </div>
  )
}

export default Fertilisers
