import React, { Component } from 'react';
import FriendSearch from './FriendSearch';
import FriendDataManager from './FriendDataManager';
// import the components we will need

class FriendList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("credentials")),
        connections: [],
        friends: []
    }

    componentDidMount() {
        // get all the connections in which activeUserId matches connection.userId and save them to state
        FriendDataManager.getConnections(this.state.activeUserId).then(connections => {
            this.setState({ connections: connections });
            const friendUsers = connections.map(connection => {
                console.log(connection);
                return FriendDataManager.getUser(connection.friendId)
            })
            this.setState({friends: friendUsers})
        })

        
    }

    saveNewConnection = (connectionObject) => {
        FriendDataManager.saveConnection(connectionObject);
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <FriendSearch 
                    {...this.props}
                    saveNewConnection={this.saveNewConnection}
                />
                <h1>My Friends</h1>
            </React.Fragment>
        )
    }
}

export default FriendList;

