import React, {Component} from 'react' //convert roomlist into a class-based component
import MessageList from './MessageList';
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

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            newRoomName: '', 
            activeRoom: ''
        };
      this.roomsRef = this.props.firebase.database().ref('rooms');  
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot  => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
            console.log(room);
            /*if (this.state.rooms.length === 1) { this.props.setRoom(room) }*/
          });
          this.roomsRef.on('child_removed', snapshot  => {
            this.setState({ rooms: this.state.rooms.filter( room => room.key !== snapshot.key )  })
          });
          
    }

    createRoom(e) {
        e.preventDefault();
           
        this.roomsRef.push({
            name: this.state.newRoomName
          });
          
        
       
    }

    handleChange(e){
     //change the value in state in order for it to update in the UI
     //set state to the target element - the input
     this.setState({ newRoomName: e.target.value })
     //console.log( e.target.value ); 
    }

    setRoom(room) {

    }

    changeActiveRoom(e) {
        console.log('room clicked:', e.target.id );
        //this.setState({ activeRoom: e});
        
    }

    render() {
        return (
        
            <section className='roomlist'>
            <h1>Bloc Chat</h1>
            <ul>
            {
                this.state.rooms.map((room, index) =>
               <li id={index} key={index} onClick={ this.changeActiveRoom }> {room.name}</li>
                )

            }
            </ul>
            <form onSubmit={ (e) => this.createRoom(e) }>
                <input type="text" value={this.state.newRoomName} onChange={ (e) => this.handleChange(e) }/>
                <input type="submit" />
            </form>
            <MessageList firebase={firebase}/>
            </section>


        );
    }

    

}


  
export default RoomList;