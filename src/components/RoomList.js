import React, {Component} from 'react' //convert roomlist into a class-based component

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
      this.roomsRef = this.props.firebase.database().ref('rooms');  
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot  => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
            /*if (this.state.rooms.length === 1) { this.props.setRoom(room) }*/
          });
          this.roomsRef.on('child_removed', snapshot  => {
            this.setState({ rooms: this.state.rooms.filter( room => room.key !== snapshot.key )  })
          });
    }

    render() {
        return (
        
            <section className='roomlist'>
            <h1>Bloc Chat</h1>
            
            {
                this.state.rooms.map((room, index) =>
               <div>Room  {room.key}</div>
                )

            }

            </section>
        );
    }

    

}


  
export default RoomList;