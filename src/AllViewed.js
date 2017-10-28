import React, {Component} from 'react';
import axios from 'axios'
import TicketList from './TicketList'
import {Link} from 'react-router-dom'

class AllViewed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
    this.fetchTickets = this.fetchTickets.bind(this)
  }

  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(result => {
      // console.log(result)
      this.setState({tickets: result.data})
    }).catch(console.log)
  }

  componentDidMount() {
    this.fetchTickets()
  }

  render() {
    if (this.state.tickets.isViewed === true) {
      return <TicketList/>
    } else {
      return (
        <section key={"viewed"}>
          <div className="jumbotron jumbotron-fluid nothing-to-display">
            <div className="container">
              <h1 className="display-3">No Viewed Tickets</h1>
              <p className="lead">Please see
                <Link to="/all-tickets">all tickets</Link>
                for a list of unviewed tickets</p>
            </div>
          </div>
        </section>
      )
    }
  }
}
export default AllViewed
