import React, {Component} from 'react';
import axios from 'axios'
import TicketList from './TicketList';

class PendingTickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
    this.fetchTickets = this.fetchTickets.bind(this);
  }
  fetchTickets() {
    return axios.get('http://localhost:9007/tickets').then(result => {
      // console.log(result)
    this.setState({tickets: result.data})
    }).catch(console.log)
  }

  componentDidMount() {
    this.fetchTickets();
  };

  isComplete() {
    let pending = []
    this.state.tickets.map((pendingTicket) => {
      pendingTicket.isComplete === false ? pending.push(pendingTicket) : ''
    })
    console.log(pending)
  }


  render() {
    return (
      <div>
      {this.state.tickets.map((ticket) => {
        let isComplete = ticket.isComplete;
        console.log(isComplete)
        if(!isComplete) return <TicketList />
      })}
      </div>
    )
  }
}
export default PendingTickets
