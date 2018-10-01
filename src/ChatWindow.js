import React, { Component } from "react";
import PropTypes from "prop-types";

import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

class ChatWindow extends Component {
  handleSendMessage = (message) => {
    this.props.onMessageSend({username: this.props.user.username, text: message});
  }
  render() {
    const user = this.props.user;
    const messages = this.props.messages;
    return (
      <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessageList user={user} messages={messages}  />
            <MessageForm onMessageSend={this.handleSendMessage} />
          </div>
    );
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onMessageSend: PropTypes.func.isRequired
}
export default ChatWindow;