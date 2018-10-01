import React, { Component } from "react";

import ChatWindow from "./ChatWindow";

class Chat extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  handleMessageSend = (message) => {
    this.setState(prev => ({messages: [...prev.messages, message]}))
  }
  render() {
    return (
      <div className="container">
        {this.state.users.map(user => {
          return (
            <ChatWindow 
              key={user.username} 
              user={user}
              messages={this.state.messages}
              onMessageSend={this.handleMessageSend}
          />
          )
        }
          
        )}
      </div>
    );
  }

}

export default Chat;