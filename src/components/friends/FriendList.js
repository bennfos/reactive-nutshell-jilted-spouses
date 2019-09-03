import React, { Component } from 'react'
// import the components we will need
import { Button } from 'reactstrap';

class FriendList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("credentials")),
        friends: []
    }

    componentDidMount() {
        // all the connections in which activeUserId matches connection.userId and save them to state
    }

    render() {
        return (
            <h1>My Friends</h1>
        )
    }
}

export default FriendList;

// import React, { Component } from 'react'
// //import the components we will need
// import EventCard from './EventCard'
// import EventDataManager from './EventDataManager'
// import { Button } from 'reactstrap';