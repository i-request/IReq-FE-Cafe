import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import AllTickets from './AllTickets';
import Admin from './Admin';
import Archived from './Archived';
import Cancelled from './Cancelled';
import OrderType from './OrderType';
import Trash from './Trash';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (

        <Router>
        <div>
          <NavBar/>
            <Route exact path="/" component={Admin}/>
            <Route path="/all-tickets" component={AllTickets}/>
            <Route path="/archived" component={Archived}/>
            <Route path="/cancelled" component={Cancelled}/>
            <Route path="/order-type" component={OrderType}/>
            <Route path="/trash" component={Trash}/>
          </div>
        </Router>

    );
  }
}

export default App;
