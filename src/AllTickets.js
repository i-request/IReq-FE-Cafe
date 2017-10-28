import React, {Component} from 'react';
import axios from 'axios'
import TicketList from './TicketList';

class AllTickets extends Component {
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

  render() {
    return <TicketList />
  }
}
export default AllTickets
