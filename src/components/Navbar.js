import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/Logo.svg'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/"><img className='navbar--logo' src={logo} alt='website logo' /></Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/notes">Notes</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar