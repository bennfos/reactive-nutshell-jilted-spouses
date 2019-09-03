import React, { Component } from 'react';
import FriendSearch from './FriendSearch';
import FriendDataManager from './FriendDataManager';
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

    saveNewConnection = (connectionObject) => {
        FriendDataManager.saveConnection(connectionObject);
    }

    render() {
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

