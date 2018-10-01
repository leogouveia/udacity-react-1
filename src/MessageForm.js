import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageForm extends Component {
  state = {
    message: ''
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  handleChange = (event) => this.setState({message: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onMessageSend(this.state.message);
    this.setState({message: ''});
  }
  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
MessageForm.propTypes = {
  onMessageSend: PropTypes.func.isRequired
}
export default MessageForm;
