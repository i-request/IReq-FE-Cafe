import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import AllViewed from './AllViewed'
import AllTickets from './AllTickets';
import Admin from './Admin';
import Archived from './Archived';
import Cancelled from './Cancelled';
import PendingTickets from './PendingTickets';
import Trash from './Trash';
import Home from './Home'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <NavBar/>
          <Redirect from="/" to="/pending-tickets"/>
          <Route path="/pending-tickets" component={PendingTickets}/>
          <Route path="/all-tickets" component={AllTickets}/>
          <Route path="/all-viewed" component={AllViewed}/>
          <Route path="/archived" component={Archived}/>
          <Route path="/cancelled" component={Cancelled}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/trash" component={Trash}/>
        </div>
      </Router>
    );
  }
}

export default App;
