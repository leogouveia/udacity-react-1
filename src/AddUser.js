import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    number_games: 0,
    error: ''
  };

  handleChange = event => this.setState({ [event.target.name]: event.target.value, error: '' });
  
  handleSubmit = event => {
    event.preventDefault();
      if (this.props.onUserAdd(this.state)) {
        this.setState({ first_name: "", last_name: "", username: "" });
        this.setState({error : ''});
      } else {
        this.setState({error: 'Usuário já existe.'})
      }
  };

  isEmpty = () =>
    this.state.username === "" ||
    this.state.first_name === "" ||
    this.state.last_name === "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              type="text"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" disabled={this.isEmpty()}>
            Add
          </button>
          <p>{this.state.error || ""}</p>
        </form>
        
      </div>
    );
  }
}
