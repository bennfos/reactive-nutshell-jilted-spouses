import React, { Component } from 'react';

class FriendResult extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        loadingStatus: false
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

            // Save the connection and redirect user to FriendMain
            this.props.saveNewConnection(newConnection);
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