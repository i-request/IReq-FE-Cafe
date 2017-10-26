import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Pending Tickets
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/all-tickets' className="nav-link">
                All Tickets
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/archived' className="nav-link">
                Archived
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/cancelled' className="nav-link">
                Cancelled
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/trash' className="nav-link">
                Trash
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/admin' className="nav-link">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
