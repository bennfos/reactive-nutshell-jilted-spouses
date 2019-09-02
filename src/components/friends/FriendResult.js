import React, { Component } from 'react';

class FriendResult extends Component {
    render() {
        console.log(this.props.user.username);
        return (
            <React.Fragment>
                <div className="friendCard friendResult">
                    <h3>username: {this.props.user.username}</h3>
                    <button>Add Friend</button>
                </div>
            </React.Fragment>
        )
    }
}

export default FriendResult;