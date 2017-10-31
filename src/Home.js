import React, {Component} from 'react';
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.fetchUser = this.fetchUser.bind(this)
  }

  fetchUser() {
    return axios.get('http://localhost:9007/tickets').then(result => {
      // console.log(result)
      this.setState({users: result.data})
    }).catch(console.log)
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {

    return (
      <div>
        <div className="container-fluid home-container">
          <div className="row">
            <div className="col-md-4">
              <div className="card user-border mb-3 admin-pannels">
                <div className="card-body text-dark user-cards">
                  <div className="font-icon-div">
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <div className="icon-info-div">
                    <h1 className="total-num">10</h1>
                    <h4 className="total-sub-info">Total users
                    </h4>
                  </div>
                </div>
                <div className="card-header footer-info-cards">View Details
                  <span className="">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card total-border mb-3 admin-pannels">
                <div className="card-body text-dark total-tickets">
                  <div className="font-icon-div">
                    <i className="fa fa-cutlery" aria-hidden="true"></i>
                  </div>
                  <div className="icon-info-div">
                    <h1 className="total-num">{this.state.users.length}</h1>
                    <h4 className="total-sub-info">Total tickets</h4>
                  </div>
                </div>
                <div className="card-header footer-info-cards">View Details
                  <span className="">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card best-seller-border mb-3 admin-pannels">
                <div className="card-body text-dark best-seller">
                  <div className="font-icon-div">
                    <i className="fa fa-bar-chart" aria-hidden="true"></i>
                  </div>
                  <div className="icon-info-div">
                    <h1 className="total-num">43</h1>
                    <h4 className="total-sub-info">Best Seller</h4>
                  </div>
                </div>
                <div className="card-header footer-info-cards">View Details
                  <span className="">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid no-padding-margin-top">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-header user-headers">Latest Users
                  </div>
                  <div id="remove-padding" className="card-body text-dark">

                    {/* {this.state.users.map((user) => {
                      console.log(user)
                      return (
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-4 no-padding">
                              <ul className="list-group">
                                <li className="list-group-item user-name" key={"user-details"}>
                                  <i className="user-details-icons fa fa-user-o" aria-hidden="true"> </i>
                                   {user.user_details[0].user_name}
                                  </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-padding">
                              <ul className="list-group">
                                <li className="list-group-item">
                                  <i className="user-details-icons fa fa-envelope-o" aria-hidden="true"> </i>
                                   {user.user_details[0].email}
                                  </li>
                              </ul>
                            </div>
                            <div className="col-md-2 no-padding">
                              <ul className="list-group">
                                <li className="list-group-item">
                                  <i className="user-details-icons fa fa-phone" aria-hidden="true"> </i>
                                   {user.user_details[0].phone_num}
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-2 no-padding">
                              <ul className="list-group">
                                <li className="list-group-item" key={"user-details"}>
                                  <i className="user-details-icons fa fa-building" aria-hidden="true"> </i>
                                   {user.user_details[0].user_company}
                                  </li>
                              </ul>
                            </div>

                          </div>
                        </div>
                      )
                    })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
