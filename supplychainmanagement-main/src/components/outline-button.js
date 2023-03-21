import React from 'react'

import PropTypes from 'prop-types'
import {useNavigate} from "react-router-dom"
import './outline-button.css'
const OutlineButton = (props) => {
  const navigate=useNavigate()
  return (
    <div className="outline-button-container">
      <button className="outline-button-button button Button" onClick={()=>navigate(`/${props.dest}`)}>
        {props.button1}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  button1: 'Button',
}

OutlineButton.propTypes = {
  button1: PropTypes.string,
}

export default OutlineButton
