import React from 'react';
import { AppHeader } from './AppHeader';
import { Shopping } from './Shopping/Shopping';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Shopping />
      </div>
    );
  }
}

export default App;
