import React, {Component} from 'react';
import axios from 'axios'
class OrderType extends Component {
  constructor(props) {
    super(props)
    this.renderView = this.renderView.bind(this)
    this.renderDone = this.renderDone.bind(this)
    this.fetchTickets = this.fetchTickets.bind(this)
    this.handleViewed = this.handleViewed.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.updateViewData = this.updateViewData.bind(this)
    this.state = {
      tickets: []
    }
  }
  componentDidMount() {
    this.fetchTickets()
  }

  fetchTickets() {
    return axios.get('http://localhost:9007/tickets?isComplete=false').then(res => {
      console.log(res)
      this.setState({tickets: res.data})
    }).catch(console.log)
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
    return axios.put(`http://localhost:9007/tickets/${trueId}?isComplete=${bool}`).then(res => {
      // console.log(res)
    }).catch(console.log)
  };

  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(res => {
      // console.log(res)
      this.setState({tickets: res.data})
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
          if (item.isComplete === false) {
            return (
              <div>
                <div className="card bg-light mb-3 tickets" key={i}>
                  <div className="card-header" key={i}><img className="rounded" width="40" height="40" alt='Company Logo' hspace="5"/>
                    <span className="left align-top padded">{item.user_details.user_name}</span>
                    <span className="right">Order ID:
                      <strong>{item.order_num}</strong>
                    </span>
                  </div>
                  <div className="card-body viewed-done-flex-container">
                    <ul>
                      {item.order_content.map((ticket, index) => {
                        return (
                          <li className="card-text" key={index}>{ticket.name}</li>
                        )
                      })}
                    </ul>
                    <div className="viewed-done-button-container">
                      <span id='viewBtn' onClick={this.handleViewed(item.order_num)}>{this.renderView(item.isViewed)}</span>
                      <span id="doneBtn" onClick={this.handleDone(item.order_num)}>{this.renderDone(item.isComplete)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
        </div>
      </section>
    )
  }
}
export default OrderType
