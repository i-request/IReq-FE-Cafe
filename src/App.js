import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import AllTickets from './AllTickets';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchTickets = this.fetchTickets.bind(this)
    this.handleViewed = this.handleViewed.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.state = {
      tickets :[]
    }
  }
  componentDidMount() {
    this.fetchTickets()
  }
  fetchTickets () {
    return axios.get('http://localhost:9007/tickets')
    .then(res => {
      this.setState({
        tickets: res.data
    })
  })
  .catch(console.log)
}
handleViewed(orderNum) {
  return (e) => {
    var newState = this.state.tickets.map(function(item) {
      if (item.order_num === orderNum) {
        item.isViewed = true
      }
      return item;
    }
  )
    this.setState ({
      tickets: newState
    })

  }

}
handleDone(orderNum) {
  return (e) => {
    var newState = this.state.tickets.map(function(item) {
      if (item.order_num === orderNum) {
        item.isComplete = !item.isComplete
      }
      return item;
    }
  )
    this.setState ({
      tickets: newState
    })

  }

}
render() {
  return (
    <div>
      <NavBar />
      <AllTickets tickets={this.state.tickets} handleViewed={this.handleViewed} handleDone={this.handleDone}/>
    </div>
  );
}
}

export default App;
