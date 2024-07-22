import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

import Nav from './Nav'

import logoHeader from '../assets/logo-orange.png'

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <NavLink to="./">
          <img src={logoHeader} className="header-content-logo" />
        </NavLink>
        <Nav />
      </div>
    </div>
  )
}

export default Header
