import React, { Component } from 'react';
import FriendSearch from './FriendSearch';
import FriendDataManager from './FriendDataManager';
import FriendCard from './FriendCard';
// import the components we will need

class FriendList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("credentials")),
        connections: [],
        userFriends: [],
        friendFriends: []
    }

    componentDidMount() {
        // Get all the connections where the activeUserId matches either the userId or friendId, then get the user for each connection by getting the item that does not match the activeUserId
        FriendDataManager.getConnections().then(connections => {

            const userConnections = connections.filter(connection => {
                if (this.state.activeUserId === connection.userId ||
                    this.state.activeUserId === connection.friendId) {
                        return connection
                }
            })

            this.setState({ connections: userConnections })
        })
    }

    saveNewConnection = (connectionObject) => {
        return FriendDataManager.saveConnection(connectionObject).then(() => {
                FriendDataManager.getConnections().then(connections => {

                    const userConnections = connections.filter(connection => {
                        if (this.state.activeUserId === connection.userId ||
                            this.state.activeUserId === connection.friendId) {
                            return connection
                        }
                    })

                    this.setState({ connections: userConnections })
                });
            });
    }

    deleteConnection = (id) => {
        FriendDataManager.deleteConnection(id).then(() => {
            FriendDataManager.getConnections().then(connections => {

                const userConnections = connections.filter(connection => {
                    if (this.state.activeUserId === connection.userId ||
                        this.state.activeUserId === connection.friendId) {
                        return connection
                    }
                })

                this.setState({ connections: userConnections })
            });
        })
    }

    // deleteEvent = (id) => {
    //     EventDataManager.deleteEvent(id)
    //         .then(() => {
    //             EventDataManager.getAllEvents()
    //                 .then((events) => {
    //                     this.setState({
    //                         events: events
    //                     })
    //                 })
    //         })
    // }

    render() {
        console.log("state", this.state);
        return (
            <React.Fragment>
                <FriendSearch 
                    {...this.props}
                    saveNewConnection={this.saveNewConnection}
                />
                <h1>My Friends</h1>
                <div className="container-friendCards">
                    {this.state.connections.map(connection =>
                        <FriendCard
                            key={connection.id}
                            connection={connection}
                            deleteConnection={this.deleteConnection}
                            {...this.props}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default FriendList;

