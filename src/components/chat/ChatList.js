import React, { Component } from "react";
import ChatDataManager from "./ChatDataManager";
import ChatCard from "./ChatCard";

class ChatList extends Component {
  state = {
    chats: [],
    userId: "",
    message: "",
    chatId: "",
    editedMessage: false,
    loadingStatus: false,
    userChat: false
  };

  componentDidMount() {
    console.log("chat LIST: ComponentDidMount");
    ChatDataManager.getAllChatsWithUser().then(chats => {
      this.setState({
        chats: chats
      });
      console.log(this.state.chats);
    });
  }
  deleteChats = id => {
    ChatDataManager.deleteChat(id).then(() => {
      ChatDataManager.getAllChatsWithUser().then(newChats => {
        this.setState({
          chats: newChats
        });
      });
    });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  populateInput = id => {
    ChatDataManager.getChat(id).then(chat =>
      this.setState({
        message: chat.message,
        editedMessage: true,
        chatId: chat.id
      })
    );
  };

  constructNewChat = evt => {
    evt.preventDefault();
    console.log(this.state.userId);

    this.setState({ loadingStatus: true });
    const chat = {
      userId: parseInt(sessionStorage.getItem("credentials")),
      message: this.state.message
    };

    if (this.state.editedMessage) {
      ChatDataManager.editChat(chat, this.state.chatId)
        .then(() => ChatDataManager.getAllChatsWithUser())
        .then(chats => {
          this.setState({
            chats: chats,
            userId: "",
            message: "",
            chatId: "",
            editedMessage: false
          });
          console.log(this.state.chats);
        });
    } else {
      ChatDataManager.postChat(chat)
        .then(() => ChatDataManager.getAllChatsWithUser())
        .then(chats => {
          this.setState({
            chats: chats,
            message: ""
          });
          console.log(this.state.chats);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-cards">
          {this.state.chats.map(chat => (
            <ChatCard
              key={chat.id}
              chat={chat}
              deleteChats={this.deleteChats}
              populateInput={this.populateInput}
              {...this.props}
            />
          ))}
        </div>
        <div className="submitSection">
          <input
            id="message"
            onChange={this.handleFieldChange}
            placeholder="Chat with other users!"
            value={this.state.message}
          />
          <button id="chatSubmitBtn" onClick={this.constructNewChat}>
            Send
          </button>
        </div>
        {/* end of submitSection */}
      </React.Fragment>
    );
  }
}

export default ChatList;
