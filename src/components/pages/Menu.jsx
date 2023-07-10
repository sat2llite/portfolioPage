import React from 'react'
import { Navigate } from 'react-router'

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu_ul flex_center">
        <li>Profile</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Menu