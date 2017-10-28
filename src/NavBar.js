import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to='/' className="nav-link">
              Home
            </NavLink>
          </li>
        </ul>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/pending-tickets" className="nav-link">
                Pending Tickets
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/all-tickets' className="nav-link">
                All Tickets
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/all-viewed' className="nav-link">
                All Viewed
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
