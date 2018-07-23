import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    value:"",
    items:
    ["Read documentation",
    "Do the tutorial",
    "Add comment"
    ]
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleSubmit(event) {
    event.preventDefault();
    if ((this.state.items.indexOf(this.state.value)) == -1) {
      this.setState({
        items: [...this.state.items, this.state.value]
      })
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>
            New:
            <input type="text" onChange={this.handleChange} value={this.state.value} />
          </label>
            <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.items.map((item) =>
          <Item value={item} />)}
        </ul> 
      </div>
    );
  }
}