import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './desktop-navbar.css';
import './mobile-navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/course">Course Guidance</NavLink>
            </li>
            <li>
              <NavLink to="/relationship">International Relationship</NavLink>
            </li>
            <li>
              <NavLink to="/residence">Residence Permit</NavLink>
            </li>
            <li>
              <NavLink to="/accommodations">Accommodations</NavLink>
            </li>
            <li>
              <NavLink to="/messages">Messages from Students</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar