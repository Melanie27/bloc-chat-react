import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
import MessageList from './components/MessageList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDN6VG9UQ7ZT-meLF1OayPUde3slraroCM",
    authDomain: "bloc-chat-react-55d3a.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-55d3a.firebaseio.com",
    projectId: "bloc-chat-react-55d3a",
    storageBucket: "bloc-chat-react-55d3a.appspot.com",
    messagingSenderId: "1036921660104"
  };
  firebase.initializeApp(config);

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        activeRoom: ""
      };
  }

  handleRoomClickParent = (room) => {
    this.setState({ activeRoom: room });
}


  render() {
    return (
      <div className="App">
        <header>
        
         </header> 
        <main>
        <RoomList
        firebase={firebase}
        getRoom={this.handleRoomClickParent}
        activeRoom={this.state.activeRoom}
/>
        <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
/>
        </main>
      </div>
    );
  }
}


export default App;
