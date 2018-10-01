import React, { Component } from 'react';

export default class Users extends Component {
  state = {
    show_number_game: true,
    button_name: 'Show the Number of Games Played'
  }

  toggleNumberGames = () => {
    this.setState(preState => ({show_number_game: !preState.show_number_game}));
    if (this.state.show_number_game) {
      this.setState({button_name: 'Hide the Number of Games Played'});
    } else {
      this.setState({button_name: 'Show the Number of Games Played'});
    }
  }
  
   render() {
    return (
      <div>
        <p>
          <a href="#" onClick={() => this.toggleNumberGames()}>{this.state.button_name}</a>
        </p>
        <ol>
          {this.props.users.map(user => (
            this.state.show_number_game ? 
              <li key={user.username}>{user.username} played {user.number_games} games.</li> :
              <li key={user.username}>{user.username}.</li>
          ))}
        </ol>
      </div>
    );
  }
}