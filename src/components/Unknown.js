import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Unknown.css'

function Unknown() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <div className="notfound-content-title">404</div>
        <div className="notfound-content-text">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div className="notfound-content-link">
          <NavLink to="/home" className="notfound-content-link">
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Unknown
