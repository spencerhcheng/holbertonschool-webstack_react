import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    inputValue:"",
    items:
    ["Read documentation",
    "Do the tutorial",
    "Add comment"
    ]
  }
  this.addItem = this.addItem.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  addItem(event) {
    alert('This is the new state' + this.state.items);
    event.preventDefault();
  }

  handleChange(e) {
    this.setState({
      items: [...this.state.items, this.state.inputValue]
    });
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <form onSubmit = {this.addItem}>
          <div>{this.state.items}</div>
          <label>
            New:
            <input type="text" onChange={this.handleChange} value={this.state.inputValue} />
          </label>
            <input type="submit" onClick="Add" />
        </form>
        <ul>
          {this.state.items.map((item) =>
          <Item value={item} />)}
        </ul> 
      </div>
    );
  }
}
