import React, { Component } from 'react';

import Header from './Header/Header';
import Users from './Users';
import AddUser from './AddUser';

import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: []
  }
  onUserAdd = (user) => {
    this.setState({error: ''});
    if (this.userExists(user)) return false;
    this.setState(preState => preState.users.push(user));
    return true;
  }

  userExists = (user) => this.state.users.filter(u => u.username === user.username).length > 0;

  render() {
    return (
      <div className="App">
        <Header />
        <AddUser onUserAdd={this.onUserAdd} />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
