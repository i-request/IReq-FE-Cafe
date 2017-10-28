import React, {Component} from 'react';
import axios from 'axios'
import TicketList from './TicketList';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stats: []
    }
  }

  render() {
    return(
      <div>
        <h1>home</h1>
      </div>
    )
  }
}
export default Home
