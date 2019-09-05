import React, { Component } from "react";
import FriendDataManager from "./FriendDataManager";
import "./Friends.css";

class FriendCard extends Component {
  state = {
    friend: {},
    activeUserId: parseInt(sessionStorage.getItem("credentials"))
  };

  componentDidMount() {
    if (this.props.connection.userId === this.state.activeUserId) {
      FriendDataManager.getUser(this.props.connection.friendId).then(friend => {
        this.setState({ friend: friend });
      });
    } else {
      FriendDataManager.getUser(this.props.connection.userId).then(friend => {
        this.setState({ friend: friend });
      });
    }
  }

  render() {
    console.log("friend", this.state.friend);
    return (
      <React.Fragment>
        <div className="friendCard">
          <h3>username: {this.state.friend.username}</h3>
          <h3>email: {this.state.friend.email}</h3>
          <button
            onClick={() =>
              this.props.deleteConnection(this.props.connection.id)
            }
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendCard;
