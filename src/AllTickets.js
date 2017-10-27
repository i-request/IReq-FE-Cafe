import React, {Component} from 'react';
import axios from 'axios'

class AllTickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
    this.renderView = this.renderView.bind(this)
    this.renderDone = this.renderDone.bind(this)
    this.fetchTickets = this.fetchTickets.bind(this)
    this.handleViewed = this.handleViewed.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.updateViewData = this.updateViewData.bind(this)
  }
  componentDidMount() {
    this.fetchTickets()
  }

  renderView(bool) {
    const colorClass = bool
      ? 'success'
      : 'danger';
    const viewIcon = bool
      ? 'check'
      : 'times';
    return (
      <button id='viewBtn' className={`btn viewed-done-btn btn-${colorClass}`}>Viewed
        <i className={`fa fa-${viewIcon}`} aria-hidden="true"></i>
      </button>
    );

  }

  renderDone(bool) {
    const doneColorClass = bool
      ? 'success'
      : 'danger';
    const doneIcon = bool
      ? 'check'
      : 'times';
    return (
      <button id='doneBtn' className={`btn viewed-done-btn btn-${doneColorClass}`}>Done
        <i className={`fa fa-${doneIcon}`} aria-hidden="true"></i>
      </button>
    );

  }

  updateViewData(id) {
    const trueId = id.toString()
    return axios.put(`http://localhost:9007/tickets/${trueId}?isViewed=true`).then(res => {
      // console.log(res)
    }).catch(console.log)
  };

  updateDoneData(id, bool) {
    const trueId = id.toString()
    return axios.put(`http://localhost:9007/tickets/${trueId}?isComplete=${bool}`).then(result => {
      // console.log(result)
    }).catch(console.log)
  };

  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(result => {
      // console.log(result)
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  handleViewed(orderNum) {
    const t = this;
    return (e) => {
      let newState = this.state.tickets.map((item) => {
        if (item.order_num === orderNum) {
          item.isViewed = true
          t.updateViewData(item._id)
        }
        return item;
      })
      this.setState({tickets: newState})
    }
  }

  handleDone(orderNum) {
    const t = this;
    return (e) => {
      let newState = this.state.tickets.map((item) => {
        if (item.order_num === orderNum) {
          item.isComplete = !item.isComplete
          t.updateDoneData(item._id, item.isComplete)
        }
        return item;
      })
      this.setState({tickets: newState})
    }
  }

  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          {this.state.tickets.map((item, i, arr) => {
            console.log(item)
            return (
              <div className="card bg-light mb-3 tickets" key={i}>
                <div className="card-header" key={i}><img className="rounded" src="../public/images/co-op.png" width="40" height="40" alt='Company Logo'/>
                  <span className="left align-top padded">{item.user_details.user_name}</span>
                  <span className="right">Order ID:
                    <strong>{item.order_num}</strong>
                  </span>
                </div>
                <div className="card-body viewed-done-flex-container">
                  <ul className="ticket-ul-style">
                    <h4 className="ticket-order-header">Order</h4>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-9 remove-left-padding">
                          <h6 className="ticket-product-headers">Product</h6>
                        </div>
                        <div className="col-md-3 remove-right-padding">
                          <h6 className="ticket-product-headers">QTY</h6>
                        </div>
                      </div>
                    </div>
                    {item.order_content.map((element, index) => {
                      var e = 'none'
                      if (element.extras.length > 0) {
                        e = element.extras.toString()
                      }
                      return (
                        <div>
                          <li className="card-text" key={index}>{element.name}</li>
                          <p className="extras">extras: {e}</p>
                        </div>
                      )
                    })}
                    <h4 className="ticket-user-details-header">User Details</h4>
                    {item.user_details.map((user, index) => {
                      console.log(user)
                      return (
                        <div>
                          <li className="card-text" key={index}>Name: {user.user_name}</li>
                          <li className="card-text" key={index}>Email: {user.email}</li>
                          <li className="card-text" key={index}>Number: {user.phone_num}</li>
                          <li className="card-text" key={index}>Company: {user.user_company}</li>
                          <li className="card-text" key={index}>Floor: {user.user_floor}</li>
                        </div>
                      )
                    })}
                  </ul>
                  <div className="viewed-done-button-container">
                    <span id='viewBtn' onClick={this.handleViewed(item.order_num)}>{this.renderView(item.isViewed)}</span>
                    <span id="doneBtn" onClick={this.handleDone(item.order_num)}>{this.renderDone(item.isComplete)}</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>
    )
  }
}
export default AllTickets
