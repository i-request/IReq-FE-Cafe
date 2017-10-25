import React, {Component} from 'react';
import axios from 'axios'

class AllTickets extends Component {
  constructor(props) {
    super(props)
    this.renderView = this.renderView.bind(this)
    this.renderDone = this.renderDone.bind(this)
    this.fetchTickets = this.fetchTickets.bind(this)
    this.handleViewed = this.handleViewed.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.state = {
      tickets: []
    }
  }

  renderView(bool) {
    const colorClass = bool
      ? 'success'
      : 'danger';
    const viewIcon = bool
      ? 'check'
      : 'times';
    // const positve = <i class="fa fa-check" aria-hidden="true" />
    // const negative = <i class="fa fa-times" aria-hidden="true"></i> />
    return (
      <button id='viewBtn' className={`btn left btn-${colorClass}`}>Viewed
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
      <button id='doneBtn' className={`btn right btn-${doneColorClass}`}>Done
        <i className={`fa fa-${doneIcon}`} aria-hidden="true"></i>
      </button>
    );

  }


  componentDidMount() {
    this.fetchTickets()
  }
  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(res => {
      console.log(res)
      this.setState({tickets: res.data})
    }).catch(console.log)
  }
  handleViewed(orderNum) {
    return (e) => {
      var newState = this.state.tickets.map(function(item) {
        if (item.order_num === orderNum) {
          item.isViewed = true
        }
        return item;
      })
      this.setState({tickets: newState})

    }

  }
  handleDone(orderNum) {
    return (e) => {
      var newState = this.state.tickets.map(function(item) {
        if (item.order_num === orderNum) {
          item.isComplete = !item.isComplete
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
            return (
              <div className="tickets" key={i}>
                <div className="card rounded border border-primary mb-3 card-margin">
                  <div className="card-header" key={i}><img className="rounded" width="40" height="40" alt='Company Logo' hspace="5" src={`/images/${item.user_details.user_company_img}`}/>
                    <span className="left align-top padded">{item.user_details.user_name}</span>
                    <span className="right">Order ID:
                      <strong>{item.order_num}</strong>
                    </span>
                  </div>
                  <div className="card-block">
                    <table className="uk-table">

                      <thead>
                        <tr>
                          <td className="ticket-header">Order</td>
                        </tr>
                      </thead>
                      <tbody>
                        {item.order_content.map((ticket, index) => {
                          return (
                            <tr key={index}>
                              <td className="order-details">{ticket.name}</td>

                            </tr>
                          )
                        })
                      }
                      </tbody>
                      <div className="card-footer bg-transparent border-primary">
                        <a href="#" id='viewBtn'>
                          <span onClick={this.handleViewed(item.order_num)}>{this.renderView(item.isViewed)}</span>
                        </a>
                        <a href="#" id="doneBtn">
                          <span onClick={this.handleDone(item.order_num)}>{this.renderDone(item.isComplete)}</span>
                        </a>

                      </div>
                    </table>
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

// isViewed change colour or add tick
