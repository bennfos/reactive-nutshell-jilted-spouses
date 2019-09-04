import React, { Component } from "react";
import ChatDataManager from "./ChatDataManager";
import ChatCard from "./ChatCard";

class ChatList extends Component {
  state = {
    chats: [],
    userId: parseInt(sessionStorage.getItem("credentials")),
    message: "",
    loadingStatus: false
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

  constructNewChat = evt => {
    evt.preventDefault();
    console.log(this.state.userId);

    this.setState({ loadingStatus: true });
    const chat = {
      userId: this.state.userId,
      message: this.state.message
    };
    ChatDataManager.postChat(chat)
      .then(()=>ChatDataManager.getAllChatsWithUser())
      .then(chats => {
        this.setState({
          chats: chats
        });
        console.log(this.state.chats);
      });
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
              {...this.props}
            />
          ))}
        </div>
        <div className="submitSection">
          <input
            id="message"
            onChange={this.handleFieldChange}
            placeholder="Chat with other users!"
          />
          <button
            id="chatSubmitBtn"
            disabled={this.state.loadingStatus}
            onClick={this.constructNewChat}
          >
            Send
          </button>
        </div>
        {/* end of submitSection */}
      </React.Fragment>
    );
  }
}

export default ChatList;
