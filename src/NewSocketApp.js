import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    SocketProvider,
    socketConnect,
  } from 'socket.io-react';

  var socket = require('socket.io-client')('http://localhost:9007');
  socket.on('introduction', function(data){
    console.log(data)
  });
  socket.on('ticket', function(data){
    console.log(`this is the apps console log of ${data}`)
    });


    class NewSocketApp extends React.Component {
        render() {
          return <SocketProvider socket = {socket}>
            <App/>
            </SocketProvider>
         
          ;
        }
      }
      
      export default NewSocketApp;   