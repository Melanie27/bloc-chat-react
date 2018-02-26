import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


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
  render() {
    return (
      <div className="App">
        <header>
        
         </header> 
        <main>
        <RoomList firebase={firebase}/>
        
        </main>
      </div>
    );
  }
}

export default App;
``