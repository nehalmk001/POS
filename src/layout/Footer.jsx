import React from 'react'
import "../css/Footer.css"

const Footer = ({isCollapsed}) => {
  return (

<div className="footer "  style={{ width:isCollapsed ? '100%':'85%'}}>
            <p>Itempos 2024 ©pinntech infosolutions </p>
        </div>

  )
}

export default Footer