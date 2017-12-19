import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    return axios.get('https://irequest-be.herokuapp.com/tickets').then(res => {
      this.setState({data: res.data})
    }).catch(console.log)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="navbar-brand nav-logo" src="../images/logo2.png" alt="i-request logo" height="60px" width="90px"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </span>
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/pending-tickets" className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                  </span>
                  Pending
                  <span className="badge badge-danger"> New</span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/all-tickets' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-database" aria-hidden="true"></i>
                  </span>
                  All Tickets
                  <span className="badge badge-danger">{this.state.data.length}</span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/all-viewed' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Viewed
                  <span className="badge badge-danger"> New</span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/archived' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-history" aria-hidden="true"></i>
                  </span>
                  Archived
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/cancelled' className="nav-link">
                  <i className="fa fa-ban nav-icons" aria-hidden="true"></i>
                  Cancelled
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/trash' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </span>
                  Trash
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to='/admin' className="nav-link">
                  <span className="nav-icons">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </span>
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default NavBar
