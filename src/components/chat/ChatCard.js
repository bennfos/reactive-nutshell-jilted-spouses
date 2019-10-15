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
            {this.props.activeUser() === this.props.chat.userId && (
              <div className="chatBtns">
                <button
                  className="chatEdit"
                  onClick={() => this.props.populateInput(this.props.chat.id)}
                >
                  Edit
                </button>
                <button
                  id="chatDelete"
                  onClick={() => this.props.deleteChats(this.props.chat.id)}
                >
                  Delete
                </button>
              </div>
            )}
            {/* end of chat btns  */}
          </div>
          {/* end of chats section  */}
        </div>
        {/* end of chatCardContent section  */}
      </div>
    );
  }
}

export default ChatCard;