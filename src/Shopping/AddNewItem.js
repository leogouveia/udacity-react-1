import React from "react";
import PropTypes from 'prop-types';

class AddNewItem extends React.Component {
  state = {
    value: ''
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({value: ''});
  }

  inputIsEmpty = () => this.state.value === '';

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

AddNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired
}

export default AddNewItem;