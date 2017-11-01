import React, {Component} from 'react';
import axios from 'axios';
import {
  SocketProvider,
  socketConnect,
} from 'socket.io-react';

class TicketList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
    this.renderView = this.renderView.bind(this)
    this.renderDone = this.renderDone.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.fetchViewtics = this.fetchViewtics.bind(this)
    this.updateViewData = this.updateViewData.bind(this)
    this.fetchDoneTics = this.fetchDoneTics.bind(this)
    this.fetchCancelledTics = this.fetchCancelledTics.bind(this)
    this.genFilter = this.genFilter.bind(this)
    this.getFinalState = this.getFinalState.bind(this)
  }

  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(result => {
      // console.log(result)
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  genFilter(arr,str,bool){
    return () => {
      return arr.filter((item)=>{
        return item[str] === bool
      })
    }
  }
getFinalState(prop1,boole,prop2){
  if(prop1 === undefined){return this.state.tickets}
 else if(prop2 === undefined) {return this.genFilter(this.state.tickets,prop1,boole)()}
 else {let firstRun = this.genFilter(this.state.tickets,prop1,boole)()
return this.genFilter(firstRun,prop2,boole)()}

}

  fetchViewtics() {
    return axios.get('http://localhost:9007/tickets/viewed').then(result => {
      // console.log(result)
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  fetchDoneTics() {
    return axios.get('http://localhost:9007/tickets/done').then(result => {
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  fetchCancelledTics() {
    return axios.get('http://localhost:9007/tickets/canceled').then(result => {
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  fetchArchivedTics() {
    return axios.get('http://localhost:9007/tickets/archieved').then(result => {
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  componentDidMount() {
    // if (this.props.view === true)
    //   this.fetchViewtics();
    // if (this.props.done === true)
    //   this.fetchDoneTics();
    // if (this.props.cancelled === true)
    //   this.fetchCancelledTics();
    // if (this.props.archived === true)
    //   this.fetchArchivedTics();

    this.fetchTickets()
    this.props.socket.on('ticket', (data)=>{
      let newstate = this.state.tickets.concat(data)
      this.setState({
          tickets:newstate
      })
  })

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
    console.log(this.getFinalState(this.props.parm1,this.props.bool,this.props.parm2))
    return(
      <section className="container-fluid" key={"ticketList"}>
        <div className="row">
          {this.getFinalState(this.props.parm1,this.props.bool,this.props.parm2).map((item, i, arr) => {
            return (
              <div className="col-md-4 col-no-padding-left">
                <div className="card bg-light mb-3 tickets" key={i}>
                  <div className="card-header ticket-header" key={i}><img className="rounded" src={`../images/${item.user_details.user_company}.png`} width="40" height="40" alt='Company Logo'/>
                    {/* <span className="left align-top padded">{item.user_details.user_name}</span> */}
                    <span className="right">Order Number:
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
                            <h6 className="ticket-product-headers">Qty</h6>
                          </div>
                        </div>
                      </div>
                      {item.order_content.map((element, index) => {
                        var e = 'none'
                        if (element.extras.length > 0) {
                          e = element.extras.toString()
                        }
                        return (
                          <div key={index}>
                            <li className="card-text">{element.name}<span className="quantity-right">{element.quantity}</span></li>
                            <p className="extras">Extras: {e}</p>
                            <p className="additional_info">Message: {item.additional_instructions}</p>
                            <p className="center-line">~~~</p>
                          </div>
                        )
                      })}
                      <h4 className="ticket-user-details-header">User Details</h4>
                      {[item.user_details].map((user, index) => {

                        return (
                          <div key={i}>
                            <li className="card-text">
                              <span className="user-details-style">Name:</span>
                              {user.user_name}</li>
                            <li className="card-text">
                              <span className="user-details-style">Email:</span>
                              {user.email}</li>
                            <li className="card-text">
                              <span className="user-details-style">Number:</span>
                              {user.phone_num}</li>
                            <li className="card-text">
                              <span className="user-details-style">Company:</span>
                              {user.user_company}</li>
                            <li className="card-text">
                              <span className="user-details-style">Floor:</span>
                              {user.user_floor}</li>
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
              </div>
            )

          })}
        </div>
      </section>
    )
  }

}
export default socketConnect(TicketList)
