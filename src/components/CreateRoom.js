import React, {Component} from 'react'

class CreateRoom extends Component {
    constructor(props);
    super(props);
}

render() {
    return (
        <section className="createRoom">
        <h2>Create new room</h2>
        <p>Enter a room name</p>
        <input type="text" />
        <button>Create Room</button>
        <button>Cancel</button>
        </section>
    )
}