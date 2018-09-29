import React from "react";
import PropTypes from 'prop-types';

class DeleteItem extends React.Component {
  deleteLastItem = event => {
    event.preventDefault();
    this.props.onDeleteLastItem(this.props.items.slice(0, -1));
  }
  noItemsFound = () => this.props.items.length === 0;
  render() {
    return (
      <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
        Delete Last Item
      </button>
    );
  }
}
DeleteItem.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
}

export default DeleteItem;