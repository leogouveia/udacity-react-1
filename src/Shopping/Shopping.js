import React from "react";
import ShoppingList from './ShoppingList';
import AddNewItem from './AddNewItem';
import DeleteItem from './DeleteItem';

export class Shopping extends React.Component {
  state = {
    value: '',
    items: [],
  };
  
  handleAddItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  handleDeleteLastItem = items => {
    this.setState(prevState => ({ items }));
  };

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <AddNewItem onAddItem={this.handleAddItem} />
        <DeleteItem items={this.state.items} onDeleteLastItem={this.handleDeleteLastItem} />
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}
