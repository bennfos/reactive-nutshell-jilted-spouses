import React, { Component } from 'react';
import FriendDataManager from './FriendDataManager';

class FriendResult extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        loadingStatus: false,
        isAdded: false
    }

    constructConnection = (event) => {
        event.preventDefault();
        this.props.toggle();
        const message = `Please confirm that you want to add ${this.props.user.username} as a friend.`;

        if (window.confirm(message)) {
            this.setState({ loadingStatus: true });

            const newConnection = {
                userId: this.state.userId,
                friendId: this.props.user.id
            };

            // FriendDataManager.getConnections().then(connections => {
            //     const sameConnection = connections.find(connection => connection.userId === newConnection.userId && connection.friendId === newConnection.friendId)

            //     console.log("sameConnection", sameConnection);
            // })

            // Save the connection and redirect user to FriendMain
            this.props.saveNewConnection(newConnection);
            this.setState({ isAdded: true });
        }
    }

    render() {

        return (
            <React.Fragment>
                     <div className="friendCard friendResult">
                        <h3>username: {this.props.user.username}</h3>
                        <button
                            disabled={this.state.loadingStatus}
                            onClick={this.constructConnection}
                        >Add Friend</button>
                    </div>
            </React.Fragment>
        )

    }
}

export default FriendResult;