import React from "react";
import PropTypes from 'prop-types';

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages;
    const user = this.props.user;
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user.username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}
MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
}
export default MessageList;
