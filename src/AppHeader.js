import React from "react";
import logo from './logo.svg';

export function AppHeader(props) {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
  );
}