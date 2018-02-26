import React, {Component} from 'react' //convert messagelist into a class-based component


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: ''
        };
        this.messagesRef = this.props.firebase.database().ref('messages');  
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot  => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) })
            console.log(message);
            /*if (this.state.rooms.length === 1) { this.props.setRoom(room) }*/
          });
          this.messagesRef.on('child_removed', snapshot  => {
            this.setState({ messages: this.state.messages.filter( message => message.key !== snapshot.key )  })
          });
          
    }

    /*createMessage(e) {
        e.preventDefault();
        this.setState({message: this.newMessage.value})
        console.log(this.state)
        this.messagesRef.push({
                //startedAt: firebase.database.ServerValue.TIMESTAMP
        });
    }*/


    render() {
        return (
            <section className="messageList">
                <h3>Message List</h3>
               
                <ul>
                    {this.state.messages.map((message, index) =>
                    
                        <li key={index}> {index}. {message.content} {message.username}</li>
                    )
                    }
                </ul>
            </section>
        );
    }
}

export default MessageList;