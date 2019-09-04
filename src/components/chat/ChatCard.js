import React, { Component } from "react";
import "./Chat.css";

class ChatCard extends Component {
  render() {
    return (
      <div className="chatCard">
        <div className="chatCardContent">
          <div className="chats">
            <p>
              {this.props.chat.user.username}: {this.props.chat.message}
            </p>
            <button className="chatEdit" onClick={() => this.props.populateInput(this.props.chat.id)}>
            Edit
            </button>
            <button
              id="chatDelete"
              onClick={() => this.props.deleteChats(this.props.chat.id)}
            >
              Delete
            </button>
          </div>
          {/* end of chats section  */}
        </div>
        {/* end of chatCardContent section  */}
      </div>
    );
  }
}

export default ChatCard;
